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

 getCurencyRate(cur: string): Observable<any>{
   console.log('cur', cur);

    const curUrl = `https://free.currconv.com/api/v7/convert?q=EUR_${cur}&compact=ultra&apiKey=31d8c7a521820803e1aa`;
   return this.http.get(curUrl);
  }
}
