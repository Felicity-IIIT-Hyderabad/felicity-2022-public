(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4967)}])},4967:function(n,i,t){"use strict";t.r(i),t.d(i,{default:function(){return tn}});var e,o,a,r=t(5893),s=t(9008),l=function(){return(0,r.jsx)("object",{id:"pacman-desktop",className:"d-none d-md-block h-100",type:"image/svg+xml",data:"/graphics/pacmanDesktop.svg"})},c=function(){return(0,r.jsx)("object",{id:"pacman-mobile",className:"d-block d-md-none m-3",type:"image/svg+xml",data:"/graphics/pacmanMobile.svg"})},d=function(){return(0,r.jsxs)("div",{className:"pacman-div vh-100 vw-100 d-flex flex-row justify-content-center align-items-start pt-4 pt-md-2 pb-3",style:{backgroundColor:"black"},children:[(0,r.jsx)(l,{}),(0,r.jsx)(c,{})]})},h=t(7294),u=t(3758),f=(t(6878),function(){var n=(0,h.useState)(10),i=n[0],t=n[1],e=(0,h.useState)(0),o=e[0],a=e[1],s=function(){var n=document.body.scrollTop||document.documentElement.scrollTop;if(n>window.innerHeight){var i=(n-window.innerHeight)/1080,e=.1*window.innerWidth;t(e+i*(window.innerWidth-e)),i=Math.floor(20*i),a(i%4)}};return(0,h.useEffect)((function(){window.addEventListener("scroll",s)}),[]),(0,r.jsxs)("div",{className:"mario-div",children:[(0,r.jsx)("img",{src:"/graphics/mario_bg.png",style:{float:"right"},alt:""}),(0,r.jsx)(u.E.div,{animate:{x:i,y:-260},transition:{type:"tween",ease:"circInOut"},children:(0,r.jsx)("img",{id:"mario-player",src:"/graphics/mario/tile00".concat(o,".png"),alt:""})}),(0,r.jsx)("div",{className:"about-content text-white text-center py-3 px-2 p-md-3 p-lg-4 p-xl-5",children:(0,r.jsxs)(u.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:[(0,r.jsx)("h1",{className:"display-1 mb-5",children:"About Us"}),(0,r.jsx)("p",{className:"text-justify content-p",children:"Felicity, IIIT Hyderabad is the largest techno-cultural fest in India. Known for its diverse set of cultural, technical and social events, Felicity leaves everyone with a sense of joy and satisfaction. Now, it is back offline after more than 2 years, and is bigger than ever before."})]})})]})}),p=t(5152),g=50,v=0,y=3,m=function(){return e},w=function(){return o},x=function(){return a},_=function(){return v},b=function(n){v=n},j=function(){return y},k=function(n){y=n};function N(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var S=function(){function n(i,t){!function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),this.type=i,this.position={x:0,y:0},"moving"===t?(this.category="moving",this.end_position={x:0,y:0},this.releaseTime=0):this.category="initial"}var i,t,e;return i=n,(t=[{key:"moveDown",value:function(n){this.position.y+n>this.end_position.y?this.position.y+=this.end_position.y-this.position.y:this.position.y+=n}}])&&N(i.prototype,t),e&&N(i,e),n}();function q(n,i){(null==i||i>n.length)&&(i=n.length);for(var t=0,e=new Array(i);t<i;t++)e[t]=n[t];return e}function E(n){return function(n){if(Array.isArray(n))return q(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,i){if(!n)return;if("string"===typeof n)return q(n,i);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return q(n,i)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=[[new S("t","moving"),new S("square","moving"),new S("l1","moving"),new S("n1","moving"),new S("square","moving"),new S("l4","moving"),new S("n2","moving"),new S("i1","moving")],[new S("l3","moving"),new S("square","moving"),new S("l4","moving"),new S("t1","moving"),new S("n1","moving"),new S("square","moving")],[new S("t","initial"),new S("square","initial"),new S("l1","initial"),new S("n1","initial"),new S("square","initial"),new S("l4","initial"),new S("n2","initial"),new S("i1","initial")],[new S("l3","initial"),new S("square","initial"),new S("l4","initial"),new S("t1","initial"),new S("n1","initial"),new S("square","initial")]],I=function(n){for(var i=n.length-1;i>0;i--){var t,e=Math.floor(Math.random()*(i+1));t=[n[e],n[i]],n[i]=t[0],n[e]=t[1]}},W=function(n,i,t,r,s){o=(n-21*r+50/s)/2,function(n){e=n}(3*r-8/s),function(n){a=n}(t),T[0][0].position={x:w()+4/s,y:x()},T[0][1].position={x:w()+3*r-8/s,y:x()},T[0][2].position={x:w()+5*r-12/s,y:x()},T[0][3].position={x:w()+8*r-24/s,y:x()},T[0][4].position={x:w()+11*r-32/s,y:x()},T[0][5].position={x:w()+11*r-32/s,y:x()},T[0][6].position={x:w()+14*r-48/s,y:x()},T[0][7].position={x:w()+17*r-56/s,y:x()},T[1][0].position={x:w()+2*r-4/s,y:x()},T[1][1].position={x:w()+6*r-16/s,y:x()},T[1][2].position={x:w()+8*r-24/s,y:x()},T[1][3].position={x:w()+13*r-40/s,y:x()},T[1][4].position={x:w()+16*r-52/s,y:x()},T[1][5].position={x:w()+19*r-64/s,y:x()},T[0][0].end_position={x:w()+4/s,y:i-2*r-m()},T[0][1].end_position={x:w()+3*r-8/s,y:i-2*r-m()},T[0][2].end_position={x:w()+5*r-12/s,y:i-2*r-m()},T[0][3].end_position={x:w()+8*r-24/s,y:i-2*r-m()},T[0][4].end_position={x:w()+11*r-32/s,y:i-r-m()},T[0][5].end_position={x:w()+11*r-32/s,y:i-2*r-m()},T[0][6].end_position={x:w()+14*r-48/s,y:i-2*r-m()},T[0][7].end_position={x:w()+17*r-56/s,y:i-r-m()},T[1][0].end_position={x:w()+2*r-4/s,y:i-3*r-m()},T[1][1].end_position={x:w()+6*r-16/s,y:i-3*r-m()},T[1][2].end_position={x:w()+8*r-24/s,y:i-3*r-m()},T[1][3].end_position={x:w()+13*r-40/s,y:i-3*r-m()},T[1][4].end_position={x:w()+16*r-52/s,y:i-3*r-m()},T[1][5].end_position={x:w()+19*r-64/s,y:i-3*r-m()},T[2].forEach((function(n,i){n.position={x:T[0][i].end_position.x,y:T[0][i].end_position.y+m()}})),T[3].forEach((function(n,i){n.position={x:T[1][i].end_position.x,y:T[1][i].end_position.y+m()}}))},M=function(){return E(T[2]).concat(E(T[3]))},H=function(n,i,t){if(0===n){var e,o=[0,1,2,3,4,5,6,7];if(I(o),o[4]>o[5])e=[o[5],o[4]],o[4]=e[0],o[5]=e[1];for(var a=0;a<T[0].length;a++)T[0][a].release_time=350*o[a]}var r=!0,s=!1,l=void 0;try{for(var c,d=T[0][Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var h=c.value;n%g===0&&n>=h.release_time&&h.position.y<h.end_position.y&&h.moveDown(i-2/t)}}catch(u){s=!0,l=u}finally{try{r||null==d.return||d.return()}finally{if(s)throw l}}return T[0]},z=function(n,i,t){if(0===n){var e=[0,1,2,3,4,5];I(e);for(var o=0;o<T[1].length;o++)T[1][o].release_time=350*(T[0].length+e[o])}var a=!0,r=!0,s=!1,l=void 0;try{for(var c,d=T[1][Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var h=c.value;n%g===0&&n>=h.release_time&&h.position.y<h.end_position.y&&h.moveDown(i-2/t),h.position.y<h.end_position.y&&(a=!1)}}catch(u){s=!0,l=u}finally{try{r||null==d.return||d.return()}finally{if(s)throw l}}return 0===_()&&a&&b(1),T[1]},C=function(n,i,t){if(0!==j()||i%g!==0){j()>0&&i%g===0&&k(j()-1);for(var e=0;e<T.length;e++)for(var o=0;o<T[e].length;o++)i%g===0&&(T[e][o].position.y+=n-2/t)}else b(2)},G=function(){b(0),k(3);for(var n=0;n<T.length;n++)for(var i=0;i<T[n].length;i++)T[n][i].position.y=x()},P=t(2318),A=t.n(P),F=(0,p.default)((function(){return t.e(257).then(t.t.bind(t,4210,23)).then((function(n){return n.default}))}),{loadableGenerated:{webpack:function(){return[4210]}},ssr:!1}),O=function(){var n=(0,h.useState)({}),i=n[0],t=n[1],e=(0,h.useState)({}),o=e[0],a=e[1],s=(0,h.useState)(2),l=s[0],c=s[1],d=(0,h.useState)(0),f=d[0],p=d[1],g=(0,h.useState)(100),v=g[0],y=g[1];(0,h.useEffect)((function(){m(window.innerWidth)}));var m=function(n){var i={360:10.5,375:10,414:9,641:5.5,768:5,1024:3.7,1366:2.8,1536:2.45,1900:2},t=11;for(var e in i){if(!(n>parseInt(e)))break;t=i[e]}c(t),window.innerWidth<641?y(50):y(100)},w=function(n){return n.width/l},x=function(n){return n.height/l},j=function(n,t,e,o){n.image(i[o],t,e,w(i[o]),x(i[o]))};return(0,r.jsxs)("div",{className:A().container,id:"tetris-container",children:[(0,r.jsx)(F,{preload:function(n){var i={};i.square=n.loadImage("/tetris_assets/tiles/square.png"),i.l1=n.loadImage("/tetris_assets/tiles/l1.png"),i.l3=n.loadImage("/tetris_assets/tiles/l3.png"),i.l4=n.loadImage("/tetris_assets/tiles/l4.png"),i.n1=n.loadImage("/tetris_assets/tiles/n1.png"),i.n2=n.loadImage("/tetris_assets/tiles/n2.png"),i.t=n.loadImage("/tetris_assets/tiles/t.png"),i.t1=n.loadImage("/tetris_assets/tiles/t1.png"),i.i1=n.loadImage("/tetris_assets/tiles/i1.png"),t(i)},setup:function(n,i){document.querySelector("#tetris-container");a({width:window.innerWidth,height:window.innerHeight});var t=n.createCanvas(window.innerWidth,window.innerHeight).parent(i),e=(window.innerWidth-n.width)/2,o=(window.innerHeight-n.height)/2;t.position(e,o)},draw:function(n){n.clear(),n.background("rgb(0%, 0%, 0%)"),n.stroke(v),n.fill(240);for(var t,e=(o.width-w(i.square)/2*21)/2+216/l-w(i.square)/2,a=e;a<n.width;a+=w(i.square)/2-3.5/l)n.line(a,0,a,n.height);for(var r=e;r>=0;r-=w(i.square)/2-3.5/l)n.line(r,0,r,n.height);for(var s=n.height;s>=0;s-=x(i.square)/2-3/l)n.line(0,s,n.width,s),t=s-x(i.square)/2*2;0===f&&W(o.width,o.height,t,w(i.square)/2,l);var c=M(),d=H(f,w(i.square)/2,l),h=z(f,w(i.square)/2,l),u=!0,g=!1,y=void 0;try{for(var m,b=c[Symbol.iterator]();!(u=(m=b.next()).done);u=!0){var k=m.value;j(n,k.position.x,k.position.y,k.type)}}catch(R){g=!0,y=R}finally{try{u||null==b.return||b.return()}finally{if(g)throw y}}var N=!0,S=!1,q=void 0;try{for(var E,T=d[Symbol.iterator]();!(N=(E=T.next()).done);N=!0){var I=E.value;f>=I.release_time&&j(n,I.position.x,I.position.y,I.type)}}catch(R){S=!0,q=R}finally{try{N||null==T.return||T.return()}finally{if(S)throw q}}var P=!0,A=!1,F=void 0;try{for(var O,V=h[Symbol.iterator]();!(P=(O=V.next()).done);P=!0){var X=O.value;f>=X.release_time&&j(n,X.position.x,X.position.y,X.type)}}catch(R){A=!0,F=R}finally{try{P||null==V.return||V.return()}finally{if(A)throw F}}2===_()?(G(),p(0)):1===_()?(C(w(i.square)/2,f,l),p(f+1)):p(f+1)},windowResized:function(n){var t=document.querySelector("#tetris-container");a({width:t.offsetWidth,height:t.offsetHeight}),m(t.offsetWidth),n&&n.resizeCanvas(t.offsetWidth,t.offsetHeight),p(0),b(0),W(t.offsetWidth,t.offsetHeight,w(i.square)/2,l)},className:"canvas tetris-canvas"}),(0,r.jsx)("div",{className:"prizes-content text-white text-center py-3 px-2 p-md-3 p-lg-4 p-xl-5",children:(0,r.jsxs)(u.E.div,{initial:{x:-100},whileInView:{x:0},animate:{duration:5},viewport:{once:!0},children:[(0,r.jsx)("h1",{className:"display-1 mb-5",children:"Paritcipants: 25000+"}),(0,r.jsx)("h1",{className:"display-1 mb-5",children:"Partners: 30+"}),(0,r.jsx)("h1",{className:"display-1 mb-5",children:"Prizes Worth: \u20b93,000,000+ "})]})})]})};function V(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var X=function(){function n(i,t,e){!function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),this.type=i,this.position={x:t,y:e},this.end_position={x:0,y:0},this.release_time=0,this.direction=0}var i,t,e;return i=n,(t=[{key:"moveToEndPosition",value:function(){this.position.x<this.end_position.x&&(this.position.x+=Math.min(5,this.end_position.x-this.position.x)),this.position.x>this.end_position.x&&(this.position.x-=Math.min(5,this.position.x-this.end_position.x)),this.position.y<this.end_position.y&&(this.position.y+=Math.min(5,this.end_position.y-this.position.y)),this.position.y>this.end_position.y&&(this.position.y-=Math.min(5,this.position.y-this.end_position.y))}},{key:"moveLeftandRight",value:function(n){0===this.direction?(this.position.x+=n,this.end_position.x+=n):(this.position.x-=n,this.end_position.x-=n)}}])&&V(i.prototype,t),e&&V(i,e),n}(),R={coordinates:[[0,0],[1,0],[2,0],[0,1],[0,2],[0,2],[1,2],[2,2],[0,3],[0,4],[1,4],[2,4]],spacing:4},D={coordinates:[[0,0],[0,1],[0,2],[1,3],[2,4],[3,3],[4,2],[4,1],[4,0]],spacing:6},U={coordinates:[[0,0],[0,1],[0,2],[0,3],[0,4],[1,1],[2,2],[3,3],[4,4],[4,3],[4,2],[4,1],[4,0]],spacing:6},B={coordinates:[[0,0],[1,0],[2,0],[1,1],[1,2],[1,3],[1,4]],spacing:4},K={coordinates:[[2,0],[0,0],[1,0],[0,1],[0,2],[1,2],[2,2],[2,2],[2,3],[0,4],[1,4],[2,4]],spacing:4},L="EVENTS",Y=[],$=function(n,i,t,e){for(var o=[],a=!0,r=0;r<Y.length;r++){for(var s=[],l=0;l<Y[r].aliens.length;l++)s.push(Y[r].aliens[l]),Y[r].aliens[l].position.x===Y[r].aliens[l].end_position.x&&Y[r].aliens[l].position.y===Y[r].aliens[l].end_position.y||(a=!1);o.push(s)}for(var c=0;c<Y.length;c++)for(var d=0;d<Y[c].aliens.length;d++)if(a&&t%15===0){var h=5*i,u=n-5*i;Y[0].aliens[0].position.x<=h?Y[c].aliens[d].direction=0:Y[Y.length-1].aliens[0].position.x>=u&&(Y[c].aliens[d].direction=1)}for(var f=0;f<Y.length;f++)for(var p=0;p<Y[f].aliens.length;p++)a?t%15===0&&Y[f].aliens[p].moveLeftandRight(40/e):Y[f].aliens[p].moveToEndPosition();return o},J=t(5938),Q=t.n(J),Z=(0,p.default)((function(){return t.e(257).then(t.t.bind(t,4210,23)).then((function(n){return n.default}))}),{loadableGenerated:{webpack:function(){return[4210]}},ssr:!1}),nn=function(){var n=(0,h.useState)({}),i=n[0],t=n[1],e=(0,h.useState)([]),o=e[0],a=e[1],s=(0,h.useState)(4),l=s[0],c=s[1],d=(0,h.useState)(0),u=d[0],f=d[1];(0,h.useEffect)((function(){p(window.innerWidth)}),[]);var p=function(n){var i={360:20,375:19,414:17,641:15,768:14,1024:10,1366:8,1536:6,1900:4},t=20;for(var e in i){if(!(n>parseInt(e)))break;t=i[e]}c(t)},g=function(n){return n.width/l},v=function(n){return n.height/l},y=function(n,i,t,e){n.image(o[e],i,t,g(o[e]),v(o[e]))};return(0,r.jsxs)("div",{className:Q().container,id:"galaga-container",children:[(0,r.jsx)("div",{className:Q().stars}),(0,r.jsx)("div",{className:Q().twinkling}),(0,r.jsx)(Z,{preload:function(n){for(var i=[],t=0;t<3;t++)i.push(n.loadImage("/galaga_assets/aliens/alien".concat(t,".png")));a(i)},setup:function(n,i){document.querySelector("#galaga-container");t({width:window.innerWidth,height:window.innerHeight});var e=n.createCanvas(window.innerWidth,window.innerHeight).parent(i),a=(window.innerWidth-n.width)/2,r=(window.innerHeight-n.height)/2;e.position(a,r),function(n,i){for(var t=0;t<L.length;t++){var e=void 0,o=void 0,a=void 0,r=[];switch(L[t]){case"E":e=R.coordinates.length,o=R.spacing,a=R;break;case"V":e=D.coordinates.length,o=D.spacing,a=D;break;case"T":e=B.coordinates.length,o=B.spacing,a=B;break;case"N":e=U.coordinates.length,o=U.spacing,a=U;break;case"S":e=K.coordinates.length,o=K.spacing,a=K}for(var s=0;s<e;s++){var l=0,c=0;1===Math.floor(2*Math.random())?(l=Math.floor(Math.random()*n),c=Math.floor(2*Math.random())*i):(l=Math.floor(2*Math.random())*n,c=Math.floor(Math.random()*i)),r.push(new X(2,l,c))}Y.push({aliens:r,character:a.coordinates,spacing:o})}}(window.innerWidth,window.innerHeight),function(n,i,t,e,o){for(var a=(n-27*t)/2,r=(i-5*e)/4-1.2*o,s=0;s<Y.length;s++){for(var l=0;l<Y[s].aliens.length;l++)Y[s].aliens[l].end_position={x:a+Y[s].character[l][0]*t,y:r+Y[s].character[l][1]*e};a+=Y[s].spacing*t}}(window.innerWidth,window.innerHeight,g(o[0]),v(o[0]),l)},draw:function(n){n.clear();for(var t=$(i.width,g(o[0]),u,l),e=0;e<t.length;e++)for(var a=0;a<t[e].length;a++)y(n,t[e][a].position.x,t[e][a].position.y,t[e][a].type);f(u+1)},windowResized:function(n){var i=document.querySelector("#galaga-container");t({width:i.offsetWidth,height:i.offsetHeight}),p(i.offsetWidth),n&&n.resizeCanvas(i.offsetWidth,i.offsetHeight)},className:"canvas ".concat(Q().canvas)}),(0,r.jsxs)("div",{className:Q().galaga_text,children:[(0,r.jsxs)("div",{className:Q().technical,children:[(0,r.jsx)("div",{className:Q().heading,children:"Technical"}),"The Technical events of Felicity are known for their fun and challenging questions, and see a mammoth turnout every year. There is a plethora of events, ranging from the well-known 'Codecraft', 'Botomania', 'Break In', 'Escape Room' and many many more. Get geared to put your technical skills to their ultimate test and have great fun."]}),(0,r.jsxs)("div",{className:Q().cultural,children:[(0,r.jsx)("div",{className:Q().heading,children:"Cultural"}),"There are diverse cultures displayed and events range from dancing to sports and gaming to even debating! There are also some limited time workshops. Be sure not to miss out on this fun filled journey filled with goodies and prizes."]}),(0,r.jsxs)("div",{className:Q().prizes,children:[(0,r.jsx)("div",{className:Q().heading,children:"Prizes"}),"No matter how fun an event is, winning a prize is always an exhilarating moment. Take part in events and you get a chance to win valuable prizes ranging from hefty cash prizes, goodies from EA\u2122, vouchers from Croma\u2122, Monster\u2122 goodies and a whole lot more."]})]})]})};function tn(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"Felicity '22"})}),(0,r.jsxs)("div",{className:"content",style:{overflowX:"hidden"},children:[(0,r.jsx)(d,{}),(0,r.jsx)(f,{}),(0,r.jsx)(O,{}),(0,r.jsx)(nn,{})]})]})}},5938:function(n){n.exports={container:"Galaga_container__fYVX_",stars:"Galaga_stars__T8XyP",twinkling:"Galaga_twinkling__aV95F","move-twink-back":"Galaga_move-twink-back__8tw6W",canvas:"Galaga_canvas__UXiC6",galaga_text:"Galaga_galaga_text__TH6nr",technical:"Galaga_technical__SATld",cultural:"Galaga_cultural__fa2Kx",prizes:"Galaga_prizes__UHaSf",heading:"Galaga_heading__dY4K_"}},2318:function(n){n.exports={container:"Tetris_container__oFtPp"}}},function(n){n.O(0,[302,774,888,179],(function(){return i=8581,n(n.s=i);var i}));var i=n.O();_N_E=i}]);