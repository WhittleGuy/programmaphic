(this.webpackJsonpwhittledesign=this.webpackJsonpwhittledesign||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),c=(a(29),a(30),a(2)),s=a(3),l=a(5),h=a(4),u=a(6),d=a(11),p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NavBar"},o.a.createElement("div",{className:"NavLinks"},o.a.createElement(d.b,{className:"NavLink",to:"./moire"},"MOIRE"),o.a.createElement(d.b,{className:"NavLink",to:"./sines"},"SINES"),o.a.createElement(d.b,{className:"NavLink",to:"./circles"},"CIRCLES"),o.a.createElement(d.b,{className:"NavLink",to:"./lines"},"LINES"),o.a.createElement(d.b,{className:"NavLink",to:"./flow"},"FLOW")))}}]),t}(n.Component),m=a(12),f=function(e){e.setup=function(){e.createCanvas(e.windowWidth,.95*e.windowHeight),e.imageMode(e.CENTER),e.angleMode(e.DEGREES),e.translate(e.windowWidth/2,.95*e.windowHeight/2),e.colorMode(e.HSL),e.background(0);var t=e.createGraphics(e.windowWidth,.95*e.windowHeight);!function(e){e.colorMode(e.HSL),e.stroke("#5bffce"),e.strokeWeight(3)}(t),function(e,t){for(var a=0;a<t;a++){var n=e.random(0,e.windowWidth+1),o=e.random(0,e.windowHeight+1);e.point(n,o)}}(t,2500),e.image(t,0,0),e.rotate(1),e.image(t,0,0),e.noLoop()},e.draw=function(){}},w=a(9),v=a.n(w),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-window",id:"App"},o.a.createElement(v.a,{sketch:f})))}}]),t}(n.Component),E=function(e){var t,a,n=["#f6f740","#44ccff","#ff47da"],o=function(){!function(){var t=Math.floor(e.random()*n.length);e.stroke(n[t]),e.strokeWeight(1)}();var o=.95*e.windowHeight/2;e.beginShape(),e.vertex(0,o);for(var r=e.random(100),i=1;i<750+r;i++){var c=Math.sin(t*i),s=i*(e.windowWidth/750)-r,l=o+c*a;e.bezierVertex(s,l,s,l,s,l)}e.endShape()};e.setup=function(){e.createCanvas(e.windowWidth,.95*e.windowHeight),e.noFill(),e.smooth(),e.background(0),e.noLoop()},e.draw=function(){for(var n=0;n<e.random(7)+3;n++)a=e.random(100)+25,t=e.random(1)/15,o()}},g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-window",id:"App"},o.a.createElement(v.a,{sketch:E})))}}]),t}(n.Component),k=function(e){var t,a,n=e.floor(window.innerWidth-window.innerWidth%20),o=e.floor(.95*window.innerHeight-.95*window.innerHeight%20),r=0,i=[],c=[];e.setup=function(){e.createCanvas(n,o),e.background(0),t=e.floor(n/20),a=e.floor(o/20),c=new Array(t*a);for(var r=0;r<2e3;r++)i[r]=new O(e,n,o,20)},e.draw=function(){for(var n=0,o=0;o<a;o++){for(var s=0,l=0;l<t;l++){var h=l+o*t,u=e.noise(s,n,r)*e.TWO_PI,d=e.createVector(Math.cos(u),Math.sin(u));d.setMag(.25),c[h]=d,s+=.05,e.stroke(0,50),e.push(),e.translate(20*l,20*o),e.rotate(d.heading()),e.strokeWeight(1),e.pop()}n+=.05,r+=1e-4}for(var p=0;p<i.length;p++)i[p].follow(c),i[p].update(),i[p].edges(),i[p].show()}};function O(e,t,a,n){var o=this;this.pos=e.createVector(e.random(t),e.random(a)),this.vel=e.createVector(0,0),this.acc=e.createVector(0,0),this.maxSpeed=5,this.prevPos=this.pos.copy(),this.update=function(){o.vel.add(o.acc),o.vel.limit(o.maxSpeed),o.pos.add(o.vel),o.acc.mult(0)},this.follow=function(a){var r=a[e.floor(o.pos.x/n)+e.floor(o.pos.y/n)*(t/n)];o.applyForce(r)},this.applyForce=function(e){o.acc.add(e)},this.show=function(){e.stroke(255,n/3),e.strokeWeight(1),e.line(o.pos.x,o.pos.y,o.prevPos.x,o.prevPos.y),o.updatePrev()},this.updatePrev=function(){o.prevPos.x=o.pos.x,o.prevPos.y=o.pos.y},this.edges=function(){o.pos.x>t&&(o.pos.x=0,o.updatePrev()),o.pos.x<0&&(o.pos.x=t,o.updatePrev()),o.pos.y>a&&(o.pos.y=0,o.updatePrev()),o.pos.y<0&&(o.pos.y=a,o.updatePrev())}}var y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-window",id:"App"},o.a.createElement(v.a,{sketch:k})))}}]),t}(n.Component),j=function(e){var t,a,n=e.windowWidth,o=.95*e.windowHeight,r=0;e.setup=function(){e.createCanvas(n,o),e.background(0),t=e.floor(n/25),a=e.floor(o/25)},e.draw=function(){e.background(0);for(var n=0,o=0;o<a;o++){for(var i=0,c=0;c<t;c++){var s=e.noise(i,n,r)*e.TWO_PI,l=e.createVector(Math.cos(s),Math.sin(s));l.setMag(.25),i+=.1,e.stroke(1/Math.cos(s)*255,1/Math.tan(s)*255,255*Math.sin(s)),e.push(),e.translate(25*c,25*o),e.rotate(l.heading()),e.strokeWeight(1),e.line(0,0,25,0),e.pop()}n+=.1,r+=5e-4}}},N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-window",id:"App"},o.a.createElement(v.a,{sketch:j})))}}]),t}(n.Component),M=function(e){var t=e.floor(4*Math.random()+2);e.initCanvas=function(){e.colorMode(e.RGB),e.angleMode(e.DEGREES),e.createCanvas(e.windowWidth,.95*e.windowHeight),e.frameRate(5),e.imageMode(e.CENTER),e.translate(e.windowWidth/2,.95*e.windowHeight/2),e.smooth()},e.circle=function(t,a,n,o){for(var r=[],i=t,c=t,s=0;s<360*n;s++){var l=e.noise(i,c);r[s]=new W(e,e.windowWidth/2+Math.cos(.0174532925*s)*a+Math.tan(l)*o,.95*e.windowHeight/2+Math.sin(.0174532925*s)*a-Math.tan(l)*o),i+=.01,i+=.01}for(var h=0;h<r.length-1;h++)e.line(r[h].pos.x,r[h].pos.y,r[h+1].pos.x,r[h+1].pos.y);e.line(r[0].pos.x,r[0].pos.y,r[359].pos.x,r[359].pos.y)},e.setup=function(){e.initCanvas()},e.draw=function(){e.background(0);for(var a=1;a<=t;a++)e.stroke(255),e.circle(10*Math.random(),a*(400/t),e.floor(5*Math.random()+2),a*(50/t))}};function W(e,t,a){this.pos=e.createVector(t,a),this.show=function(){e.strokeWeight(1)}}var x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-window",id:"App"},o.a.createElement(v.a,{sketch:M})))}}]),t}(n.Component),C=function(){return o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/"},o.a.createElement(m.a,{to:"./Moire"})),o.a.createElement(m.b,{exact:!0,path:"/moire",component:b}),o.a.createElement(m.b,{path:"/sines",component:g}),o.a.createElement(m.b,{path:"/cirgle",component:x}),o.a.createElement(m.b,{path:"/flow",component:y}),o.a.createElement(m.b,{path:"/lines",component:N}),o.a.createElement(m.b,{path:"/*",component:b}))},H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("a",{href:"https://www.brandonwhittle.com",rel:"noopener norefferer"},o.a.createElement("i",{className:"fas fa-dumpster-fire"})),o.a.createElement("a",{href:"https://www.twitter.com/whittleguyyy"},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("a",{href:"https://www.github.com/whittleguy"},o.a.createElement("i",{className:"fab fa-github"})))}}]),t}(n.Component);var L=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(C,null),o.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d.a,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3dbf622b.chunk.js.map