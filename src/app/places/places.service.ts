import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { BehaviorSubject, Observable, of, Subject, Subscription } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { HttpService } from "../http.service";
import { TranslateService } from "@ngx-translate/core";
import {
  ErrorType,
  ICity,
  IFetchedPathDetails,
  IFetchedPaths,
  TransportationType,
  transportIconMap,
} from "./places.model";

const iconMap = new Map();
iconMap.set("Ground route", "../../assets/images/groundWay.png");
iconMap.set("Mixed route", "../../assets/images/mixedWay.png");
iconMap.set("Flying route", "../../assets/images/flightWay.png");




@Injectable({
  providedIn: "root",
})
export class PlacesService {
  allCities: ICity[] = [];
  endPointCities: ICity[];
  citiesSub: Subscription;
  paths: IFetchedPaths[];
  startPointCity: ICity;
  endPointCity: ICity;
  currentPaths: IFetchedPaths[];

  pathsSubj$: Subject<any> = new BehaviorSubject<any>([]);
  cleanPathsSubj$: Subject<any> = new Subject<boolean>();

  constructor(
    private httpSrv: HttpService,
    private alertCtrl: AlertController,
    private router: Router,
    public translate: TranslateService
  ) {}

  getAllCities() {
    this.citiesSub = this.httpSrv
      .getCities()
      .subscribe((cities) => (this.allCities = cities as ICity[]));
  }

  getStartPointAutocomplete(str: string): Observable<ICity[]> {
    return this.getCitiesAutocomplete(str).pipe(
      tap((res) => {
        var re = /^[A-Za-z0-9]+$/;

        if (!str.match(re)) {
          this.errorHandler("LATIN_CHARACTERES");
        } else if (res.length == 0) {
          this.errorHandler("NO_RESULTS_FOR_SEARCH");
        }
      })
    );
  }

  getEndPointAutocomplete(str: string): Observable<ICity[]> {
    return this.getCitiesAutocomplete(str).pipe(
      tap((res) => {
        var re = /^[A-Za-z0-9]+$/;

        if (!str.match(re)) {
          this.errorHandler("LATIN_CHARACTERES");
        } else if (res.length == 0) {
          this.errorHandler("NO_RESULTS_FOR_SEARCH");
        }
      })
    );
  }

  getPaths(startPoint: ICity, endPoint: ICity): void {
    this.startPointCity = startPoint;
    this.endPointCity = endPoint;
    this.httpSrv
      .getPaths(startPoint.id, endPoint.id)
      .pipe(
        map((data) => {
          let paths = data.body as IFetchedPaths[];

          for (let i = 1; i <= paths.length - 1; i++) {
            if (
              paths[0].duration_minutes === paths[i].duration_minutes &&
              data.body[0].euro_price === data.body[i].euro_price
            ) {
              paths[i].duration_minutes = 0;
              paths[i].euro_price = 0;
            }
          }
          const pathsArr = paths.filter((path) => path.duration_minutes != "0");
          const transformedPaths = pathsArr.map((path: IFetchedPaths) => {
            return this.transformPath(path);
          });
          this.currentPaths = transformedPaths;

          return transformedPaths;
        })
      )
      .subscribe((paths) => {
        this.paths = paths;
        if (paths.length === 0) {
          this.errorHandler("NO_RESULTS_FOR_SEARCH");
          this.cleanPathsSubj$.next(true);
          this.pathsSubj$.next([]);
          return;
        } else {
          this.pathsSubj$.next(this.paths);
        }
      }),
      (_error) => {
        this.errorHandler("SLEEPING_SERVER");
        this.pathsSubj$.next([]);
      };
  }

  getPathDetail(type: string): IFetchedPaths {
    return this.currentPaths.find((p) => p.routeType === type);
  }

  private errorHandler(type: ErrorType) {
    this.alertCtrl
      .create({
        header: this.translate.instant(`ERRORS:${type}.Header`),
        message: this.translate.instant(`ERRORS:${type}.Message`),
        buttons: [
          {
            text: this.translate.instant(`ERRORS:${type}.Button`),
            handler: () => {
              this.router.navigate(["/places/tabs/discover"]);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  private transformPathDetails(
    paths: IFetchedPathDetails[]
  ): IFetchedPathDetails[] {
    const transformed = paths.map((path) => {
    
      return {
        ...path,
        duration_minutes: this.transformDuration(
          path.duration_minutes.toString()
        ),
        euro_price: this.transformPrice(path.euro_price.toString()),
        imgUrl: transportIconMap.get(path.transportation_type),
        transportation_type: this.translate.instant(`TRANSPORTATION_TYPE.${path.transportation_type}`)
      };
    });

    return transformed;
  }

  private transformPath(path: IFetchedPaths): IFetchedPaths {
    console.log("path", path );
    const transformedPath = {
      ...path,
      duration_minutes: this.transformDuration(
        path.duration_minutes.toString(),
      
      ),
      euro_price: this.transformPrice(path.euro_price.toString()),
      direct_paths: this.transformPathDetails(path.direct_paths),
      imgUrl: iconMap.get(path.routeType), 
      routeType: this.translate.instant(`ROUT_TYPE.${path.routeType}`),
    };
    return transformedPath;
  }

  private transformDuration(minutes: string) {
    const days = Math.floor(+minutes / 60 / 24);
    const dayStr = days < 1 ? "" : days + "d";
    const hours = Math.floor(+minutes / 60 - days * 24);
    const hourStr = hours < 1 ? "" : hours + "h";
    const min = +minutes - days * 24 * 60 - hours * 60;
    const minStr = min + "min";
    const duration = dayStr + " " + hourStr + " " + minStr;

    return duration;
  }

  private transformPrice(price: string) {
    const euro = Math.floor(+price);
    const cent = Math.floor(+price - euro) * 10;
    return price;
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
