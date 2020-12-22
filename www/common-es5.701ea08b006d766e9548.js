!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}function r(n,t,e,r,i,a,o){try{var c=n[a](o),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function c(n){r(o,i,a,c,s,"next",n)}function s(n){r(o,i,a,c,s,"throw",n)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("A36C"),i=e("iWo5"),a=e("qULd"),o=function(n,t){var e,o,c=function(n,r,i){if("undefined"!=typeof document){var a=document.elementFromPoint(n,r);a&&t(a)?a!==e&&(u(),s(a,i)):u()}},s=function(n,t){e=n,o||(o=e);var i=e;Object(r.f)((function(){return i.classList.add("ion-activated")})),t()},u=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.f)((function(){return t.classList.remove("ion-activated")})),n&&o!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return c(n.currentX,n.currentY,a.a)},onMove:function(n){return c(n.currentX,n.currentY,a.b)},onEnd:function(){u(!0),Object(a.e)(),o=void 0}})}},"74mu":function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return s}));var r=function(n,t){return null!==t.closest(n)},a=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((i=!0,(r="ion-color-"+n)in(e={"ion-color":!0})?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),t):t;var e,r,i},o=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,s=function(){var n=i(regeneratorRuntime.mark((function n(t,e,r,i){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||c.test(t)){n.next=4;break}if(!(a=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),a.push(t,r,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()},Qe3P:function(t,r,i){"use strict";i.d(r,"a",(function(){return S}));var a=i("2Vo4"),o=i("XNiG"),c=i("LRne"),s=i("vkgz"),u=i("lJxs"),l=function(n){return n.FLIGHT='<span class="material-icons">\n    flight\n    </span>',n.BUS='<span class="material-icons">\n    directions_bus\n    </span>',n.TRAIN='<span class="material-icons">\n    directions_railway\n    </span>',n.CAR_FERRY='<span class="material-icons">\n    directions_boat\n    </span>',n.WALK='<span class="material-icons">\n    directions_walk\n    </span>',n.TOWN_CAR='<span class="material-icons">\n    directions_car\n    </span>',n.TAXI='<span class="material-icons">\n    local_taxi\n    </span>',n.SHUTTLE='<span class="material-icons">\n    shuttle\n    </span>',n.DRIVE_CAR='<span class="material-icons">\n    directions_car\n    </span>',n.RIDE_SHARE='<span class="material-icons">\n    groups\n    </span>',n}({}),p=new Map;p.set("Bus",l.BUS),p.set("Train",l.TRAIN),p.set("Ride Share",l.RIDE_SHARE),p.set("Taxi",l.TAXI),p.set("Flight",l.FLIGHT),p.set("Town Car",l.TOWN_CAR),p.set("Drive Car",l.DRIVE_CAR),p.set("Shuttle",l.SHUTTLE),p.set("Car Ferry",l.CAR_FERRY),p.set("Walk",l.WALK);var f,b=i("fXoL"),d=i("AytR"),m=i("tk/3"),y=((f=function(){function t(e){n(this,t),this.http=e,this.URL=d.a.url2}return e(t,[{key:"getCities",value:function(){return this.http.get(this.URL+"/locations/all")}},{key:"getPaths",value:function(n,t){return this.http.get("".concat(this.URL,"/routes?from=").concat(n,"&to=").concat(t),{observe:"response"})}},{key:"getCurencyRate",value:function(n){return this.http.get("https://free.currconv.com/api/v7/convert?q=EUR_".concat(n,"&compact=ultra&apiKey=9a257b81e7e1e64b3982"))}}]),t}()).\u0275fac=function(n){return new(n||f)(b.Qb(m.a))},f.\u0275prov=b.Fb({token:f,factory:f.\u0275fac,providedIn:"root"}),f),g=i("TEn/"),h=i("tyNb"),v=i("sYmb"),C=new Map;C.set("Ground route","../../assets/images/groundWay.png"),C.set("Mixed route","../../assets/images/mixedWay.png"),C.set("Flying route","../../assets/images/flightWay.png");var M=new Map;M.set("EUR",{name:"Euro",rate:1}),M.set("USD",{name:"USD",rate:0}),M.set("RUB",{name:"RUB",rate:0}),M.set("RUB",{name:"RUB",rate:0});var P,S=((P=function(){function t(e,r,i,c){n(this,t),this.httpSrv=e,this.alertCtrl=r,this.router=i,this.translate=c,this.allCities=[],this.currentCurrency="EUR",this.currentCurrencyRate=1,this.pathsSubj$=new a.a([]),this.cleanPathsSubj$=new o.a}return e(t,[{key:"getCurrencyArray",value:function(){return Object.values(JSON.parse('{\n      "EUR": {\n        "currencyName": "Euro",\n        "currencySymbol": "\u20ac",\n        "id": "EUR"\n      },\n      "USD": {\n        "currencyName": "United States Dollar",\n        "currencySymbol": "$",\n        "id": "USD"\n      },\n      "HUF": {\n        "currencyName": "Hungarian Forint",\n        "currencySymbol": "Ft",\n        "id": "HUF"\n      },\n      "MKD": {\n        "currencyName": "Macedonian Denar",\n        "currencySymbol": "\u0434\u0435\u043d",\n        "id": "MKD"\n      },\n      "RSD": {\n        "currencyName": "Serbian Dinar",\n        "currencySymbol": "\u0414\u0438\u043d.",\n        "id": "RSD"\n      },\n      "SEK": {\n        "currencyName": "Swedish Krona",\n        "currencySymbol": "kr",\n        "id": "SEK"\n      },\n      "AMD": {\n        "currencyName": "Armenian Dram",\n        "id": "AMD"\n      },\n      "CZK": {\n        "currencyName": "Czech Koruna",\n        "currencySymbol": "K\u010d",\n        "id": "CZK"\n      },\n      "GEL": {\n        "currencyName": "Georgian Lari",\n        "id": "GEL"\n      },\n      "DKK": {\n        "currencyName": "Danish Krone",\n        "currencySymbol": "kr",\n        "id": "DKK"\n      },\n      "ILS": {\n        "currencyName": "Israeli New Sheqel",\n        "currencySymbol": "\u20aa",\n        "id": "ILS"\n      },\n      "KZT": {\n        "currencyName": "Kazakhstani Tenge",\n        "currencySymbol": "\u043b\u0432",\n        "id": "KZT"\n      },\n      "RON": {\n        "currencyName": "Romanian Leu",\n        "currencySymbol": "lei",\n        "id": "RON"\n      },\n      "AZN": {\n        "currencyName": "Azerbaijani Manat",\n        "currencySymbol": "\u043c\u0430\u043d",\n        "id": "AZN"\n      },\n      "BYR": {\n        "currencyName": "Belarusian Ruble",\n        "currencySymbol": "p.",\n        "id": "BYR"\n      },\n      "BGN": {\n        "currencyName": "Bulgarian Lev",\n        "currencySymbol": "\u043b\u0432",\n        "id": "BGN"\n      },\n      "CAD": {\n        "currencyName": "Canadian Dollar",\n        "currencySymbol": "$",\n        "id": "CAD"\n      },\n      "ISK": {\n        "currencyName": "Icelandic Kr\xf3na",\n        "currencySymbol": "kr",\n        "id": "ISK"\n      },\n      "JPY": {\n        "currencyName": "Japanese Yen",\n        "currencySymbol": "\xa5",\n        "id": "JPY"\n      },\n      "LVL": {\n        "currencyName": "Latvian Lats",\n        "currencySymbol": "Ls",\n        "id": "LVL"\n      },\n      "CHF": {\n        "currencyName": "Swiss Franc",\n        "currencySymbol": "Fr.",\n        "id": "CHF"\n      },\n      "MDL": {\n        "currencyName": "Moldovan Leu",\n        "id": "MDL"\n      },\n      "KGS": {\n        "currencyName": "Kyrgyzstani Som",\n        "currencySymbol": "\u043b\u0432",\n        "id": "KGS"\n      },\n      "NOK": {\n        "currencyName": "Norwegian Krone",\n        "currencySymbol": "kr",\n        "id": "NOK"\n      },\n      "PLN": {\n        "currencyName": "Polish Zloty",\n        "currencySymbol": "z\u0142",\n        "id": "PLN"\n      },\n      "RUB": {\n        "currencyName": "Russian Ruble",\n        "currencySymbol": "\u0440\u0443\u0431",\n        "id": "RUB"\n      },\n      "TJS": {\n        "currencyName": "Tajikistani Somoni",\n        "id": "TJS"\n      },\n      "UAH": {\n        "currencyName": "Ukrainian Hryvnia",\n        "currencySymbol": "\u20b4",\n        "id": "UAH"\n      },\n      "UZS": {\n        "currencyName": "Uzbekistani Som",\n        "currencySymbol": "\u043b\u0432",\n        "id": "UZS"\n      },\n      "TMT": {\n        "currencyName": "Turkmenistan Manat",\n        "id": "TMT"\n      },\n      "GBP": {\n        "currencyName": "British Pound",\n        "currencySymbol": "\xa3",\n        "id": "GBP"\n      }\n      \n}'))}},{key:"getAllCities",value:function(){var n=this;this.citiesSub=this.httpSrv.getCities().subscribe((function(t){return n.allCities=t}))}},{key:"getStartPointAutocomplete",value:function(n){var t=this;return this.getCitiesAutocomplete(n).pipe(Object(s.a)((function(e){n.match(/^[A-Za-z0-9]+$/)?0==e.length&&t.errorHandler("NO_RESULTS_FOR_SEARCH"):t.errorHandler("LATIN_CHARACTERES")})))}},{key:"getEndPointAutocomplete",value:function(n){var t=this;return this.getCitiesAutocomplete(n).pipe(Object(s.a)((function(e){n.match(/^[A-Za-z0-9]+$/)?0==e.length&&t.errorHandler("NO_RESULTS_FOR_SEARCH"):t.errorHandler("LATIN_CHARACTERES")})))}},{key:"getPaths",value:function(n,t){var e=this;this.startPointCity=n,this.endPointCity=t,this.httpSrv.getPaths(n.id,t.id).pipe(Object(u.a)((function(n){for(var t=n.body,r=1;r<=t.length-1;r++)t[0].duration_minutes===t[r].duration_minutes&&n.body[0].euro_price===n.body[r].euro_price&&(t[r].duration_minutes=0,t[r].euro_price=0);var i=t.filter((function(n){return"0"!=n.duration_minutes})).map((function(n){return e.transformPath(n)}));return e.currentPaths=i,i}))).subscribe((function(n){if(e.paths=n,0===n.length)return e.errorHandler("NO_RESULTS_FOR_SEARCH"),e.cleanPathsSubj$.next(!0),void e.pathsSubj$.next([]);e.pathsSubj$.next(e.paths)}))}},{key:"getPathDetail",value:function(n){return this.currentPaths.find((function(t){return t.routeType===n}))}},{key:"errorHandler",value:function(n){var t=this;this.alertCtrl.create({header:this.translate.instant("ERRORS:".concat(n,".Header")),message:this.translate.instant("ERRORS:".concat(n,".Message")),buttons:[{text:this.translate.instant("ERRORS:".concat(n,".Button")),handler:function(){t.router.navigate(["/places/tabs/discover"])}}]}).then((function(n){n.present()}))}},{key:"transformPathDetails",value:function(n){var t=this;return n.map((function(n){return Object.assign(Object.assign({},n),{duration_minutes:t.transformDuration(n.duration_minutes.toString()),euro_price:t.transformPrice(n.euro_price.toString()),imgUrl:p.get(n.transportation_type),transportation_type:t.translate.instant("TRANSPORTATION_TYPE."+n.transportation_type)})}))}},{key:"transformPath",value:function(n){return console.log("path",n),Object.assign(Object.assign({},n),{duration_minutes:this.transformDuration(n.duration_minutes.toString()),euro_price:this.transformPrice(n.euro_price.toString()),direct_paths:this.transformPathDetails(n.direct_paths),imgUrl:C.get(n.routeType),routeType:this.translate.instant("ROUT_TYPE."+n.routeType)})}},{key:"transformDuration",value:function(n){var t=Math.floor(+n/60/24),e=t<1?"":t+"d",r=Math.floor(+n/60-24*t);return e+" "+(r<1?"":r+"h")+" "+(+n-24*t*60-60*r)+"min"}},{key:"transformPrice",value:function(n){var t=Math.floor(+n),e=t*this.currentCurrencyRate;return Math.floor(+n-t),console.info("pr",e),e}},{key:"getCitiesAutocomplete",value:function(n){var t=this.allCities.filter((function(t){return t.name.toLowerCase().indexOf(n.toLowerCase())>-1})).map((function(t,e,r){return Object.assign(Object.assign({},t),{index:t.name.toLowerCase().indexOf(n.toLowerCase())})})).sort((function(n,t){return n.index-t.index})).map((function(n){return{id:n.id,name:n.name}})).slice(0,10);return Object(c.a)(t)}},{key:"getCurrencyRate",value:function(n,t){var e=this,r=n,i=this.getCurrencyArray().filter((function(n){return n.currencyName==r}))[0].id;this.currentCurrency=i,this.httpSrv.getCurencyRate(i).subscribe((function(n){e.currentCurrencyRate=+Object.values(n)[0]}))}}]),t}()).\u0275fac=function(n){return new(n||P)(b.Qb(y),b.Qb(g.a),b.Qb(h.g),b.Qb(v.d))},P.\u0275prov=b.Fb({token:P,factory:P.\u0275fac,providedIn:"root"}),P)},ZaV5:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r=function(){var n=i(regeneratorRuntime.mark((function n(t,e,r,i,a){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(n){return o.classList.add(n)})),a&&Object.assign(o,a),e.appendChild(o),n.t0=o.componentOnReady,!n.t0){n.next=12;break}return n.next=12,o.componentOnReady();case 12:return n.abrupt("return",o);case 13:case"end":return n.stop()}}),n)})));return function(t,e,r,i,a){return n.apply(this,arguments)}}(),a=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i=n*r-n+"ms",a=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},nlsp:function(t,r,i){"use strict";i.r(r),i.d(r,"OfferPageModule",(function(){return _}));var a=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),s=i("7EHt"),u=i("tyNb"),l=i("fXoL"),p=i("Qe3P"),f=i("qJoI"),b=i("sYmb");function d(n,t){1&n&&l.Kb(0,"ion-spinner",0)}function m(n,t){1&n&&l.Kb(0,"span",17),2&n&&l.cc("innerHTML",t.$implicit,l.gc)}function y(n,t){if(1&n&&(l.Mb(0,"li"),l.mc(1),l.Kb(2,"ion-icon",10),l.Lb()),2&n){var e=t.$implicit;l.zb(1),l.nc(e)}}function g(n,t){if(1&n&&(l.Mb(0,"ion-item"),l.Mb(1,"mat-accordion"),l.Mb(2,"mat-expansion-panel"),l.Mb(3,"mat-expansion-panel-header",12),l.Mb(4,"mat-panel-title"),l.Mb(5,"p"),l.lc(6,m,1,1,"span",13),l.Lb(),l.Lb(),l.Mb(7,"mat-panel-description"),l.Mb(8,"ul",14),l.lc(9,y,3,1,"li",11),l.Lb(),l.Mb(10,"p"),l.Mb(11,"span",15),l.mc(12),l.Lb(),l.Kb(13,"span",9),l.Mb(14,"span"),l.Mb(15,"ion-badge",0),l.mc(16),l.Xb(17,"currency"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Kb(18,"app-details",16),l.Lb(),l.Lb(),l.Lb()),2&n){var e=t.$implicit,r=l.Wb(2);l.zb(6),l.cc("ngForOf",e.icons),l.zb(3),l.cc("ngForOf",e.cities),l.zb(3),l.nc(e.duration_minutes),l.zb(4),l.nc(l.Zb(17,6,e.euro_price,r.currentCurrency,!0,"1.2-2")),l.zb(2),l.cc("ways",e.direct_paths)("currency",r.currentCurrency)}}function h(n,t){if(1&n){var e=l.Nb();l.Mb(0,"ion-grid"),l.Mb(1,"ion-row"),l.Mb(2,"ion-col",6),l.Mb(3,"ion-button",7),l.Ub("click",(function(){return l.fc(e),l.Wb().toSearchPage()})),l.mc(4),l.Xb(5,"translate"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-row"),l.Mb(7,"ion-col",8),l.Mb(8,"ion-label"),l.Mb(9,"p"),l.Mb(10,"span"),l.mc(11),l.Lb(),l.Kb(12,"span",9),l.Kb(13,"ion-icon",10),l.Kb(14,"span",9),l.Mb(15,"span"),l.mc(16),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(17,"ion-row"),l.Mb(18,"ion-col",8),l.lc(19,g,19,11,"ion-item",11),l.Lb(),l.Lb(),l.Lb()}if(2&n){var r=l.Wb();l.zb(4),l.oc(" ",l.Yb(5,4,"OFFER.NewSearch"),""),l.zb(7),l.nc(r.startPointCity.name),l.zb(5),l.nc(r.endPointCity.name),l.zb(3),l.cc("ngForOf",r.routs)}}var v,C,M,P=[{path:"",component:(v=function(){function t(e,r){n(this,t),this.navCtrl=e,this.placesSrv=r}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.isLoading=!0,this.currentCurrency=this.placesSrv.currentCurrency,this.paths=this.placesSrv.pathsSubj$.subscribe((function(t){n.startPointCity=n.placesSrv.startPointCity,n.endPointCity=n.placesSrv.endPointCity,n.routs=t,n.routs=n.routs.map((function(t){return Object.assign(Object.assign({},t),{cities:n.getCities(t),icons:n.getTransportTypes(t)})})),n.isLoading=!1}))}},{key:"toSearchPage",value:function(){this.navCtrl.navigateBack("places/tabs/discover")}},{key:"getCities",value:function(n){var t=new Set;return n.direct_paths.forEach((function(n){t.add(n.from),t.add(n.to)})),Array.from(t)}},{key:"getTransportTypes",value:function(n){return n.direct_paths.map((function(n){return n.imgUrl}))}}]),t}(),v.\u0275fac=function(n){return new(n||v)(l.Jb(c.N),l.Jb(p.a))},v.\u0275cmp=l.Db({type:v,selectors:[["app-offer"]],decls:11,vars:5,consts:[["color","primary"],["slot","start"],["defaultHref","/places/tabs/discover"],[1,"text-center"],["color","primary",4,"ngIf"],[4,"ngIf"],["size","6","offset","6"],["color","secondary","expand","full","fill","solid",1,"expand",3,"click"],["size","12","size-sm","8","offset-sm","2"],[1,"spacer"],["name","arrow-forward"],[4,"ngFor","ngForOf"],["expandedHeight","*","collapsedHeight","*"],[3,"innerHTML",4,"ngFor","ngForOf"],[1,"city"],[1,"time"],[3,"ways","currency"],[3,"innerHTML"]],template:function(n,t){1&n&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-buttons",1),l.Kb(3,"ion-back-button",2),l.Lb(),l.Mb(4,"ion-title"),l.mc(5),l.Xb(6,"translate"),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content"),l.Mb(8,"div",3),l.lc(9,d,1,0,"ion-spinner",4),l.Lb(),l.lc(10,h,20,6,"ion-grid",5),l.Lb()),2&n&&(l.zb(5),l.nc(l.Yb(6,3,"OFFER.AvailablePaths")),l.zb(4),l.cc("ngIf",t.isLoading),l.zb(1),l.cc("ngIf",!t.isLoading))},directives:[c.q,c.K,c.h,c.d,c.e,c.J,c.o,a.k,c.E,c.p,c.B,c.n,c.g,c.v,c.r,a.j,c.u,s.a,s.c,s.e,s.f,s.d,c.f,f.a],pipes:[b.c,a.c],styles:["p[_ngcontent-%COMP%]{display:flex}mat-accordion[_ngcontent-%COMP%]{width:100%}mat-header[_ngcontent-%COMP%]{padding:1px}mat-panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-secondary);display:flex;flex-direction:column}mat-panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:auto!important;padding:0}mat-panel-description[_ngcontent-%COMP%]{flex-direction:column;width:100%}mat-panel-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}mat-panel-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.time[_ngcontent-%COMP%]{color:#757575}mat-panel-description[_ngcontent-%COMP%]   ul.city[_ngcontent-%COMP%]{font-size:.8rem;width:100%;color:#212121;font-weight:700;font-style:italic;white-space:normal;line-height:1.2;padding:1px}mat-panel-description[_ngcontent-%COMP%]   ul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}mat-panel-description[_ngcontent-%COMP%]   ul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;top:.1rem;margin-left:5px}mat-panel-description[_ngcontent-%COMP%]   ul.city[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   ion-icon[_ngcontent-%COMP%]{display:none}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-around;background-color:#ffccbc;color:#212121;font-weight:700;padding:0 1rem}"]}),v)}],S=((C=function t(){n(this,t)}).\u0275mod=l.Hb({type:C}),C.\u0275inj=l.Gb({factory:function(n){return new(n||C)},imports:[[u.i.forChild(P)],u.i]}),C),O=i("PCNd"),_=((M=function t(){n(this,t)}).\u0275mod=l.Hb({type:M}),M.\u0275inj=l.Gb({factory:function(n){return new(n||M)},imports:[[a.b,o.a,c.L,S,O.a,s.b]]}),M)},qJoI:function(t,r,i){"use strict";i.d(r,"a",(function(){return p}));var a=i("fXoL"),o=i("tyNb"),c=i("TEn/"),s=i("Qe3P"),u=i("ofXK");function l(n,t){if(1&n&&(a.Mb(0,"ion-item",1),a.Mb(1,"ion-label",2),a.Mb(2,"p",3),a.Kb(3,"span",4),a.mc(4),a.Kb(5,"span",4),a.Lb(),a.Mb(6,"p",5),a.Mb(7,"span"),a.mc(8),a.Lb(),a.Kb(9,"ion-icon",6),a.Mb(10,"span"),a.mc(11),a.Lb(),a.Lb(),a.Mb(12,"p"),a.Mb(13,"span"),a.mc(14),a.Lb(),a.Kb(15,"span",4),a.Mb(16,"span",7),a.mc(17),a.Xb(18,"currency"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&n){var e=t.$implicit,r=a.Wb();a.zb(4),a.nc(e.transportation_type),a.zb(4),a.nc(e.from),a.zb(3),a.nc(e.to),a.zb(3),a.nc(e.duration_minutes),a.zb(3),a.oc(" ",a.Zb(18,5,e.euro_price,r.currency,"symbol-narrow","1.2-2"),"")}}var p=function(){var t=function(){function t(e,r,i){n(this,t),this.route=e,this.navCtrl=r,this.placesSrv=i}return e(t,[{key:"ngOnInit",value:function(){console.info("detail",this.currency),this.startPointCityName=this.placesSrv.startPointCity.name,this.endPointCityName=this.placesSrv.endPointCity.name}},{key:"onGoToMap",value:function(n){n.close(),console.log("Editing item")}}]),t}();return t.\u0275fac=function(n){return new(n||t)(a.Jb(o.a),a.Jb(c.N),a.Jb(s.a))},t.\u0275cmp=a.Db({type:t,selectors:[["app-details"]],inputs:{ways:"ways",currency:"currency"},decls:2,vars:1,consts:[["class","ion-no-padding",4,"ngFor","ngForOf"],[1,"ion-no-padding"],[1,"ion-no-margin"],[1,"transport"],[1,"spacer"],[1,"rout"],["name","arrow-forward"],[1,"currency"]],template:function(n,t){1&n&&(a.Mb(0,"ion-list"),a.lc(1,l,19,10,"ion-item",0),a.Lb()),2&n&&(a.zb(1),a.cc("ngForOf",t.ways))},directives:[c.w,u.j,c.u,c.v,c.r],pipes:[u.c],styles:["p[_ngcontent-%COMP%]{display:flex}span.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:40px!important;max-height:40px!important}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span.currency[_ngcontent-%COMP%]{color:var(--ion-color-primary);display:inline-block}ion-label[_ngcontent-%COMP%]   p.rout[_ngcontent-%COMP%]{font-weight:700;color:#212121;justify-content:space-between}ion-label[_ngcontent-%COMP%]   p.rout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:40%}ion-label[_ngcontent-%COMP%]   p.rout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{text-align:right;justify-self:end}ion-label[_ngcontent-%COMP%]   p.rout[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{justify-self:center}[_nghost-%COMP%], ion-list[_ngcontent-%COMP%]{width:100%}ion-list[_ngcontent-%COMP%]{background-color:hsla(0,0%,50.2%,.3);margin:0}ion-item[_ngcontent-%COMP%]{--inner-padding-end:0px;--padding-start:0px ion-label{width:100%;background-color:grey} ;}"]}),t}()},qULd:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return s})),e.d(t,"e",(function(){return c}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},a=function(){r.selectionStart()},o=function(){r.selectionChanged()},c=function(){r.selectionEnd()},s=function(n){r.impact(n)}}}])}();