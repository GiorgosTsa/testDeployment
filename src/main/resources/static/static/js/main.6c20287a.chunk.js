(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},33:function(e,a,t){e.exports=t(70)},38:function(e,a,t){},39:function(e,a,t){},67:function(e,a){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(31),o=t.n(r);t(38),t(32),t(39);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(40);var l=t(16),s=t(17),m=t(15),i=t.n(m),u="https://brainbright.herokuapp.com/",d=[],v="";function p(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(),m=Object(s.a)(o,2),p=m[0],E=m[1];function f(e){d.length<2||(d=[]),d=[].concat(Object(l.a)(d),[e.target.innerHTML]);var a=i()(u);2===d.length&&(d.map((function(e){v+=e})),a.emit("chat",v),console.log(v),v="",a.on("result",(function(e){E(e)})))}return Object(n.useEffect)((function(){i()(u).on("all_split_words",(function(e){r(e.splitWords)}))}),[]),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"player"},"Player:"),c.a.createElement("div",{className:"player-name"},"Name"))),c.a.createElement("div",{className:"row"},"Level"),c.a.createElement("div",{className:"row"},"Menu")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement("div",{className:"col-md-3",key:e.word},c.a.createElement("button",{className:"btn btn-primary text-center",onClick:f},e.firstPart))})),t.map((function(e){return c.a.createElement("div",{className:"col-md-3",key:e.word},c.a.createElement("button",{className:"btn btn-primary mb-3",onClick:f},e.secondPart))}))),c.a.createElement("div",{className:"row"},c.a.createElement("span",null),c.a.createElement("span",null,"Incorrect pair:"),c.a.createElement("div",{className:"button-class"},c.a.createElement("button",{className:"btn"},"Clear")))),c.a.createElement("div",{className:"col-md-2"},c.a.createElement("div",{className:"row"},"Round:",c.a.createElement("div",{className:"col-md-12"},function(e){var a="Waiting for your clicks";return void 0!==e&&(a=e?"You are correct":"You are wrong"),a}(p)),c.a.createElement("div",{className:"col-md-12"},"2"))))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6c20287a.chunk.js.map