(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverDiscoverPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar color=\"primary\">\r\n  <ion-buttons slot=\"start\">\r\n  <!--   <ion-menu-button menu=\"m1\"></ion-menu-button> -->\r\n    <ion-menu-button></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-buttons class=\"select\" slot=\"end\">\r\n    <ion-item  class=\"select\" lines=\"none\">\r\n      <!--   <ion-icon name=\"checkbox-outline\" slot=\"start\"></ion-icon>\r\n   <ion-label>{{'SelectLanguage' | translate}}</ion-label> -->\r\n      <ion-select [value]=\"language\" class=\"select\" interface=\"popover\" (ionChange)=\"onSelectLang($event)\">\r\n        <ion-select-option value=\"en\">En</ion-select-option>\r\n        <ion-select-option value=\"ru\">Ru</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-buttons>\r\n\r\n  <ion-title class=\"hide-xs\">\r\n     <span [ngStyle]=\"{'padding-right':'13px'}\" >CheapTrip. </span>  {{'DISCOVER.MainSlogan' | translate }}</ion-title>\r\n  <p class=\"title hide-sm\" ><span [ngStyle]=\"{'padding-right':'13px'}\">CheapTrip.</span>{{'DISCOVER.MainSlogan' | translate }}</p>\r\n\r\n\r\n\r\n</ion-toolbar>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title color=\"secondary\" class=\"text-center hide-xs\">{{'DISCOVER.MainMessage' | translate}} </ion-card-title>\r\n      <ion-card-subtitle color=\"secondary\" class=\"text-center hide-sm\">\r\n        {{'DISCOVER.MainMessage' | translate}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row class=\"input\">\r\n          <ion-col size=\"14\" size-md=\"7\">\r\n            <ion-item class=\"pointInpt\">\r\n              <ion-label position=\"floating\" color=\"secondary\"><b>{{'DISCOVER.From' | translate}}</b></ion-label>\r\n              <ion-input #ionInputStartElRef clearInput (ionChange)=\"onStartPointSearchChange($event)\" [(ngModel)]=\"startPointCity.name\">\r\n              </ion-input>\r\n              \r\n            </ion-item>\r\n            <ion-item class=\"autocomplete\" *ngIf=\"startPointCitiesAvailable\">\r\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\" lines=\"none\">\r\n                <ion-item *ngFor=\"let result of startPointCities\" (click)=\"startPointCitySelected(result)\" button>\r\n                  <p>{{result.name}}</p>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </ion-col>\r\n<!-- \r\n          <ion-col class=\"hide-xs\" size-md=\"2\">\r\n            <ion-img class=\"logo\" src=\"../../../assets/logo.jpg\"></ion-img>\r\n          </ion-col> -->\r\n\r\n          <ion-col size=\"14\" size-md=\"7\">\r\n            <ion-item class=\"pointInpt\">\r\n              <ion-label position=\"floating\" color=\"secondary\"><b>{{'DISCOVER.To' | translate}}</b></ion-label>\r\n              <ion-input #ionInputEndElRef clearInput (ionChange)=\"onEndPointSearchChange($event)\" [(ngModel)]=\"endPointCity.name\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"autocomplete\" *ngIf=\"endPointCitiesAvailable\">\r\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\">\r\n                <ion-item *ngFor=\"let result of endPointCities\" (click)=\"endPointCitySelected(result)\" button>\r\n                  <p>{{result.name}}</p>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"buttons\" size-xs=\"12\" offset-xs=\"0\" offset=\"2\" size-md=\"8\" offset-md=\"2\">\r\n            <ion-button size=\"small\" fill=\"solid\" type=\"button\" (click)=\"onClearAll()\" color=\"secondary\">{{'DISCOVER.Clear' | translate}}\r\n            </ion-button>\r\n            <ion-button size=\"small\" fill=\"solid\" type=\"button\" color=\"primary\" routerDirection=\"forward\"\r\n              routerLink=\"/places/tabs/discover/offer\" (click)=\"searchPath()\">{{'DISCOVER.Submit' | translate}}</ion-button>\r\n\r\n            <!--  <div class=\"text-center\">\r\n              <ion-button size=\"small\" fill=\"solid\" type=\"button\" (click)=\"onClearAll()\" color=\"secondary\">Clear\r\n              </ion-button>\r\n              <ion-button size=\"small\" fill=\"solid\" type=\"button\" color=\"primary\" routerDirection=\"forward\"\r\n                routerLink=\"/places/tabs/discover/offer\" (click)=\"searchPath()\">Let's go</ion-button>\r\n            </div> -->\r\n          </ion-col>\r\n        </ion-row>\r\n       <!--  <ion-row class=\"hide-sm\"> -->\r\n          <ion-row >\r\n          <ion-col size=\"6\" offset=\"3\">\r\n            <ion-img class=\"logo\" src=\"../../../assets/logo.jpg\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/http.service.ts":
    /*!*********************************!*\
      !*** ./src/app/http.service.ts ***!
      \*********************************/

    /*! exports provided: HttpService */

    /***/
    function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url2;
        }

        _createClass(HttpService, [{
          key: "getCities",
          value: function getCities() {
            return this.http.get("".concat(this.URL, "/locations/all"));
          }
        }, {
          key: "getPaths",
          value: function getPaths(startPointId, endPointId) {
            var url = "".concat(this.URL, "/routes?from=").concat(startPointId, "&to=").concat(endPointId);
            return this.http.get(url, {
              observe: "response"
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], HttpService);
      /***/
    },

    /***/
    "./src/app/places/discover/discover-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/places/discover/discover-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: DiscoverPageRoutingModule */

    /***/
    function srcAppPlacesDiscoverDiscoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoverPageRoutingModule", function () {
        return DiscoverPageRoutingModule;
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


      var _discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discover.page */
      "./src/app/places/discover/discover.page.ts");

      var routes = [{
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_3__["DiscoverPage"]
      }, {
        path: 'offer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | offer-offer-module */
          [__webpack_require__.e("default~discover-details-details-module~discover-offer-offer-module~offer-offer-module"), __webpack_require__.e("common"), __webpack_require__.e("offer-offer-module")]).then(__webpack_require__.bind(null,
          /*! ./offer/offer.module */
          "./src/app/places/discover/offer/offer.module.ts")).then(function (m) {
            return m.OfferPageModule;
          });
        }
      }];

      var DiscoverPageRoutingModule = function DiscoverPageRoutingModule() {
        _classCallCheck(this, DiscoverPageRoutingModule);
      };

      DiscoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DiscoverPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/places/discover/discover.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/places/discover/discover.module.ts ***!
      \****************************************************/

    /*! exports provided: DiscoverPageModule */

    /***/
    function srcAppPlacesDiscoverDiscoverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function () {
        return DiscoverPageModule;
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


      var _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./discover-routing.module */
      "./src/app/places/discover/discover-routing.module.ts");
      /* harmony import */


      var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discover.page */
      "./src/app/places/discover/discover.page.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var DiscoverPageModule = function DiscoverPageModule() {
        _classCallCheck(this, DiscoverPageModule);
      };

      DiscoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
      })], DiscoverPageModule);
      /***/
    },

    /***/
    "./src/app/places/discover/discover.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/places/discover/discover.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesDiscoverDiscoverPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  margin-right: 1rem;\n}\n\nh3 {\n  text-align: center;\n  color: var --ion-color-secondary;\n}\n\nion-title, p.title {\n  font-style: italic;\n}\n\np.title {\n  font-size: 0.7rem;\n}\n\n.select {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n\nion-card-title,\nion-card-subtitle {\n  text-align: center;\n  line-height: 1.5rem;\n}\n\nion-img {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\nion-row.input {\n  --ion-grid-columns: 14;\n}\n\n@media (max-width: 576px) {\n  .hide-xs {\n    display: none;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 2000px) {\n  .hide-sm {\n    display: none;\n  }\n}\n\n.item-has-focus {\n  --highlight-background: var(--ion-color-primary);\n}\n\nion-input {\n  --padding-start: 1rem;\n  --padding-top: 0.1rem;\n  padding: 1rem;\n}\n\nion-item.pointInput {\n  --background: rgba(255, 72, 0, 0.1);\n}\n\nion-label {\n  --color: var(--ion-color-secondary);\n}\n\nion-content {\n  --keyboard-offset: 10rem;\n}\n\nion-list ion-item ion-label {\n  margin: 0px;\n}\n\nion-list ion-item {\n  --min-height: 24px;\n  margin: 0px;\n}\n\nion-item.autocomplete {\n  position: absolute;\n  z-index: 100;\n}\n\nion-item.autocomplete ion-list ion-item p {\n  font-size: 0.8rem;\n}\n\nion-card {\n  height: 100vh;\n}\n\nion-button {\n  margin-top: 3rem;\n}\n\nion-col.buttons {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2Rpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxrQkFBQTtBQUNGOztBQUNBO0VBRUUsaUJBQUE7QUFDRjs7QUFHQTtFQUNJLHNDQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDRCxZQUFBO0VBQ0Msc0JBQUE7S0FBQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQUE7RUFERjtBQUNGOztBQUtBO0VBQ0UsZ0RBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxtQ0FBQTtBQUhGOztBQU1BO0VBQ0UsbUNBQUE7QUFIRjs7QUFLQTtFQUNFLHdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtBQUhGOztBQU1NO0VBQ0UsaUJBQUE7QUFKUjs7QUFTQTtFQUNFLGFBQUE7QUFORjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIgKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuaW9uLXRpdGxlICwgcC50aXRsZXtcclxuLy8gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5wLnRpdGxle1xyXG5cclxuICBmb250LXNpemU6IDAuN3JlbVxyXG59XHJcblxyXG5cclxuLnNlbGVjdHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxlLFxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gaGVpZ2h0OiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbmlvbi1yb3cuaW5wdXR7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxNDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmhpZGUteHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5oaWRlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLml0ZW0taGFzLWZvY3VzIHtcclxuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xyXG4gIC0tcGFkZGluZy10b3A6IDAuMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5pb24taXRlbS5wb2ludElucHV0IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCA3MiwgMCwgMC4xKTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1rZXlib2FyZC1vZmZzZXQ6IDEwcmVtO1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24taXRlbSB7XHJcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5pb24taXRlbS5hdXRvY29tcGxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuaW9uLWNvbC5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/places/discover/discover.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/places/discover/discover.page.ts ***!
      \**************************************************/

    /*! exports provided: DiscoverPage */

    /***/
    function srcAppPlacesDiscoverDiscoverPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoverPage", function () {
        return DiscoverPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../places.service */
      "./src/app/places/places.service.ts");

      var DiscoverPage = /*#__PURE__*/function () {
        function DiscoverPage(placesSrv, navCtrl, translate, alertCtrl) {
          _classCallCheck(this, DiscoverPage);

          this.placesSrv = placesSrv;
          this.navCtrl = navCtrl;
          this.translate = translate;
          this.alertCtrl = alertCtrl;
          this.startPointCitiesAvailable = false;
          this.endPointCitiesAvailable = false;
          this.startPointCities = [];
          this.endPointCities = [];
          this.language = "en";
          this.ignoreNextStartPointChange = false;
          this.ignoreNextEndPointChange = false;
          this.startPointCity = {
            id: -1,
            name: ""
          };
          this.endPointCity = {
            id: -1,
            name: ""
          };
          translate.addLangs(["en", "ru"]);
          translate.setDefaultLang("en");
        }

        _createClass(DiscoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var lang = this.translate.getBrowserLang();

            if (lang == "ru") {
              this.translate.use("ru");
              this.language = "ru";
            }

            this.placesSrv.getAllCities();
            this.cleanDataSubscription = this.placesSrv.cleanPathsSubj$.subscribe(function (_res) {
              _this.onClearAll();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.cleanDataSubscription.unsubscribe();
          }
        }, {
          key: "onStartPointSearchChange",
          value: function onStartPointSearchChange(event) {
            var _this2 = this;

            if (event.detail.value == "") {
              this.onClearStartPoint();
            }

            var substring = event.target.value;

            if (this.ignoreNextStartPointChange) {
              this.ignoreNextStartPointChange = false;
              this.startPointCitiesAvailable = false;
              return;
            }

            this.placesSrv.getStartPointAutocomplete(substring).subscribe(function (cities) {
              _this2.startPointCities = cities;

              if (cities.length > 0) {
                _this2.startPointCitiesAvailable = true;
              } else {
                _this2.startPointCitiesAvailable = false;
                _this2.ionInputStartElRef.nativeElement.querySelector("input").value = "";
              }
            });
          }
        }, {
          key: "onEndPointSearchChange",
          value: function onEndPointSearchChange(event) {
            var _this3 = this;

            if (event.detail.value == "") {
              this.onClearEndPoint();
            }

            var substring = event.target.value;

            if (this.ignoreNextEndPointChange) {
              this.ignoreNextEndPointChange = false;
              this.endPointCitiesAvailable = false;
              return;
            }

            this.placesSrv.getEndPointAutocomplete(substring).subscribe(function (cities) {
              _this3.endPointCities = cities;

              if (cities.length > 0) {
                _this3.endPointCitiesAvailable = true;
              } else {
                _this3.endPointCitiesAvailable = false;
                _this3.ionInputEndElRef.nativeElement.querySelector("input").value = "";
              }
            });
          }
        }, {
          key: "startPointCitySelected",
          value: function startPointCitySelected(city) {
            this.startPointCity = city;
            this.ignoreNextStartPointChange = true;
          }
        }, {
          key: "endPointCitySelected",
          value: function endPointCitySelected(city) {
            this.endPointCity = city;
            this.ignoreNextEndPointChange = true;
          }
        }, {
          key: "searchPath",
          value: function searchPath() {
            this.placesSrv.getPaths(this.startPointCity, this.endPointCity);
          }
        }, {
          key: "onClearStartPoint",
          value: function onClearStartPoint() {
            console.log("on clear start point");
            this.startPointCity = {
              id: -1,
              name: ""
            };
            this.ignoreNextStartPointChange = true;
            this.startPointCitiesAvailable = false;
            this.startPointCities = [];
          }
        }, {
          key: "onClearEndPoint",
          value: function onClearEndPoint() {
            this.endPointCity = {
              id: -1,
              name: ""
            };
            this.ignoreNextEndPointChange = true;
            this.endPointCitiesAvailable = false;
            this.endPointCities = [];
          }
        }, {
          key: "onClearAll",
          value: function onClearAll() {
            this.onClearStartPoint();
            this.onClearEndPoint();
          }
        }, {
          key: "toSearchPage",
          value: function toSearchPage() {
            this.navCtrl.navigateBack("/places/tabs/discover");
          }
        }, {
          key: "onSelectLang",
          value: function onSelectLang(lang) {
            this.translate.use(lang.detail.value);
          }
        }]);

        return DiscoverPage;
      }();

      DiscoverPage.ctorParameters = function () {
        return [{
          type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      DiscoverPage.propDecorators = {
        ionInputStartElRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["ionInputStartElRef", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        ionInputEndElRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["ionInputEndElRef", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }]
      };
      DiscoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discover",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./discover.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./discover.page.scss */
        "./src/app/places/discover/discover.page.scss"))["default"]]
      })], DiscoverPage);
      /***/
    },

    /***/
    "./src/app/places/places.service.ts":
    /*!******************************************!*\
      !*** ./src/app/places/places.service.ts ***!
      \******************************************/

    /*! exports provided: PlacesService */

    /***/
    function srcAppPlacesPlacesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacesService", function () {
        return PlacesService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../http.service */
      "./src/app/http.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var iconMap = new Map();
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

      var transportIconMap = new Map();
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

      var PlacesService = /*#__PURE__*/function () {
        function PlacesService(httpSrv, alertCtrl, router, translate) {
          _classCallCheck(this, PlacesService);

          this.httpSrv = httpSrv;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.translate = translate;
          this.allCities = [];
          this.pathsSubj$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.cleanPathsSubj$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(PlacesService, [{
          key: "getAllCities",
          value: function getAllCities() {
            var _this4 = this;

            this.citiesSub = this.httpSrv.getCities().subscribe(function (cities) {
              return _this4.allCities = cities;
            });
          }
        }, {
          key: "getStartPointAutocomplete",
          value: function getStartPointAutocomplete(str) {
            var _this5 = this;

            return this.getCitiesAutocomplete(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
              var re = /^[A-Za-z0-9]+$/;

              if (!str.match(re)) {
                _this5.errorHandler("LATIN_CHARACTERES");
              } else if (res.length == 0) {
                _this5.errorHandler("NO_RESULTS_FOR_SEARCH");
              }
            }));
          }
        }, {
          key: "getEndPointAutocomplete",
          value: function getEndPointAutocomplete(str) {
            var _this6 = this;

            return this.getCitiesAutocomplete(str).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
              var re = /^[A-Za-z0-9]+$/;

              if (!str.match(re)) {
                _this6.errorHandler("LATIN_CHARACTERES");
              } else if (res.length == 0) {
                _this6.errorHandler("NO_RESULTS_FOR_SEARCH");
              }
            }));
          }
        }, {
          key: "getPaths",
          value: function getPaths(startPoint, endPoint) {
            var _this7 = this;

            this.startPointCity = startPoint;
            this.endPointCity = endPoint;
            this.httpSrv.getPaths(startPoint.id, endPoint.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
              var paths = data.body;

              for (var i = 1; i <= paths.length - 1; i++) {
                if (paths[0].duration_minutes === paths[i].duration_minutes && data.body[0].euro_price === data.body[i].euro_price) {
                  paths[i].duration_minutes = 0;
                  paths[i].euro_price = 0;
                }
              }

              var pathsArr = paths.filter(function (path) {
                return path.duration_minutes != "0";
              });
              var transformedPaths = pathsArr.map(function (path) {
                return _this7.transformPath(path);
              });
              _this7.currentPaths = transformedPaths;
              return transformedPaths;
            })).subscribe(function (paths) {
              _this7.paths = paths;

              if (paths.length === 0) {
                _this7.errorHandler("NO_RESULTS_FOR_SEARCH");

                _this7.cleanPathsSubj$.next(true);

                _this7.pathsSubj$.next([]);

                return;
              } else {
                _this7.pathsSubj$.next(_this7.paths);
              }
            }), function (_error) {
              _this7.errorHandler("SLEEPING_SERVER");

              _this7.pathsSubj$.next([]);
            };
          }
        }, {
          key: "getPathDetail",
          value: function getPathDetail(type) {
            return this.currentPaths.find(function (p) {
              return p.routeType === type;
            });
          }
        }, {
          key: "errorHandler",
          value: function errorHandler(type) {
            var _this8 = this;

            this.alertCtrl.create({
              header: this.translate.instant("ERRORS:".concat(type, ".Header")),
              message: this.translate.instant("ERRORS:".concat(type, ".Message")),
              buttons: [{
                text: this.translate.instant("ERRORS:".concat(type, ".Button")),
                handler: function handler() {
                  _this8.router.navigate(["/places/tabs/discover"]);
                }
              }]
            }).then(function (alertEl) {
              alertEl.present();
            });
          }
        }, {
          key: "transformPathDetails",
          value: function transformPathDetails(paths) {
            var _this9 = this;

            var transformed = paths.map(function (path) {
              return Object.assign(Object.assign({}, path), {
                duration_minutes: _this9.transformDuration(path.duration_minutes.toString()),
                euro_price: _this9.transformPrice(path.euro_price.toString()),
                imgUrl: transportIconMap.get(path.transportation_type)
              });
            });
            return transformed;
          }
        }, {
          key: "transformPath",
          value: function transformPath(path) {
            console.log("path", path);
            var transformedPath = Object.assign(Object.assign({}, path), {
              duration_minutes: this.transformDuration(path.duration_minutes.toString()),
              euro_price: this.transformPrice(path.euro_price.toString()),
              direct_paths: this.transformPathDetails(path.direct_paths),
              imgUrl: iconMap.get(path.routeType),
              routeType: this.translate.instant("ROUT_TYPE.".concat(path.routeType))
            });
            return transformedPath;
          }
        }, {
          key: "transformDuration",
          value: function transformDuration(minutes) {
            var days = Math.floor(+minutes / 60 / 24);
            var dayStr = days < 1 ? "" : days + "d";
            var hours = Math.floor(+minutes / 60 - days * 24);
            var hourStr = hours < 1 ? "" : hours + "h";
            var min = +minutes - days * 24 * 60 - hours * 60;
            var minStr = min + "min";
            var duration = dayStr + " " + hourStr + " " + minStr;
            return duration;
          }
        }, {
          key: "transformPrice",
          value: function transformPrice(price) {
            var euro = Math.floor(+price);
            var cent = Math.floor(+price - euro) * 10;
            return price;
          }
        }, {
          key: "getCitiesAutocomplete",
          value: function getCitiesAutocomplete(str) {
            var citiesList = this.allCities.filter(function (city) {
              return city.name.toLowerCase().indexOf(str.toLowerCase()) > -1;
            });
            var transformedList = citiesList.map(function (item, index, array) {
              return Object.assign(Object.assign({}, item), {
                index: item.name.toLowerCase().indexOf(str.toLowerCase())
              });
            });
            var sortedList = transformedList.sort(function (a, b) {
              return a.index - b.index;
            }).map(function (item) {
              return {
                id: item.id,
                name: item.name
              };
            }).slice(0, 10);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(sortedList);
          }
        }]);

        return PlacesService;
      }();

      PlacesService.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      PlacesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], PlacesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=discover-discover-module-es5.js.map