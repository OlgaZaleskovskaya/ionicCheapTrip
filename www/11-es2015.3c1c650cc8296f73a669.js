(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BjQp:function(t,n,e){"use strict";e.r(n),e.d(n,"ContactPageModule",(function(){return g}));var o=e("ofXK"),i=e("3Pt+"),r=e("Wwn5"),c=e("TEn/"),a=e("mrSG"),s=e("C6fG"),l=e("fXoL"),u=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}Object(a.a)(n,t),n.prototype.hasPermission=function(){return Object(s.cordova)(this,"hasPermission",{successIndex:0,errorIndex:2},arguments)},n.prototype.requestPermission=function(){return Object(s.cordova)(this,"requestPermission",{successIndex:0,errorIndex:2},arguments)},n.prototype.hasAccount=function(){var t=this;return function(){if(!0===Object(s.checkAvailability)(t))return Object(s.getPromise)((function(t){n.getPlugin().hasAccount((function(n){t(!!n)}))}))}()},n.prototype.hasClient=function(t){var e=this;return function(){if(!0===Object(s.checkAvailability)(e))return Object(s.getPromise)((function(e){t?n.getPlugin().hasClient(t,(function(t){e(!!t)})):n.getPlugin().getClients((function(t){e(t&&t.length>0)}))}))}()},n.prototype.getClients=function(){var t=this;return function(){if(!0===Object(s.checkAvailability)(t))return Object(s.getPromise)((function(t){n.getPlugin().getClients((function(n){"[object String]"===Object.prototype.toString.call(n)&&(n=[n]),t(n)}))}))}()},n.prototype.isAvailable=function(t){var n=this;return function(){if(!0===Object(s.checkAvailability)(n))return Object(s.getPromise)((function(e){Promise.all([n.hasAccount,n.hasClient(t)]).then((function(t){return e(2===t.length&&t[0]&&t[1])}))}))}()},n.prototype.open=function(t,n){return Object(s.cordova)(this,"open",{successIndex:1,errorIndex:3},arguments)},n.prototype.addAlias=function(t,n){return Object(s.cordova)(this,"addAlias",{},arguments)},n.pluginName="EmailComposer",n.plugin="cordova-plugin-email-composer",n.pluginRef="cordova.plugins.email",n.repo="https://github.com/katzer/cordova-plugin-email-composer",n.platforms=["Amazon Fire OS","Android","Browser","iOS","Windows","macOS"],n.\u0275fac=function(t){return e(t||n)},n.\u0275prov=l.Fb({token:n,factory:function(t){return n.\u0275fac(t)}});var e=l.Ob(n);return n}(s.IonicNativePlugin),b=e("tyNb"),m=e("sYmb");const p=[{path:"",component:(()=>{class t{constructor(t,n){this.callNumber=t,this.emailComposer=n}ngOnInit(){}onCallRoman(){this.callNumber.callNumber("+972-54-5779239",!0).then(t=>console.log("Launched dialer!",t)).catch(t=>console.log("Error launching dialer",t))}sendMailTo(t){console.log("email"),this.emailComposer.open({to:t})}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(r.a),l.Jb(u))},t.\u0275cmp=l.Db({type:t,selectors:[["app-contact"]],decls:24,vars:12,consts:[["color","primary"],["slot","start"],["fullscreen",""],[1,"padding"],["src","../../assets/images/Roman.jpg"],[1,"selectable"],[1,"selectable","expand",3,"click"],[1,"selectable",3,"click"]],template:function(t,n){1&t&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Lb(),l.Mb(4,"ion-title"),l.mc(5),l.Xb(6,"translate"),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-content",2),l.Mb(8,"ion-list"),l.Mb(9,"ion-item",3),l.Mb(10,"ion-avatar",1),l.Kb(11,"img",4),l.Lb(),l.Mb(12,"ion-label"),l.Mb(13,"h2",5),l.mc(14),l.Xb(15,"translate"),l.Xb(16,"translate"),l.Lb(),l.Mb(17,"h3",5),l.mc(18),l.Xb(19,"translate"),l.Lb(),l.Mb(20,"ion-button",6),l.Ub("click",(function(){return n.onCallRoman()})),l.mc(21,"+972-54-5779239"),l.Lb(),l.Mb(22,"p",7),l.Ub("click",(function(){return n.sendMailTo("roman.mantelmakher@gmail.com")})),l.mc(23,"roman.mantelmakher@gmail.com"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.zb(5),l.nc(l.Yb(6,4,"CONTACT.contact")),l.zb(9),l.pc("",l.Yb(15,6,"CONTACT.ROMAN.name")," ",l.Yb(16,8,"CONTACT.ROMAN.familyName"),""),l.zb(4),l.oc(" ",l.Yb(19,10,"CONTACT.ROMAN.position"),""))},directives:[c.q,c.K,c.h,c.y,c.J,c.o,c.w,c.u,c.c,c.v,c.g],pipes:[m.c],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:text;-moz-user-select:text;user-select:text}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[b.j.forChild(p)],b.j]}),t})();var h=e("PCNd");let g=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},providers:[r.a,u],imports:[[o.b,i.a,c.L,f,h.a]]}),t})()}}]);