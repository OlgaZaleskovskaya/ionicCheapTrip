(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offer-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"OFFER.AvailablePaths\"| translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<app-tools [isHidden]=\"true\"></app-tools>\r\n\r\n<ion-content>\r\n  <div class=\"text-center\">\r\n    <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\r\n  </div>\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n   <!--  <ion-row>\r\n      <ion-col size=\"6\" offset=\"6\">\r\n        <ion-button class=\"expand\" color=\"secondary\" expand=\"full\" (click)=\"toSearchPage()\" fill=\"solid\">\r\n          {{'OFFER.NewSearch' | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-label>\r\n          <p> <span>{{startPointCity.name}}</span><span class=\"spacer\"></span>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon><span class=\"spacer\"></span><span>{{endPointCity.name}}</span>\r\n          </p>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-item *ngFor=\"let path of routs\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header expandedHeight=\"*\" collapsedHeight=\"*\">\r\n                <mat-panel-title>\r\n                  <p> <span *ngFor=\"let icon of path.icons\" [innerHTML]=\"icon\"></span></p>\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  <ul class=\"city\">\r\n                    <li *ngFor=\"let city of path.cities\">{{city}}<ion-icon name=\"arrow-forward\"></ion-icon></li>\r\n                  </ul>\r\n                  <p> <span class=\"time\">{{path.duration_minutes}}</span> <span class=\"spacer\">\r\n                    </span>\r\n                    <span>\r\n                      <ion-badge color=\"primary\">{{path.euro_price |currency:currentCurrency:true:'1.2-2'}}</ion-badge>\r\n                    </span>\r\n                  </p>\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <app-details [ways]=\"path.direct_paths\" [currency]=\"currentCurrency\"></app-details>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n          <!--   <ion-label [routerLink]=\"['/', 'places', 'tabs', 'discover', path.routeType]\">\r\n            </ion-label> -->\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/places/discover/offer/offer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/discover/offer/offer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageRoutingModule", function() { return OfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer.page */ "./src/app/places/discover/offer/offer.page.ts");




const routes = [
    {
        path: '',
        component: _offer_page__WEBPACK_IMPORTED_MODULE_3__["OfferPage"]
    }
];
let OfferPageRoutingModule = class OfferPageRoutingModule {
};
OfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfferPageRoutingModule);



/***/ }),

/***/ "./src/app/places/discover/offer/offer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/places/discover/offer/offer.module.ts ***!
  \*******************************************************/
/*! exports provided: OfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _offer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-routing.module */ "./src/app/places/discover/offer/offer-routing.module.ts");
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer.page */ "./src/app/places/discover/offer/offer.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _details_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../details/details.page */ "./src/app/places/discover/details/details.page.ts");










let OfferPageModule = class OfferPageModule {
};
OfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offer_routing_module__WEBPACK_IMPORTED_MODULE_6__["OfferPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]
        ],
        declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_7__["OfferPage"], _details_details_page__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"]]
    })
], OfferPageModule);



/***/ }),

