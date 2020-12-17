(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-details-details-module~discover-offer-offer-module~offer-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{startPointCityName}} => {{endPointCityName}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n -->\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let way of ways\" #slidingItem>\r\n      <ion-item class=\"no-padding\">\r\n   \r\n        <ion-label>\r\n          <p> <span class=\"spacer\"></span>{{way.transportation_type}}<span class=\"spacer\"></span></p>\r\n          <p>{{way.from}} <span class=\"spacer\"></span>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon><span class=\"spacer\"></span>\r\n            {{way.to}}\r\n          </p>\r\n          <p>\r\n            <span>{{way.duration_minutes}}</span>\r\n            <span class=\"spacer\"></span>\r\n            <span>\r\n              <ion-badge color=\"primary\">{{way.euro_price | currency:'EUR':'symbol':'1.2-2' }}</ion-badge>\r\n            </span>\r\n\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"secondary\" (click)=\"onGoToMap(slidingItem)\">\r\n          <ion-icon name=\"eye-sharp\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <!--  <app-location-picker></app-location-picker> -->\r\n ");

/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url2;
    }
    getCities() {
        return this.http.get(`${this.URL}/locations/all`);
    }
    getPaths(startPointId, endPointId) {
        const url = `${this.URL}/routes?from=${startPointId}&to=${endPointId}`;
        return this.http.get(url, { observe: "response" });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], HttpService);



/***/ }),

/***/ "./src/app/places/discover/details/details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/places/discover/details/details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: flex;\n}\n\nspan.spacer {\n  flex: 1 1 auto;\n}\n\n.icon {\n  color: var(--ion-color-secondary);\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBRUE7RUFDSSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuc3Bhbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pdGVtLWF2YXRhciAgeyAgICAgXHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXHJcbiAgICB9XHJcbiAiXX0= */");

/***/ }),

/***/ "./src/app/places/discover/details/details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/places/discover/details/details.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");





