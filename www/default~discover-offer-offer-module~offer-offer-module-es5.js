(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-offer-offer-module~offer-offer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <ion-list>\r\n<!--    <ion- item-sliding  class=\"ion-no-padding\" *ngFor=\"let way of ways\" #slidingItem> -->\r\n      <ion-item class=\"ion-no-padding\" *ngFor=\"let way of ways\">\r\n   \r\n        <ion-label class=\"ion-no-margin\">\r\n          <p class=\"transport\" > <span class=\"spacer\"></span>{{way.transportation_type}}<span class=\"spacer\"></span></p>\r\n          <p class=\"rout\"><span>{{way.from}}</span>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n           <span>{{way.to}}</span> \r\n          </p>\r\n          <p>\r\n            <span class=\"time\">{{way.duration_minutes}}</span>\r\n            <span class=\"spacer\"></span>\r\n            <span class=\"currency\">\r\n             {{way.euro_price | currency:currency:'symbol-narrow':'1.2-2' }}</span>\r\n           \r\n\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n   <!--    <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"secondary\" (click)=\"onGoToMap(slidingItem)\">\r\n          <ion-icon name=\"eye-sharp\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding> -->\r\n  </ion-list>\r\n  <!--  <app-location-picker></app-location-picker> -->\r\n ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverOfferOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"OFFER.AvailablePaths\"| translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<app-tools [isHidden]=\"true\"></app-tools>\r\n\r\n<ion-content>\r\n  <div class=\"text-center\">\r\n    <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\r\n  </div>\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n   <!--  <ion-row>\r\n      <ion-col size=\"6\" offset=\"6\">\r\n        <ion-button class=\"expand\" color=\"secondary\" expand=\"full\" (click)=\"toSearchPage()\" fill=\"solid\">\r\n          {{'OFFER.NewSearch' | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-label>\r\n          <p> <span>{{startPointCity.name}}</span><span class=\"spacer\"></span>\r\n            <ion-icon name=\"arrow-forward\"></ion-icon><span class=\"spacer\"></span><span>{{endPointCity.name}}</span>\r\n          </p>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-item *ngFor=\"let path of routs\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header expandedHeight=\"*\" collapsedHeight=\"*\">\r\n                <mat-panel-title>\r\n                  <p> <span *ngFor=\"let icon of path.icons\" [innerHTML]=\"icon\"></span></p>\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  <ul class=\"city\">\r\n                    <li *ngFor=\"let city of path.cities\">{{city}}<ion-icon name=\"arrow-forward\"></ion-icon></li>\r\n                  </ul>\r\n                  <p> <span class=\"time\">{{path.duration_minutes}}</span> <span class=\"spacer\">\r\n                    </span>\r\n                    <span>\r\n                      <ion-badge color=\"primary\">{{path.euro_price |currency:currentCurrency:true:'1.2-2'}}</ion-badge>\r\n                    </span>\r\n                  </p>\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <app-details [ways]=\"path.direct_paths\" [currency]=\"currentCurrency\"></app-details>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n          <!--   <ion-label [routerLink]=\"['/', 'places', 'tabs', 'discover', path.routeType]\">\r\n            </ion-label> -->\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/places/discover/details/details.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/places/discover/details/details.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesDiscoverDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: flex;\n}\n\nspan.spacer {\n  flex: 1 1 auto;\n}\n\n.icon {\n  color: var(--ion-color-secondary);\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n\nion-label p {\n  color: var(--ion-color-secondary);\n}\n\nion-label p span.currency {\n  color: var(--ion-color-primary);\n  display: inline-block;\n}\n\nion-label p.rout {\n  font-weight: bold;\n  color: #212121;\n  justify-content: space-between;\n}\n\nion-label p.rout span {\n  width: 40%;\n}\n\nion-label p.rout span:last-child {\n  text-align: right;\n  justify-self: end;\n}\n\nion-label p.rout ion-icon {\n  justify-self: center;\n}\n\n:host {\n  width: 100%;\n}\n\nion-list {\n  width: 100%;\n  background-color: rgba(128, 128, 128, 0.3);\n  margin: 0;\n}\n\n.time {\n  color: #757575;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start:0px\n\n  ion-label{\n    width:100%;\n     background-color: gray;\n  } ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDRTtFQUNFLGlDQUFBO0FBRUo7O0FBREk7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0FBR047O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUFJO0VBQ0UsVUFBQTtBQUVOOztBQUFJO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtBQUVMOztBQUNJO0VBQ0Usb0JBQUE7QUFDTjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFJRTtFQUVDLHdCQUFBO0VBQ0M7OztJQUFBLFVBQUE7S0FBQSxzQkFBQTtFQUFBLEVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5zcGFuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pdGVtLWF2YXRhciB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxyXG4gIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBzcGFuLmN1cnJlbmN5IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBwLnJvdXQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgIHdpZHRoOjQwJTtcclxuICAgIH1cclxuICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjpob3N0e1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XHJcbiAgbWFyZ2luOjA7XHJcblxyXG59XHJcblxyXG4udGltZXtcclxuICBjb2xvcjogICM3NTc1NzU7XHJcbn1cclxuXHJcblxyXG4gIGlvbi1pdGVte1xyXG5cclxuICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweFxyXG5cclxuICBcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/places/discover/details/details.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/places/discover/details/details.page.ts ***!
      \*********************************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppPlacesDiscoverDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../places.service */
      "./src/app/places/places.service.ts");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, navCtrl, placesSrv) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.placesSrv = placesSrv;
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "onGoToMap",
          value: function onGoToMap(slidingItem) {
            slidingItem.close();
            console.log('Editing item');
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]
        }];
      };

      DetailsPage.propDecorators = {
        ways: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        currency: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/places/discover/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "./src/app/places/discover/offer/offer-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/places/discover/offer/offer-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OfferPageRoutingModule */

    /***/
    function srcAppPlacesDiscoverOfferOfferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferPageRoutingModule", function () {
        return OfferPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./offer.page */
      "./src/app/places/discover/offer/offer.page.ts");

      var routes = [{
        path: '',
        component: _offer_page__WEBPACK_IMPORTED_MODULE_3__["OfferPage"]
      }];

      var OfferPageRoutingModule = function OfferPageRoutingModule() {
        _classCallCheck(this, OfferPageRoutingModule);
      };

      OfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OfferPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/places/discover/offer/offer.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/places/discover/offer/offer.module.ts ***!
      \*******************************************************/

    /*! exports provided: OfferPageModule */

    /***/
    function srcAppPlacesDiscoverOfferOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferPageModule", function () {
        return OfferPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _offer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./offer-routing.module */
      "./src/app/places/discover/offer/offer-routing.module.ts");
      /* harmony import */


      var _offer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./offer.page */
      "./src/app/places/discover/offer/offer.page.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _details_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../details/details.page */
      "./src/app/places/discover/details/details.page.ts");

      var OfferPageModule = function OfferPageModule() {
        _classCallCheck(this, OfferPageModule);
      };

      OfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offer_routing_module__WEBPACK_IMPORTED_MODULE_6__["OfferPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]],
        declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_7__["OfferPage"], _details_details_page__WEBPACK_IMPORTED_MODULE_9__["DetailsPage"]]
      })], OfferPageModule);
      /***/
    },

    /***/
    "./src/app/places/discover/offer/offer.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/places/discover/offer/offer.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesDiscoverOfferOfferPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: flex;\n}\n\nmat-accordion {\n  width: 100%;\n}\n\nmat-header {\n  padding: 1px;\n}\n\nmat-panel-title p {\n  color: var(--ion-color-secondary);\n  display: flex;\n  flex-direction: column;\n}\n\nmat-panel-title p span {\n  display: block;\n}\n\n.mat-expansion-panel-header {\n  height: auto !important;\n  padding: 0;\n}\n\nmat-panel-description {\n  flex-direction: column;\n  width: 100%;\n}\n\nmat-panel-description p {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\nmat-panel-description p span.time {\n  color: #757575;\n}\n\nmat-panel-description ul.city {\n  font-size: 0.8rem;\n  width: 100%;\n  color: #212121;\n  font-weight: bold;\n  font-style: italic;\n  white-space: normal;\n  line-height: 1.2;\n  padding: 1px;\n}\n\nmat-panel-description ul.city li {\n  display: inline;\n}\n\nmat-panel-description ul.city li ion-icon {\n  position: relative;\n  top: 0.1rem;\n  margin-left: 5px;\n}\n\nmat-panel-description ul.city li:last-child ion-icon {\n  display: none;\n}\n\n/* .city span:after {\n  content: \" > \";\n  display: inline;\n}\n.city span:last-child:after {\n  content: none;\n} */\n\nion-label p {\n  display: flex;\n  justify-content: space-around;\n  background-color: #ffccbc;\n  padding: 1rem;\n  color: #212121;\n  font-weight: bold;\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDRTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDRSxjQUFBO0FBR047O0FBQ0E7RUFDRSx1QkFBQTtFQUVBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUdKOztBQUZJO0VBQ0UsY0FBQTtBQUlOOztBQURFO0VBQ0MsaUJBQUE7RUFFQyxXQUFBO0VBQ0EsY0FBQTtFQUNELGlCQUFBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBRUUsZUFBQTtBQUVOOztBQUFNO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFJTTtFQUNFLGFBQUE7QUFGUjs7QUFVQTs7Ozs7O0dBQUE7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVEoiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvb2ZmZXIvb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LWFjY29yZGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcbm1hdC1wYW5lbC10aXRsZSB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5tYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFuLnRpbWUge1xyXG4gICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIH1cclxuICB9XHJcbiAgdWwuY2l0eSB7XHJcbiAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbGkge1xyXG5cclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG5cclxuICAgICAgICAvL3BhZGRpbmc6IDhweCAycHggMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG5cclxuLyogLmNpdHkgc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogXCIgPiBcIjtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmNpdHkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICBjb250ZW50OiBub25lO1xyXG59ICovXHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NiYztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/places/discover/offer/offer.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/places/discover/offer/offer.page.ts ***!
      \*****************************************************/

    /*! exports provided: OfferPage */

    /***/
    function srcAppPlacesDiscoverOfferOfferPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferPage", function () {
        return OfferPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../places.service */
      "./src/app/places/places.service.ts");

      var OfferPage = /*#__PURE__*/function () {
        function OfferPage(navCtrl, placesSrv) {
          _classCallCheck(this, OfferPage);

          this.navCtrl = navCtrl;
          this.placesSrv = placesSrv;
        }

        _createClass(OfferPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isLoading = true;
            this.currentCurrency = this.placesSrv.currentCurrency;
            this.currencyChanged = this.placesSrv.currencyChanged$.subscribe(function (res) {
              _this.currentCurrency = res.name;
              _this.routs = _this.recalculatePrice(res.rate, res.previousRate);
            });
            this.paths = this.placesSrv.pathsSubj$.subscribe(function (res) {
              _this.startPointCity = _this.placesSrv.startPointCity;
              _this.endPointCity = _this.placesSrv.endPointCity;
              _this.routs = res;
              _this.routs = _this.routs.map(function (rout) {
                return Object.assign(Object.assign({}, rout), {
                  cities: _this.getCities(rout),
                  icons: _this.getTransportTypes(rout)
                });
              });
              _this.isLoading = false;
            });
          }
        }, {
          key: "toSearchPage",
          value: function toSearchPage() {
            this.navCtrl.navigateBack("places/tabs/discover");
          }
        }, {
          key: "getCities",
          value: function getCities(rout) {
            var citiesSet = new Set();
            rout.direct_paths.forEach(function (r) {
              citiesSet.add(r.from);
              citiesSet.add(r.to);
            });
            return Array.from(citiesSet);
          }
        }, {
          key: "getTransportTypes",
          value: function getTransportTypes(rout) {
            var transportIcons = rout.direct_paths.map(function (r) {
              return r.imgUrl;
            });
            return transportIcons;
          }
        }, {
          key: "recalculatePrice",
          value: function recalculatePrice(rate, previousRate) {
            return this.routs.map(function (rout) {
              return Object.assign(Object.assign({}, rout), {
                euro_price: rout.euro_price * (rate / previousRate),
                direct_paths: rout.direct_paths.map(function (path) {
                  return Object.assign(Object.assign({}, path), {
                    euro_price: path.euro_price * (rate / previousRate)
                  });
                })
              });
            });
          }
        }]);

        return OfferPage;
      }();

      OfferPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]
        }];
      };

      OfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-offer",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./offer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./offer.page.scss */
        "./src/app/places/discover/offer/offer.page.scss"))["default"]]
      })], OfferPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~discover-offer-offer-module~offer-offer-module-es5.js.map