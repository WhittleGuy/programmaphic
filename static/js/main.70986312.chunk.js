(this.webpackJsonpWhittleDesign=this.webpackJsonpWhittleDesign||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=(n(29),n(30),n(3)),l=n(4),s=n(6),m=n(5),u=n(7),h=n(12),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("div",{className:"NavLinks"},r.a.createElement(h.b,{className:"NavLink",to:"./moire"},"MOIRE"),r.a.createElement(h.b,{className:"NavLink",to:"./sines"},"SINES")))}}]),t}(a.Component),w=n(10),f=function(e){e.setup=function(){e.createCanvas(e.windowWidth,.92*e.windowHeight),e.imageMode(e.CENTER),e.angleMode(e.DEGREES),e.translate(e.windowWidth/2,.92*e.windowHeight/2),e.colorMode(e.HSL),e.background(0);var t=e.createGraphics(e.windowWidth,.92*e.windowHeight);!function(e){e.colorMode(e.HSL),e.stroke("#5bffce"),e.strokeWeight(3)}(t),function(e,t){for(var n=0;n<t;n++){var a=e.random(0,e.windowWidth+1),r=e.random(0,e.windowHeight+1);e.point(a,r)}}(t,2500),e.image(t,0,0),e.rotate(1),e.image(t,0,0),e.noLoop()},e.draw=function(){}},p=n(14),b=n.n(p),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-window",id:"App"},r.a.createElement(b.a,{sketch:f})))}}]),t}(a.Component),v=function(e){var t=["#404040","ffffff","red"],n=e.random(1)/15,a=e.random(200)+5,r=function(){var n=Math.floor(3*e.random());e.stroke(t[n]),e.strokeWeight(1)};e.setup=function(){e.createCanvas(e.windowWidth,.92*e.windowHeight),e.imageMode(e.CENTER),e.angleMode(e.DEGREES),e.translate(e.windowWidth/2,.92*e.windowHeight/2),e.colorMode(e.HSL),e.noFill(),e.smooth(),e.background(0),e.noLoop()},e.draw=function(){!function(){for(var t=0;t<20;t++){r();var o=.9*e.windowHeight/2;e.beginShape(),e.vertex(0,o);for(var i=1;i<1e3;i++){var c=Math.sin(n*i),l=i*(e.windowWidth/1e3),s=o+c*a;e.bezierVertex(l,s,l,s-1,l,s)}e.endShape()}}()}},g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-window",id:"App"},r.a.createElement(b.a,{sketch:v})))}}]),t}(a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-window"})}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-window"})}}]),t}(a.Component),k=function(){return r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/"},r.a.createElement(w.a,{to:"./Moire"})),r.a.createElement(w.b,{exact:!0,path:"/moire",component:E}),r.a.createElement(w.b,{path:"/sines",component:g}),r.a.createElement(w.b,{path:"/PageThree",component:O}),r.a.createElement(w.b,{path:"/PageFour",component:j}),r.a.createElement(w.b,{path:"/*",component:E}))},N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("a",{href:"https://www.brandonwhittle.com",rel:"noopener norefferer"},r.a.createElement("i",{className:"fas fa-dumpster-fire"})),r.a.createElement("a",{href:"https://www.twitter.com/whittleguyyy"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("a",{href:"https://www.github.com/whittleguy"},r.a.createElement("i",{className:"fab fa-github"})))}}]),t}(a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(k,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h.a,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.70986312.chunk.js.map