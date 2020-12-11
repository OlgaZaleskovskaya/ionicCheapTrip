(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-details-details-module"], {
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


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{startPointCityName}} => {{endPointCityName}}</ion-title>\n  </ion-toolbar>\n</ion-header> \n<p>dfdfdf</p>\n<ion-content>-->\n<ion-list>\n  <ion-item-sliding *ngFor=\"let way of ways\" #slidingItem>\n        \n    <ion-item >\n      <ion-avatar slot=\"start\">\n       \n        <span class=\"icon\" [innerHTML]=\"way.imgUrl\"></span>\n      </ion-avatar>\n      <ion-label>\n     <p> <span class=\"spacer\"></span>{{way.transportation_type}}<span class=\"spacer\"></span></p>\n        <p>{{way.from}} <span class=\"spacer\"></span>\n          <ion-icon name=\"arrow-forward\"></ion-icon><span class=\"spacer\"></span>\n          {{way.to}}\n         </p>\n\n        <p>\n          <span>{{way.duration_minutes}}</span>\n          <span class=\"spacer\"></span>\n          <span>\n            <ion-badge color=\"primary\">{{way.euro_price | currency:'EUR':'symbol':'1.2-2' }}</ion-badge>\n          </span>\n\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"secondary\" (click)=\"onGoToMap(slidingItem)\">\n        <ion-icon name=\"eye-sharp\" slot=\"icon-only\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n</ion-list>\n<!--  <app-location-picker></app-location-picker> \n</ion-content> -->";
      /***/
    },

    /***/
    "./src/app/places/discover/details/details-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/places/discover/details/details-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppPlacesDiscoverDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
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


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/places/discover/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/places/discover/details/details.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/places/discover/details/details.module.ts ***!
      \***********************************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppPlacesDiscoverDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
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


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/places/discover/details/details-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: []
      })], DetailsPageModule);
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


      __webpack_exports__["default"] = "p {\n  display: flex;\n}\n\nspan.spacer {\n  flex: 1 1 auto;\n}\n\n.icon {\n  color: var(--ion-color-secondary);\n}\n\n.item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBRUE7RUFDSSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuc3Bhbi5zcGFjZXJ7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIFxyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5pdGVtLWF2YXRhciAgeyAgICAgXHJcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXHJcbiAgICB9XHJcbiAiXX0= */";
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
            console.log('ways', this.ways);
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
    }
  }]);
})();
//# sourceMappingURL=discover-details-details-module-es5.js.map