(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{38:function(e,t,a){e.exports=a(81)},43:function(e,t,a){},45:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c);a(43);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var o=a(9),s=(a(45),a(36)),i=a(37),m=new(a.n(i).a)("https://brainbright.herokuapp.com/brainbright-websocket"),d=s.over(m);function u(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),i=(s[0],s[1]),m=Object(n.useState)([]),u=Object(o.a)(m,2),p=u[0],b=u[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),h=f[0],E=f[1],N=Object(n.useState)([]),g=Object(o.a)(N,2),w=g[0],O=g[1];function y(e){if(p.length>=2)2==b.length?b([]):O([]),b([e.target.innerHTML]),O([e.target.innerHTML]);else{var t=p;t.push(e.target.innerHTML),b(t),O(t)}2===p.length&&(i(""),b([]),d.subscribe("/topic/validactionresponse",(function(e){JSON.parse(e.body)?E("You are correct"):E("You are wrong")})),d.send("/app/validaction",{},JSON.stringify({firstPart:p[0],secondPart:p[1]})))}return Object(n.useEffect)((function(){d.connect({},(function(){this.subscribe("/topic/splitwordlist",(function(e){var t=new Array(24-2*JSON.parse(e.body).length).fill(" ");JSON.parse(e.body).map((function(e){t.splice(Math.floor(24*Math.random()),0,e.firstPart),t.splice(Math.floor(24*Math.random()),0,e.secondPart)})),c(t)})),this.send("/app/getsplitwords",{},null)}))}),[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"player"},"Player:"),r.a.createElement("div",{className:"player-name"},"Name")),r.a.createElement("div",{className:""},"Level"),r.a.createElement("div",{className:""},"Menu")),r.a.createElement("div",{className:"col-md-6 text-center all_words"},r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement("div",{className:"col-md-3 col-sm-6",key:e.word}," "!==e?r.a.createElement("button",{className:"btn btn-primary mb-5 p-3 rounded border-0",onClick:y},e):r.a.createElement("br",null))}))),r.a.createElement("div",{className:"result p-2"},0==w.length?"Click a button...":w.map((function(e){return r.a.createElement("span",null,e)}))),r.a.createElement("div",{className:"mt-3"},h),r.a.createElement("button",{className:"btn pl-5 pr-5 pt-2 pb-2 mt-3",onClick:function(){O([]),b([])}},"Clear")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"border border-dark"},"test")))))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4be53a91.chunk.js.map