import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { BehaviorSubject, Observable, of, Subject, Subscription } from "rxjs";
import { map, take } from "rxjs/operators";
import { HttpService } from "../http.service";
import {
  ICity,
  IFetchedPathDetails,
  IFetchedPaths,
  TransportationType,
} from "./places.model";

const iconMap = new Map();
iconMap.set("Ground route", "../../assets/images/groundWay.png");
iconMap.set("Mixed route", "../../assets/images/mixedWay.png");
iconMap.set("Flying route", "../../assets/images/flightWay.png");

enum Icons {
  FLIGHT = `<span class="material-icons">
  flight
  </span>`,
  BUS = `<span class="material-icons">
  directions_bus
  </span>`,
  TRAIN = `<span class="material-icons">
  directions_railway
  </span>`,
  SUBWAY = `<span class="material-icons">
  directions_subway
  </span>`,
  SHIP = `<span class="material-icons">
  directions_boat
  </span>`,
  ONFOOT = `<span class="material-icons">
  directions_walk
  </span>`,
  CAR = `<span class="material-icons">
  directions_car
  </span>`,
  TAXI = `<span class="material-icons">
  local_taxi
  </span>`,
  SHUTTLE = `<span class="material-icons">
  shuttle
  </span>`,
}
const transportIconMap = new Map();
/* transportIconMap.set("Bus", "../../assets/images/transport/bus.png");
transportIconMap.set("Train", "../../assets/images/transport/train.png");
transportIconMap.set("Ride Share", "../../assets/images/transport/rideShare.png");
transportIconMap.set("Taxi", "../../assets/images/transport/taxi.png");
transportIconMap.set("Flight", "../../assets/images/transport/flight.png"); */
transportIconMap.set("Bus", Icons.BUS);
transportIconMap.set("Train", Icons.TRAIN);
transportIconMap.set("Ride Share", Icons.CAR);
transportIconMap.set("Taxi", Icons.TAXI);
transportIconMap.set("Flight", Icons.FLIGHT);

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
    private router: Router
  ) {}

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
          this.errorHandler();
          this.cleanPathsSubj$.next(true);
          return;
        } else {
          this.pathsSubj$.next(this.paths);
        }
      }),
      (_error) => {
        this.errorHandler();
      };
  }

  getPathDetail(type: string): IFetchedPaths {
    return this.currentPaths.find((p) => p.routeType === type);
  }

  private errorHandler() {
    console.log("error");
    this.alertCtrl
      .create({
        header: "An error occurred!",
        message: "No information fetched. Please try again later.",
        buttons: [
          {
            text: "Okay",
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
      };
    });

    return transformed;
  }

  private transformPath(path: IFetchedPaths): IFetchedPaths {
    const transformedPath = {
      ...path,
      duration_minutes: this.transformDuration(
        path.duration_minutes.toString()
      ),
      euro_price: this.transformPrice(path.euro_price.toString()),
      direct_paths: this.transformPathDetails(path.direct_paths),
      imgUrl: iconMap.get(path.routeType),
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
    console.log("cities list", citiesList);
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
