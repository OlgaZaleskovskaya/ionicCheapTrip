(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-list>\r\n<!--    <ion- item-sliding  class=\"ion-no-padding\" *ngFor=\"let way of ways\" #slidingItem> -->\r\n      <ion-item class=\"ion-no-padding\" *ngFor=\"let way of ways\">\r\n   \r\n        <ion-label class=\"ion-no-margin\">\r\n          <p class=\"transport\" > <span class=\"spacer\"></span>{{way.transportation_type}}<span class=\"spacer\"></span></p>\r\n          <p class=\"rout\"><span>{{way.from}}</span>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n           <span>{{way.to}}</span> \r\n          </p>\r\n          <p>\r\n            <span class=\"time\">{{way.duration_minutes}}</span>\r\n            <span class=\"spacer\"></span>\r\n            <span class=\"currency\">\r\n             {{way.euro_price | currency:currency:'symbol-narrow':'1.2-2' }}</span>\r\n           \r\n\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n   <!--    <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"secondary\" (click)=\"onGoToMap(slidingItem)\">\r\n          <ion-icon name=\"eye-sharp\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding> -->\r\n  </ion-list>\r\n  <!--  <app-location-picker></app-location-picker> -->\r\n ");

/***/ }),

/***/ "./src/app/places/discover/details/details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/details/details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/places/discover/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/places/discover/details/details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/discover/details/details.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/places/discover/details/details-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        declarations: []
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/places/discover/details/details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/places/discover/details/details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: flex;\n}\n\nspan.spacer {\n  flex: 1 1 auto;\n}\n\n.icon {\n  color: var(--ion-color-secondary);\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n\nion-label p {\n  color: var(--ion-color-secondary);\n}\n\nion-label p span.currency {\n  color: var(--ion-color-primary);\n  display: inline-block;\n}\n\nion-label p.rout {\n  font-weight: bold;\n  color: #212121;\n  justify-content: space-between;\n}\n\nion-label p.rout span {\n  width: 40%;\n}\n\nion-label p.rout span:last-child {\n  text-align: right;\n  justify-self: end;\n}\n\nion-label p.rout ion-icon {\n  justify-self: center;\n}\n\n:host {\n  width: 100%;\n}\n\nion-list {\n  width: 100%;\n  background-color: rgba(128, 128, 128, 0.3);\n  margin: 0;\n}\n\n.time {\n  color: #757575;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start:0px\n\n  ion-label{\n    width:100%;\n     background-color: gray;\n  } ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDRTtFQUNFLGlDQUFBO0FBRUo7O0FBREk7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FBR047O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUFJO0VBQ0UsVUFBQTtBQUVOOztBQUFJO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQUVMOztBQUNJO0VBQ0Usb0JBQUE7QUFDTjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFJRTtFQUVDLHdCQUFBO0VBQ0M7OztJQUFBLFVBQUE7S0FBQSxzQkFBQTtFQUFBLEVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5zcGFuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pdGVtLWF2YXRhciB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxyXG4gIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBzcGFuLmN1cnJlbmN5IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBwLnJvdXQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgIHdpZHRoOjQwJTtcclxuICAgIH1cclxuICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjpob3N0e1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XHJcbiAgbWFyZ2luOjA7XHJcblxyXG59XHJcblxyXG4udGltZXtcclxuICBjb2xvcjogICM3NTc1NzU7XHJcbn1cclxuXHJcblxyXG4gIGlvbi1pdGVte1xyXG5cclxuICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweFxyXG5cclxuICBcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */");

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
        console.info("detail", this.currency);
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
    ways: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/places/discover/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=discover-details-details-module-es2015.js.map