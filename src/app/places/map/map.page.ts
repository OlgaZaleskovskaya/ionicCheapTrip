import { Component, OnInit } from "@angular/core";
import OLMap from "ol/Map";
import View from "ol/View";

import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import { Icon, Style, Stroke } from "ol/style";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import { PlacesService } from "../places.service";
import * as coordinates from "./coordinates";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import LayerGroup from "ol/layer/Group";
import { ICity } from "../places.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  vectorSource;
  vectorLayer;
  rasterLayer;

  map;
  startPointCity: string;
  endPointCity: string;
  startPoint: Feature;
  endPoint: Feature;
  latitude: number;
  longitude: number;
  //coordinates: Array<number[]>;
  startPointCoords: [number, number];
  endPointCoords: [number, number];
  points: ICity[];
  routs: Array<any>;

  constructor(
    private placesSrv: PlacesService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    if (this.placesSrv.startPointCity !== undefined) {
      this.routs = [...this.placesSrv.currentPaths];
      console.log("routs", this.routs);
      const firstRout = this.routs[0].direct_paths;
      console.log("rout", firstRout);
      const mypoints = this.getCities(firstRout).map(
        (point) => point.coordinates
      );

      // this.startPointCity = this.placesSrv.startPointCity.name;
      //  this.endPointCity = this.placesSrv.endPointCity.name;

      /*       const startPointCoords = [
        coordinates.coord.get(this.startPointCity)[1],
        coordinates.coord.get(this.startPointCity)[0],
      ];
      const endPointCoords = [
        coordinates.coord.get(this.endPointCity)[1],
        coordinates.coord.get(this.endPointCity)[0],
      ]; */

      this.initializeMap("mixed", mypoints);
    } else {
      this.geolocation
        .getCurrentPosition()
        .then((resp) => {
          const currentCoords = [resp.coords.longitude, resp.coords.latitude];

          this.initializeMap("ff", [
            {
              latitude: resp.coords.latitude,
              longitude: resp.coords.longitude,
            },
          ]);
        })
        .catch((error) => {
          console.log("Error getting location", error);
        });
    }
  }

  initializeMap(
    type: string,
    points: Array<{ latitude: number; longitude: number }>
  ) {
    /*  this.startPoint = new Feature({
      geometry: new Point(fromLonLat(start)),
    });

    this.endPoint = new Feature({
      geometry: new Point(fromLonLat(end)),
    }); */

    const style = new Style({
      image: new Icon({
        color: "#ff3d00",
        crossOrigin: "anonymous",
        src: "../../../assets/icon/point.png",
        imgSize: [20, 20],
      }),
    });

    const markerArray = [];
    const p = [...points];

    p.forEach((point) => {
      markerArray.push(
        new Feature({
          geometry: new Point(fromLonLat([point.longitude, point.latitude])),
        })
      );
    });
    markerArray.map((point) => point.setStyle(style));

    //  this.startPoint.setStyle(style);
    // this.endPoint.setStyle(style);

    const endPointsVectorSource = new VectorSource({
      /*     features: [this.startPoint, this.endPoint], */
      features: markerArray,
    });

    const endPointsVectorLayer = new VectorLayer({
      source: endPointsVectorSource,
    });

    this.map = new OLMap({
      target: "map",
      /*   layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.vectorLayer,
      ], */
      view: new View({
        center: fromLonLat([p[0].longitude, p[0].latitude]),
        zoom: 6,
        maxZoom: 10,
        minZoom: 1,
      }),
    });

    const coordinates = [];
    p.forEach((p) => coordinates.push([p.longitude, p.latitude]));

    const lineVectorLayer = this.createLineStringLayer(coordinates);

    /*   anotherlayer */
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
    this.map.addLayer(endPointsVectorLayer);
    this.map.addLayer(lineVectorLayer);
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

  private createLineStringLayer(coordArr: Array<number[]>): VectorLayer {
    let lineString = new LineString(coordArr);
    lineString.transform("EPSG:4326", "EPSG:3857");

    const lineStringFeature = new Feature({
      geometry: lineString,
      name: "Line",
    });

    const lineStyle = new Style({
      stroke: new Stroke({
        color: "#607D8B",
        width: 2,
      }),
    });

    const lineVectorSource = new VectorSource({
      features: [lineStringFeature],
    });

    return new VectorLayer({
      source: lineVectorSource,
      style: [lineStyle],
    });
  }

  getClickCoord() {
    this.map.on("click", (event) => {
      console.log(event.coordinate);
    });
  }

  segmentChanged(event: any) {}

  private getCities(paths: Array<{ cityFrom: ICity; cityTo: ICity }>): ICity[] {
    const citiesSet = new Set<string>();
    paths.forEach((rout) => {
      citiesSet.add(JSON.stringify(rout.cityFrom));
      citiesSet.add(JSON.stringify(rout.cityTo));
    });

    return Array.from(citiesSet).map((str) => JSON.parse(str));
  }
}
