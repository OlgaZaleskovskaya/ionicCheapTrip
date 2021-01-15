import { Component, OnInit } from "@angular/core";
import OLMap from "ol/Map";
import View from "ol/View";
import Overlay from "ol/Overlay";

import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj.js";
import { transform } from "ol/proj";
import { toStringHDMS } from "ol/coordinate.js";
import { toLonLat } from "ol/proj.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import { Icon, Style, Stroke } from "ol/style";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { PlacesService } from "../places.service";
import * as coordinates from "./coordinates";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import LayerGroup from "ol/layer/Group";
import { ICity,  transportIconMap} from "../places.model";

  

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  vectorSource;
  vectorLayer;
  rasterLayer;

  endPointsVectorLayer: VectorLayer;
  lineVectorLayer: VectorLayer;

  map;
  startPointCity: string;
  endPointCity: string;
  startPoint: Feature;
  endPoint: Feature;
  latitude: number;
  longitude: number;

  startPointCoords: [number, number];
  endPointCoords: [number, number];
  points: ICity[];
  routs: Array<any>;
  currentPath: any;
  currentPaths: Array<{
    transport: string;
    price: string | number;
    duration: string;
  }>;

  constructor(
    private placesSrv: PlacesService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
   /*  this.placesSrv.pathsSubj$.subscribe((res) => {
      console.log("on subscribe", res);
      this.routs = [...res];
      const paths = this.routs.map((rout) => rout.direct_paths);
      this.currentPath = paths[0];
      console.log("on subscribe", this.currentPath);
      console.log('this.endPointsVectorLayer',this.endPointsVectorLayer );
      if (this.endPointsVectorLayer) {
        console.log('this.endPointsVectorLayer')
        this.endPointsVectorLayer.getSource().clear();
      }
      if (this.lineVectorLayer) {
        this.lineVectorLayer.getSource().clear();
      }

      this.initializeMap();
    }); */

    if (this.placesSrv.startPointCity !== undefined) {
      this.routs = [...this.placesSrv.currentPaths];
      const paths = this.routs.map((rout) => rout.direct_paths);
      this.currentPath = paths[0];
      this.initializeMap();
    } else {
      this.geolocation
        .getCurrentPosition()
        .then((resp) => {
          const homeCity: ICity = {
            id: -1,
            name: "home",
            country: "",
            coordinates: {
              longitude: resp.coords.longitude,
              latitude: resp.coords.latitude,
            },
          };
          this.initializeMap(homeCity);
        })
        .catch((error) => {
          console.log("Error getting location", error);
        });
    }
  }

  private initializeMap(homeCity?: ICity) {
    /* create overlay for popup */
    const container = document.getElementById("popup");
    const content = document.getElementById("popup-content");
    const closer = document.getElementById("popup-closer");

    const overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    /* end create overlay for popup */

    const coordinates =
      arguments.length > 0
        ? [homeCity.coordinates.longitude, homeCity.coordinates.latitude]
        : [
            this.currentPath[0].cityFrom.coordinates.longitude,
            this.currentPath[0].cityFrom.coordinates.latitude,
          ];

    this.map = new OLMap({
      target: "map",
      overlays: [overlay],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 6,
        maxZoom: 10,
        minZoom: 1,
      }),
    });

    /*  create maplayers */
    const openStreetMapHumanitarian = new TileLayer({
      source: new OSM({
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      }),
      visible: true,
    });

    const openStreetMapStandart = new TileLayer({
      source: new OSM(),
      visible: false,
    });

    const stamenTerrain = new TileLayer({
      source: new XYZ({
        url: "http://tile.stament.com/terrain/{x}/{y}/{z}.jpg",
      }),
      visible: false,
    });

    const baseLayerGroup = this.createMainMapLayers();
    this.map.addLayer(baseLayerGroup);
    /*  end create maplayers */

    /* create Layers */
    if (arguments.length > 0) {
      this.endPointsVectorLayer = this.createPointsLayer([homeCity]);
    } else {
      this.endPointsVectorLayer = this.createPointsLayer(
        this.getCities(this.currentPath)
      );
      this.lineVectorLayer = this.createLineStringLayer();
      this.map.addLayer(this.lineVectorLayer);
    }

    //
    /* end create Layers */

    this.map.addLayer(this.endPointsVectorLayer);
    //  this.map.addLayer(this.lineVectorLayer);

  /*   this.map.on("click", (evt) => { */
      this.map.on("pointermove", (evt) => {  
      let div = [];
      this.map.forEachFeatureAtPixel(evt.pixel, (feature, _layer) => {
        if (feature.values_.geometry instanceof Point) {
          const coordinate = evt.coordinate;
          const text = `${feature.values_.geometry.values_.city}, ${feature.values_.geometry.values_.country}`;
          content.innerText = text;
          overlay.setPosition(coordinate);
        } else if (feature.values_.geometry instanceof LineString) {
          const coordinate = evt.coordinate;
          const f = feature.values_.geometry;
          const currency = this.placesSrv.currentCurrency;
          f.forEachSegment((seg1: [number, number], seg2: [number, number]) => {
            div.push(this.getDeviation(evt.coordinate, seg1, seg2));
          });
          const minIndex = div.indexOf(Math.min.apply(null, div));
          this.currentPath[minIndex];
         const tr= transportIconMap.get(this.currentPath[minIndex].transport);

         console.log('icon', this.currentPath[minIndex].transport);
          const text = `${tr},  ${this.currentPath[minIndex].duration_minutes}, ${this.currentPath[minIndex].euro_price}${currency}`;
          content.innerHTML = text;
          overlay.setPosition(coordinate);
        }
      });
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
  }

  private createMainMapLayers(): LayerGroup {
    const openStreetMapHumanitarian = new TileLayer({
      source: new OSM({
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      }),
      visible: true,
    });

    const openStreetMapStandart = new TileLayer({
      source: new OSM(),
      visible: false,
    });

    const stamenTerrain = new TileLayer({
      source: new XYZ({
        url: "http://tile.stament.com/terrain/{x}/{y}/{z}.jpg",
      }),
      visible: false,
    });

    return new LayerGroup({
      layers: [openStreetMapStandart, stamenTerrain, openStreetMapHumanitarian],
    });
  }

  private createPointsLayer(points: ICity[]): VectorLayer {
    const style = new Style({
      image: new Icon({
     //   color: "#ff3d00",
        crossOrigin: "anonymous",
        src: "../../../assets/icon/flag.png",
        imgSize: [50, 50],
      }),
    });
    const pointsArray = [];

    points.forEach((p) => {
      const pathPoint = new Point(
        fromLonLat([p.coordinates.longitude, p.coordinates.latitude])
      );
      pathPoint.setProperties({ city: p.name, country: p.country }, true);

      pointsArray.push(
        new Feature({
          geometry: pathPoint,
        })
      );
    });

    pointsArray.map((point) => point.setStyle(style));

    const pointsVectorSource = new VectorSource({
      features: pointsArray,
    });

    return new VectorLayer({
      source: pointsVectorSource,
    });
  }

  private createLineStringLayer(): VectorLayer {
    const coordinates = [];
    this.getCities(this.currentPath).forEach((p) => {
      return coordinates.push([
        p.coordinates.longitude,
        p.coordinates.latitude,
      ]);
    });
    let lineString = new LineString(coordinates);
    lineString.transform("EPSG:4326", "EPSG:3857");

    let lineStringFeature = new Feature({
      geometry: lineString,
      name: "Line",
    });

    const lineStyle = new Style({
      stroke: new Stroke({
        color: "orange",
        width: 5,
      }),
    });

    let styleFunction = this.lineStyleFunction;

    const lineVectorSource = new VectorSource({
      features: [lineStringFeature],
    });

   


      


    return new VectorLayer({
      source: lineVectorSource,
     // style: 
      style: styleFunction,
    });
  }

  segmentChanged(event: any) {
    this.currentPath = event.detail.value.direct_paths;

    this.endPointsVectorLayer.getSource().clear();
    this.lineVectorLayer.getSource().clear();

    this.endPointsVectorLayer = this.createPointsLayer(
      this.getCities(this.currentPath)
    );
    this.lineVectorLayer = this.createLineStringLayer();

    this.map.addLayer(this.endPointsVectorLayer);
    this.map.addLayer(this.lineVectorLayer);
  }

  private getCities(
    paths: Array<{
      cityFrom: ICity;
      cityTo: ICity;
      transportation_type: any;
      euro_price: number;
      duration_minutes: string;
    }>
  ): ICity[] {
    const citiesSet = new Set<string>();
    paths.forEach((rout) => {
      citiesSet.add(JSON.stringify(rout.cityFrom));
      citiesSet.add(JSON.stringify(rout.cityTo));
    });

    return Array.from(citiesSet).map((str) => JSON.parse(str));
  }

  private getDistance(p1: [number, number], p2: [number, number]): number {
    const d = Math.sqrt(
      Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
    );
    return d;
  }

  private getDeviation(
    p: [number, number],
    l1: [number, number],
    l2: [number, number]
  ): number {
    const [x, y, x1, y1, x2, y2] = [p[0], p[1], l1[0], l1[1], l2[0], l2[1]];
    const a = x2 - x1;
    const b = y2 - y1;
    const c = b / a;

    const yProjection = (x - x1) * c + y1;

    return this.getDistance([x, yProjection], [x, y]);
  }


  private lineStyleFunction(feature: any){
   let lineGeometry = feature.getGeometry();
    let styles = [
      // linestring
      new Style({
        stroke: new Stroke({
          color: ' #ff3d00',
          width: 2,
        }),
      }) ];
  
    lineGeometry.forEachSegment(function (start, end) {
      let dx = end[0] - start[0];
      let dy = end[1] - start[1];
      let rotation = Math.atan2(dy, dx);
      // arrows
      styles.push(
        new Style({
          geometry: new Point(end),
          image: new Icon({
            src: '../../../assets/images/arrow.png',
         //   anchor: [0.75, 0.5],
            rotateWithView: true,
            rotation: -rotation,
            imgSize: [20, 20]
          }),
        })
      );
    });
  
    return styles;
  }
}
