(function(){var m=void 0,n=!0,p=null,q=!1,r=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return u.apply(p,arguments)},ea=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var v=document,w=window;var x=function(a,b){this.width=a;this.height=b};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function y(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var z=function(a,b,c){a.addEventListener?a.addEventListener(b,c,q):a.attachEvent&&a.attachEvent("on"+b,c)},A=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,q):a.detachEvent&&a.detachEvent("on"+b,c)},fa={},B=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return q}};var ga=!!window.google_async_iframe_id,D=ga&&window.parent||window,E=function(){if(ga&&!B(D)){for(var a="."+v.domain;2<a.split(".").length&&!B(D);)v.domain=a=a.substr(a.indexOf(".")+1),D=window.parent;B(D)||(D=window)}return D};var H=function(a,b){this.x=a!==m?a:0;this.y=b!==m?b:0};H.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};H.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var I,ha,J,ia,ja=function(){return r.navigator?r.navigator.userAgent:p};ia=J=ha=I=q;var K;if(K=ja()){var ka=r.navigator;I=0==K.indexOf("Opera");ha=!I&&-1!=K.indexOf("MSIE");J=!I&&-1!=K.indexOf("WebKit");ia=!I&&!J&&"Gecko"==ka.product}var L=I,M=ha,N=ia,O=J,la=function(){var a=r.document;return a?a.documentMode:m},ma;
a:{var P="",Q;if(L&&r.opera)var na=r.opera.version,P="function"==typeof na?na():na;else if(N?Q=/rv\:([^\);]+)(\)|;)/:M?Q=/MSIE\s+([^\);]+)(\)|;)/:O&&(Q=/WebKit\/(\S+)/),Q)var oa=Q.exec(ja()),P=oa?oa[1]:"";if(M){var pa=la();if(pa>parseFloat(P)){ma=String(pa);break a}}ma=P}
var qa=ma,ra={},sa=function(a){var b;if(!(b=ra[a])){b=0;for(var c=String(qa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",i=e[f]||"",l=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var j=l.exec(g)||["","",""],k=h.exec(i)||["","",""];if(0==j[0].length&&0==k[0].length)break;b=((0==j[1].length?0:parseInt(j[1],10))<(0==k[1].length?0:parseInt(k[1],10))?-1:(0==j[1].length?
0:parseInt(j[1],10))>(0==k[1].length?0:parseInt(k[1],10))?1:0)||((0==j[2].length)<(0==k[2].length)?-1:(0==j[2].length)>(0==k[2].length)?1:0)||(j[2]<k[2]?-1:j[2]>k[2]?1:0)}while(0==b)}b=ra[a]=0<=b}return b},ta=r.document,ua=!ta||!M?m:la()||("CSS1Compat"==ta.compatMode?parseInt(qa,10):5);var va;!N&&!M||M&&M&&9<=ua||N&&sa("1.9.1");M&&sa("9");var S=function(a){return a?new wa(R(a)):va||(va=new wa)},R=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},wa=function(a){this.u=a||r.document||document};wa.prototype.createElement=function(a){return this.u.createElement(a)};var xa=function(a){var b=a.u;a=!O&&"CSS1Compat"==b.compatMode?b.documentElement:b.body;b=b.parentWindow||b.defaultView;return new H(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var T=function(a,b,c,e){this.top=a;this.right=b;this.bottom=c;this.left=e};T.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};T.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var U=function(a,b){var c;a:{c=R(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,p))){c=c[b]||c.getPropertyValue(b)||"";break a}c=""}return c||(a.currentStyle?a.currentStyle[b]:p)||a.style&&a.style[b]},ya=function(a){var b=a.getBoundingClientRect();M&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},za=function(a){if(M&&!(M&&8<=ua))return a.offsetParent;var b=R(a),c=U(a,
"position"),e="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=U(a,"position"),e=e&&"static"==c&&a!=b.documentElement&&a!=b.body,!e&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return p},Aa=function(a){var b,c=R(a),e=U(a,"position"),d=N&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==e&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new H(0,0),g;b=c?R(c):document;if(g=M)if(g=!(M&&9<=ua))g=
"CSS1Compat"!=S(b).u.compatMode;g=g?b.body:b.documentElement;if(a==g)return f;if(a.getBoundingClientRect)b=ya(a),a=xa(S(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!d)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{d=a;do{f.x+=d.offsetLeft;f.y+=d.offsetTop;d!=a&&(f.x+=d.clientLeft||0,f.y+=d.clientTop||0);if(O&&"fixed"==U(d,"position")){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}d=d.offsetParent}while(d&&d!=a);if(L||O&&"absolute"==
e)f.y-=c.body.offsetTop;for(d=a;(d=za(d))&&d!=c.body&&d!=g;)if(f.x-=d.scrollLeft,!L||"TR"!=d.tagName)f.y-=d.scrollTop}return f},Ba=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var V=function(a,b,c,e,d,f,g,i,l){this.a=Ca;this.m=0;this.p=this.l=-1;this.e=[0,0,0,0,0];this.j=[0,0,0,0,0];this.f=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.k="";this.s=q;this.A=n;this.g=e;this.n=this.c=-1;this.v=b;this.b=0;this.d=d;this.w=g||"";this.z=i||"";this.q=function(){};this.element=c;this.r=0;this.h=-1;this.o=-1!=b.indexOf("39482001");this.B=-1!=b.indexOf("39482011");this.C=0;this.i=l||Ca;this.G=b?-1!=b.indexOf("dcopt=anid"):q;Da(this,a,f)},Ca=new T(0,0,0,0);
V.prototype.update=function(a,b,c,e,d){if(!(0>this.g)){var f=c?this.a:Da(this,e,d);e=a-this.g||1;this.g=a;var g=Math.max(f.top,b.top),i=Math.min(f.bottom,b.bottom),l=d=-1;if(0<this.m&&g<=i){var h=Math.max(f.left,b.left),f=Math.min(f.right,b.right);h<=f&&(g=(i-g)*(f-h)/this.m,d=1<=g?0:0.75<=g?1:0.5<=g?2:0.25<=g?3:4,0>this.l&&(this.l=a),this.p=a,0.5<=g&&(a=100*this.m/((b.bottom-b.top)*(b.right-b.left)),l=20<=a?0:10<=a?1:5<=a?2:2.5<=a?3:4))}-1!=this.c&&(this.e[this.c]+=e,2>=this.c&&-1!=this.n&&(this.zoom[this.n]+=
e));for(a=this.c;0<=a&&4>=a;a++)if(this.f[a]+=e,c||-1==d||a<d)this.f[a]>this.j[a]&&(this.j[a]=this.f[a]),this.f[a]=0;this.c=c?-1:d;this.n=l;this.q(this,b)}};V.prototype.D=function(a){this.h=a()};V.prototype.t=function(a){a=a();this.r+=a-this.h;this.h=-1};
var Ea=function(a){return(a.o||a.B)&&!!a.element&&!!a.element.contentWindow&&1>a.C},Da=function(a,b,c){var e,d;b=!c||5!=a.d&&6!=a.d?b.top:b;try{if(a.element){d=a.element.getBoundingClientRect();var f=a.element,g=new H(0,0),i=R(f)?R(f).parentWindow||R(f).defaultView:window;do{var l;if(i==b)l=Aa(f);else{var h=f,j=new H;if(1==h.nodeType){if(h.getBoundingClientRect){var k=ya(h);j.x=k.left;j.y=k.top}else{var s=xa(S(h)),C=Aa(h);j.x=C.x-s.x;j.y=C.y-s.y}if(N&&!sa(12)){c=j;var t;var F=m;M?F="-ms-transform":
O?F="-webkit-transform":L?F="-o-transform":N&&(F="-moz-transform");var G=m;F&&(G=U(h,F));G||(G=U(h,"transform"));if(G){var ba=G.match(Ba);t=!ba?new H(0,0):new H(parseFloat(ba[1]),parseFloat(ba[2]))}else t=new H(0,0);j=new H(c.x+t.x,c.y+t.y)}}else{var nb="function"==aa(h.F);c=h;h.targetTouches?c=h.targetTouches[0]:nb&&h.F().targetTouches&&(c=h.F().targetTouches[0]);j.x=c.clientX;j.y=c.clientY}l=j}c=l;g.x+=c.x;g.y+=c.y}while(i&&i!=b&&(f=i.frameElement)&&(i=i.parent));e=g}else d=Ca,e=new H(0,0);var Pa=
e.x+a.i.left,Qa=e.y+a.i.top,ob=a.i.right||d.right-d.left,pb=a.i.bottom||d.bottom-d.top;a.a=new T(Math.round(Qa),Math.round(Pa+ob),Math.round(Qa+pb),Math.round(Pa))}catch(yb){a.a=a.i}a.m=(a.a.bottom-a.a.top)*(a.a.right-a.a.left);return a.a};var Fa=function(a){var b=w;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new x(-1,-1);else{var e=(b||window).document,d="CSS1Compat"==e.compatMode?e.documentElement:e.body;c=new x(d.clientWidth,d.clientHeight)}return c}catch(f){return new x(-12245933,-12245933)}};var Ia=function(){Ga(q);Ha()},Ha=function(){Ja(W,q)},Ja=function(a,b){if(!(Ka||0==a.length)){var c=La;if(!(p==c||-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)){var e=p;try{e=xa(S((w.top||r||window).document))}catch(d){return}window.clearTimeout(X);X=p;for(var c=new T(e.y,e.x+c.width,e.y+c.height,e.x),e=Y(),f=0;f<a.length;f++)a[f].update(e,c,b,w,Ma);Na+=Y()-e;++Oa;b||(X=window.setTimeout(function(){Ja(W,q)},1E3))}}},Ra=function(){var a;a=w.document;a={visible:1,hidden:2,prerender:3,
preview:4}[a.webkitVisibilityState||a.mozVisibilityState||""]||0;(a=1==a||0==a)&&Ga(n);Ja(W,!a)},W=[],Ka=q,Sa=(new Date).getTime(),Z=-1,La=p,Ta=p,Ua=p,X=p,Ma=!B(w.top),Y=function(){return(new Date).getTime()-Sa},Va=0,Wa=0,Na=0,Oa=0,Xa=-1,Za=function(){for(var a=12E4,b=Y(),c=0;c<W.length;++c){var e;e=W[c];if(Ea(e)){var d;d=e.e[2]+e.e[1]+e.e[0];2>=e.c&&-1!=e.c&&(d+=b-e.p);if(0<=e.h||12E4>d)e=12E4-d;else{if(Ea(e)){d=m;b:{if(d=e.v)if((d=d.match("eid=([^&]+)"))&&2==d.length){d=d[1];break b}d=""}var f=
e.o?"39482002":"39482011";e.o&&(d=d.replace("39482001",f));f={"0":"autorefresh"};f[1]=d;try{var g=w.JSON.stringify(f);e.element.contentWindow.postMessage(g,"*");e.C++}catch(i){e.o=q,e.B=q}}e=12E4}}else e=12E4;a=Math.min(a,e)}Ya()&&(a=Math.max(a,5E3),window.setTimeout(Za,a))},Ya=function(){for(var a=0;a<W.length;++a)if(Ea(W[a]))return n;return q},Ga=function(a){La=Fa(n);if(!a){Ta=w.outerWidth?new x(w.outerWidth,w.outerHeight):new x(-12245933,-12245933);a=w;a.top!=a&&(a=a.top);var b=0,c=0,e=La;try{var d=
a.document,f=d.body,g=d.documentElement;if("CSS1Compat"==d.compatMode&&g.scrollHeight)b=g.scrollHeight!=e.height?g.scrollHeight:g.offsetHeight,c=g.scrollWidth!=e.width?g.scrollWidth:g.offsetWidth;else{var i=g.scrollHeight,l=g.scrollWidth,h=g.offsetHeight,j=g.offsetWidth;g.clientHeight!=h&&(i=f.scrollHeight,l=f.scrollWidth,h=f.offsetHeight,j=f.offsetWidth);i>e.height?i>h?(b=i,c=l):(b=h,c=j):i<h?(b=i,c=l):(b=h,c=j)}Ua=new x(c,b)}catch(k){Ua=new x(-12245933,-12245933)}}};var $,$a=p,bb=function(){if(2==ab()||Ya())return n;for(var a=W,b=0;b<a.length;b++)if(!a[b].s)return n;return q},eb=function(){if(!(0<Z)){try{if(!cb()||"function"!=typeof $.getNewBlocks)return;Ga(q);db(q)}catch(a){}$a=window.setTimeout(eb,250)}},db=function(a){var b=0,c=Y();$.getNewBlocks(function(d,e,f,h){b++;var j=-1,k=q;a||h?j=c:k=n;var s=new V(window.top,e,d,j,f,Ma);s.q=fb;s.k=gb(hb,e);s.b=ib(e);W.push(s);if(k){var C=function(){s.g=Y();Ra()};("msie"in fa?fa.msie:fa.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&
!window.opera?z(d,"readystatechange",function(){"complete"==d.readyState&&C()}):z(d,"load",C)}},a);if(a)for(var e=W.length,d=0;d<e;++d){var f=W[d];0>=f.g&&(f.g=c)}},mb=function(){try{var a=E(),b=Y();Z=b;window.clearTimeout($a);$a=p;Ga(q);if(cb()){Va=$.numBlocks();if("function"!=typeof $.getNewBlocks){var c=[];Wa=0;$.getBlocks(function(a,d,e){Wa++;a=new V(window.top,d,a,b,e,Ma);a.q=fb;a.k=gb(hb,d);a.b=ib(d);c.push(a)});W=c}else db(n),Wa=W.length;var e,d;v.mozVisibilityState?d="mozvisibilitychange":
v.webkitVisibilityState&&(d="webkitvisibilitychange");(e=d)&&z(v,e,Ra);Ra();for(e=0;e<W.length;++e)if(Ea(W[e])){window.setTimeout(Za,12E4);break}if(2!=ab()){z(w,"message",jb);e=W;for(d=0;d<e.length;++d){var f=e[d];if(f.element&&f.element.contentWindow){var g=f,i={"0":"goog_get_override"};try{var l=window.JSON.stringify(i);g.element.contentWindow.postMessage(l,"*")}catch(h){}}}w.setTimeout(kb,500)}var j=2==$.getOseId();z(a,"scroll",Ha);z(a,"resize",Ia);if(j)for(var k,a=0;a<W.length;++a)if(k=W[a],k.element){var s=
u(k.D,k,Y);z(k.element,"mouseover",s);var C=u(k.t,k,Y);z(k.element,"mouseout",C)}window.setTimeout(function(){lb("t")},36E5);Xa=Y()-b}else lb("c")}catch(t){W=[],lb("x")}},lb=function(a){window.clearTimeout(X);X=p;var b=E(),c=b.document;$||($=Goog_AdSense_getAdAdapterInstance());if(!Ka){if(2==ab()){var e=0<=Z?Y()-Z:-1;"u"==a&&-1==Xa&&(a="l",W=[],e=Y());var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];var f={};try{var g=W;if(0<g.length){Ja(g,n);for(c=0;c<
g.length;c++)if(0<g[c].b){0<g[c].h&&g[c].t(Y);var i=g[c],l=i.a,h=["p:",l.top,l.left,l.bottom,l.right];h.push("tos:",i.e.join(","));h.push("mtos:",i.j.join(","));h.push("rs:",i.d);var j=5==i.d||6==i.d;j||(h.push("zoom:",i.zoom.join(",")),h.push("ht:",i.r));0<=i.l&&h.push("tfs:",i.l,"tls:",i.p);i.k&&h.push("fp:",i.k);j&&(i.z&&h.push("ord:",i.z),i.w&&h.push("amd:",i.w,";"),i.G&&h.push("anid:","1"));f[g[c].b]="adk"+g[c].b+"="+y(h.join(","));d.push(f[g[c].b])}c=La;d.push("bs="+c.width+","+c.height);c=
Ta;d.push("bos="+c.width+","+c.height);c=Ua;d.push("ps="+c.width+","+c.height);b.screen&&d.push("ss="+b.screen.width+","+b.screen.height);var k=gb(qb,g[0].v);if(k&&("&"==k.charAt(0)||"?"==k.charAt(0)))k=k.slice(1);d.push("fp="+y(k))}else d.push("url="+y(b.location.href)),c.referrer&&d.push("referrer="+y(c.referrer)),$&&(d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+ab()));d.push("tt="+e);d.push("pt="+Z);d.push("deb="+y([1,Va,Wa,Na,Oa,Xa].join("-")));d.push("r="+
a);rb&&d.push("ovr=t");if(b.top!=b){d.push("iframe_loc="+y(b.location.href));var s=Fa(q);d.push("is="+s.width+","+s.height)}}catch(C){d.push("error")}a=d.join("&");try{b.google_image_requests||(b.google_image_requests=[]);var t=b.document.createElement("img");t.src=a;b.google_image_requests.push(t)}catch(F){}1<g.length&&d.splice(2,g.length-1);for(c=0;c<g.length;c++)if(t=g[c],0!=c&&d.splice(1,1,f[t.b]),a=d.join("&"),t.element&&t.element.contentWindow)try{e={"0":"goog_image_request"};e[3]=a;e[4]=t.b;
var G=b.JSON.stringify(e);t.element.contentWindow.postMessage(G,"*")}catch(ba){}}Ka=n}},hb=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,qb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,gb=function(a,b){var c=b.match(a);return c?c.join(""):""},rb=q,sb=0,cb=function(){var a=E().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return q;$=Goog_AdSense_getAdAdapterInstance();return n},tb=function(a,b){if(b){a(b);var c=b.frames;if(c){var e=
c.length,d;for(d=0;d<e;++d)tb(a,c[d])}}},ub=function(a,b){try{b.postMessage(a,"*")}catch(c){}},fb=function(a,b){if(a&&!a.s){var c=1E3<=Math.max(a.f[2],a.j[2]);if(c||a.A){var e=c?"1":"0";a.A=q;var d=$.getCorrelator(),f=a.a,e=["{vi:",e,",cl:",d,",adk:",a.b,",rs:",a.d,",pl:",f.left,",pr:",f.right,",pt:",f.top,",pb:",f.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,"}"].join(""),f=a.element;try{var d=[],g=f.contentWindow||(f.contentDocument||f.contentWindow.document).parentWindow||(f.contentDocument||
f.contentWindow.document).defaultView;if(g)d=[g];else{var i;var l,h=document,h=f||h;i=h.querySelectorAll&&h.querySelector?h.querySelectorAll("IFRAME"):l=h.getElementsByTagName("IFRAME");for(h=0;h<i.length;++h)(g=i[h].contentWindow||(i[h].contentDocument||i[h].contentWindow.document).parentWindow||(i[h].contentDocument||i[h].contentWindow.document).defaultView)&&d.push(g)}var j=d.length;if(0<j)for(var k=ea(ub,e),h=0;h<j;++h)tb(k,d[h])}catch(s){}if(c&&(a.s=n,!bb()&&(c=2==$.getOseId(),g=E(),A(g,"scroll",
Ha),A(g,"resize",Ia),c)))for(g=0;g<W.length;++g)c=W[g],c.element&&(i=u(c.D,c,Y),A(c.element,"mouseover",i),i=u(c.t,c,Y),A(c.element,"mouseout",i))}}},ib=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},jb=function(a){if(a.data){var b;a:{a=a.data;var c=window;if("object"==typeof a)b=a;else{if("string"==typeof a)try{var e=c.JSON.parse(a);e[2]=n;b=e;break a}catch(d){}b=p}}b&&"goog_provide_override"==b[0]&&(b=b[1],0<b&&(1>=b&&b>sb)&&(sb=b))}},kb=function(){if(0<
sb){var a;a:{a=[2];var b=sb;if(!(1E-4>Math.random())){var c=Math.random();if(c<b){a=a[Math.floor(c/b*a.length)];break a}}a=p}2==a&&(rb=n)}},ab=function(){return rb?2:$?$.getOseId():0};var vb=E();z(vb,"unload",function(){lb("u")});var wb=E();if("complete"==wb.document.readyState||wb.google_onload_fired)mb();else{eb();var xb=E();z(xb,"load",function(){window.setTimeout(mb,100)})};})();
