(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),l=(n(22),n(1));n(23);var o=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),s=i[0],f=i[1],p=Object(a.useState)(1),m=Object(l.a)(p,2),d=m[0],b=m[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"head"},"Tutorials."),r.a.createElement("form",{id:"tutorialForm",className:"form",onSubmit:function(t){t.preventDefault(),b((function(e){return e+1})),e.title(c),e.content(s),e.count(d),document.getElementById("tutorialForm").reset()}},r.a.createElement("textarea",{spellCheck:"false",required:!0,placeholder:"Add title for your tutorial...",className:"titleInput",type:"text",id:"tutorialTitle",onChange:function(e){u(e.target.value)}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{spellCheck:"false",required:!0,rows:"8",placeholder:"Add content for your tutorial...",className:"contentInput",type:"text",id:"tutorialContent",onChange:function(e){f(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"submit",type:"submit",id:"addButton"})))};var i=function(e){return r.a.createElement("div",{className:"footer"}," ")};var s=function(e){return r.a.createElement("div",{className:"header"}," ")},f=n(3),p=n.n(f),m=n(4),d=n(5),b=n.n(d),h=n(16);var v=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],u=n[1],o=Object(a.useState)([]),i=Object(l.a)(o,2),s=i[0],f=i[1],d=Object(a.useState)(0),v=Object(l.a)(d,2),E=v[0],g=v[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),x=O[0],k=O[1],N=Object(a.useState)(5),w=Object(l.a)(N,2),y=w[0],S=w[1],C=Object(a.useState)(!0),A=Object(l.a)(C,2),B=A[0],I=A[1],M=Object(a.useState)("Loading"),T=Object(l.a)(M,2),P=T[0],q=T[1];Object(a.useEffect)((function(){var e=setInterval((function(){q((function(e){return"".concat(e," .")}))}),200);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){q((function(){return"Loading"}))}),800);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,c,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/tutorials/?title=".concat(x));case 2:t=e.sent,n=t.data,a=n.filter((function(e){return!e.published})),r=n.filter((function(e){return e.published})),c=a.sort((function(e,t){return t.date.replace(/ /g,"").replace(/,/g,"").replace(/:/g,"").replace(/-/g,"")-e.date.replace(/ /g,"").replace(/,/g,"").replace(/:/g,"").replace(/-/g,"")})),u=r.sort((function(e,t){return t.date.replace(/ /g,"").replace(/,/g,"").replace(/:/g,"").replace(/-/g,"")-e.date.replace(/ /g,"").replace(/,/g,"").replace(/:/g,"").replace(/-/g,"")})),y>a.length&&y>r.length?I(!1):I(!0),W(c.splice(0,y)),V(u.splice(0,y));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E,x,y]);var L=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&""!==a){e.next=3;break}return alert("Either title or content of the submitted tutorial is missing!"),e.abrupt("return");case 3:return e.next=5,b.a.put("/api/tutorials/".concat(t,"/publish"),{title:n,content:a});case 5:g((function(e){return e+1}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("/api/tutorials/".concat(t));case 2:g((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var t=Object(m.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.count>0)){t.next=9;break}return t.prev=1,t.next=4,b.a.post("/api/tutorials/",{title:e.title,content:e.content}).then((function(){g((function(e){return e+1}))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){D()}),[e.count]);var F=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("/api/tutorials/".concat(t),{title:n,content:a});case 2:g((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("/api/tutorials");case 2:g((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.map((function(e){return r.a.createElement("div",{className:"tutorialPublished",key:e.id},r.a.createElement("p",{spellCheck:"false",className:"title"},e.title),r.a.createElement("p",{spellCheck:"false",className:"content"},e.content),r.a.createElement("p",null,e.date,Number(e.date.substr(11,2))>11?" PM":" AM"),r.a.createElement("button",{style:{background:"rgb(214, 214, 214)",margin:"-35px 1% 0px 0%",position:"relative",float:"right"},className:"fa fa-trash-o deleteButton",onClick:function(){return z(e.id)}}))}));f(t)},W=function(e){var t=e.map((function(e){var t=e.title,n=e.content;return r.a.createElement("div",{className:"tutorialEdit",key:e.id},r.a.createElement("textarea",{spellCheck:"false",required:!0,className:"eTitle",defaultValue:t,onChange:function(e){t=e.target.value}}),r.a.createElement("p",{className:"titleEdit"},"\u270e"),r.a.createElement("textarea",{spellCheck:"false",required:!0,rows:"4",className:"eContent",defaultValue:n,onChange:function(e){n=e.target.value}}),r.a.createElement("p",{className:"contentEdit"},"\u270e"),r.a.createElement("p",{style:{marginTop:"-35px"}},e.date,Number(e.date.substr(11,2))>11?" PM":" AM",r.a.createElement("button",{className:"fa fa-trash-o deleteButton",onClick:function(){return z(e.id)}}),r.a.createElement("button",{className:"saveButton fa fa-save",onClick:function(){return F(e.id,t,n)}})),r.a.createElement("button",{className:"publishButton",onClick:function(){return L(e.id,t,n)}},"Publish"))}));u(t)};return r.a.createElement("div",null,r.a.createElement("input",{className:"filterList",placeholder:"Search...",onChange:function(e){return k(e.target.value)}}),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"edit"},r.a.createElement("p",{style:{color:"white",fontSize:"25px",textAlign:"center"}},"Edit Manager"),c),r.a.createElement("p",{className:"blank"}),r.a.createElement("div",{className:"published"},r.a.createElement("p",{style:{fontSize:"25px",textAlign:"center"}},"Published Tutorials:"),s)),r.a.createElement("button",{onClick:function(){return J()},className:"deleteAll"},"Delete all tutorials"),r.a.createElement(h.a,{style:{overflow:"hidden"},dataLength:y,next:function(){setTimeout((function(){S((function(e){return e+3}))}),1500)},hasMore:B,loader:r.a.createElement("p",{style:{fontSize:"80px",color:"grey",textAlign:"center",fontStyle:"italic"}},P)}))};var E=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),p=f[0],m=f[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),h=b[0],E=b[1];return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(o,{count:function(e){return E(e)},title:function(e){return c(e)},content:function(e){return m(e)}}),r.a.createElement(v,{count:h,title:n,content:p}),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ebf7030f.chunk.js.map