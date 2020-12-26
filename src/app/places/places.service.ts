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

const currencyArray = new Map<string, { name: string; rate: number }>();
currencyArray.set("EUR", { name: "Euro", rate: 1 });
currencyArray.set("USD", { name: "USD", rate: 0 });
currencyArray.set("RUB", { name: "RUB", rate: 0 });
currencyArray.set("RUB", { name: "RUB", rate: 0 });

const curArray = `{
      "EUR": {
        "currencyName": "Euro",
        "currencySymbol": "€",
        "id": "EUR"
      },
      "USD": {
        "currencyName": "United States Dollar",
        "currencySymbol": "$",
        "id": "USD"
      },
      "HUF": {
        "currencyName": "Hungarian Forint",
        "currencySymbol": "Ft",
        "id": "HUF"
      },
      "MKD": {
        "currencyName": "Macedonian Denar",
        "currencySymbol": "ден",
        "id": "MKD"
      },
      "RSD": {
        "currencyName": "Serbian Dinar",
        "currencySymbol": "Дин.",
        "id": "RSD"
      },
      "SEK": {
        "currencyName": "Swedish Krona",
        "currencySymbol": "kr",
        "id": "SEK"
      },
      "AMD": {
        "currencyName": "Armenian Dram",
        "id": "AMD"
      },
      "CZK": {
        "currencyName": "Czech Koruna",
        "currencySymbol": "Kč",
        "id": "CZK"
      },
      "GEL": {
        "currencyName": "Georgian Lari",
        "id": "GEL"
      },
      "DKK": {
        "currencyName": "Danish Krone",
        "currencySymbol": "kr",
        "id": "DKK"
      },
      "ILS": {
        "currencyName": "Israeli New Sheqel",
        "currencySymbol": "₪",
        "id": "ILS"
      },
      "KZT": {
        "currencyName": "Kazakhstani Tenge",
        "currencySymbol": "лв",
        "id": "KZT"
      },
      "RON": {
        "currencyName": "Romanian Leu",
        "currencySymbol": "lei",
        "id": "RON"
      },
      "AZN": {
        "currencyName": "Azerbaijani Manat",
        "currencySymbol": "ман",
        "id": "AZN"
      },
      "BYR": {
        "currencyName": "Belarusian Ruble",
        "currencySymbol": "p.",
        "id": "BYR"
      },
      "BGN": {
        "currencyName": "Bulgarian Lev",
        "currencySymbol": "лв",
        "id": "BGN"
      },
      "CAD": {
        "currencyName": "Canadian Dollar",
        "currencySymbol": "$",
        "id": "CAD"
      },
      "ISK": {
        "currencyName": "Icelandic Króna",
        "currencySymbol": "kr",
        "id": "ISK"
      },
      "JPY": {
        "currencyName": "Japanese Yen",
        "currencySymbol": "¥",
        "id": "JPY"
      },
      "LVL": {
        "currencyName": "Latvian Lats",
        "currencySymbol": "Ls",
        "id": "LVL"
      },
      "CHF": {
        "currencyName": "Swiss Franc",
        "currencySymbol": "Fr.",
        "id": "CHF"
      },
      "MDL": {
        "currencyName": "Moldovan Leu",
        "id": "MDL"
      },
      "KGS": {
        "currencyName": "Kyrgyzstani Som",
        "currencySymbol": "лв",
        "id": "KGS"
      },
      "NOK": {
        "currencyName": "Norwegian Krone",
        "currencySymbol": "kr",
        "id": "NOK"
      },
      "PLN": {
        "currencyName": "Polish Zloty",
        "currencySymbol": "zł",
        "id": "PLN"
      },
      "RUB": {
        "currencyName": "Russian Ruble",
        "currencySymbol": "руб",
        "id": "RUB"
      },
      "TJS": {
        "currencyName": "Tajikistani Somoni",
        "id": "TJS"
      },
      "UAH": {
        "currencyName": "Ukrainian Hryvnia",
        "currencySymbol": "₴",
        "id": "UAH"
      },
      "UZS": {
        "currencyName": "Uzbekistani Som",
        "currencySymbol": "лв",
        "id": "UZS"
      },
      "TMT": {
        "currencyName": "Turkmenistan Manat",
        "id": "TMT"
      },
      "GBP": {
        "currencyName": "British Pound",
        "currencySymbol": "£",
        "id": "GBP"
      }
      
}`;

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
  currentCurrency = "EUR";
  currentCurrencyRate = 1;
  currentLanguage: string;
  languageChanged = false;

  pathsSubj$: Subject<any> = new BehaviorSubject<any>([]);
  cleanPathsSubj$: Subject<any> = new Subject<boolean>();
  currencyChanged$ = new Subject<{
    name: string;
    rate: number;
    previousRate: number;
  }>();

  constructor(
    private httpSrv: HttpService,
    private alertCtrl: AlertController,
    private router: Router,
    public translate: TranslateService
  ) {}

  getCurrencyArray() {
    return Object.keys(JSON.parse(curArray));
  }

  getAllCities() {
    this.citiesSub = this.httpSrv
      .getCities()
      .subscribe((cities) => (this.allCities = cities as ICity[])),
      (_error) => {
        this.errorHandler("SLEEPING_SERVER");
        this.pathsSubj$.next([]);
      };
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

          const sortedPaths = transformedPaths.sort(
            (a, b) => +a.euro_price - +b.euro_price
          );
          this.currentPaths = sortedPaths;

          return sortedPaths;
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

  private getPathDetail(type: string): IFetchedPaths {
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
        transportation_type: this.translate.instant(
          `TRANSPORTATION_TYPE.${path.transportation_type}`
        ),
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

  private transformPrice(price: string): number {
    const euro = Math.floor(+price);
    const pr = euro * this.currentCurrencyRate;

    return +pr;
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

  public getCurrencyRate(cur: string, recalculate: boolean) {
    this.currentCurrency = cur;
    this.httpSrv.getCurencyRate(cur).subscribe((res) => {
      const previousCurrencyRate = this.currentCurrencyRate;
      this.currentCurrencyRate = +Object.values(res)[0];

      if (recalculate) {
        this.currencyChanged$.next({
          name: this.currentCurrency,
          rate: this.currentCurrencyRate,
          previousRate: previousCurrencyRate,
        });
      }
    }),
    (_error) => {
      this.errorHandler("SLEEPING_SERVER");
      this.pathsSubj$.next([]);
    };
  }

  public setLanguage(lang: string, changed: boolean) {
    this.currentLanguage = lang;
    this.languageChanged = changed;
  }
}
