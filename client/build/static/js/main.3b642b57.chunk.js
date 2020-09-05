(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),o=(n(24),n(1));n(25);var i=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),s=l[0],f=l[1],m=Object(a.useState)(1),p=Object(o.a)(m,2),d=p[0],b=p[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"head"},"Tutorials."),r.a.createElement("form",{id:"tutorialForm",className:"form",onSubmit:function(t){t.preventDefault(),b((function(e){return e+1})),e.title(c),e.content(s),e.count(d),document.getElementById("tutorialForm").reset()}},r.a.createElement("textarea",{required:!0,placeholder:"Add title for your tutorial...",className:"titleInput",type:"text",id:"tutorialTitle",onChange:function(e){u(e.target.value)}})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{required:!0,rows:"8",placeholder:"Add content for your tutorial...",className:"contentInput",type:"text",id:"tutorialContent",onChange:function(e){f(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"submit",type:"submit",id:"addButton"})))};var l=function(e){return r.a.createElement("div",{className:"footer"}," ")};var s=function(e){return r.a.createElement("div",{className:"header"}," ")},f=n(3),m=n.n(f),p=n(17),d=n(4),b=n(5),h=n.n(b),v=n(18);var E=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),s=l[0],f=l[1],b=Object(a.useState)(0),E=Object(o.a)(b,2),x=E[0],j=E[1],O=Object(a.useState)(""),g=Object(o.a)(O,2),N=g[0],y=g[1],k=Object(a.useState)(5),w=Object(o.a)(k,2),S=w[0],C=w[1],A=Object(a.useState)(!0),B=Object(o.a)(A,2),T=B[0],M=B[1];Object(a.useEffect)((function(){I()}),[e.count]),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a,r,c,u,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/tutorials/?title=".concat(N));case 2:t=e.sent,n=t.data,a=[],r=[],c=Object(p.a)(n);try{for(c.s();!(u=c.n()).done;)(o=u.value).published?r.push(o):a.push(o)}catch(i){c.e(i)}finally{c.f()}S>a.length&&S>r.length?M(!1):M(!0),F(a.splice(0,S)),D(r.splice(0,S));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,N,S]);var P=function(){var e=Object(d.a)(m.a.mark((function e(t,n,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&""!==a){e.next=5;break}return alert("Either title or content of the submitted tutorial is missing!"),e.abrupt("return");case 5:return e.next=7,h.a.put("/api/tutorials/".concat(t,"/publish"),{title:n,content:a});case 7:j((function(e){return e+1}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/api/tutorials/".concat(t));case 2:j((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var t=Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.count>0)){t.next=9;break}return t.prev=1,t.next=4,h.a.post("/api/tutorials/",{title:e.title,content:e.content}).then((function(e){j((function(e){return e+1}))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),alert(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(m.a.mark((function e(t,n,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("/api/tutorials/".concat(t),{title:n,content:a});case 2:j((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/api/tutorials");case 2:j((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.map((function(e){return r.a.createElement("div",{className:"tutorialPublished",key:e.id},r.a.createElement("h4",{className:"title"},e.title),r.a.createElement("p",{className:"content"},e.content),r.a.createElement("p",{style:{marginTop:"160px"}},e.date,Number(e.date.substr(11,2))>11?" PM":" AM",r.a.createElement("button",{style:{background:"rgb(214, 214, 214)",position:"relative",marginLeft:"800px",top:"-16px"},className:"fa fa-trash-o deleteButton",onClick:function(){return q(e.id)}})))}));f(t)},F=function(e){var t=e.map((function(e){var t=e.title,n=e.content;return r.a.createElement("div",{className:"tutorialEdit",key:e.id},r.a.createElement("textarea",{required:!0,className:"eTitle",defaultValue:t,onChange:function(e){t=e.target.value}}),r.a.createElement("p",{className:"titleEdit"},"\u270e"),r.a.createElement("textarea",{required:!0,rows:"4",className:"eContent",defaultValue:n,onChange:function(e){n=e.target.value}}),r.a.createElement("p",{className:"contentEdit"},"\u270e"),r.a.createElement("p",{style:{marginTop:"-35px"}},e.date,Number(e.date.substr(11,2))>11?" PM":" AM",r.a.createElement("button",{className:"fa fa-trash-o deleteButton",onClick:function(){return q(e.id)}}),r.a.createElement("button",{className:"saveButton fa fa-save",onClick:function(){return L(e.id,t,n)}})),r.a.createElement("button",{className:"publishButton",onClick:function(){return P(e.id,t,n)}},"Publish"))}));u(t)};return r.a.createElement("div",null,r.a.createElement("input",{className:"filterList",placeholder:"Search...",onChange:function(e){return y(e.target.value)}}),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"edit"},r.a.createElement("p",{style:{fontSize:"25px",textAlign:"center"}},"Edit Manager"),c),r.a.createElement("p",{className:"blank"}),r.a.createElement("div",{className:"published"},r.a.createElement("p",{style:{fontSize:"25px",textAlign:"center"}},"Published Tutorials:"),s)),r.a.createElement("button",{onClick:function(){return z()},className:"deleteAll"},"Delete all tutorials"),r.a.createElement(v.a,{style:{overflow:"hidden"},dataLength:S,next:function(){setTimeout((function(){C((function(e){return e+3}))}),1500)},hasMore:T,loader:r.a.createElement("p",{style:{fontSize:"32px",color:"grey",textAlign:"center"}},"Loading . . .")}))};var x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),f=Object(o.a)(u,2),m=f[0],p=f[1],d=Object(a.useState)(0),b=Object(o.a)(d,2),h=b[0],v=b[1];return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(i,{count:function(e){return v(e)},title:function(e){return c(e)},content:function(e){return p(e)}}),r.a.createElement(E,{count:h,title:n,content:m}),r.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3b642b57.chunk.js.map