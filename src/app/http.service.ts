import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";
import { ICity } from "./places/places.model";

const cities = [
  { id: 1, name: "Moscow" },
  { id: 2, name: "London" },
  { id: 3, name: "Krakow" },
  { id: 4, name: "Prague" },
  { id: 5, name: "Paris" },
  { id: 6, name: "Kiev" },
  { id: 7, name: "Minsk" },
  { id: 8, name: "Bansko" },
  { id: 9, name: "Tel Aviv" },
  { id: 10, name: "Glazgo" },
  { id: 11, name: "Liverpool" },
  { id: 12, name: "Sofia" },
  { id: 13, name: "Lisbon" },
  { id: 14, name: "Volgograd" },
  { id: 15, name: "Riga" },
  { id: 16, name: "Berlin" },
  { id: 17, name: "Madrid" },
  { id: 51, name: "Washington" },
  { id: 61, name: "Toronto" },
  { id: 71, name: "Canberra" },
  { id: 81, name: "Helsinki" },
  { id: 91, name: "Tallinn" },
  { id: 101, name: "Adis Abeba" },
  { id: 111, name: "Tokio" },
  { id: 121, name: "Tashkent" },
  { id: 131, name: "Stockholm" },
  { id: 215, name: "Amsterdam" },
  { id: 216, name: "Brussel" },
  { id: 127, name: "Dresden" },
  { id: 521, name: "Vienna" },
  { id: 621, name: "Ottava" },
  { id: 721, name: "Copenhagen" },
  { id: 821, name: "Tbilisi" },
  { id: 921, name: "Reykjavik" },
  { id: 1201, name: "Dublin" },
  { id: 1211, name: "Rome" },
  { id: 1221, name: "Wellington" },
  { id: 121, name: "Ljubljana" },
];

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  URL = environment.url2;

  getCities(): Observable<any> {
    return this.http.get(`${this.URL}/locations/all`);
  }

  getPaths(startPointId: number, endPointId: number): Observable<any> {
    const url = `${this.URL}/routes?from=${startPointId}&to=${endPointId}`;
    return this.http.get(url, { observe: "response" });
  }
}
