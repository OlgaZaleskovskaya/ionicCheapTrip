import { Component, OnInit } from "@angular/core";
import OLMap from "ol/Map";
import View from "ol/View";
import Geometry from "ol/geom/Geometry.js";
import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import { Icon, Style, Stroke } from "ol/style";
import OSM from "ol/source/OSM";
import { PlacesService } from "../places.service";
import * as coordinates from "./coordinates";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  vectorSource;
  vectorLayer;
  rasterLayer;
  chicago: any;
  amsterdam: any;
  bern: any;
  london: any;
  madrid: any;
  map;
  startPointCity: string;
  endPointCity: string;
  startPoint: Feature;
  endPoint: Feature;

  constructor(private placesSrv: PlacesService) {}

  ngOnInit() {
    this.startPointCity = this.placesSrv.startPointCity.name;
    this.endPointCity = this.placesSrv.endPointCity.name;
    this.initializeMap(0, 0);
  }

  initializeMap(lat: number, long: number) {
    const startPointCoordinates = [coordinates.coord.get(this.startPointCity)[1],coordinates.coord.get(this.startPointCity)[0]];
    const endPointCoordinates = [coordinates.coord.get(this.endPointCity)[1],coordinates.coord.get(this.endPointCity)[0]];

    this.startPoint = new Feature({
      geometry: new Point(
        fromLonLat(startPointCoordinates)
      ),
    });

    this.endPoint = new Feature({
      geometry: new Point(
        fromLonLat(endPointCoordinates)
      ),
    });

    const style = new Style({
      image: new Icon({
        color: "#ff3d00",
        crossOrigin: "anonymous",
        src: "../../../assets/icon/point.png",
        imgSize: [20, 20],
      }),
    });

    this.startPoint.setStyle(style);
    this.endPoint.setStyle(style);


    this.vectorSource = new VectorSource({
      features: [this.startPoint, this.endPoint],
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });

    this.map = new OLMap({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        this.vectorLayer,
      ],
      view: new View({
        center: fromLonLat(startPointCoordinates,),
        zoom: 3,
      }),
    });

    const coordinates1 = [
      startPointCoordinates,
      endPointCoordinates,
    ];

    var lineString = new LineString(coordinates1);
 
    lineString.transform("EPSG:4326", "EPSG:3857");

    var feature = new Feature({
      geometry: lineString,
      name: "Line",
    });

    var lineStyle = new Style({
      stroke: new Stroke({
        color: "#607D8B",
        width: 2,
      }),
    });

    var source = new VectorSource({
      features: [feature],
    });
    var vector = new VectorLayer({
      source: source,
      style: [lineStyle],
    });
    this.map.addLayer(vector);
  }
}
