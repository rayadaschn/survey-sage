System.register(["./@ant-design/icons-legacy-fccabc0f.js"],(function(t,e){"use strict";var n,r,o;return{setters:[t=>{n=t.r,r=t.g,o=t.c}],execute:function(){t({F:function(t,e,n){var r=n||{},o=r.events,i=void 0===o?yi:o,u=r.target,a=r.exactMatch,c=void 0!==a&&a,s=r.useCapture,f=void 0!==s&&s,l=q(e),d=q(t);di((function(){var t,e,n,r=oe(u,window);if(r){var o=function(t){var e,n=function(t,e){return M(t)?t:z(t)||C(t)?function(n){return pi(n,t,e)}:Array.isArray(t)?function(n){return t.some((function(t){return pi(n,t,e)}))}:function(){return Boolean(t)}}(d.current,c);if(n(t))return null===(e=l.current)||void 0===e?void 0:e.call(l,t)};try{for(var a=P(i),s=a.next();!s.done;s=a.next()){var h=s.value;null===(n=null==r?void 0:r.addEventListener)||void 0===n||n.call(r,h,o,f)}}catch(v){t={error:v}}finally{try{s&&!s.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return function(){var t,e,n;try{for(var u=P(i),a=u.next();!a.done;a=u.next()){var c=a.value;null===(n=null==r?void 0:r.removeEventListener)||void 0===n||n.call(r,c,o,f)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(e=u.return)&&e.call(u)}finally{if(t)throw t.error}}}}}),[i],u)},G:function(t,e,n){return function(t,e,n){void 0===e&&(e={}),void 0===n&&(n=[]);var r=e.manual,o=void 0!==r&&r,i=x(e,["manual"]);D&&e.defaultParams&&Array.isArray(e.defaultParams);var u=A({manual:o},i),a=q(t),c=ee(),s=N((function(){var t=n.map((function(t){var e;return null===(e=null==t?void 0:t.onInit)||void 0===e?void 0:e.call(t,u)})).filter(Boolean);return new re(a,u,c,Object.assign.apply(Object,k([{}],R(t),!1)))}),[]);return s.options=u,s.pluginImpls=n.map((function(t){return t(s,u)})),te((function(){if(!o){var t=s.state.params||e.defaultParams||[];s.run.apply(s,k([],R(t),!1))}})),$((function(){s.cancel()})),{loading:s.state.loading,data:s.state.data,error:s.state.error,params:s.state.params||[],cancel:B(s.cancel.bind(s)),refresh:B(s.refresh.bind(s)),refreshAsync:B(s.refreshAsync.bind(s)),run:B(s.run.bind(s)),runAsync:B(s.runAsync.bind(s)),mutate:B(s.mutate.bind(s))}}(t,e,k(k([],R(n||[]),!1),[It,Ht,Gt,Kt,Zt,I,J,Jt],!1))},H:function(t,e){var r;D&&M(t);var o=q(t),i=null!==(r=null==e?void 0:e.wait)&&void 0!==r?r:1e3,u=n.useMemo((function(){return Wt((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.current.apply(o,k([],R(t),!1))}),i,e)}),[]);return $((function(){u.cancel()})),{run:u,cancel:u.cancel,flush:u.flush}},I:function(t,e){void 0===e&&(e=xi);var r=n.useRef(Nt?document.title:"");n.useEffect((function(){document.title=t}),[t]),$((function(){e.restoreOnUnmount&&(document.title=r.current)}))}});var e=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,u="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(u):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&c()}function u(){a(i)}function c(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(u,e);o=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),l=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||u},h=g(0,0,0,0);function v(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}function y(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=d(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=v(i)}return e}(r),i=o.left+o.right,u=o.top+o.bottom,a=v(r.width),c=v(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==e&&(a-=p(r,"left","right")+i),Math.round(c+u)!==n&&(c-=p(r,"top","bottom")+u)),!function(t){return t===d(t).document.documentElement}(t)){var s=Math.round(a+i)-e,f=Math.round(c+u)-n;1!==Math.abs(s)&&(a-=s),1!==Math.abs(f)&&(c-=f)}return g(o.left,o.top,a,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return i?b(t)?function(t){var e=t.getBBox();return g(0,0,e.width,e.height)}(t):y(t):h}function g(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),w=function(t,e){var n,r,o,i,u,a,c,s=(r=(n=e).x,o=n.y,i=n.width,u=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:o,width:i,height:u,top:o,right:r+i,bottom:u+o,left:r}),c);l(this,{target:t,contentRect:s})},O=function(){function t(t,n,r){if(this.activeObservations_=[],this.observations_=new e,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),j="undefined"!=typeof WeakMap?new WeakMap:new e,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new O(e,n,this);j.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=j.get(this))[t].apply(e,arguments)}})),t("i",void 0!==u.ResizeObserver?u.ResizeObserver:E);var A=function(){return A=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},A.apply(this,arguments)};function x(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function S(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))}function T(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function P(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function R(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function k(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var M=function(t){return"function"==typeof t},z=function(t){return"string"==typeof t},C=function(t){return"number"==typeof t};const D=!1;function B(t){D&&M(t);var e=n.useRef(t);e.current=n.useMemo((function(){return t}),[t]);var r=n.useRef();return r.current||(r.current=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.current.apply(this,t)}),r.current}const F=(L=n.useEffect,function(t,e){var r=n.useRef(!1);L((function(){return function(){r.current=!1}}),[]),L((function(){if(r.current)return t();r.current=!0}),e)});var L,W=function(t,e){var r=e.manual,o=e.ready,i=void 0===o||o,u=e.defaultParams,a=void 0===u?[]:u,c=e.refreshDeps,s=void 0===c?[]:c,f=e.refreshDepsAction,l=n.useRef(!1);return l.current=!1,F((function(){!r&&i&&(l.current=!0,t.run.apply(t,k([],R(a),!1)))}),[i]),F((function(){l.current||r||(l.current=!0,f?f():t.refresh())}),k([],R(s),!1)),{onBefore:function(){if(!i)return{stopNow:!0}}}};W.onInit=function(t){var e=t.ready,n=void 0===e||e;return{loading:!t.manual&&n}};const I=W;function H(t,e){if(t===e)return!0;for(var n=0;n<t.length;n++)if(!Object.is(t[n],e[n]))return!1;return!0}function N(t,e){var r=n.useRef({deps:e,obj:void 0,initialized:!1}).current;return!1!==r.initialized&&H(r.deps,e)||(r.deps=e,r.obj=t(),r.initialized=!0),r.obj}function q(t){var e=n.useRef(t);return e.current=t,e}const $=function(t){D&&M(t);var e=q(t);n.useEffect((function(){return function(){e.current()}}),[])};var G=new Map,U=new Map,V={},K=function(t,e){return V[t]||(V[t]=[]),V[t].push(e),function(){var n=V[t].indexOf(e);V[t].splice(n,1)}};const J=function(t,e){var r=e.cacheKey,o=e.cacheTime,i=void 0===o?3e5:o,u=e.staleTime,a=void 0===u?0:u,c=e.setCache,s=e.getCache,f=n.useRef(),l=n.useRef(),d=function(t,e){c?c(e):function(t,e,n){var r=G.get(t);(null==r?void 0:r.timer)&&clearTimeout(r.timer);var o=void 0;e>-1&&(o=setTimeout((function(){G.delete(t)}),e)),G.set(t,A(A({},n),{timer:o}))}(t,i,e),function(t,e){V[t]&&V[t].forEach((function(t){return t(e)}))}(t,e.data)},h=function(t,e){return void 0===e&&(e=[]),s?s(e):function(t){return G.get(t)}(t)};return N((function(){if(r){var e=h(r);e&&Object.hasOwnProperty.call(e,"data")&&(t.state.data=e.data,t.state.params=e.params,(-1===a||(new Date).getTime()-e.time<=a)&&(t.state.loading=!1)),f.current=K(r,(function(e){t.setState({data:e})}))}}),[]),$((function(){var t;null===(t=f.current)||void 0===t||t.call(f)})),r?{onBefore:function(t){var e=h(r,t);return e&&Object.hasOwnProperty.call(e,"data")?-1===a||(new Date).getTime()-e.time<=a?{loading:!1,data:null==e?void 0:e.data,error:void 0,returnNow:!0}:{data:null==e?void 0:e.data,error:void 0}:{}},onRequest:function(t,e){var n=function(t){return U.get(t)}(r);return n&&n!==l.current||(n=t.apply(void 0,k([],R(e),!1)),l.current=n,function(t,e){U.set(t,e),e.then((function(e){return U.delete(t),e})).catch((function(){U.delete(t)}))}(r,n)),{servicePromise:n}},onSuccess:function(e,n){var o;r&&(null===(o=f.current)||void 0===o||o.call(f),d(r,{data:e,params:n,time:(new Date).getTime()}),f.current=K(r,(function(e){t.setState({data:e})})))},onMutate:function(e){var n;r&&(null===(n=f.current)||void 0===n||n.call(f),d(r,{data:e,params:t.state.params,time:(new Date).getTime()}),f.current=K(r,(function(e){t.setState({data:e})})))}}:{}};var Q=t("l",(function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}));t("g",r(Q));var X="object"==typeof o&&o&&o.Object===Object&&o,Y=X,Z="object"==typeof self&&self&&self.Object===Object&&self,tt=Y||Z||Function("return this")(),et=tt,nt=function(){return et.Date.now()},rt=/\s/,ot=function(t){for(var e=t.length;e--&&rt.test(t.charAt(e)););return e},it=ot,ut=/^\s+/,at=function(t){return t?t.slice(0,it(t)+1).replace(ut,""):t},ct=tt.Symbol,st=t("e",ct),ft=st,lt=Object.prototype,dt=lt.hasOwnProperty,ht=lt.toString,vt=ft?ft.toStringTag:void 0,pt=function(t){var e=dt.call(t,vt),n=t[vt];try{t[vt]=void 0;var r=!0}catch(i){}var o=ht.call(t);return r&&(e?t[vt]=n:delete t[vt]),o},yt=Object.prototype.toString,bt=pt,_t=function(t){return yt.call(t)},gt=st?st.toStringTag:void 0,mt=t("_",(function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":gt&&gt in Object(t)?bt(t):_t(t)})),wt=t("b",(function(t){return null!=t&&"object"==typeof t})),Ot=mt,jt=wt,Et=t("c",(function(t){return"symbol"==typeof t||jt(t)&&"[object Symbol]"==Ot(t)})),At=at,xt=Q,St=Et,Tt=/^[-+]0x[0-9a-f]+$/i,Pt=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,kt=parseInt,Mt=t("D",(function(t){if("number"==typeof t)return t;if(St(t))return NaN;if(xt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=xt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=At(t);var n=Pt.test(t);return n||Rt.test(t)?kt(t.slice(2),n?2:8):Tt.test(t)?NaN:+t})),zt=Q,Ct=nt,Dt=Mt,Bt=Math.max,Ft=Math.min,Lt=function(t,e,n){var r,o,i,u,a,c,s=0,f=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,i=o;return r=o=void 0,s=e,u=t.apply(i,n)}function v(t){var n=t-c;return void 0===c||n>=e||n<0||l&&t-s>=i}function p(){var t=Ct();if(v(t))return y(t);a=setTimeout(p,function(t){var n=e-(t-c);return l?Ft(n,i-(t-s)):n}(t))}function y(t){return a=void 0,d&&r?h(t):(r=o=void 0,u)}function b(){var t=Ct(),n=v(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return s=t,a=setTimeout(p,e),f?h(t):u}(c);if(l)return clearTimeout(a),a=setTimeout(p,e),h(c)}return void 0===a&&(a=setTimeout(p,e)),u}return e=Dt(e)||0,zt(n)&&(f=!!n.leading,i=(l="maxWait"in n)?Bt(Dt(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=c=o=a=void 0},b.flush=function(){return void 0===a?u:y(Ct())},b};const Wt=t("A",r(Lt)),It=function(t,e){var r=e.debounceWait,o=e.debounceLeading,i=e.debounceTrailing,u=e.debounceMaxWait,a=n.useRef(),c=n.useMemo((function(){var t={};return void 0!==o&&(t.leading=o),void 0!==i&&(t.trailing=i),void 0!==u&&(t.maxWait=u),t}),[o,i,u]);return n.useEffect((function(){if(r){var e=t.runAsync.bind(t);return a.current=Wt((function(t){t()}),r,c),t.runAsync=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new Promise((function(n,r){var o;null===(o=a.current)||void 0===o||o.call(a,(function(){e.apply(void 0,k([],R(t),!1)).then(n).catch(r)}))}))},function(){var n;null===(n=a.current)||void 0===n||n.cancel(),t.runAsync=e}}}),[r,c]),r?{onCancel:function(){var t;null===(t=a.current)||void 0===t||t.cancel()}}:{}},Ht=function(t,e){var r=e.loadingDelay,o=e.ready,i=n.useRef();if(!r)return{};var u=function(){i.current&&clearTimeout(i.current)};return{onBefore:function(){return u(),!1!==o&&(i.current=setTimeout((function(){t.setState({loading:!0})}),r)),{loading:!1}},onFinally:function(){u()},onCancel:function(){u()}}},Nt=!("undefined"==typeof window||!window.document||!window.document.createElement);function qt(){return!Nt||"hidden"!==document.visibilityState}var $t=[];Nt&&window.addEventListener("visibilitychange",(function(){if(qt())for(var t=0;t<$t.length;t++)(0,$t[t])()}),!1);const Gt=function(t,e){var r=e.pollingInterval,o=e.pollingWhenHidden,i=void 0===o||o,u=e.pollingErrorRetryCount,a=void 0===u?-1:u,c=n.useRef(),s=n.useRef(),f=n.useRef(0),l=function(){var t;c.current&&clearTimeout(c.current),null===(t=s.current)||void 0===t||t.call(s)};return F((function(){r||l()}),[r]),r?{onBefore:function(){l()},onError:function(){f.current+=1},onSuccess:function(){f.current=0},onFinally:function(){-1===a||-1!==a&&f.current<=a?c.current=setTimeout((function(){var e;i||qt()?t.refresh():s.current=(e=function(){t.refresh()},$t.push(e),function(){var t=$t.indexOf(e);$t.splice(t,1)})}),r):f.current=0},onCancel:function(){l()}}:{}};var Ut=[];if(Nt){var Vt=function(){if(qt()&&(!Nt||void 0===navigator.onLine||navigator.onLine))for(var t=0;t<Ut.length;t++)(0,Ut[t])()};window.addEventListener("visibilitychange",Vt,!1),window.addEventListener("focus",Vt,!1)}const Kt=function(t,e){var r=e.refreshOnWindowFocus,o=e.focusTimespan,i=void 0===o?5e3:o,u=n.useRef(),a=function(){var t;null===(t=u.current)||void 0===t||t.call(u)};return n.useEffect((function(){if(r){var e=(o=t.refresh.bind(t),c=i,s=!1,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];s||(s=!0,o.apply(void 0,k([],R(t),!1)),setTimeout((function(){s=!1}),c))});u.current=(n=function(){e()},Ut.push(n),function(){var t=Ut.indexOf(n);t>-1&&Ut.splice(t,1)})}var n,o,c,s;return function(){a()}}),[r,i]),$((function(){a()})),{}},Jt=function(t,e){var r=e.retryInterval,o=e.retryCount,i=n.useRef(),u=n.useRef(0),a=n.useRef(!1);return o?{onBefore:function(){a.current||(u.current=0),a.current=!1,i.current&&clearTimeout(i.current)},onSuccess:function(){u.current=0},onError:function(){if(u.current+=1,-1===o||u.current<=o){var e=null!=r?r:Math.min(1e3*Math.pow(2,u.current),3e4);i.current=setTimeout((function(){a.current=!0,t.refresh()}),e)}else u.current=0},onCancel:function(){u.current=0,i.current&&clearTimeout(i.current)}}:{}};var Qt=Lt,Xt=Q;const Yt=t("z",r((function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return Xt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Qt(t,e,{leading:r,maxWait:e,trailing:o})}))),Zt=function(t,e){var r=e.throttleWait,o=e.throttleLeading,i=e.throttleTrailing,u=n.useRef(),a={};return void 0!==o&&(a.leading=o),void 0!==i&&(a.trailing=i),n.useEffect((function(){if(r){var e=t.runAsync.bind(t);return u.current=Yt((function(t){t()}),r,a),t.runAsync=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new Promise((function(n,r){var o;null===(o=u.current)||void 0===o||o.call(u,(function(){e.apply(void 0,k([],R(t),!1)).then(n).catch(r)}))}))},function(){var n;t.runAsync=e,null===(n=u.current)||void 0===n||n.cancel()}}}),[r,o,i]),r?{onCancel:function(){var t;null===(t=u.current)||void 0===t||t.cancel()}}:{}},te=function(t){D&&M(t),n.useEffect((function(){null==t||t()}),[])},ee=function(){var t=R(n.useState({}),2)[1];return n.useCallback((function(){return t({})}),[])};var ne=function(){function t(t,e,n,r){void 0===r&&(r={}),this.serviceRef=t,this.options=e,this.subscribe=n,this.initState=r,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=A(A(A({},this.state),{loading:!e.manual}),r)}return t.prototype.setState=function(t){void 0===t&&(t={}),this.state=A(A({},this.state),t),this.subscribe()},t.prototype.runPluginHandler=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.pluginImpls.map((function(n){var r;return null===(r=n[t])||void 0===r?void 0:r.call.apply(r,k([n],R(e),!1))})).filter(Boolean);return Object.assign.apply(Object,k([{}],R(r),!1))},t.prototype.runAsync=function(){for(var t,e,n,r,o,i,u,a,c,s,f=[],l=0;l<arguments.length;l++)f[l]=arguments[l];return S(this,void 0,void 0,(function(){var l,d,h,v,p,y,b,_,g,m,w;return T(this,(function(O){switch(O.label){case 0:if(this.count+=1,l=this.count,d=this.runPluginHandler("onBefore",f),h=d.stopNow,v=void 0!==h&&h,p=d.returnNow,y=void 0!==p&&p,b=x(d,["stopNow","returnNow"]),v)return[2,new Promise((function(){}))];if(this.setState(A({loading:!0,params:f},b)),y)return[2,Promise.resolve(b.data)];null===(e=(t=this.options).onBefore)||void 0===e||e.call(t,f),O.label=1;case 1:return O.trys.push([1,3,,4]),(_=this.runPluginHandler("onRequest",this.serviceRef.current,f).servicePromise)||(_=(w=this.serviceRef).current.apply(w,k([],R(f),!1))),[4,_];case 2:return g=O.sent(),l!==this.count?[2,new Promise((function(){}))]:(this.setState({data:g,error:void 0,loading:!1}),null===(r=(n=this.options).onSuccess)||void 0===r||r.call(n,g,f),this.runPluginHandler("onSuccess",g,f),null===(i=(o=this.options).onFinally)||void 0===i||i.call(o,f,g,void 0),l===this.count&&this.runPluginHandler("onFinally",f,g,void 0),[2,g]);case 3:if(m=O.sent(),l!==this.count)return[2,new Promise((function(){}))];throw this.setState({error:m,loading:!1}),null===(a=(u=this.options).onError)||void 0===a||a.call(u,m,f),this.runPluginHandler("onError",m,f),null===(s=(c=this.options).onFinally)||void 0===s||s.call(c,f,void 0,m),l===this.count&&this.runPluginHandler("onFinally",f,void 0,m),m;case 4:return[2]}}))}))},t.prototype.run=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.runAsync.apply(this,k([],R(e),!1)).catch((function(e){t.options.onError}))},t.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},t.prototype.refresh=function(){this.run.apply(this,k([],R(this.state.params||[]),!1))},t.prototype.refreshAsync=function(){return this.runAsync.apply(this,k([],R(this.state.params||[]),!1))},t.prototype.mutate=function(t){var e=M(t)?t(this.state.data):t;this.runPluginHandler("onMutate",e),this.setState({data:e})},t}();const re=ne;function oe(t,e){if(Nt)return t?M(t)?t():"current"in t?t.current:t:e}const ie=(ue=n.useEffect,function(t,e,r){var o=n.useRef(!1),i=n.useRef([]),u=n.useRef([]),a=n.useRef();ue((function(){var n,c=(Array.isArray(r)?r:[r]).map((function(t){return oe(t)}));if(!o.current)return o.current=!0,i.current=c,u.current=e,void(a.current=t());c.length===i.current.length&&H(c,i.current)&&H(e,u.current)||(null===(n=a.current)||void 0===n||n.call(a),i.current=c,u.current=e,a.current=t())})),$((function(){var t;null===(t=a.current)||void 0===t||t.call(a),o.current=!1}))});var ue,ae=function(){this.__data__=[],this.size=0},ce=t("y",(function(t,e){return t===e||t!=t&&e!=e})),se=ce,fe=function(t,e){for(var n=t.length;n--;)if(se(t[n][0],e))return n;return-1},le=fe,de=Array.prototype.splice,he=function(t){var e=this.__data__,n=le(e,t);return!(n<0||(n==e.length-1?e.pop():de.call(e,n,1),--this.size,0))},ve=fe,pe=function(t){var e=this.__data__,n=ve(e,t);return n<0?void 0:e[n][1]},ye=fe,be=fe,_e=function(t,e){var n=this.__data__,r=be(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},ge=ae,me=he,we=pe,Oe=function(t){return ye(this.__data__,t)>-1},je=_e;function Ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ee.prototype.clear=ge,Ee.prototype.delete=me,Ee.prototype.get=we,Ee.prototype.has=Oe,Ee.prototype.set=je;var Ae=Ee,xe=Ae,Se=function(){this.__data__=new xe,this.size=0},Te=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Pe=function(t){return this.__data__.get(t)},Re=function(t){return this.__data__.has(t)},ke=mt,Me=Q,ze=function(t){if(!Me(t))return!1;var e=ke(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};t("h",r(ze));var Ce,De=tt["__core-js_shared__"],Be=(Ce=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+Ce:"",Fe=function(t){return!!Be&&Be in t},Le=Function.prototype.toString,We=function(t){if(null!=t){try{return Le.call(t)}catch(e){}try{return t+""}catch(e){}}return""},Ie=ze,He=Fe,Ne=Q,qe=We,$e=/^\[object .+?Constructor\]$/,Ge=Function.prototype,Ue=Object.prototype,Ve=Ge.toString,Ke=Ue.hasOwnProperty,Je=RegExp("^"+Ve.call(Ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qe=function(t){return!(!Ne(t)||He(t))&&(Ie(t)?Je:$e).test(qe(t))},Xe=function(t,e){return null==t?void 0:t[e]},Ye=t("x",(function(t,e){var n=Xe(t,e);return Qe(n)?n:void 0})),Ze=Ye(tt,"Map"),tn=Ye(Object,"create"),en=tn,nn=function(){this.__data__=en?en(null):{},this.size=0},rn=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},on=tn,un=Object.prototype.hasOwnProperty,an=function(t){var e=this.__data__;if(on){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return un.call(e,t)?e[t]:void 0},cn=tn,sn=Object.prototype.hasOwnProperty,fn=tn,ln=nn,dn=rn,hn=an,vn=function(t){var e=this.__data__;return cn?void 0!==e[t]:sn.call(e,t)},pn=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=fn&&void 0===e?"__lodash_hash_undefined__":e,this};function yn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yn.prototype.clear=ln,yn.prototype.delete=dn,yn.prototype.get=hn,yn.prototype.has=vn,yn.prototype.set=pn;var bn=yn,_n=Ae,gn=Ze,mn=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},wn=function(t,e){var n=t.__data__;return mn(e)?n["string"==typeof e?"string":"hash"]:n.map},On=wn,jn=wn,En=wn,An=wn,xn=function(){this.size=0,this.__data__={hash:new bn,map:new(gn||_n),string:new bn}},Sn=function(t){var e=On(this,t).delete(t);return this.size-=e?1:0,e},Tn=function(t){return jn(this,t).get(t)},Pn=function(t){return En(this,t).has(t)},Rn=function(t,e){var n=An(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function kn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}kn.prototype.clear=xn,kn.prototype.delete=Sn,kn.prototype.get=Tn,kn.prototype.has=Pn,kn.prototype.set=Rn;var Mn=t("d",kn),zn=Ae,Cn=Ze,Dn=Mn,Bn=Ae,Fn=Se,Ln=Te,Wn=Pe,In=Re,Hn=function(t,e){var n=this.__data__;if(n instanceof zn){var r=n.__data__;if(!Cn||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Dn(r)}return n.set(t,e),this.size=n.size,this};function Nn(t){var e=this.__data__=new Bn(t);this.size=e.size}Nn.prototype.clear=Fn,Nn.prototype.delete=Ln,Nn.prototype.get=Wn,Nn.prototype.has=In,Nn.prototype.set=Hn;var qn=t("j",Nn),$n=Mn,Gn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Un=function(t){return this.__data__.has(t)};function Vn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new $n;++e<n;)this.add(t[e])}Vn.prototype.add=Vn.prototype.push=Gn,Vn.prototype.has=Un;var Kn=t("s",Vn),Jn=t("E",(function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1})),Qn=t("t",(function(t,e){return t.has(e)})),Xn=Kn,Yn=Jn,Zn=Qn,tr=function(t,e,n,r,o,i){var u=1&n,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var s=i.get(t),f=i.get(e);if(s&&f)return s==e&&f==t;var l=-1,d=!0,h=2&n?new Xn:void 0;for(i.set(t,e),i.set(e,t);++l<a;){var v=t[l],p=e[l];if(r)var y=u?r(p,v,l,e,t,i):r(v,p,l,t,e,i);if(void 0!==y){if(y)continue;d=!1;break}if(h){if(!Yn(e,(function(t,e){if(!Zn(h,e)&&(v===t||o(v,t,n,r,i)))return h.push(e)}))){d=!1;break}}else if(v!==p&&!o(v,p,n,r,i)){d=!1;break}}return i.delete(t),i.delete(e),d},er=tt.Uint8Array,nr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},rr=t("r",(function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n})),or=er,ir=ce,ur=tr,ar=nr,cr=rr,sr=st?st.prototype:void 0,fr=sr?sr.valueOf:void 0,lr=function(t,e,n,r,o,i,u){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new or(t),new or(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ir(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=ar;case"[object Set]":var c=1&r;if(a||(a=cr),t.size!=e.size&&!c)return!1;var s=u.get(t);if(s)return s==e;r|=2,u.set(t,e);var f=ur(a(t),a(e),r,o,i,u);return u.delete(t),f;case"[object Symbol]":if(fr)return fr.call(t)==fr.call(e)}return!1},dr=t("u",(function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t})),hr=Array.isArray,vr=t("a",hr);t("f",r(vr));var pr=dr,yr=vr,br=function(t,e,n){var r=e(t);return yr(t)?r:pr(r,n(t))},_r=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i},gr=_r,mr=function(){return[]},wr=Object.prototype.propertyIsEnumerable,Or=Object.getOwnPropertySymbols,jr=Or?function(t){return null==t?[]:(t=Object(t),gr(Or(t),(function(e){return wr.call(t,e)})))}:mr,Er=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Ar=mt,xr=wt,Sr=function(t){return xr(t)&&"[object Arguments]"==Ar(t)},Tr=wt,Pr=Object.prototype,Rr=Pr.hasOwnProperty,kr=Pr.propertyIsEnumerable,Mr=Sr(function(){return arguments}())?Sr:function(t){return Tr(t)&&Rr.call(t,"callee")&&!kr.call(t,"callee")},zr=t("n",Mr),Cr={exports:{}},Dr=function(){return!1};!function(t,e){var n=tt,r=Dr,o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o?n.Buffer:void 0,a=(u?u.isBuffer:void 0)||r;t.exports=a}(Cr,Cr.exports);var Br=Cr.exports,Fr=/^(?:0|[1-9]\d*)$/,Lr=t("o",(function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Fr.test(t))&&t>-1&&t%1==0&&t<e})),Wr=t("p",(function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991})),Ir=mt,Hr=Wr,Nr=wt,qr={};qr["[object Float32Array]"]=qr["[object Float64Array]"]=qr["[object Int8Array]"]=qr["[object Int16Array]"]=qr["[object Int32Array]"]=qr["[object Uint8Array]"]=qr["[object Uint8ClampedArray]"]=qr["[object Uint16Array]"]=qr["[object Uint32Array]"]=!0,qr["[object Arguments]"]=qr["[object Array]"]=qr["[object ArrayBuffer]"]=qr["[object Boolean]"]=qr["[object DataView]"]=qr["[object Date]"]=qr["[object Error]"]=qr["[object Function]"]=qr["[object Map]"]=qr["[object Number]"]=qr["[object Object]"]=qr["[object RegExp]"]=qr["[object Set]"]=qr["[object String]"]=qr["[object WeakMap]"]=!1;var $r=function(t){return Nr(t)&&Hr(t.length)&&!!qr[Ir(t)]},Gr=t("w",(function(t){return function(e){return t(e)}})),Ur={exports:{}};!function(t,e){var n=X,r=e&&!e.nodeType&&e,o=r&&t&&!t.nodeType&&t,i=o&&o.exports===r&&n.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=u}(Ur,Ur.exports);var Vr=Ur.exports,Kr=$r,Jr=Gr,Qr=Vr&&Vr.isTypedArray,Xr=Qr?Jr(Qr):Kr,Yr=Er,Zr=zr,to=vr,eo=Br,no=Lr,ro=Xr,oo=Object.prototype.hasOwnProperty,io=function(t,e){var n=to(t),r=!n&&Zr(t),o=!n&&!r&&eo(t),i=!n&&!r&&!o&&ro(t),u=n||r||o||i,a=u?Yr(t.length,String):[],c=a.length;for(var s in t)!e&&!oo.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||no(s,c))||a.push(s);return a},uo=Object.prototype,ao=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||uo)},co=function(t,e){return function(n){return t(e(n))}},so=co(Object.keys,Object),fo=ao,lo=so,ho=Object.prototype.hasOwnProperty,vo=function(t){if(!fo(t))return lo(t);var e=[];for(var n in Object(t))ho.call(t,n)&&"constructor"!=n&&e.push(n);return e},po=ze,yo=Wr,bo=t("v",(function(t){return null!=t&&yo(t.length)&&!po(t)})),_o=io,go=vo,mo=bo,wo=t("m",(function(t){return mo(t)?_o(t):go(t)})),Oo=br,jo=jr,Eo=wo,Ao=function(t){return Oo(t,Eo,jo)},xo=Object.prototype.hasOwnProperty,So=function(t,e,n,r,o,i){var u=1&n,a=Ao(t),c=a.length;if(c!=Ao(e).length&&!u)return!1;for(var s=c;s--;){var f=a[s];if(!(u?f in e:xo.call(e,f)))return!1}var l=i.get(t),d=i.get(e);if(l&&d)return l==e&&d==t;var h=!0;i.set(t,e),i.set(e,t);for(var v=u;++s<c;){var p=t[f=a[s]],y=e[f];if(r)var b=u?r(y,p,f,e,t,i):r(p,y,f,t,e,i);if(!(void 0===b?p===y||o(p,y,n,r,i):b)){h=!1;break}v||(v="constructor"==f)}if(h&&!v){var _=t.constructor,g=e.constructor;_==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof g&&g instanceof g||(h=!1)}return i.delete(t),i.delete(e),h},To=Ye(tt,"DataView"),Po=Ye(tt,"Promise"),Ro=Ye(tt,"Set"),ko=To,Mo=Ze,zo=Po,Co=t("q",Ro),Do=Ye(tt,"WeakMap"),Bo=mt,Fo=We,Lo="[object Map]",Wo="[object Promise]",Io="[object Set]",Ho="[object WeakMap]",No="[object DataView]",qo=Fo(ko),$o=Fo(Mo),Go=Fo(zo),Uo=Fo(Co),Vo=Fo(Do),Ko=Bo;(ko&&Ko(new ko(new ArrayBuffer(1)))!=No||Mo&&Ko(new Mo)!=Lo||zo&&Ko(zo.resolve())!=Wo||Co&&Ko(new Co)!=Io||Do&&Ko(new Do)!=Ho)&&(Ko=function(t){var e=Bo(t),n="[object Object]"==e?t.constructor:void 0,r=n?Fo(n):"";if(r)switch(r){case qo:return No;case $o:return Lo;case Go:return Wo;case Uo:return Io;case Vo:return Ho}return e});var Jo=qn,Qo=tr,Xo=lr,Yo=So,Zo=Ko,ti=vr,ei=Br,ni=Xr,ri="[object Arguments]",oi="[object Array]",ii="[object Object]",ui=Object.prototype.hasOwnProperty,ai=function(t,e,n,r,o,i){var u=ti(t),a=ti(e),c=u?oi:Zo(t),s=a?oi:Zo(e),f=(c=c==ri?ii:c)==ii,l=(s=s==ri?ii:s)==ii,d=c==s;if(d&&ei(t)){if(!ei(e))return!1;u=!0,f=!1}if(d&&!f)return i||(i=new Jo),u||ni(t)?Qo(t,e,n,r,o,i):Xo(t,e,c,n,r,o,i);if(!(1&n)){var h=f&&ui.call(t,"__wrapped__"),v=l&&ui.call(e,"__wrapped__");if(h||v){var p=h?t.value():t,y=v?e.value():e;return i||(i=new Jo),o(p,y,n,r,i)}}return!!d&&(i||(i=new Jo),Yo(t,e,n,r,o,i))},ci=wt,si=t("k",(function t(e,n,r,o,i){return e===n||(null==e||null==n||!ci(e)&&!ci(n)?e!=e&&n!=n:ai(e,n,r,o,t,i))})),fi=si;const li=t("B",r((function(t,e){return fi(t,e)}))),di=function(t,e,r){var o,i,u=n.useRef(),a=n.useRef(0);o=e,i=u.current,void 0===o&&(o=[]),void 0===i&&(i=[]),li(o,i)||(u.current=e,a.current+=1),ie(t,[a.current],r)};var hi={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,meta:/(mac|iphone|ipod|ipad)/i.test("undefined"!=typeof navigator?null===navigator||void 0===navigator?void 0:navigator.platform:"")?[91,93]:[91,92],selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222},vi={ctrl:function(t){return t.ctrlKey},shift:function(t){return t.shiftKey},alt:function(t){return t.altKey},meta:function(t){return"keyup"===t.type?hi.meta.includes(t.keyCode):t.metaKey}};function pi(t,e,n){var r,o;if(!t.key)return!1;if(C(e))return t.keyCode===e;var i=e.split("."),u=0;try{for(var a=P(i),c=a.next();!c.done;c=a.next()){var s=c.value,f=vi[s],l=hi[s.toLowerCase()];(f&&f(t)||l&&l===t.keyCode)&&u++}}catch(d){r={error:d}}finally{try{c&&!c.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}return n?u===i.length&&function(t){var e=Object.keys(vi).reduce((function(e,n){return vi[n](t)?e+1:e}),0);return[16,17,18,91,92].includes(t.keyCode)?e:e+1}(t)===i.length:u===i.length}var yi=["keydown"],bi=co(Object.getPrototypeOf,Object),_i=mt,gi=bi,mi=wt,wi=Function.prototype,Oi=Object.prototype,ji=wi.toString,Ei=Oi.hasOwnProperty,Ai=ji.call(Object);t("C",r((function(t){if(!mi(t)||"[object Object]"!=_i(t))return!1;var e=gi(t);if(null===e)return!0;var n=Ei.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&ji.call(n)==Ai})));var xi={restoreOnUnmount:!1}}}}));
