import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";
import { ICity } from "./places/places.model";



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
