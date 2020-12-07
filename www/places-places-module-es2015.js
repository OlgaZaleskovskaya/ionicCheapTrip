(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"discover\">\n      <ion-label>Discover</ion-label>\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"multi\">\n      <ion-label>MultiCity</ion-label>\n      <ion-icon name=\"card\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/places/places-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlacesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageRoutingModule", function() { return PlacesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");




const routes = [
    {
        path: "tabs",
        component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"],
        children: [
            {
                path: "discover",
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() | discover-discover-module */[__webpack_require__.e("default~discover-details-details-module~discover-discover-module~discover-offer-offer-module~offer-o~b813fa14"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null, /*! ./discover/discover.module */ "./src/app/places/discover/discover.module.ts")).then((m) => m.DiscoverPageModule),
                    },
                    {
                        path: "offer",
                        loadChildren: () => Promise.all(/*! import() | discover-offer-offer-module */[__webpack_require__.e("default~discover-details-details-module~discover-discover-module~discover-offer-offer-module~offer-o~b813fa14"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./discover/offer/offer.module */ "./src/app/places/discover/offer/offer.module.ts")).then((m) => m.OfferPageModule),
                    },
                    {
                        path: ":pathId",
                        loadChildren: () => Promise.all(/*! import() | discover-details-details-module */[__webpack_require__.e("default~discover-details-details-module~discover-discover-module~discover-offer-offer-module~offer-o~b813fa14"), __webpack_require__.e("common"), __webpack_require__.e("discover-details-details-module")]).then(__webpack_require__.bind(null, /*! ./discover/details/details.module */ "./src/app/places/discover/details/details.module.ts")).then((m) => m.DetailsPageModule),
                    },
                ],
            },
            {
                path: "multi",
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() | offer-offer-module */[__webpack_require__.e("default~discover-details-details-module~discover-discover-module~discover-offer-offer-module~offer-o~b813fa14"), __webpack_require__.e("common"), __webpack_require__.e("offer-offer-module")]).then(__webpack_require__.bind(null, /*! ./offer/offer.module */ "./src/app/places/offer/offer.module.ts")).then((m) => m.OfferPageModule),
                    },
                ],
            },
            {
                path: "",
                redirectTo: "/places/tabs/discover",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full",
    },
];
let PlacesPageRoutingModule = class PlacesPageRoutingModule {
};
PlacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlacesPageRoutingModule);



/***/ }),

/***/ "./src/app/places/places.module.ts":
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/*! exports provided: PlacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./places-routing.module */ "./src/app/places/places-routing.module.ts");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");







let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _places_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacesPageRoutingModule"]
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
    })
], PlacesPageModule);



/***/ }),

/***/ "./src/app/places/places.page.scss":
/*!*****************************************!*\
  !*** ./src/app/places/places.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/places/places.page.ts":
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/*! exports provided: PlacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPage", function() { return PlacesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PlacesPage = class PlacesPage {
    constructor() { }
    ngOnInit() {
    }
};
PlacesPage.ctorParameters = () => [];
PlacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-places',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./places.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./places.page.scss */ "./src/app/places/places.page.scss")).default]
    })
], PlacesPage);



/***/ })

}]);
//# sourceMappingURL=places-places-module-es2015.js.map