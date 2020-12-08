(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


      __webpack_exports__["default"] = "<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <!--  <ion-menu-button menu=\"m1\"></ion-menu-button> -->\n  </ion-buttons>\n\n  <ion-title style=\"display:inline-block\">CHEAP TRIP. PAY LESS, VISIT MORE!</ion-title>\n  <ion-img  class=\"logo\" slot=\"end\" src=\"../../../assets/logo.jpg\" width=\"60px\" style=\"display:inline-block\" height=\"60px\"></ion-img>\n</ion-toolbar>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>  Discover the cheapest way to get anywhere combining\n        plane,\n        train, bus and rideshare</ion-card-title>\n      <ion-card-subtitle color=\"secondary\" class=\"text-center\">\n        Discover the cheapest way to get anywhere combining\n        plane,\n        train, bus and rideshare</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size-xs=\"12\" size-sm=\"6\" offset-sm=\"3\">\n            <ion-item class=\"pointInpt\">\n              <ion-label position=\"floating\" color=\"secondary\"><b>From:</b></ion-label>\n              <ion-input clearInput (ionChange)=\"onStartPointSearchChange($event)\" [(ngModel)]=\"startPointCity.name\">\n              </ion-input>\n              <!--   <ion-note slot=\"end\" color=\"danger\" (click)=\"onClearStartPoint()\" role=\"button\"><ion-icon name=\"remove-outline\"></ion-icon></ion-note>\n          -->\n            </ion-item>\n            <ion-item *ngIf=\"startPointCitiesAvailable\">\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\">\n                <ion-item *ngFor=\"let result of startPointCities\" (click)=\"startPointCitySelected(result)\" button>\n                  <ion-label>{{result.name}}</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-item>\n          </ion-col>\n          <!--  <ion-col size-xs=\"2\"  size-sm=\"1\" offset-sm=\"3\">\n            <ion-item lines=\"none\">\n              <ion-icon name=\"remove-outline\"></ion-icon>\n            </ion-item>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size-sm=\"6\" offset-sm=\"3\">\n            <ion-item class=\"pointInpt\">\n              <ion-label position=\"floating\" color=\"secondary\"><b>To:</b></ion-label>\n              <ion-input clearInput (ionChange)=\"onEndPointSearchChange($event)\" [(ngModel)]=\"endPointCity.name\"></ion-input>\n           <!--    <ion-icon slot=\"end\" color=\"danger\" (click)=\"onClearEndPoint()\" role=\"button\" name=\"remove-outline\">\n              </ion-icon> -->\n            </ion-item>\n            <ion-item *ngIf=\"endPointCitiesAvailable\">\n              <ion-list style=\"width: 100%; max-height: 200px; overflow-y: scroll;\">\n                <ion-item *ngFor=\"let result of endPointCities\" (click)=\"endPointCitySelected(result)\" button>\n                  <ion-label>{{result.name}}</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" offset=\"3\">\n            <div class=\"text-center\">\n              <ion-button size=\"small\" fill=\"solid\" type=\"button\" (click)=\"onClearAll()\" color=\"secondary\">Clear\n              </ion-button>\n              <ion-button size=\"small\" fill=\"solid\" type=\"button\" color=\"primary\" routerDirection=\"forward\"\n                routerLink=\"/places/tabs/discover/offer\" (click)=\"searchPath()\">Let's go</ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <!--  <ion-toolbar>\n      <ion-buttons class=\"ion-text-center\">\n\n        <ion-button size=\"small\" fill=\"solid\" type=\"button\" (click)=\"onClearAll()\" color=\"secondary\">Clear </ion-button>\n        <ion-button size=\"small\" fill=\"solid\" type=\"button\" color=\"primary\" routerDirection=\"forward\"\n          routerLink=\"/places/tabs/discover/offer\" (click)=\"searchPath()\">Let's go</ion-button>\n      </ion-buttons>\n    </ion-toolbar> -->\n  </ion-card>\n</ion-content>";
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
          [__webpack_require__.e("default~discover-details-details-module~discover-discover-module~discover-offer-offer-module~offer-o~b813fa14"), __webpack_require__.e("default~discover-offer-offer-module~offer-offer-module"), __webpack_require__.e("offer-offer-module")]).then(__webpack_require__.bind(null,
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


      __webpack_exports__["default"] = ".logo {\n  margin-right: 1rem;\n}\n\nh3 {\n  text-align: center;\n  color: var --ion-color-secondary;\n}\n\nion-title {\n  font-size: 0.8rem;\n  font-family: Lato, sans-serif;\n  font-style: italic;\n}\n\nion-card-title,\nion-card-subtitle {\n  text-align: center;\n  line-height: 1.5rem;\n}\n\nion-img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.item-has-focus {\n  --highlight-background: var(--ion-color-primary);\n}\n\nion-input {\n  --padding-start: 1rem;\n  --padding-top: 0.1rem;\n  padding: 1rem;\n}\n\nion-item.pointInput {\n  --background: rgba(255, 72, 0, 0.1);\n}\n\nion-label {\n  --color: var(--ion-color-secondary);\n}\n\nion-content {\n  --keyboard-offset: 10rem;\n}\n\nion-list ion-item ion-label {\n  margin: 0px;\n}\n\nion-list ion-item {\n  --min-height: 24px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL2Rpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFFQTs7QUFDQTtFQUNFLGdEQUFBO0FBRUY7O0FBQUE7RUFFRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0csbUNBQUE7QUFFSDs7QUFBQTtFQUNFLG1DQUFBO0FBR0Y7O0FBREE7RUFDRSx3QkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvZGlzY292ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dve1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyICgtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmlvbi1jYXJkLXRpdGxlLFxyXG5pb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG53aWR0aDogNTBweDtcclxuaGVpZ2h0OjUwcHg7XHJcbm9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiBcclxuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XHJcbiAgLS1wYWRkaW5nLXRvcDogMC4xcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbmlvbi1pdGVtLnBvaW50SW5wdXR7XHJcbiAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDcyLCAwLCAwLjEpO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0ta2V5Ym9hcmQtb2Zmc2V0OiAxMHJlbTtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4iXX0= */";
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


      var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../places.service */
      "./src/app/places/places.service.ts");

      var DiscoverPage = /*#__PURE__*/function () {
        function DiscoverPage(placesSrv) {
          _classCallCheck(this, DiscoverPage);

          this.placesSrv = placesSrv;
          this.startPointCitiesAvailable = false;
          this.endPointCitiesAvailable = false;
          this.startPointCities = [];
          this.endPointCities = [];
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
        }

        _createClass(DiscoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

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
          key: "onSubmit",
          value: function onSubmit() {}
        }, {
          key: "onCleanInput",
          value: function onCleanInput(input) {}
        }, {
          key: "onChangeFrom",
          value: function onChangeFrom() {}
        }, {
          key: "onStartPointSearchChange",
          value: function onStartPointSearchChange(event) {
            var _this2 = this;

            console.log('event', event.detail);

            if (event.detail.value == "") {
              console.log('inside event');
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
              }
            });
          }
        }, {
          key: "onEndPointSearchChange",
          value: function onEndPointSearchChange(event) {
            var _this3 = this;

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
            console.log('on clear stratpoint');
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
            console.log("on clear all");
            this.onClearStartPoint();
            this.onClearEndPoint();
          }
        }]);

        return DiscoverPage;
      }();

      DiscoverPage.ctorParameters = function () {
        return [{
          type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]
        }];
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
    }
  }]);
})();
//# sourceMappingURL=discover-discover-module-es5.js.map