(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\">\r\n  <ion-buttons slot=\"start\">\r\n    <!--   <ion-menu-button menu=\"m1\"></ion-menu-button> -->\r\n    <ion-menu-button></ion-menu-button>\r\n  </ion-buttons>\r\n  <!--   <ion-buttons class=\"select\" slot=\"end\">\r\n    <ion-item  class=\"select\" lines=\"none\">\r\n     <ion-icon name=\"checkbox-outline\" slot=\"start\"></ion-icon>\r\n   <ion-label>{{'SelectLanguage' | translate}}</ion-label> \r\n      <ion-select [value]=\"language\" class=\"select\" interface=\"popover\" (ionChange)=\"onSelectLang($event)\">\r\n        <ion-select-option value=\"en\">En</ion-select-option>\r\n        <ion-select-option value=\"ru\">Ru</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-buttons>-->\r\n\r\n  <ion-title class=\"hide-xs\">\r\n    <span [ngStyle]=\"{'padding-right':'7px'}\">CheapTrip. </span> {{'DISCOVER.MainSlogan' | translate }}</ion-title>\r\n  <p class=\"title hide-sm\"><span\r\n      [ngStyle]=\"{'padding-right':'7px'}\">CheapTrip.</span>{{'DISCOVER.MainSlogan' | translate }}</p>\r\n\r\n</ion-toolbar>\r\n<app-tools [isHidden]=\"false\"></app-tools>\r\n<!-- \r\n<ion-toolbar translucent>\r\n  <ion-buttons class=\"select\" slot=\"start\">\r\n    <ion-item class=\"select\" lines=\"none\">\r\n   \r\n      <ion-select value=\"Euro\" class=\"select\" interface=\"popover\" (ionChange)=\"onSelectCurrency($event)\">\r\n        <ion-select-option *ngFor=\"let cur of currencyArr\" [value]=\"cur\">{{cur}}</ion-select-option>\r\n     \r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-buttons>\r\n  <ion-buttons class=\"select\" slot=\"end\">\r\n    <ion-item class=\"select\" lines=\"none\">\r\n     \r\n      <ion-select [value]=\"language\" class=\"select\" interface=\"popover\" (ionChange)=\"onSelectLang($event)\">\r\n        <ion-select-option value=\"en\">En</ion-select-option>\r\n        <ion-select-option value=\"ru\">Ru</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-buttons>\r\n\r\n</ion-toolbar> -->\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title color=\"secondary\" class=\"text-center hide-xs\">{{'DISCOVER.MainMessage' | translate}}\r\n      </ion-card-title>\r\n      <ion-card-subtitle color=\"secondary\" class=\"text-center hide-sm\">\r\n        {{'DISCOVER.MainMessage' | translate}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row class=\"input\">\r\n          <ion-col size=\"14\" size-md=\"7\">\r\n            <ion-item class=\"pointInpt\">\r\n              <ion-label position=\"floating\" color=\"secondary\"><b>{{'DISCOVER.From' | translate}}</b></ion-label>\r\n              <ion-input #ionInputStartElRef clearInput (ionChange)=\"onStartPointSearchChange($event)\"\r\n                [(ngModel)]=\"startPointCity.name\">\r\n              </ion-input>\r\n\r\n            </ion-item>\r\n            <ion-item class=\"autocomplete\" *ngIf=\"startPointCitiesAvailable\">\r\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\" lines=\"none\">\r\n                <ion-item *ngFor=\"let result of startPointCities\" (click)=\"startPointCitySelected(result)\" button>\r\n                  <p>{{result.name}}</p>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- \r\n          <ion-col class=\"hide-xs\" size-md=\"2\">\r\n            <ion-img class=\"logo\" src=\"../../../assets/logo.jpg\"></ion-img>\r\n          </ion-col> -->\r\n\r\n          <ion-col size=\"14\" size-md=\"7\">\r\n            <ion-item class=\"pointInpt\">\r\n              <ion-label position=\"floating\" color=\"secondary\"><b>{{'DISCOVER.To' | translate}}</b></ion-label>\r\n              <ion-input #ionInputEndElRef clearInput (ionChange)=\"onEndPointSearchChange($event)\"\r\n                [(ngModel)]=\"endPointCity.name\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"autocomplete\" *ngIf=\"endPointCitiesAvailable\">\r\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\">\r\n                <ion-item *ngFor=\"let result of endPointCities\" (click)=\"endPointCitySelected(result)\" button>\r\n                  <p>{{result.name}}</p>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"buttons\" size-xs=\"12\" offset-xs=\"0\" offset=\"2\" size-md=\"8\" offset-md=\"2\">\r\n            <ion-button size=\"small\" fill=\"solid\" type=\"button\" (click)=\"onClearAll()\" color=\"secondary\">\r\n              {{'DISCOVER.Clear' | translate}}\r\n            </ion-button>\r\n            <ion-button size=\"small\" fill=\"solid\" type=\"button\" color=\"primary\" routerDirection=\"forward\"\r\n              routerLink=\"/places/tabs/discover/offer\" (click)=\"searchPath()\">{{'DISCOVER.Submit' | translate}}\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!--  <ion-row class=\"hide-sm\"> -->\r\n        <ion-row>\r\n          <ion-col size=\"6\" offset=\"3\">\r\n            <ion-img class=\"logo\" src=\"../../../assets/logo.jpg\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/places/discover/discover-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DiscoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageRoutingModule", function() { return DiscoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_3__["DiscoverPage"]
    },
    {
        path: 'offer',
        loadChildren: () => Promise.all(/*! import() | offer-offer-module */[__webpack_require__.e("common"), __webpack_require__.e("offer-offer-module")]).then(__webpack_require__.bind(null, /*! ./offer/offer.module */ "./src/app/places/discover/offer/offer.module.ts")).then(m => m.OfferPageModule)
    },
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-routing.module */ "./src/app/places/discover/discover-routing.module.ts");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
    })
], DiscoverPageModule);



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  margin-right: 1rem;\n}\n\nh3 {\n  text-align: center;\n  color: var --ion-color-secondary;\n}\n\nion-title, p.title {\n  font-style: italic;\n}\n\n.select {\n  --color: var(--ion-color-primary);\n}\n\nion-card-title,\nion-card-subtitle {\n  text-align: center;\n  line-height: 1.5rem;\n}\n\nion-img {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-row.input {\n  --ion-grid-columns: 14;\n}\n\n@media (max-width: 576px) {\n  .hide-xs {\n    display: none;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 2000px) {\n  .hide-sm {\n    display: none;\n  }\n}\n\n.item-has-focus {\n  --highlight-background: var(--ion-color-primary);\n}\n\nion-input {\n  --padding-start: 1rem;\n  --padding-top: 0.1rem;\n  padding: 1rem;\n}\n\nion-item.pointInput {\n  --background: rgba(255, 72, 0, 0.1);\n}\n\nion-label {\n  --color: var(--ion-color-secondary);\n}\n\nion-content {\n  --keyboard-offset: 10rem;\n}\n\nion-list ion-item ion-label {\n  margin: 0px;\n}\n\nion-list ion-item {\n  --min-height: 24px;\n  margin: 0px;\n}\n\nion-item.autocomplete {\n  position: absolute;\n  z-index: 100;\n}\n\nion-item.autocomplete ion-list ion-item p {\n  font-size: 0.8rem;\n}\n\nion-card {\n  height: 100vh;\n}\n\nion-button {\n  margin-top: 3rem;\n}\n\nion-col.buttons {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2Rpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxrQkFBQTtBQUNGOztBQUdBO0VBRUksaUNBQUE7QUFESjs7QUFJQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0QsWUFBQTtFQUNDLHNCQUFBO0tBQUEsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLGFBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0VBRkY7QUFDRjs7QUFNQTtFQUNFLGdEQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU9BO0VBQ0UsbUNBQUE7QUFKRjs7QUFPQTtFQUNFLG1DQUFBO0FBSkY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7QUFKRjs7QUFPTTtFQUNFLGlCQUFBO0FBTFI7O0FBVUE7RUFDRSxhQUFBO0FBUEY7O0FBU0E7RUFDRSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvZGlzY292ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyICgtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbmlvbi10aXRsZSAsIHAudGl0bGV7XHJcbi8vICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0e1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSxcclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG5pb24tcm93LmlucHV0e1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMTQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5oaWRlLXhzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpIHtcclxuICAuaGlkZS1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMXJlbTtcclxuICAtLXBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuaW9uLWl0ZW0ucG9pbnRJbnB1dCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzIsIDAsIDAuMSk7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0ta2V5Ym9hcmQtb2Zmc2V0OiAxMHJlbTtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0uYXV0b2NvbXBsZXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIHotaW5kZXg6IDEwMDtcclxuICBpb24tbGlzdCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jYXJkIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbmlvbi1jb2wuYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");





let DiscoverPage = class DiscoverPage {
    constructor(placesSrv, navCtrl, translate, alertCtrl) {
        this.placesSrv = placesSrv;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.startPointCitiesAvailable = false;
        this.endPointCitiesAvailable = false;
        this.startPointCities = [];
        this.endPointCities = [];
        this.ignoreNextStartPointChange = false;
        this.ignoreNextEndPointChange = false;
        this.startPointCity = { id: -1, name: "" };
        this.endPointCity = { id: -1, name: "" };
        this.language = "en";
        translate.addLangs(["en", "ru"]);
        translate.setDefaultLang("en");
    }
    ngOnInit() {
        const lang = this.translate.getBrowserLang();
        this.currencyArr = this.placesSrv.getCurrencyArray();
        this.currencyArr = this.currencyArr.map(res => res['currencyName']);
        this.currentCurrency = this.placesSrv.currentCurrency;
        if (lang == "ru") {
            this.translate.use("ru");
            this.language = "ru";
        }
        this.placesSrv.getAllCities();
        this.cleanDataSubscription = this.placesSrv.cleanPathsSubj$.subscribe((_res) => {
            this.onClearAll();
        });
    }
    ngOnDestroy() {
        this.cleanDataSubscription.unsubscribe();
    }
    onStartPointSearchChange(event) {
        if (event.detail.value == "") {
            this.onClearStartPoint();
        }
        const substring = event.target.value;
        if (this.ignoreNextStartPointChange) {
            this.ignoreNextStartPointChange = false;
            this.startPointCitiesAvailable = false;
            return;
        }
        this.placesSrv.getStartPointAutocomplete(substring).subscribe((cities) => {
            this.startPointCities = cities;
            if (cities.length > 0) {
                this.startPointCitiesAvailable = true;
            }
            else {
                this.startPointCitiesAvailable = false;
                this.ionInputStartElRef.nativeElement.querySelector("input").value = "";
            }
        });
    }
    onEndPointSearchChange(event) {
        if (event.detail.value == "") {
            this.onClearEndPoint();
        }
        const substring = event.target.value;
        if (this.ignoreNextEndPointChange) {
            this.ignoreNextEndPointChange = false;
            this.endPointCitiesAvailable = false;
            return;
        }
        this.placesSrv.getEndPointAutocomplete(substring).subscribe((cities) => {
            this.endPointCities = cities;
            if (cities.length > 0) {
                this.endPointCitiesAvailable = true;
            }
            else {
                this.endPointCitiesAvailable = false;
                this.ionInputEndElRef.nativeElement.querySelector("input").value = "";
            }
        });
    }
    startPointCitySelected(city) {
        this.startPointCity = city;
        this.ignoreNextStartPointChange = true;
    }
    endPointCitySelected(city) {
        this.endPointCity = city;
        this.ignoreNextEndPointChange = true;
    }
    searchPath() {
        this.placesSrv.getPaths(this.startPointCity, this.endPointCity);
    }
    onClearStartPoint() {
        console.log("on clear start point");
        this.startPointCity = { id: -1, name: "" };
        this.ignoreNextStartPointChange = true;
        this.startPointCitiesAvailable = false;
        this.startPointCities = [];
    }
    onClearEndPoint() {
        this.endPointCity = { id: -1, name: "" };
        this.ignoreNextEndPointChange = true;
        this.endPointCitiesAvailable = false;
        this.endPointCities = [];
    }
    onClearAll() {
        this.onClearStartPoint();
        this.onClearEndPoint();
    }
    toSearchPage() {
        this.navCtrl.navigateBack("/places/tabs/discover");
    }
    onSelectLang(lang) {
        this.translate.use(lang.detail.value);
    }
    onSelectCurrency(event) {
        const cur = event["detail"]["value"];
        this.placesSrv.getCurrencyRate(cur, true);
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
DiscoverPage.propDecorators = {
    ionInputStartElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["ionInputStartElRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    ionInputEndElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["ionInputEndElRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
DiscoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")).default]
    })
], DiscoverPage);



/***/ })

}]);
//# sourceMappingURL=discover-discover-module-es2015.js.map