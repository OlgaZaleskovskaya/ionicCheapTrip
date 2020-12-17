(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/offer/offer.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"OFFER.AvailablePaths\"| translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"text-center\">\r\n    <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\r\n  </div>\r\n  <ion-grid *ngIf=\"!isLoading\">\r\n    <ion-row>\r\n      <ion-col size=\"3\" offset=\"8\">\r\n        <ion-button (click)=\"toSearchPage()\" fill=\"clear\">{{'OFFER.NewSearch' | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-label>\r\n          <p> <span>{{startPointCity.name}}</span><span class=\"spacer\"></span>\r\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon><span\r\n              class=\"spacer\"></span><span>{{endPointCity.name}}</span>\r\n          </p>\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\r\n        <ion-item *ngFor=\"let path of routs\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header expandedHeight=\"*\" collapsedHeight=\"*\">\r\n                <mat-panel-title>\r\n                  <p> <span *ngFor=\"let icon of path.icons\" [innerHTML]=\"icon\"></span></p>\r\n                </mat-panel-title>\r\n\r\n\r\n\r\n                <mat-panel-description>\r\n\r\n                  <p class=\"city\"> <b>{{path.routeType}}:</b> &nbsp;<span *ngFor=\"let city of path.cities\"\r\n                      class=\"city\">{{city}}</span>\r\n\r\n                  <p> <span>{{path.duration_minutes}}</span> <span class=\"spacer\">\r\n                    </span>\r\n                    <span>\r\n                      <ion-badge color=\"primary\">{{path.euro_price | currency:'EUR':'symbol':'1.2-2' }}</ion-badge>\r\n                    </span>\r\n                  </p>\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <app-details [ways]=\"path.direct_paths\"></app-details>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n          <!--   <ion-label [routerLink]=\"['/', 'places', 'tabs', 'discover', path.routeType]\">\r\n            </ion-label> -->\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: flex;\n}\n\nmat-accordion {\n  width: 100%;\n}\n\nmat-header {\n  padding: 5px;\n}\n\nmat-panel-title p {\n  color: var(--ion-color-primary);\n  display: flex;\n  flex-direction: column;\n}\n\nmat-panel-title p span {\n  display: block;\n}\n\n.mat-expansion-panel-header {\n  height: auto !important;\n  padding: 0;\n}\n\nmat-panel-description {\n  flex-direction: column;\n  width: 100%;\n}\n\nmat-panel-description p {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\nmat-panel-description p.city {\n  font-size: 0.8rem;\n  display: inline-block;\n  width: 100%;\n  color: var(--ion-color-secondary);\n  font-weight: lighter;\n  font-style: italic;\n  white-space: normal;\n  line-height: 1.2;\n}\n\n.city span:after {\n  content: \" > \";\n  display: inline;\n}\n\n.city span:last-child:after {\n  content: none;\n}\n\nion-label p {\n  display: flex;\n  justify-content: space-around;\n  background-color: gainsboro;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL29mZmVyL29mZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDRTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDRSxjQUFBO0FBR047O0FBQ0E7RUFDRSx1QkFBQTtFQUVBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNGLGdCQUFBO0FBQ0Y7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQU1FO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvb2ZmZXIvb2ZmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubWF0LWFjY29yZGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxubWF0LWhlYWRlciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbm1hdC1wYW5lbC10aXRsZSB7XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBzcGFue1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5tYXQtcGFuZWwtZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBcclxuXHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIHAuY2l0eSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBcclxuICAvLyAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2l0eSBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiA+IFwiO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4uY2l0eSBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgICBwYWRkaW5nOjFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
//# sourceMappingURL=common-es2015.js.map