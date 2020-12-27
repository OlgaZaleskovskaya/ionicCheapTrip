(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/*! exports provided: EmailComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComposer", function() { return EmailComposer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var EmailComposer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["getPromise"])(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
EmailComposer.ɵfac = function EmailComposer_Factory(t) { return ɵEmailComposer_BaseFactory(t || EmailComposer); };
EmailComposer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailComposer, factory: function (t) { return EmailComposer.ɵfac(t); } });
var ɵEmailComposer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](EmailComposer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailComposer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return EmailComposer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8saURBQW9ELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUNsRztBQUdRLElBK0gyQixpQ0FBaUI7QUFBQztBQUU5QjtBQUNKO0FBQU0sSUFNdkIscUNBQWE7QUFNWixJQU1ELHlDQUFpQjtBQU9uQixJQUdFLGtDQUFVO0FBQWlCO0FBQ0w7QUFDZCxtREFGbUI7QUFDN0IsZ0JBQUksT0FBTyxVQUFVLENBQVUsVUFBQSxPQUFPO0FBQUksb0JBQ3BDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFlO0FBQUksd0JBQ3ZELElBQUksTUFBTSxFQUFFO0FBQ3BCLDRCQUFVLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4Qix5QkFBUztBQUFDLDZCQUFLO0FBQ2YsNEJBQVUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLHlCQUFTO0FBQ1Qsb0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxnQkFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFPWixpQ0FBUyxhQUFDLEdBQVk7QUFBSTtBQUNoQjtBQUE4QixtREFERjtBQUN4QyxnQkFBSSxPQUFPLFVBQVUsQ0FBVSxVQUFBLE9BQU87QUFBSSxvQkFDcEMsSUFBSSxHQUFHLEVBQUU7QUFDZix3QkFBUSxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFDLE1BQWU7QUFBSSw0QkFDM0QsSUFBSSxNQUFNLEVBQUU7QUFDdEIsZ0NBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLDZCQUFXO0FBQUMsaUNBQUs7QUFDakIsZ0NBQVksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLDZCQUFXO0FBQ1gsd0JBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxxQkFBTztBQUFDLHlCQUFLO0FBQ2Isd0JBQVEsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFDLElBQWM7QUFBSSw0QkFDdEQsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLHdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gscUJBQU87QUFDUCxnQkFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFNWixrQ0FBVTtBQUFpQjtBQUNWO0FBQ2YsbURBRjhCO0FBQ2xDLGdCQUFJLE9BQU8sVUFBVSxDQUFXLFVBQUEsT0FBTztBQUFJLG9CQUNyQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUztBQUFJLHdCQUNqRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtBQUN4RSw0QkFBVSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4Qix5QkFBUztBQUNULHdCQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixvQkFBTSxDQUFDLENBQUMsQ0FBQztBQUNULGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQU1aLG1DQUFXLGFBQUMsR0FBWTtBQUFJO0FBQ2xCO0FBQThCLG1EQURBO0FBQzFDLGdCQUFJLE9BQU8sVUFBVSxDQUFVLFVBQUEsT0FBTztBQUFJLG9CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO0FBQUksd0JBQ2xFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxvQkFBTSxDQUFDLENBQUMsQ0FBQztBQUNULGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQVVaLDRCQUFJLGFBQUMsT0FBNkIsRUFBRSxLQUFXO0FBT3ZDLElBSVIsZ0NBQVEsYUFBQyxLQUFhLEVBQUUsV0FBbUI7QUFFRjtBQUFnRDtBQUE0RDtBQUF1RDtBQUFvRjtJQTlIclIsYUFBYSx3QkFEekIsVUFBVSxFQUFFLFFBQ0EsYUFBYTs7Ozs7MEJBQUU7QUFBQyx3QkFwSTdCO0FBQUUsRUFvSWlDLGlCQUFpQjtBQUNuRCxTQURZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1haWxDb21wb3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogQXBwIHRvIHNlbmQgdGhlIGVtYWlsIHdpdGhcbiAgICovXG4gIGFwcD86IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIFRvIGZpZWxkXG4gICAqL1xuICB0bz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQ0MgZmllbGRcbiAgICovXG4gIGNjPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBCQ0MgZmllbGRcbiAgICovXG4gIGJjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBGaWxlIHBhdGhzIG9yIGJhc2U2NCBkYXRhIHN0cmVhbXNcbiAgICovXG4gIGF0dGFjaG1lbnRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFN1YmplY3Qgb2YgdGhlIGVtYWlsXG4gICAqL1xuICBzdWJqZWN0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBib2R5IChmb3IgSFRNTCwgc2V0IGlzSHRtbCB0byB0cnVlKVxuICAgKi9cbiAgYm9keT86IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBib2R5IGlzIEhUTUwgb3IgcGxhaW4gdGV4dFxuICAgKi9cbiAgaXNIdG1sPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogIENvbnRlbnQgdHlwZSBvZiB0aGUgZW1haWwgKEFuZHJvaWQgb25seSlcbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgRW1haWwgQ29tcG9zZXJcbiAqIEBwcmVtaWVyIGVtYWlsLWNvbXBvc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXIuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtFbWFpbCBDb21wb3NlciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2h5cGVyeTJrL2NvcmRvdmEtZW1haWwtcGx1Z2luKS5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFbWFpbENvbXBvc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9lbWFpbC1jb21wb3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1haWxDb21wb3NlcjogRW1haWxDb21wb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5nZXRDbGllbnRzKCkudGhlbigoYXBwczogW10pID0+IHtcbiAqICAgIC8vIFJldHVybnMgYW4gYXJyYXkgb2YgY29uZmlndXJlZCBlbWFpbCBjbGllbnRzIGZvciB0aGUgZGV2aWNlXG4gKiB9KTtcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaGFzQ2xpZW50KCkudGhlbihhcHAsIChpc1ZhbGlkOiBib29sZWFuKSA9PiB7XG4gKiAgaWYgKGlzVmFsaWQpIHtcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGhhdmUgYSB2YWxpZCBlbWFpbCBjbGllbnQgY29uZmlndXJlZFxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0FjY291bnQoKS50aGVuKChpc1ZhbGlkOiBib29sZWFuKSA9PiB7XG4gKiAgaWYgKGlzVmFsaWQpIHtcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGhhdmUgYSB2YWxpZCBlbWFpbCBhY2NvdW50IGNvbmZpZ3VyZWRcbiAqICB9XG4gKiB9KTtcbiAqXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaXNBdmFpbGFibGUoKS50aGVuKGFwcCwgKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICogIGlmKGF2YWlsYWJsZSkge1xuICogICAgLy8gTm93IHdlIGtub3cgd2UgY2FuIHNlbmQgYW4gZW1haWwsIGNhbGxzIGhhc0NsaWVudCBhbmQgaGFzQWNjb3VudFxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXG4gKiAgfVxuICogfSk7XG4gKlxuICogbGV0IGVtYWlsID0ge1xuICogICB0bzogJ21heEBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgY2M6ICdlcmlrYUBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgYmNjOiBbJ2pvaG5AZG9lLmNvbScsICdqYW5lQGRvZS5jb20nXSxcbiAqICAgYXR0YWNobWVudHM6IFtcbiAqICAgICAnZmlsZTovL2ltZy9sb2dvLnBuZycsXG4gKiAgICAgJ3JlczovL2ljb24ucG5nJyxcbiAqICAgICAnYmFzZTY0Omljb24ucG5nLy9pVkJPUncwS0dnb0FBQUFOU1VoRVVnLi4uJyxcbiAqICAgICAnZmlsZTovL1JFQURNRS5wZGYnXG4gKiAgIF0sXG4gKiAgIHN1YmplY3Q6ICdDb3Jkb3ZhIEljb25zJyxcbiAqICAgYm9keTogJ0hvdyBhcmUgeW91PyBOaWNlIGdyZWV0aW5ncyBmcm9tIExlaXB6aWcnLFxuICogICBpc0h0bWw6IHRydWVcbiAqIH1cbiAqXG4gKiAvLyBTZW5kIGEgdGV4dCBtZXNzYWdlIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xuICogdGhpcy5lbWFpbENvbXBvc2VyLm9wZW4oZW1haWwpO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGFzc2lnbiBhbGlhc2VzIHRvIGVtYWlsIGFwcHNcbiAqIGBgYHRzXG4gKiAvLyBhZGQgYWxpYXNcbiAqIHRoaXMuZW1haWwuYWRkQWxpYXMoJ2dtYWlsJywgJ2NvbS5nb29nbGUuYW5kcm9pZC5nbScpO1xuICpcbiAqIC8vIHRoZW4gdXNlIGFsaWFzIHdoZW4gc2VuZGluZyBlbWFpbFxuICogdGhpcy5lbWFpbC5vcGVuKHtcbiAqICAgYXBwOiAnZ21haWwnLFxuICogICAuLi5cbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRW1haWxDb21wb3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdFbWFpbENvbXBvc2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZW1haWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwIGhhcyBhIHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBhbiBlbWFpbCBhY2NvdW50IGlzIGNvbmZpZ3VyZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBoYXNBY2NvdW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0FjY291bnQoKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgYSBzcGVjaWZpYyBlbWFpbCBjbGllbnQgaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG5cbiAgQENvcmRvdmFDaGVjaygpXG4gIGhhc0NsaWVudChhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xuICAgICAgaWYgKGFwcCkge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0NsaWVudChhcHAsIChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYXBwcyAmJiBhcHBzLmxlbmd0aCA+IDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGVtYWlsIGNsaWVudHMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcbiAgZ2V0Q2xpZW50cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8c3RyaW5nW10+KHJlc29sdmUgPT4ge1xuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcHBzKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICBhcHBzID0gW2FwcHNdO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoYXBwcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBzZW5kaW5nIGVtYWlscyBpcyBzdXBwb3J0ZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGlzQXZhaWxhYmxlKGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5oYXNBY2NvdW50LCB0aGlzLmhhc0NsaWVudChhcHApXSkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cy5sZW5ndGggPT09IDIgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBlbWFpbCBjb21wb3NlciBwcmUtZmlsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtFbWFpbENvbXBvc2VyT3B0aW9uc30gb3B0aW9ucyBFbWFpbFxuICAgKiBAcGFyYW0ge2FueX0gW3Njb3BlXSBTY29wZSBmb3IgdGhlIHByb21pc2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBFbWFpbENvbXBvc2VyIGhhcyBiZWVuIG9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAzLFxuICB9KVxuICBvcGVuKG9wdGlvbnM6IEVtYWlsQ29tcG9zZXJPcHRpb25zLCBzY29wZT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgbWFpbCBhcHAgYWxpYXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhcyBUaGUgYWxpYXMgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgVGhlIHBhY2thZ2UgbmFtZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nLCBwYWNrYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7fVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"CONTACT.contact\" | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n    <ion-item class=\"padding\">\r\n      <ion-avatar slot=\"start\">\r\n\r\n        <img src=\"../../assets/images/Roman.jpg\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n       \r\n        <h2 class=\"selectable\">{{'CONTACT.ROMAN.name' | translate}} {{'CONTACT.ROMAN.familyName' | translate}}</h2>\r\n        <h3 class=\"selectable\"> {{'CONTACT.ROMAN.position' | translate}}</h3>\r\n        <ion-button class=\"selectable expand\" (click)=\"onCallRoman()\">+972-54-5779239</ion-button>\r\n        <p class=\"selectable\" (click)=\"sendMailTo('roman.mantelmakher@gmail.com')\">roman.mantelmakher@gmail.com</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");










let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContactPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_8__["ContactPage"]],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"]
        ]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBRUEsc0JBQUE7RUFJQSxpQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG5cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICBcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICBcclxuICAgIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcclxuICAgIFxyXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgICBcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");




let ContactPage = class ContactPage {
    constructor(callNumber, emailComposer) {
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
    }
    ngOnInit() { }
    onCallRoman() {
        this.callNumber
            .callNumber("+972-54-5779239", true)
            .then((res) => console.log("Launched dialer!", res))
            .catch((err) => console.log("Error launching dialer", err));
    }
    sendMailTo(address) {
        console.log('email');
        this.emailComposer.open({
            to: address,
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
];
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-contact",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")).default]
    })
], ContactPage);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map