"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2115],{2171:function(e,t,n){let r;n.d(t,{$b:function(){return eN},Bb:function(){return k},C3:function(){return eM},Cq:function(){return ez},De:function(){return eo},Do:function(){return eq},FE:function(){return e4},Gs:function(){return eb},H:function(){return L},HZ:function(){return g},Hg:function(){return _},KE:function(){return I},M3:function(){return y},OB:function(){return d},Od:function(){return ej},Ps:function(){return e3},QX:function(){return et},Re:function(){return $},Rh:function(){return e6},Rt:function(){return en},TW:function(){return er},Tx:function(){return ti},UG:function(){return el},UL:function(){return ev},VD:function(){return e7},VG:function(){return x},XD:function(){return tt},XU:function(){return eY},Xu:function(){return eu},YK:function(){return ta},ZQ:function(){return eO},Zt:function(){return eJ},Zz:function(){return eG},a6:function(){return J},az:function(){return ei},bR:function(){return e_},cq:function(){return eC},dj:function(){return eX},dk:function(){return ed},do:function(){return eI},fZ:function(){return ee},global:function(){return h},go:function(){return e5},gw:function(){return tr},hQ:function(){return E},j9:function(){return e1},jS:function(){return eL},ln:function(){return D},lo:function(){return eg},mA:function(){return eQ},mR:function(){return eP},nn:function(){return eA},pn:function(){return function e(t){return!!t&&(eb(t)?e(t.parentElement):!!t.getClientRects&&!!t.getClientRects().length)}},pp:function(){return ts},qL:function(){return te},qo:function(){return e2},tA:function(){return T},to:function(){return to},wW:function(){return em},x:function(){return tn},xZ:function(){return eR},yy:function(){return ep}});var i=n(7632),o=n(2564),s=n(6627),l=n(6069),a=n(5066),c=n(8402),u=n(4519);try{r={window,document}}catch(e){r={window:{},document:{}}}var h=r;let f=function(){try{return navigator.userAgent.toLowerCase()}catch(e){return""}}(),d={isMac:p(f),isWindows:f.indexOf("windows")>-1,isGecko:!!f.match(/gecko\/\d+/),isSafari:f.indexOf(" applewebkit/")>-1&&-1===f.indexOf("chrome"),isiOS:!!f.match(/iphone|ipad/i)||p(f)&&navigator.maxTouchPoints>0,isAndroid:f.indexOf("android")>-1,isBlink:f.indexOf("chrome/")>-1&&0>f.indexOf("edge/"),get isMediaForcedColors(){return!!h.window.matchMedia&&h.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!h.window.matchMedia&&h.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:function(){let e=!1;try{e=0==="ć".search(RegExp("[\\p{L}]","u"))}catch(e){}return e}()}};function p(e){return e.indexOf("macintosh")>-1}function g(e,t,n,r){n=n||function(e,t){return e===t};let i=Array.isArray(e)?e:Array.prototype.slice.call(e),o=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(e,t,n){let r=m(e,t,n);if(-1===r)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};let i=m(b(e,r),b(t,r),n);return{firstIndex:r,lastIndexOld:e.length-i,lastIndexNew:t.length-i}}(i,o,n);return r?function(e,t){let{firstIndex:n,lastIndexOld:r,lastIndexNew:i}=e;if(-1===n)return Array(t).fill("equal");let o=[];return n>0&&(o=o.concat(Array(n).fill("equal"))),i-n>0&&(o=o.concat(Array(i-n).fill("insert"))),r-n>0&&(o=o.concat(Array(r-n).fill("delete"))),i<t&&(o=o.concat(Array(t-i).fill("equal"))),o}(s,o.length):function(e,t){let n=[],{firstIndex:r,lastIndexOld:i,lastIndexNew:o}=t;return o-r>0&&n.push({index:r,type:"insert",values:e.slice(r,o)}),i-r>0&&n.push({index:r+(o-r),type:"delete",howMany:i-r}),n}(o,s)}function m(e,t,n){for(let r=0;r<Math.max(e.length,t.length);r++)if(void 0===e[r]||void 0===t[r]||!n(e[r],t[r]))return r;return -1}function b(e,t){return e.slice(t).reverse()}function _(e,t,n){let r,i,o;n=n||function(e,t){return e===t};let s=e.length,l=t.length;if(s>200||l>200||s+l>300)return _.fastDiff(e,t,n,!0);if(l<s){let n=e;e=t,t=n,r="delete",i="insert"}else r="insert",i="delete";let a=e.length,c=t.length,u=c-a,h={},f={};function d(o){let s=(void 0!==f[o-1]?f[o-1]:-1)+1,l=void 0!==f[o+1]?f[o+1]:-1,u=s>l?-1:1;h[o+u]&&(h[o]=h[o+u].slice(0)),h[o]||(h[o]=[]),h[o].push(s>l?r:i);let d=Math.max(s,l),p=d-o;for(;p<a&&d<c&&n(e[p],t[d]);)p++,d++,h[o].push("equal");return d}let p=0;do{for(o=-p;o<u;o++)f[o]=d(o);for(o=u+p;o>u;o--)f[o]=d(o);f[u]=d(u),p++}while(f[u]!==c);return h[u].slice(1)}function w(){return function e(){e.called=!0}}_.fastDiff=g;class y{source;name;path;stop;off;return;constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=w(),this.off=w()}}let v=Array(256).fill("").map((e,t)=>("0"+t.toString(16)).slice(-2));function E(){let[e,t,n,r]=crypto.getRandomValues(new Uint32Array(4));return"e"+v[e>>0&255]+v[e>>8&255]+v[e>>16&255]+v[e>>24&255]+v[t>>0&255]+v[t>>8&255]+v[t>>16&255]+v[t>>24&255]+v[n>>0&255]+v[n>>8&255]+v[n>>16&255]+v[n>>24&255]+v[r>>0&255]+v[r>>8&255]+v[r>>16&255]+v[r>>24&255]}let T={get(e="normal"){return"number"!=typeof e?this[e]||this.normal:e},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function x(e,t){let n=T.get(t.priority);for(let r=0;r<e.length;r++)if(T.get(e[r].priority)<n){e.splice(r,0,t);return}e.push(t)}class k extends Error{context;data;constructor(e,t,n){super(function(e,t){let n=new WeakSet,r=t?` ${JSON.stringify(t,(e,t)=>{if("object"==typeof t&&null!==t){if(n.has(t))return`[object ${t.constructor.name}]`;n.add(t)}return t})}`:"",i=A(e);return e+r+i}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return"CKEditorError"===e}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;let n=new k(e.message,t);throw n.stack=e.stack,n}}function I(e,t){console.warn(...C(e,t))}function L(e,t){console.error(...C(e,t))}function A(e){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${e}`}function C(e,t){let n=A(e);return t?[e,t,n]:[e,n]}let O=new Date(2024,10,6);if(globalThis.CKEDITOR_VERSION)throw new k("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION="43.3.1";let M=Symbol("listeningTo"),N=Symbol("emitterId"),R=Symbol("delegations"),S=D(Object);function D(e){if(!e)return S;class t extends e{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let r=!1;this.listenTo(this,e,(e,...n)=>{r||(r=!0,e.off(),t.call(this,e,...n))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,r={}){let i,o;this[M]||(this[M]={});let s=this[M];e[N]||j(e);let l=e[N];(i=s[l])||(i=s[l]={emitter:e,callbacks:{}}),(o=i.callbacks[t])||(o=i.callbacks[t]=[]),o.push(n),e._addEventListener?e._addEventListener(t,n,r):this._addEventListener.call(e,t,n,r)}stopListening(e,t,n){let r=this[M],i=e&&e[N],o=r&&i?r[i]:void 0,s=o&&t?o.callbacks[t]:void 0;if(r&&(!e||o)&&(!t||s)){if(n)B(this,e,t,n),-1!==s.indexOf(n)&&(1===s.length?delete o.callbacks[t]:B(this,e,t,n));else if(s){for(;n=s.pop();)B(this,e,t,n);delete o.callbacks[t]}else if(o){for(t in o.callbacks)this.stopListening(e,t);delete r[i]}else{for(i in r)this.stopListening(r[i].emitter);delete this[M]}}}fire(e,...t){try{let n=e instanceof y?e:new y(this,e),r=n.name,i=function e(t,n){let r;return t._events&&(r=t._events[n])&&r.callbacks.length?r.callbacks:n.indexOf(":")>-1?e(t,n.substr(0,n.lastIndexOf(":"))):null}(this,r);if(n.path.push(this),i){let e=[n,...t];i=Array.from(i);for(let t=0;t<i.length&&(i[t].callback.apply(this,e),n.off.called&&(delete n.off.called,this._removeEventListener(r,i[t].callback)),!n.stop.called);t++);}let o=this[R];if(o){let e=o.get(r),i=o.get("*");e&&F(e,n,t),i&&F(i,n,t)}return n.return}catch(e){k.rethrowUnexpectedError(e,this)}}delegate(...e){return{to:(t,n)=>{this[R]||(this[R]=new Map),e.forEach(e=>{let r=this[R].get(e);r?r.set(t,n):this[R].set(e,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[R]){if(e){if(t){let n=this[R].get(e);n&&n.delete(t)}else this[R].delete(e)}else this[R].clear()}}_addEventListener(e,t,n){!function(e,t){let n=P(e);if(n[t])return;let r=t,i=null,o=[];for(;""!==r&&!n[r];)n[r]={callbacks:[],childEvents:[]},o.push(n[r]),i&&n[r].childEvents.push(i),i=r,r=r.substr(0,r.lastIndexOf(":"));if(""!==r){for(let e of o)e.callbacks=n[r].callbacks.slice();n[r].childEvents.push(i)}}(this,e);let r=V(this,e),i={callback:t,priority:T.get(n.priority)};for(let e of r)x(e,i)}_removeEventListener(e,t){for(let n of V(this,e))for(let e=0;e<n.length;e++)n[e].callback==t&&(n.splice(e,1),e--)}}return t}function j(e,t){e[N]||(e[N]=t||E())}function P(e){return e._events||Object.defineProperty(e,"_events",{value:{}}),e._events}function V(e,t){let n=P(e)[t];if(!n)return[];let r=[n.callbacks];for(let t=0;t<n.childEvents.length;t++){let i=V(e,n.childEvents[t]);r=r.concat(i)}return r}function F(e,t,n){for(let[r,i]of e){i?"function"==typeof i&&(i=i(t.name)):i=t.name;let e=new y(t.source,i);e.path=[...t.path],r.fire(e,...n)}}function B(e,t,n,r){t._removeEventListener?t._removeEventListener(n,r):e._removeEventListener.call(t,n,r)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(e=>{D[e]=S.prototype[e]});let Z=Symbol("observableProperties"),W=Symbol("boundObservables"),H=Symbol("boundProperties"),K=Symbol("decoratedMethods"),U=Symbol("decoratedOriginal"),q=$(D());function $(e){if(!e)return q;class t extends e{set(e,t){if((0,i.Z)(e)){Object.keys(e).forEach(t=>{this.set(t,e[t])},this);return}z(this);let n=this[Z];if(e in this&&!n.has(e))throw new k("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(t){let r=n.get(e),i=this.fire(`set:${e}`,e,t,r);void 0===i&&(i=t),r===i&&n.has(e)||(n.set(e,i),this.fire(`change:${e}`,e,i,r))}}),this[e]=t}bind(...e){if(!e.length||!X(e))throw new k("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new k("observable-bind-duplicate-properties",this);z(this);let t=this[H];e.forEach(e=>{if(t.has(e))throw new k("observable-bind-rebind",this)});let n=new Map;return e.forEach(e=>{let r={property:e,to:[]};t.set(e,r),n.set(e,r)}),{to:G,toMany:Y,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Z])return;let t=this[H],n=this[W];if(e.length){if(!X(e))throw new k("observable-unbind-wrong-properties",this);e.forEach(e=>{let r=t.get(e);r&&(r.to.forEach(([e,t])=>{let i=n.get(e),o=i[t];o.delete(r),o.size||delete i[t],Object.keys(i).length||(n.delete(e),this.stopListening(e,"change"))}),t.delete(e))})}else n.forEach((e,t)=>{this.stopListening(t,"change")}),n.clear(),t.clear()}decorate(e){z(this);let t=this[e];if(!t)throw new k("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(e,n)=>{e.return=t.apply(this,n)}),this[e]=function(...t){return this.fire(e,t)},this[e][U]=t,this[K]||(this[K]=[]),this[K].push(e)}stopListening(e,t,n){if(!e&&this[K]){for(let e of this[K])this[e]=this[e][U];delete this[K]}super.stopListening(e,t,n)}[Z];[K];[H];[W]}return t}function z(e){e[Z]||(Object.defineProperty(e,Z,{value:new Map}),Object.defineProperty(e,W,{value:new Map}),Object.defineProperty(e,H,{value:new Map}))}function G(...e){let t=function(...e){let t;if(!e.length)throw new k("observable-bind-to-parse-error",null);let n={to:[]};return"function"==typeof e[e.length-1]&&(n.callback=e.pop()),e.forEach(e=>{if("string"==typeof e)t.properties.push(e);else if("object"==typeof e)t={observable:e,properties:[]},n.to.push(t);else throw new k("observable-bind-to-parse-error",null)}),n}(...e),n=Array.from(this._bindings.keys()),r=n.length;if(!t.callback&&t.to.length>1)throw new k("observable-bind-to-no-callback",this);if(r>1&&t.callback)throw new k("observable-bind-to-extra-callback",this);t.to.forEach(e=>{if(e.properties.length&&e.properties.length!==r)throw new k("observable-bind-to-properties-length",this);e.properties.length||(e.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(n[0]).callback=t.callback),function(e,t){t.forEach(t=>{let n;let r=e[W];r.get(t.observable)||e.listenTo(t.observable,"change",(i,o)=>{(n=r.get(t.observable)[o])&&n.forEach(t=>{Q(e,t.property)})})})}(this._observable,this._to),function(e){let t;e._bindings.forEach((n,r)=>{e._to.forEach(i=>{t=i.properties[n.callback?0:e._bindProperties.indexOf(r)],n.to.push([i.observable,t]),function(e,t,n,r){let i=e[W],o=i.get(n),s=o||{};s[r]||(s[r]=new Set),s[r].add(t),o||i.set(n,s)}(e._observable,n,i.observable,t)})})}(this),this._bindProperties.forEach(e=>{Q(this._observable,e)})}function Y(e,t,n){if(this._bindings.size>1)throw new k("observable-bind-to-many-not-one-binding",this);this.to(...function(e,t){let n=e.map(e=>[e,t]);return Array.prototype.concat.apply([],n)}(e,t),n)}function X(e){return e.every(e=>"string"==typeof e)}function Q(e,t){let n;let r=e[H].get(t);n=r.callback?r.callback.apply(e,r.to.map(e=>e[0][e[1]])):(n=r.to[0])[0][n[1]],Object.prototype.hasOwnProperty.call(e,t)?e[t]=n:e.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(e=>{$[e]=q.prototype[e]});class J{_replacedElements;constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function ee(e){let t=new AbortController;function n(...r){return t.abort(),e((t=new AbortController).signal,...r)}return n.abort=()=>t.abort(),n}function et(e){let t=0;for(let n of e)t++;return t}function en(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!=t[r])return r;return e.length==t.length?"same":e.length<t.length?"prefix":"extension"}function er(e){return!!(e&&e[Symbol.iterator])}function ei(e,t,n={},r=[]){let i=n&&n.xmlns,s=i?e.createElementNS(i,t):e.createElement(t);for(let e in n)s.setAttribute(e,n[e]);for(let t of(((0,o.Z)(r)||!er(r))&&(r=[r]),r))(0,o.Z)(t)&&(t=e.createTextNode(t)),s.appendChild(t);return s}class eo{_config;constructor(e,t){this._config=Object.create(null),t&&this.define((0,l.Z)(t,es)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(let e of Object.keys(this._config))yield e}_setToTarget(e,t,n,r=!1){if((0,s.Z)(t)){this._setObjectToTarget(e,t,r);return}let i=t.split(".");for(let n of(t=i.pop(),i))(0,s.Z)(e[n])||(e[n]=Object.create(null)),e=e[n];if((0,s.Z)(n)){(0,s.Z)(e[t])||(e[t]=Object.create(null)),e=e[t],this._setObjectToTarget(e,n,r);return}r&&void 0!==e[t]||(e[t]=n)}_getFromSource(e,t){var n;let r=t.split(".");for(let n of(t=r.pop(),r)){if(!(0,s.Z)(e[n])){e=null;break}e=e[n]}return e?(n=e[t],(0,l.Z)(n,es)):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(r=>{this._setToTarget(e,r,t[r],n)})}}function es(e){return(0,a.Z)(e)||"function"==typeof e?e:void 0}function el(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}function ea(e){let t=Object.prototype.toString.apply(e);return"[object Window]"==t||"[object global]"==t}let ec=eu(D());function eu(e){if(!e)return ec;class t extends e{listenTo(e,t,n,r={}){if(el(e)||ea(e)){let i={capture:!!r.useCapture,passive:!!r.usePassive},o=this._getProxyEmitter(e,i)||new eh(e,i);this.listenTo(o,t,n,r)}else super.listenTo(e,t,n,r)}stopListening(e,t,n){if(el(e)||ea(e))for(let r of this._getAllProxyEmitters(e))this.stopListening(r,t,n);else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(e,t){let n=e[M];return n&&n[t]?n[t].emitter:null}(this,ef(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(e=>!!e)}}return t}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(e=>{eu[e]=ec.prototype[e]});class eh extends D(){_domNode;_options;constructor(e,t){super(),j(this,ef(e,t)),this._domNode=e,this._options=t}_domListeners;attach(e){if(this._domListeners&&this._domListeners[e])return;let t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),D().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){D().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){let t=t=>{this.fire(e,t)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function ef(e,t){let n=e["data-ck-expando"]||(e["data-ck-expando"]=E());for(let e of Object.keys(t).sort())t[e]&&(n+="-"+e);return n}function ed(e){let t=[],n=e;for(;n&&n.nodeType!=Node.DOCUMENT_NODE;)t.unshift(n),n=n.parentNode;return t}function ep(e){return e instanceof HTMLTextAreaElement?e.value:e.innerHTML}function eg(e){let t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function em(e){if(!e.target)return null;let t=e.target.ownerDocument,n=e.clientX,r=e.clientY,i=null;return t.caretRangeFromPoint&&t.caretRangeFromPoint(n,r)?i=t.caretRangeFromPoint(n,r):e.rangeParent&&((i=t.createRange()).setStart(e.rangeParent,e.rangeOffset),i.collapse(!0)),i}function eb(e){return"[object Text]"==Object.prototype.toString.call(e)}function e_(e){return"[object Range]"==Object.prototype.toString.apply(e)}function ew(e){return e&&e.parentNode&&e.offsetParent!==h.document.body?e.offsetParent:null}let ey=["top","right","bottom","left","width","height"];class ev{top;right;bottom;left;width;height;_source;constructor(e){let t=e_(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),ex(e)||t){if(t){let t=ev.getDomRangeRects(e);eE(this,ev.getBoundingRect(t))}else eE(this,e.getBoundingClientRect())}else if(ea(e)){let{innerWidth:t,innerHeight:n}=e;eE(this,{top:0,right:t,bottom:n,left:0,width:t,height:n})}else eE(this,e)}clone(){return new ev(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){let t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{let e=new ev(t);return e._source=this._source,e}}getIntersectionArea(e){let t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){let e;let t=this._source,n=this.clone();if(eT(t))return n;let r=t,i=t.parentNode||t.commonAncestorContainer;for(;i&&!eT(i);){var o;let t="visible"===((o=i)instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).overflow:"visible");r instanceof HTMLElement&&"absolute"===ek(r)&&(e=r);let s=ek(i);if(t||e&&("relative"===s&&t||"relative"!==s)){r=i,i=i.parentNode;continue}let l=new ev(i),a=n.getIntersection(l);if(!a)return null;a.getArea()<n.getArea()&&(n=a),r=i,i=i.parentNode}return n}isEqual(e){for(let t of ey)if(this[t]!==e[t])return!1;return!0}contains(e){let t=this.getIntersection(e);return!!(t&&t.isEqual(e))}toAbsoluteRect(){let{scrollX:e,scrollY:t}=h.window,n=this.clone().moveBy(e,t);if(ex(n._source)){let e=ew(n._source);e&&function(e,t){let n;let r=new ev(t),i=eg(t),o=0;n=0-r.left,o-=r.top,n+=t.scrollLeft,o+=t.scrollTop,n-=i.left,o-=i.top,e.moveBy(n,o)}(n,e)}return n}excludeScrollbarsAndBorders(){let e,t,n;let r=this._source;if(ea(r))e=r.innerWidth-r.document.documentElement.clientWidth,t=r.innerHeight-r.document.documentElement.clientHeight,n=r.getComputedStyle(r.document.documentElement).direction;else{let i=eg(r);e=r.offsetWidth-r.clientWidth-i.left-i.right,t=r.offsetHeight-r.clientHeight-i.top-i.bottom,n=r.ownerDocument.defaultView.getComputedStyle(r).direction,this.left+=i.left,this.top+=i.top,this.right-=i.right,this.bottom-=i.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,"ltr"===n?this.right-=e:this.left+=e,this.height-=t,this.bottom-=t,this}static getDomRangeRects(e){let t=[],n=Array.from(e.getClientRects());if(n.length)for(let e of n)t.push(new ev(e));else{let n=e.startContainer;eb(n)&&(n=n.parentNode);let r=new ev(n.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){let t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0},n=0;for(let r of e)n++,t.left=Math.min(t.left,r.left),t.top=Math.min(t.top,r.top),t.right=Math.max(t.right,r.right),t.bottom=Math.max(t.bottom,r.bottom);return 0==n?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ev(t))}}function eE(e,t){for(let n of ey)e[n]=t[n]}function eT(e){return!!ex(e)&&e===e.ownerDocument.body}function ex(e){return null!==e&&"object"==typeof e&&1===e.nodeType&&"function"==typeof e.getBoundingClientRect}function ek(e){return e instanceof HTMLElement?e.ownerDocument.defaultView.getComputedStyle(e).position:"static"}class eI{_element;_callback;static _observerInstance=null;static _elementCallbacks=null;constructor(e,t){eI._observerInstance||eI._createObserver(),this._element=e,this._callback=t,eI._addElementCallback(e,t),eI._observerInstance.observe(e)}get element(){return this._element}destroy(){eI._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){eI._elementCallbacks||(eI._elementCallbacks=new Map);let n=eI._elementCallbacks.get(e);n||(n=new Set,eI._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){let n=eI._getElementCallbacks(e);n&&(n.delete(t),n.size||(eI._elementCallbacks.delete(e),eI._observerInstance.unobserve(e))),eI._elementCallbacks&&!eI._elementCallbacks.size&&(eI._observerInstance=null,eI._elementCallbacks=null)}static _getElementCallbacks(e){return eI._elementCallbacks?eI._elementCallbacks.get(e):null}static _createObserver(){eI._observerInstance=new h.window.ResizeObserver(e=>{for(let t of e){let e=eI._getElementCallbacks(t.target);if(e)for(let n of e)n(t)}})}}function eL(e,t){e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}function eA(e){return t=>t+e}function eC(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function eO(e,t,n){e.insertBefore(n,e.childNodes[t]||null)}function eM(e){return e&&e.nodeType===Node.COMMENT_NODE}function eN(e){try{h.document.createAttribute(e)}catch(e){return!1}return!0}function eR({element:e,target:t,positions:n,limiter:r,fitInViewport:i,viewportOffsetConfig:o}){let s;(0,c.Z)(t)&&(t=t()),(0,c.Z)(r)&&(r=r());let l=ew(e),a=function(e){e=Object.assign({top:0,bottom:0,left:0,right:0},e);let t=new ev(h.window);return t.top+=e.top,t.height-=e.top,t.bottom-=e.bottom,t.height-=e.bottom,t}(o),u=new ev(e),f=eS(t,a);if(!f||!a.getIntersection(f))return null;let d={targetRect:f,elementRect:u,positionedElementAncestor:l,viewportRect:a};if(r||i){if(r){let e=eS(r,a);e&&(d.limiterRect=e)}s=function(e,t){let{elementRect:n}=t,r=n.getArea(),i=e.map(e=>new eD(e,t)).filter(e=>!!e.name),o=0,s=null;for(let e of i){let{limiterIntersectionArea:t,viewportIntersectionArea:n}=e;if(t===r)return e;let i=n**2+t**2;i>o&&(o=i,s=e)}return s}(n,d)}else s=new eD(n[0],d);return s}function eS(e,t){let n=new ev(e).getVisible();return n?n.getIntersection(t):null}class eD{name;config;_positioningFunctionCoordinates;_options;_cachedRect;_cachedAbsoluteRect;constructor(e,t){let n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;let{left:r,top:i,name:o,config:s}=n;this.name=o,this.config=s,this._positioningFunctionCoordinates={left:r,top:i},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){let e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function ej(e){let t=e.parentNode;t&&t.removeChild(e)}function eP({target:e,viewportOffset:t=0,ancestorOffset:n=0,alignToTop:r,forceScroll:i}){var o;let s=eB(e),l=s,a=null;for(t="number"==typeof(o=t)?{top:o,bottom:o,left:o,right:o}:o;l;){!function({parent:e,getRect:t,alignToTop:n,forceScroll:r,ancestorOffset:i=0,limiterElement:o}){let s,l,a;let c=eB(e),u=n&&r,h=o||c.document.body;for(;e!=h;){var f,d,p,g;l=t(),a=(s=new ev(e).excludeScrollbarsAndBorders()).contains(l),u?e.scrollTop-=s.top-l.top+i:!a&&((f=l,d=s,f.top<d.top)?e.scrollTop-=s.top-l.top+i:eV(l,s)&&(n?e.scrollTop+=l.top-s.top-i:e.scrollTop+=l.bottom-s.bottom+i)),!a&&((p=l,g=s,p.left<g.left)?e.scrollLeft-=s.left-l.left+i:eF(l,s)&&(e.scrollLeft+=l.right-s.right+i)),e=e.parentNode}}({parent:l==s?eZ(e):eZ(a),getRect:()=>eW(e,l),alignToTop:r,ancestorOffset:n,forceScroll:i});let o=eW(e,l);if(function({window:e,rect:t,alignToTop:n,forceScroll:r,viewportOffset:i}){var o,s,l,a;let c=t.clone().moveBy(0,i.bottom),u=t.clone().moveBy(0,-i.top),h=new ev(e).excludeScrollbarsAndBorders(),f=[u,c].every(e=>h.contains(e)),{scrollX:d,scrollY:p}=e,g=d,m=p;n&&r?p-=h.top-t.top+i.top:!f&&((o=u,s=h,o.top<s.top)?p-=h.top-t.top+i.top:eV(c,h)&&(n?p+=t.top-h.top-i.top:p+=t.bottom-h.bottom+i.bottom)),!f&&((l=t,a=h,l.left<a.left)?d-=h.left-t.left+i.left:eF(t,h)&&(d+=t.right-h.right+i.right)),(d!=g||p!==m)&&e.scrollTo(d,p)}({window:l,rect:o,viewportOffset:t,alignToTop:r,forceScroll:i}),l.parent!=l){if(a=l.frameElement,l=l.parent,!a)return}else l=null}}function eV(e,t){return e.bottom>t.bottom}function eF(e,t){return e.right>t.right}function eB(e){return e_(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function eZ(e){if(!e_(e))return e.parentNode;{let t=e.commonAncestorContainer;return eb(t)&&(t=t.parentNode),t}}function eW(e,t){let n=eB(e),r=new ev(e);if(n===t);else{let e=n;for(;e!=t;){let t=new ev(e.frameElement).excludeScrollbarsAndBorders();r.moveBy(t.left,t.top),e=e.parent}}return r}let eH={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},eK={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},eU={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},eq=function(){let e={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)e[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)e[t-48]=t;for(let t=112;t<=123;t++)e["f"+(t-111)]=t;return Object.assign(e,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),e}(),e$=Object.fromEntries(Object.entries(eq).map(([e,t])=>{let n;return n=t in eU?eU[t]:e.charAt(0).toUpperCase()+e.slice(1),[t,n]}));function ez(e){let t;if("string"==typeof e){if(!(t=eq[e.toLowerCase()]))throw new k("keyboard-unknown-key",null,{key:e})}else t=e.keyCode+(e.altKey?eq.alt:0)+(e.ctrlKey?eq.ctrl:0)+(e.shiftKey?eq.shift:0)+(e.metaKey?eq.cmd:0);return t}function eG(e){return"string"==typeof e&&(e=e.split("+").map(e=>e.trim())),e.map(e=>"string"==typeof e?function(e){if(e.endsWith("!"))return ez(e.slice(0,-1));let t=ez(e);return(d.isMac||d.isiOS)&&t==eq.ctrl?eq.cmd:t}(e):e).reduce((e,t)=>t+e,0)}function eY(e){let t=eG(e);return Object.entries(d.isMac||d.isiOS?eH:eK).reduce((e,[n,r])=>((t&eq[n])!=0&&(t&=~eq[n],e+=r),e),"")+(t?e$[t]:"")}function eX(e){return e==eq.arrowright||e==eq.arrowleft||e==eq.arrowup||e==eq.arrowdown}function eQ(e,t){let n="ltr"===t;switch(e){case eq.arrowleft:return n?"left":"right";case eq.arrowright:return n?"right":"left";case eq.arrowup:return"up";case eq.arrowdown:return"down"}}function eJ(e,t){let n=eQ(e,t);return"down"===n||"right"===n}let e0=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function e1(e){return e0.includes(e)?"rtl":"ltr"}function e2(e){return Array.isArray(e)?e:[e]}h.window.CKEDITOR_TRANSLATIONS||(h.window.CKEDITOR_TRANSLATIONS={});class e5{uiLanguage;uiLanguageDirection;contentLanguage;contentLanguageDirection;t;translations;constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=e1(this.uiLanguage),this.contentLanguageDirection=e1(this.contentLanguage),this.translations=Array.isArray(n)?n.reduce((e,t)=>(0,u.Z)(e,t)):n,this.t=(e,t)=>this._t(e,t)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){var n,r;t=e2(t),"string"==typeof e&&(e={string:e});let i=e.plural?t[0]:1;return n=function(e,t,n=1,r){var i;if("number"!=typeof n)throw new k("translation-service-quantity-not-a-number",null,{quantity:n});let o=r||h.window.CKEDITOR_TRANSLATIONS,s=Object.keys(o).length;1===s&&(e=Object.keys(o)[0]);let l=t.id||t.string;if(0===s||!o[i=e]||!o[i].dictionary[l])return 1!==n?t.plural:t.string;let a=o[e].dictionary,c=o[e].getPluralForm||(e=>1===e?0:1),u=a[l];return"string"==typeof u?u:u[Number(c(n))]}(this.uiLanguage,e,i,this.translations),r=t,n.replace(/%(\d+)/g,(e,t)=>t<r.length?r[t]:e)}}class e4 extends D(){_items;_itemMap;_idProperty;_bindToCollection;_bindToExternalToInternalMap;_bindToInternalToExternalMap;_skippedIndexesFromExternal;constructor(e={},t={}){super();let n=er(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(let t of e)this._items.push(t),this._itemMap.set(this._getItemIdBeforeAdding(t),t)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(void 0===t)t=this._items.length;else if(t>this._items.length||t<0)throw new k("collection-add-item-invalid-index",this);let n=0;for(let r of e){let e=this._getItemIdBeforeAdding(r),i=t+n;this._items.splice(i,0,r),this._itemMap.set(e,r),this.fire("add",r,i),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if("string"==typeof e)t=this._itemMap.get(e);else if("number"==typeof e)t=this._items[e];else throw new k("collection-get-invalid-arg",this);return t||null}has(e){if("string"==typeof e)return this._itemMap.has(e);{let t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return(t="string"==typeof e?this._itemMap.get(e):e)?this._items.indexOf(t):-1}remove(e){let[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);let e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new k("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:e=>{this._setUpBindToBinding(t=>new e(t))},using:e=>{"function"==typeof e?this._setUpBindToBinding(e):this._setUpBindToBinding(t=>t[e])}}}_setUpBindToBinding(e){let t=this._bindToCollection,n=(n,r,i)=>{let o=t._bindToCollection==this,s=t._bindToInternalToExternalMap.get(r);if(o&&s)this._bindToExternalToInternalMap.set(r,s),this._bindToInternalToExternalMap.set(s,r);else{let n=e(r);if(!n){this._skippedIndexesFromExternal.push(i);return}let o=i;for(let e of this._skippedIndexesFromExternal)i>e&&o--;for(let e of t._skippedIndexesFromExternal)o>=e&&o++;this._bindToExternalToInternalMap.set(r,n),this._bindToInternalToExternalMap.set(n,r),this.add(n,o);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)o<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++}};for(let e of t)n(null,e,t.getIndex(e));this.listenTo(t,"add",n),this.listenTo(t,"remove",(e,t,n)=>{let r=this._bindToExternalToInternalMap.get(t);r&&this.remove(r),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((e,t)=>(n<t&&e.push(t-1),n>t&&e.push(t),e),[])})}_getItemIdBeforeAdding(e){let t;let n=this._idProperty;if(n in e){if("string"!=typeof(t=e[n]))throw new k("collection-add-invalid-id",this);if(this.get(t))throw new k("collection-add-item-already-exists",this)}else e[n]=t=E();return t}_remove(e){let t,n,r;let i=!1,o=this._idProperty;if("string"==typeof e?(n=e,i=!(r=this._itemMap.get(n)),r&&(t=this._items.indexOf(r))):"number"==typeof e?(t=e,i=!(r=this._items[t]),r&&(n=r[o])):(n=(r=e)[o],i=-1==(t=this._items.indexOf(r))||!this._itemMap.get(n)),i)throw new k("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);let s=this._bindToInternalToExternalMap.get(r);return this._bindToInternalToExternalMap.delete(r),this._bindToExternalToInternalMap.delete(s),this.fire("remove",r,t),[r,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function e3(e){let t=e.next();return t.done?null:t.value}class e6 extends eu($()){_elements=new Set;_externalViews=new Set;_blurTimeout=null;constructor(){super(),this.set("isFocused",!1),this.set("focusedElement",null)}get elements(){return Array.from(this._elements.values())}get externalViews(){return Array.from(this._externalViews.values())}add(e){if((0,a.Z)(e))this._addElement(e);else if(e8(e))this._addView(e);else{if(!e.element)throw new k("focustracker-add-view-missing-element",{focusTracker:this,view:e});this._addElement(e.element)}}remove(e){(0,a.Z)(e)?this._removeElement(e):e8(e)?this._removeView(e):this._removeElement(e.element)}_addElement(e){if(this._elements.has(e))throw new k("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>{let t=this.externalViews.find(t=>!!e9(e,t)||!!t.focusTracker.externalViews.find(t=>e9(e,t)));t?this._focus(t.element):this._focus(e)},{useCapture:!0}),this.listenTo(e,"blur",()=>{this._blur()},{useCapture:!0}),this._elements.add(e)}_removeElement(e){this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e)),e===this.focusedElement&&this._blur()}_addView(e){e.element&&this._addElement(e.element),this.listenTo(e.focusTracker,"change:focusedElement",()=>{e.focusTracker.focusedElement?e.element&&this._focus(e.element):this._blur()}),this._externalViews.add(e)}_removeView(e){e.element&&this._removeElement(e.element),this.stopListening(e.focusTracker),this._externalViews.delete(e)}destroy(){this.stopListening(),this._elements.clear(),this._externalViews.clear(),this.isFocused=!1,this.focusedElement=null}_focus(e){this._clearBlurTimeout(),this.focusedElement=e,this.isFocused=!0}_blur(){this.elements.find(e=>e.contains(document.activeElement))||this.externalViews.find(e=>e.focusTracker.isFocused&&!e.focusTracker._blurTimeout)||(this._clearBlurTimeout(),this._blurTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0))}_clearBlurTimeout(){clearTimeout(this._blurTimeout),this._blurTimeout=null}}function e8(e){return"focusTracker"in e&&e.focusTracker instanceof e6}function e9(e,t){return!!t.element&&t.element.contains(document.activeElement)&&e.contains(t.element)}class e7{_listener;constructor(){this._listener=new(eu())}listenTo(e){this._listener.listenTo(e,"keydown",(e,t)=>{this._listener.fire("_keydown:"+ez(t),t)})}set(e,t,n={}){let r=eG(e),i=n.priority;this._listener.listenTo(this._listener,"_keydown:"+r,(e,r)=>{(!n.filter||n.filter(r))&&(t(r,()=>{r.preventDefault(),r.stopPropagation(),e.stop()}),e.return=!0)},{priority:i})}press(e){return!!this._listener.fire("_keydown:"+ez(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function te(e){return er(e)?new Map(e):function(e){let t=new Map;for(let n in e)t.set(n,e[n]);return t}(e)}async function tt(e,t={}){let{maxAttempts:n=4,retryDelay:r=function(e={}){let{delay:t=1e3,factor:n=2,maxDelay:r=1e4}=e;return e=>Math.min(n**e*t,r)}(),signal:i=new AbortController().signal}=t;i.throwIfAborted();for(let t=0;;t++){try{return await e()}catch(e){if(t+1>=n)throw e}await function(e,t={}){return new Promise((n,r)=>{let i=t.signal||new AbortController().signal;i.throwIfAborted();let o=setTimeout(function(){i.removeEventListener("abort",s),n()},e);function s(){clearTimeout(o),r(i.reason)}i.addEventListener("abort",s,{once:!0})})}(r(t),{signal:i})}}function tn(e,t,n,r){if(Math.max(t.length,e.length)>1e4)return e.slice(0,n).concat(t).concat(e.slice(n+r,e.length));{let i=Array.from(e);return i.splice(n,r,...t),i}}function tr(e,t){let n;function r(...i){r.cancel(),n=setTimeout(()=>e(...i),t)}return r.cancel=()=>{clearTimeout(n)},r}function ti(e){function t(e){return e.length>=40&&e.length<=255?"VALID":"INVALID"}if(!e)return"INVALID";let n="";try{n=atob(e)}catch(e){return"INVALID"}let r=n.split("-"),i=r[0],o=r[1];if(!o)return t(e);try{atob(o)}catch(n){try{if(atob(i),!atob(i).length)return t(e)}catch(n){return t(e)}}if(i.length<40||i.length>255)return"INVALID";let s="";try{atob(i),s=atob(o)}catch(e){return"INVALID"}if(8!==s.length)return"INVALID";let l=new Date(Number(s.substring(0,4)),Number(s.substring(4,6))-1,Number(s.substring(6,8)));return l<O||isNaN(Number(l))?"INVALID":"VALID"}function to(e,t){var n,r;return!!(n=e.charAt(t-1))&&1==n.length&&/[\ud800-\udbff]/.test(n)&&!!(r=e.charAt(t))&&1==r.length&&/[\udc00-\udfff]/.test(r)}function ts(e,t){var n;return!!(n=e.charAt(t))&&1==n.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(n)}let tl=function(){let e=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return RegExp(`${e}|${t}(?:\u{200D}${t})*`,"ug")}();function ta(e,t){return Array.from(String(e).matchAll(tl)).some(e=>e.index<t&&t<e.index+e[0].length)}}}]);