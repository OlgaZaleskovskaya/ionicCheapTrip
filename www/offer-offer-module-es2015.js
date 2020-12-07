(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offer-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offer/offer.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offer/offer.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Multiple way</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offer/offer-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/places/offer/offer-routing.module.ts ***!
  \******************************************************/
/*! exports provided: OfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageRoutingModule", function() { return OfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offer.page */ "./src/app/places/offer/offer.page.ts");




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

/***/ "./src/app/places/offer/offer.module.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offer/offer.module.ts ***!
  \**********************************************/
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
/* harmony import */ var _offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-routing.module */ "./src/app/places/offer/offer-routing.module.ts");
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer.page */ "./src/app/places/offer/offer.page.ts");







let OfferPageModule = class OfferPageModule {
};
OfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfferPageRoutingModule"]
        ],
        declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_6__["OfferPage"]]
    })
], OfferPageModule);



/***/ }),

/***/ "./src/app/places/offer/offer.page.scss":
/*!**********************************************!*\
  !*** ./src/app/places/offer/offer.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlci9vZmZlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/offer/offer.page.ts":
/*!********************************************!*\
  !*** ./src/app/places/offer/offer.page.ts ***!
  \********************************************/
/*! exports provided: OfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPage", function() { return OfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OfferPage = class OfferPage {
    constructor() { }
    ngOnInit() {
    }
};
OfferPage.ctorParameters = () => [];
OfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offer/offer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offer.page.scss */ "./src/app/places/offer/offer.page.scss")).default]
    })
], OfferPage);



/***/ })

}]);
//# sourceMappingURL=offer-offer-module-es2015.js.map