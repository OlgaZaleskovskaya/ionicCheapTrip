import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject, Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { HttpService } from "../http.service";
import { ICity } from "./places.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  allCities: ICity[] = [];
  endPointCities: ICity[];
  citiesSub: Subscription;
  paths: Array<any>;

  pathsSubj$: Subject<any> = new BehaviorSubject<any>([]);

  constructor(private httpSrv: HttpService) {}

  getAllCities() {
    this.citiesSub = this.httpSrv
      .getCities()
      .subscribe((cities) => (this.allCities = cities as ICity[]));
  }

  getStartPointAutocomplete(str: string): Observable<ICity[]> {
    return this.getCitiesAutocomplete(str);
  }

  getEndPointAutocomplete(str: string): Observable<ICity[]> {
   
    return this.getCitiesAutocomplete(str);
  }

  getPaths(startPoint: ICity, endPoint: ICity): void {
    this.httpSrv
      .getPaths(startPoint.id, endPoint.id)
      .subscribe((res) => {

        this.paths= res.body;
         this.pathsSubj$.next(this.paths);
      });
       
  }

  private getCitiesAutocomplete(str: string): Observable<ICity[]> {
    const citiesList = this.allCities.filter((city) => {
      return city.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
    });

    const transformedList = citiesList.map((item, index, array) => {
      return {
        ...item,
        index: item.name.toLowerCase().indexOf(str.toLowerCase()),
      };
    });
    const sortedList = transformedList
      .sort((a, b) => {
        return a.index - b.index;
      })
      .map((item) => {
        return { id: item.id, name: item.name };
      })
      .slice(0, 10);
    return of(sortedList);
  }
}