/***/ "./src/app/places/discover/offer/offer.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/places/discover/offer/offer.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: flex;\n}\n\nmat-accordion {\n  width: 100%;\n}\n\nmat-header {\n  padding: 1px;\n}\n\nmat-panel-title p {\n  color: var(--ion-color-secondary);\n  display: flex;\n  flex-direction: column;\n}\n\nmat-panel-title p span {\n  display: block;\n}\n\n.mat-expansion-panel-header {\n  height: auto !important;\n  padding: 0;\n}\n\nmat-panel-description {\n  flex-direction: column;\n  width: 100%;\n}\n\nmat-panel-description p {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\nmat-panel-description p span.time {\n  color: #757575;\n}\n\nmat-panel-description ul.city {\n  font-size: 0.8rem;\n  width: 100%;\n  color: #212121;\n  font-weight: bold;\n  font-style: italic;\n  white-space: normal;\n  line-height: 1.2;\n  padding: 1px;\n}\n\nmat-panel-description ul.city li {\n  display: inline;\n}\n\nmat-panel-description ul.city li ion-icon {\n  position: relative;\n  top: 0.1rem;\n  margin-left: 5px;\n}\n\nmat-panel-description ul.city li:last-child ion-icon {\n  display: none;\n}\n\n/* .city span:after {\n  content: \" > \";\n  display: inline;\n}\n.city span:last-child:after {\n  content: none;\n} */\n\nion-label p {\n  display: flex;\n  justify-content: space-around;\n  background-color: #ffccbc;\n  padding: 1rem;\n  color: #212121;\n  font-weight: bold;\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDRTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDRSxjQUFBO0FBR047O0FBQ0E7RUFDRSx1QkFBQTtFQUVBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUdKOztBQUZJO0VBQ0UsY0FBQTtBQUlOOztBQURFO0VBQ0MsaUJBQUE7RUFFQyxXQUFBO0VBQ0EsY0FBQTtFQUNELGlCQUFBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBRUUsZUFBQTtBQUVOOztBQUFNO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFJTTtFQUNFLGFBQUE7QUFGUjs7QUFVQTs7Ozs7O0dBQUE7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVEoiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvb2ZmZXIvb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LWFjY29yZGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcbm1hdC1wYW5lbC10aXRsZSB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5tYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFuLnRpbWUge1xyXG4gICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIH1cclxuICB9XHJcbiAgdWwuY2l0eSB7XHJcbiAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbGkge1xyXG5cclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG5cclxuICAgICAgICAvL3BhZGRpbmc6IDhweCAycHggMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG5cclxuLyogLmNpdHkgc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogXCIgPiBcIjtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmNpdHkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICBjb250ZW50OiBub25lO1xyXG59ICovXHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NiYztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/places/discover/offer/offer.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/places/discover/offer/offer.page.ts ***!
  \*****************************************************/
/*! exports provided: OfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPage", function() { return OfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");




let OfferPage = class OfferPage {
    constructor(navCtrl, placesSrv) {
        this.navCtrl = navCtrl;
        this.placesSrv = placesSrv;
    }
    ngOnInit() {
        this.isLoading = true;
        this.currentCurrency = this.placesSrv.currentCurrency;
        this.currencyChanged = this.placesSrv.currencyChanged$.subscribe((res) => {
            this.currentCurrency = res.name;
            this.routs = this.recalculatePrice(res.rate, res.previousRate);
        });
        this.paths = this.placesSrv.pathsSubj$.subscribe((res) => {
            this.startPointCity = this.placesSrv.startPointCity;
            this.endPointCity = this.placesSrv.endPointCity;
            this.routs = res;
            this.routs = this.routs.map((rout) => {
                return Object.assign(Object.assign({}, rout), { cities: this.getCities(rout), icons: this.getTransportTypes(rout) });
            });
            this.isLoading = false;
        });
    }
    toSearchPage() {
        this.navCtrl.navigateBack("places/tabs/discover");
    }
    getCities(rout) {
        const citiesSet = new Set();
        rout.direct_paths.forEach((r) => {
            citiesSet.add(r.from);
            citiesSet.add(r.to);
        });
        return Array.from(citiesSet);
    }
    getTransportTypes(rout) {
        const transportIcons = rout.direct_paths.map((r) => {
            return r.imgUrl;
        });
        return transportIcons;
    }
    recalculatePrice(rate, previousRate) {
        return this.routs.map((rout) => {
            return Object.assign(Object.assign({}, rout), { euro_price: rout.euro_price * (rate / previousRate), direct_paths: rout.direct_paths.map((path) => {
                    return Object.assign(Object.assign({}, path), { euro_price: path.euro_price * (rate / previousRate) });
                }) });
        });
    }
};
OfferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] }
];
OfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-offer",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offer.page.scss */ "./src/app/places/discover/offer/offer.page.scss")).default]
    })
], OfferPage);



/***/ })

}]);
//# sourceMappingURL=offer-offer-module-es2015.js.map