let DetailsPage = class DetailsPage {
    constructor(route, navCtrl, placesSrv) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.placesSrv = placesSrv;
    }
    ngOnInit() {
        this.startPointCityName = this.placesSrv.startPointCity.name;
        this.endPointCityName = this.placesSrv.endPointCity.name;
        /*  this.route.paramMap.subscribe((paramMap) => {
           if (!paramMap.has("pathId")) {
             this.navCtrl.navigateBack("/places/tabs/offer");
             return;
           }
           this.rout = this.placesSrv.getPathDetail(paramMap.get("pathId"));
           this.paths = this.rout.direct_paths;
         }); */
    }
    onGoToMap(slidingItem) {
        slidingItem.close();
        console.log('Editing item');
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] }
];
DetailsPage.propDecorators = {
    ways: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/places/discover/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const iconMap = new Map();
iconMap.set("Ground route", "../../assets/images/groundWay.png");
iconMap.set("Mixed route", "../../assets/images/mixedWay.png");
iconMap.set("Flying route", "../../assets/images/flightWay.png");
var Icons;
(function (Icons) {
    Icons["FLIGHT"] = "<span class=\"material-icons\">\n  flight\n  </span>";
    Icons["BUS"] = "<span class=\"material-icons\">\n  directions_bus\n  </span>";
    Icons["TRAIN"] = "<span class=\"material-icons\">\n  directions_railway\n  </span>";
    Icons["SUBWAY"] = "<span class=\"material-icons\">\n  directions_subway\n  </span>";
    Icons["SHIP"] = "<span class=\"material-icons\">\n  directions_boat\n  </span>";
    Icons["ONFOOT"] = "<span class=\"material-icons\">\n  directions_walk\n  </span>";
    Icons["CAR"] = "<span class=\"material-icons\">\n  directions_car\n  </span>";
    Icons["TAXI"] = "<span class=\"material-icons\">\n  local_taxi\n  </span>";
    Icons["SHUTTLE"] = "<span class=\"material-icons\">\n  shuttle\n  </span>";
})(Icons || (Icons = {}));
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
let PlacesService = class PlacesService {
    constructor(httpSrv, alertCtrl, router, translate) {
        this.httpSrv = httpSrv;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.translate = translate;
        this.allCities = [];
        this.pathsSubj$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.cleanPathsSubj$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getAllCities() {
        this.citiesSub = this.httpSrv
            .getCities()
            .subscribe((cities) => (this.allCities = cities));
    }
    getStartPointAutocomplete(str) {
        return this.getCitiesAutocomplete(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            var re = /^[A-Za-z0-9]+$/;
            if (!str.match(re)) {
                this.errorHandler("LATIN_CHARACTERES");
            }
            else if (res.length == 0) {
                this.errorHandler("NO_RESULTS_FOR_SEARCH");
            }
        }));
    }
    getEndPointAutocomplete(str) {
        return this.getCitiesAutocomplete(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            var re = /^[A-Za-z0-9]+$/;
            if (!str.match(re)) {
                this.errorHandler("LATIN_CHARACTERES");
            }
            else if (res.length == 0) {
                this.errorHandler("NO_RESULTS_FOR_SEARCH");
            }
        }));
    }
    getPaths(startPoint, endPoint) {
        this.startPointCity = startPoint;
        this.endPointCity = endPoint;
        this.httpSrv
            .getPaths(startPoint.id, endPoint.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            let paths = data.body;
            for (let i = 1; i <= paths.length - 1; i++) {
                if (paths[0].duration_minutes === paths[i].duration_minutes &&
                    data.body[0].euro_price === data.body[i].euro_price) {
                    paths[i].duration_minutes = 0;
                    paths[i].euro_price = 0;
                }
            }
            const pathsArr = paths.filter((path) => path.duration_minutes != "0");
            const transformedPaths = pathsArr.map((path) => {
                return this.transformPath(path);
            });
            this.currentPaths = transformedPaths;
            return transformedPaths;
        }))
            .subscribe((paths) => {
            this.paths = paths;
            if (paths.length === 0) {
                this.errorHandler("NO_RESULTS_FOR_SEARCH");
                this.cleanPathsSubj$.next(true);
                this.pathsSubj$.next([]);
                return;
            }
            else {
                this.pathsSubj$.next(this.paths);
            }
        }),
            (_error) => {
                this.errorHandler("SLEEPING_SERVER");
                this.pathsSubj$.next([]);
            };
    }
    getPathDetail(type) {
        return this.currentPaths.find((p) => p.routeType === type);
    }
    errorHandler(type) {
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
    transformPathDetails(paths) {
        const transformed = paths.map((path) => {
            return Object.assign(Object.assign({}, path), { duration_minutes: this.transformDuration(path.duration_minutes.toString()), euro_price: this.transformPrice(path.euro_price.toString()), imgUrl: transportIconMap.get(path.transportation_type) });
        });
        return transformed;
    }
    transformPath(path) {
        console.log("path", path);
        const transformedPath = Object.assign(Object.assign({}, path), { duration_minutes: this.transformDuration(path.duration_minutes.toString()), euro_price: this.transformPrice(path.euro_price.toString()), direct_paths: this.transformPathDetails(path.direct_paths), imgUrl: iconMap.get(path.routeType), routeType: this.translate.instant(`ROUT_TYPE.${path.routeType}`) });
        return transformedPath;
    }
    transformDuration(minutes) {
        const days = Math.floor(+minutes / 60 / 24);
        const dayStr = days < 1 ? "" : days + "d";
        const hours = Math.floor(+minutes / 60 - days * 24);
        const hourStr = hours < 1 ? "" : hours + "h";
        const min = +minutes - days * 24 * 60 - hours * 60;
        const minStr = min + "min";
        const duration = dayStr + " " + hourStr + " " + minStr;
        return duration;
    }
    transformPrice(price) {
        const euro = Math.floor(+price);
        const cent = Math.floor(+price - euro) * 10;
        return price;
    }
    getCitiesAutocomplete(str) {
        const citiesList = this.allCities.filter((city) => {
            return city.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
        });
        const transformedList = citiesList.map((item, index, array) => {
            return Object.assign(Object.assign({}, item), { index: item.name.toLowerCase().indexOf(str.toLowerCase()) });
        });
        const sortedList = transformedList
            .sort((a, b) => {
            return a.index - b.index;
        })
            .map((item) => {
            return { id: item.id, name: item.name };
        })
            .slice(0, 10);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(sortedList);
    }
};
PlacesService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
PlacesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PlacesService);



/***/ })

}]);
//# sourceMappingURL=default~discover-details-details-module~discover-offer-offer-module~offer-offer-module-es2015.js.map