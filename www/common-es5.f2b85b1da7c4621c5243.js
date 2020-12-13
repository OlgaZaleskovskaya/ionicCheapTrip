!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}function i(n,t,e,i,r,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(i,r)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(n){i(a,r,o,c,s,"next",n)}function s(n){i(a,r,o,c,s,"throw",n)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var i=e("A36C"),r=e("iWo5"),o=e("qULd"),a=function(n,t){var e,a,c=function(n,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(n,i);o&&t(o)?o!==e&&(u(),s(o,r)):u()}},s=function(n,t){e=n,a||(a=e);var r=e;Object(i.f)((function(){return r.classList.add("ion-activated")})),t()},u=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(i.f)((function(){return t.classList.remove("ion-activated")})),n&&a!==e&&e.click(),e=void 0}};return Object(r.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return c(n.currentX,n.currentY,o.a)},onMove:function(n){return c(n.currentX,n.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),a=void 0}})}},"74mu":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return s}));var i=function(n,t){return null!==t.closest(n)},o=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((r=!0,(i="ion-color-"+n)in(e={"ion-color":!0})?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e),t):t;var e,i,r},a=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,s=function(){var n=r(regeneratorRuntime.mark((function n(t,e,i,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||c.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,i,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,i,r){return n.apply(this,arguments)}}()},Qe3P:function(t,i,r){"use strict";r.d(i,"a",(function(){return M}));var o,a=r("2Vo4"),c=r("XNiG"),s=r("LRne"),u=r("lJxs"),l=r("fXoL"),f=r("AytR"),p=r("tk/3"),b=((o=function(){function t(e){n(this,t),this.http=e,this.URL=f.a.url2}return e(t,[{key:"getCities",value:function(){return this.http.get(this.URL+"/locations/all")}},{key:"getPaths",value:function(n,t){return this.http.get("".concat(this.URL,"/routes?from=").concat(n,"&to=").concat(t),{observe:"response"})}}]),t}()).\u0275fac=function(n){return new(n||o)(l.Qb(p.a))},o.\u0275prov=l.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),d=r("TEn/"),m=r("tyNb"),h=new Map;h.set("Ground route","../../assets/images/groundWay.png"),h.set("Mixed route","../../assets/images/mixedWay.png"),h.set("Flying route","../../assets/images/flightWay.png");var g=function(n){return n.FLIGHT='<span class="material-icons">\n  flight\n  </span>',n.BUS='<span class="material-icons">\n  directions_bus\n  </span>',n.TRAIN='<span class="material-icons">\n  directions_railway\n  </span>',n.SUBWAY='<span class="material-icons">\n  directions_subway\n  </span>',n.SHIP='<span class="material-icons">\n  directions_boat\n  </span>',n.ONFOOT='<span class="material-icons">\n  directions_walk\n  </span>',n.CAR='<span class="material-icons">\n  directions_car\n  </span>',n.TAXI='<span class="material-icons">\n  local_taxi\n  </span>',n.SHUTTLE='<span class="material-icons">\n  shuttle\n  </span>',n}({}),y=new Map;y.set("Bus",g.BUS),y.set("Train",g.TRAIN),y.set("Ride Share",g.CAR),y.set("Taxi",g.TAXI),y.set("Flight",g.FLIGHT);var v,M=((v=function(){function t(e,i,r){n(this,t),this.httpSrv=e,this.alertCtrl=i,this.router=r,this.allCities=[],this.pathsSubj$=new a.a([]),this.cleanPathsSubj$=new c.a}return e(t,[{key:"getAllCities",value:function(){var n=this;this.citiesSub=this.httpSrv.getCities().subscribe((function(t){return n.allCities=t}))}},{key:"getStartPointAutocomplete",value:function(n){return this.getCitiesAutocomplete(n)}},{key:"getEndPointAutocomplete",value:function(n){return this.getCitiesAutocomplete(n)}},{key:"getPaths",value:function(n,t){var e=this;this.startPointCity=n,this.endPointCity=t,this.httpSrv.getPaths(n.id,t.id).pipe(Object(u.a)((function(n){for(var t=n.body,i=1;i<=t.length-1;i++)t[0].duration_minutes===t[i].duration_minutes&&n.body[0].euro_price===n.body[i].euro_price&&(t[i].duration_minutes=0,t[i].euro_price=0);var r=t.filter((function(n){return"0"!=n.duration_minutes})).map((function(n){return e.transformPath(n)}));return e.currentPaths=r,r}))).subscribe((function(n){if(e.paths=n,0===n.length)return e.errorHandler(),void e.cleanPathsSubj$.next(!0);e.pathsSubj$.next(e.paths)}))}},{key:"getPathDetail",value:function(n){return this.currentPaths.find((function(t){return t.routeType===n}))}},{key:"errorHandler",value:function(){var n=this;console.log("error"),this.alertCtrl.create({header:"An error occurred!",message:"No information fetched. Please try again later.",buttons:[{text:"Okay",handler:function(){n.router.navigate(["/places/tabs/discover"])}}]}).then((function(n){n.present()}))}},{key:"transformPathDetails",value:function(n){var t=this;return n.map((function(n){return Object.assign(Object.assign({},n),{duration_minutes:t.transformDuration(n.duration_minutes.toString()),euro_price:t.transformPrice(n.euro_price.toString()),imgUrl:y.get(n.transportation_type)})}))}},{key:"transformPath",value:function(n){return Object.assign(Object.assign({},n),{duration_minutes:this.transformDuration(n.duration_minutes.toString()),euro_price:this.transformPrice(n.euro_price.toString()),direct_paths:this.transformPathDetails(n.direct_paths),imgUrl:h.get(n.routeType)})}},{key:"transformDuration",value:function(n){var t=Math.floor(+n/60/24),e=t<1?"":t+"d",i=Math.floor(+n/60-24*t);return e+" "+(i<1?"":i+"h")+" "+(+n-24*t*60-60*i)+"min"}},{key:"transformPrice",value:function(n){var t=Math.floor(+n);return Math.floor(+n-t),n}},{key:"getCitiesAutocomplete",value:function(n){var t=this.allCities.filter((function(t){return t.name.toLowerCase().indexOf(n.toLowerCase())>-1})).map((function(t,e,i){return Object.assign(Object.assign({},t),{index:t.name.toLowerCase().indexOf(n.toLowerCase())})})).sort((function(n,t){return n.index-t.index})).map((function(n){return{id:n.id,name:n.name}})).slice(0,10);return Object(s.a)(t)}}]),t}()).\u0275fac=function(n){return new(n||v)(l.Qb(b),l.Qb(d.a),l.Qb(m.g))},v.\u0275prov=l.Fb({token:v,factory:v.\u0275fac,providedIn:"root"}),v)},ZaV5:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o}));var i=function(){var n=r(regeneratorRuntime.mark((function n(t,e,i,r,o){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,i,o,r));case 2:if("string"==typeof i||i instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,r&&r.forEach((function(n){return a.classList.add(n)})),o&&Object.assign(a,o),e.appendChild(a),n.t0=a.componentOnReady,!n.t0){n.next=12;break}return n.next=12,a.componentOnReady();case 12:return n.abrupt("return",a);case 13:case"end":return n.stop()}}),n)})));return function(t,e,i,r,o){return n.apply(this,arguments)}}(),o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var i=n*t/e-n+"ms",r=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var i=t/e,r=n*i-n+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},nlsp:function(t,i,r){"use strict";r.r(i),r.d(i,"OfferPageModule",(function(){return L}));var o=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),s=r("7EHt"),u=r("tyNb"),l=r("fXoL"),f=r("Qe3P"),p=r("qJoI"),b=r("sYmb");function d(n,t){1&n&&l.Kb(0,"ion-spinner",0)}function m(n,t){if(1&n&&(l.Mb(0,"span",13),l.mc(1),l.Lb()),2&n){var e=t.$implicit;l.zb(1),l.nc(e)}}function h(n,t){if(1&n&&(l.Mb(0,"ion-item"),l.Mb(1,"mat-accordion"),l.Mb(2,"mat-expansion-panel"),l.Mb(3,"mat-expansion-panel-header",12),l.Mb(4,"mat-panel-description"),l.Mb(5,"p",13),l.Mb(6,"b"),l.mc(7),l.Lb(),l.mc(8," \xa0"),l.lc(9,m,2,1,"span",14),l.Lb(),l.Mb(10,"p"),l.Mb(11,"span"),l.mc(12),l.Lb(),l.Kb(13,"span",9),l.Mb(14,"span"),l.Mb(15,"ion-badge",0),l.mc(16),l.Xb(17,"currency"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Kb(18,"app-details",15),l.Lb(),l.Lb(),l.Lb()),2&n){var e=t.$implicit;l.zb(7),l.oc("",e.routeType,":"),l.zb(2),l.cc("ngForOf",e.cities),l.zb(3),l.nc(e.duration_minutes),l.zb(4),l.nc(l.Zb(17,5,e.euro_price,"EUR","symbol","1.2-2")),l.zb(2),l.cc("ways",e.direct_paths)}}function g(n,t){if(1&n){var e=l.Nb();l.Mb(0,"ion-grid"),l.Mb(1,"ion-row"),l.Mb(2,"ion-col",6),l.Mb(3,"ion-button",7),l.Ub("click",(function(){return l.fc(e),l.Wb().toSearchPage()})),l.mc(4),l.Xb(5,"translate"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-row"),l.Mb(7,"ion-col",8),l.Mb(8,"ion-label"),l.Mb(9,"p"),l.Mb(10,"span"),l.mc(11),l.Lb(),l.Kb(12,"span",9),l.Kb(13,"ion-icon",10),l.Kb(14,"span",9),l.Mb(15,"span"),l.mc(16),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(17,"ion-row"),l.Mb(18,"ion-col",8),l.lc(19,h,19,10,"ion-item",11),l.Lb(),l.Lb(),l.Lb()}if(2&n){var i=l.Wb();l.zb(4),l.nc(l.Yb(5,4,"OFFER.NewSearch")),l.zb(7),l.nc(i.startPointCity.name),l.zb(5),l.nc(i.endPointCity.name),l.zb(3),l.cc("ngForOf",i.routs)}}var y,v,M,C=[{path:"",component:(y=function(){function t(e,i){n(this,t),this.navCtrl=e,this.placesSrv=i}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.isLoading=!0,this.paths=this.placesSrv.pathsSubj$.subscribe((function(t){n.startPointCity=n.placesSrv.startPointCity,n.endPointCity=n.placesSrv.endPointCity,n.routs=t,n.routs=n.routs.map((function(t){return Object.assign(Object.assign({},t),{cities:n.getCities(t)})})),n.isLoading=!1}))}},{key:"toSearchPage",value:function(){this.navCtrl.navigateBack("places/tabs/discover")}},{key:"getCities",value:function(n){var t=new Set;return n.direct_paths.forEach((function(n){t.add(n.from),t.add(n.to)})),console.log("cities",t),Array.from(t)}}]),t}(),y.\u0275fac=function(n){return new(n||y)(l.Jb(c.O),l.Jb(f.a))},y.\u0275cmp=l.Db({type:y,selectors:[["app-offer"]],decls:11,vars:5,consts:[["color","primary"],["slot","start"],["defaultHref","/places/tabs/discover"],[1,"text-center"],["color","primary",4,"ngIf"],[4,"ngIf"],["size","3","offset","8"],["fill","clear",3,"click"],["size","12","size-sm","8","offset-sm","2"],[1,"spacer"],["name","arrow-forward-outline"],[4,"ngFor","ngForOf"],["expandedHeight","*","collapsedHeight","*"],[1,"city"],["class","city",4,"ngFor","ngForOf"],[3,"ways"]],template:function(n,t){1&n&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-buttons",1),l.Kb(3,"ion-back-button",2),l.Lb(),l.Mb(4,"ion-title"),l.mc(5),l.Xb(6,"translate"),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content"),l.Mb(8,"div",3),l.lc(9,d,1,0,"ion-spinner",4),l.Lb(),l.lc(10,g,20,6,"ion-grid",5),l.Lb()),2&n&&(l.zb(5),l.nc(l.Yb(6,3,"OFFER.AvailablePaths")),l.zb(4),l.cc("ngIf",t.isLoading),l.zb(1),l.cc("ngIf",!t.isLoading))},directives:[c.q,c.L,c.h,c.d,c.e,c.K,c.o,o.k,c.G,c.p,c.D,c.n,c.g,c.y,c.r,o.j,c.u,s.a,s.c,s.e,s.d,c.f,p.a],pipes:[b.c,o.c],styles:['p[_ngcontent-%COMP%]{display:flex}mat-accordion[_ngcontent-%COMP%]{width:100%}mat-header[_ngcontent-%COMP%]{padding:5px}mat-panel-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.mat-expansion-panel-header[_ngcontent-%COMP%]{height:auto!important;padding:0}mat-panel-description[_ngcontent-%COMP%]{flex-direction:column;width:100%}mat-panel-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}mat-panel-description[_ngcontent-%COMP%]   p.city[_ngcontent-%COMP%]{font-size:.8rem;display:inline-block;width:100%;color:var(--ion-color-secondary);font-weight:lighter;font-style:italic;white-space:normal;line-height:1.2}.city[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:" > ";display:inline}.city[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child:after{content:none}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:space-around;background-color:#dcdcdc;padding:1rem}']}),y)}],w=((v=function t(){n(this,t)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(n){return new(n||v)},imports:[[u.i.forChild(C)],u.i]}),v),P=r("PCNd"),L=((M=function t(){n(this,t)}).\u0275mod=l.Hb({type:M}),M.\u0275inj=l.Gb({factory:function(n){return new(n||M)},imports:[[o.b,a.a,c.M,w,P.a,s.b]]}),M)},qJoI:function(t,i,r){"use strict";r.d(i,"a",(function(){return f}));var o=r("fXoL"),a=r("tyNb"),c=r("TEn/"),s=r("Qe3P"),u=r("ofXK");function l(n,t){if(1&n){var e=o.Nb();o.Mb(0,"ion-item-sliding",null,1),o.Mb(2,"ion-item",2),o.Mb(3,"ion-avatar",3),o.Kb(4,"span",4),o.Lb(),o.Mb(5,"ion-label"),o.Mb(6,"p"),o.Kb(7,"span",5),o.mc(8),o.Kb(9,"span",5),o.Lb(),o.Mb(10,"p"),o.mc(11),o.Kb(12,"span",5),o.Kb(13,"ion-icon",6),o.Kb(14,"span",5),o.mc(15),o.Lb(),o.Mb(16,"p"),o.Mb(17,"span"),o.mc(18),o.Lb(),o.Kb(19,"span",5),o.Mb(20,"span"),o.Mb(21,"ion-badge",7),o.mc(22),o.Xb(23,"currency"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(24,"ion-item-options",8),o.Mb(25,"ion-item-option",9),o.Ub("click",(function(){o.fc(e);var n=o.ec(1);return o.Wb().onGoToMap(n)})),o.Kb(26,"ion-icon",10),o.Lb(),o.Lb(),o.Lb()}if(2&n){var i=t.$implicit;o.zb(4),o.cc("innerHTML",i.imgUrl,o.gc),o.zb(4),o.nc(i.transportation_type),o.zb(3),o.oc("",i.from," "),o.zb(4),o.oc(" ",i.to," "),o.zb(3),o.nc(i.duration_minutes),o.zb(4),o.nc(o.Zb(23,6,i.euro_price,"EUR","symbol","1.2-2"))}}var f=function(){var t=function(){function t(e,i,r){n(this,t),this.route=e,this.navCtrl=i,this.placesSrv=r}return e(t,[{key:"ngOnInit",value:function(){console.log("ways",this.ways),this.startPointCityName=this.placesSrv.startPointCity.name,this.endPointCityName=this.placesSrv.endPointCity.name}},{key:"onGoToMap",value:function(n){n.close(),console.log("Editing item")}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Jb(a.a),o.Jb(c.O),o.Jb(s.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-details"]],inputs:{ways:"ways"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["slidingItem",""],[1,"no-padding"],["slot","start"],[1,"icon",3,"innerHTML"],[1,"spacer"],["name","arrow-forward"],["color","primary"],["side","end"],["color","secondary",3,"click"],["name","eye-sharp","slot","icon-only"]],template:function(n,t){1&n&&(o.Mb(0,"ion-list"),o.lc(1,l,27,11,"ion-item-sliding",0),o.Lb()),2&n&&(o.zb(1),o.cc("ngForOf",t.ways))},directives:[c.z,u.j,c.x,c.u,c.c,c.y,c.r,c.f,c.w,c.v],pipes:[u.c],styles:["p[_ngcontent-%COMP%]{display:flex}span.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:40px!important;max-height:40px!important}"]}),t}()},qULd:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return s})),e.d(t,"e",(function(){return c}));var i={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},a=function(){i.selectionChanged()},c=function(){i.selectionEnd()},s=function(n){i.impact(n)}}}])}();