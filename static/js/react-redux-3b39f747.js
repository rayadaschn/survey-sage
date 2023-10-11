import{r as e}from"./antd-210c0f96.js";import{r as t,d as n}from"./@ant-design/icons-356ed3e5.js";var r={exports:{}},o={},u=t;var c="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=u.useState,i=u.useEffect,a=u.useLayoutEffect,f=u.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!c(e,n)}catch(r){return!0}}var p="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return a((function(){o.value=n,o.getSnapshot=t,l(o)&&u({inst:o})}),[e,n,t]),i((function(){return l(o)&&u({inst:o}),e((function(){l(o)&&u({inst:o})}))}),[e]),f(n),n};o.useSyncExternalStore=void 0!==u.useSyncExternalStore?u.useSyncExternalStore:p,r.exports=o;var d=r.exports,y={exports:{}},S={},b=t,v=d;var m="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},x=v.useSyncExternalStore,h=b.useRef,g=b.useEffect,C=b.useMemo,w=b.useDebugValue;S.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var u=h(null);if(null===u.current){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=C((function(){function e(e){if(!i){if(i=!0,u=e,e=r(e),void 0!==o&&c.hasValue){var t=c.value;if(o(t,e))return s=t}return s=e}if(t=s,m(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,s=n)}var u,s,i=!1,a=void 0===n?null:n;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]}),[t,n,r,o]);var s=x(e,u[0],u[1]);return g((function(){c.hasValue=!0,c.value=s}),[s]),w(s),s},y.exports=S;var $=y.exports;let E=function(e){e()};const M=()=>E,k=Symbol.for("react-redux-context"),P="undefined"!=typeof globalThis?globalThis:{};function j(){var e;if(!t.createContext)return{};const n=null!=(e=P[k])?e:P[k]=new Map;let r=n.get(t.createContext);return r||(r=t.createContext(null),n.set(t.createContext,r)),r}const N=j();function F(e=N){return function(){return t.useContext(e)}}const L=F();let V=()=>{throw new Error("uSES not initialized!")};const O=(e,t)=>e===t;function R(e=N){const n=e===N?L:F(e);return function(e,r={}){const{equalityFn:o=O,stabilityCheck:u,noopCheck:c}="function"==typeof r?{equalityFn:r}:r,{store:s,subscription:i,getServerState:a,stabilityCheck:f,noopCheck:l}=n();t.useRef(!0);const p=t.useCallback({[e.name]:t=>e(t)}[e.name],[e,f,u]),d=V(i.addNestedSub,s.getState,a||s.getState,p,o);return t.useDebugValue(d),d}}const T=R();var _=n,z={};z[_.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},z[_.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var D,U={},W=Symbol.for("react.element"),q=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),H=Symbol.for("react.context"),J=Symbol.for("react.server_context"),K=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function te(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case W:switch(e=e.type){case A:case B:case I:case Q:case X:return e;default:switch(e=e&&e.$$typeof){case J:case H:case K:case Z:case Y:case G:return e;default:return t}}case q:return t}}}D=Symbol.for("react.module.reference"),U.ContextConsumer=H,U.ContextProvider=G,U.Element=W,U.ForwardRef=K,U.Fragment=A,U.Lazy=Z,U.Memo=Y,U.Portal=q,U.Profiler=B,U.StrictMode=I,U.Suspense=Q,U.SuspenseList=X,U.isAsyncMode=function(){return!1},U.isConcurrentMode=function(){return!1},U.isContextConsumer=function(e){return te(e)===H},U.isContextProvider=function(e){return te(e)===G},U.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===W},U.isForwardRef=function(e){return te(e)===K},U.isFragment=function(e){return te(e)===A},U.isLazy=function(e){return te(e)===Z},U.isMemo=function(e){return te(e)===Y},U.isPortal=function(e){return te(e)===q},U.isProfiler=function(e){return te(e)===B},U.isStrictMode=function(e){return te(e)===I},U.isSuspense=function(e){return te(e)===Q},U.isSuspenseList=function(e){return te(e)===X},U.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===B||e===I||e===Q||e===X||e===ee||"object"==typeof e&&null!==e&&(e.$$typeof===Z||e.$$typeof===Y||e.$$typeof===G||e.$$typeof===H||e.$$typeof===K||e.$$typeof===D||void 0!==e.getModuleId)},U.typeOf=te;const ne={notify(){},get:()=>[]};function re(e,t){let n,r=ne,o=0,u=!1;function c(){a.onStateChange&&a.onStateChange()}function s(){o++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=function(){const e=M();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}function i(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=ne)}const a={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),i())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:c,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,s())},tryUnsubscribe:function(){u&&(u=!1,i())},getListeners:()=>r};return a}const oe=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?t.useLayoutEffect:t.useEffect;function ue({store:e,context:n,children:r,serverState:o,stabilityCheck:u="once",noopCheck:c="once"}){const s=t.useMemo((()=>{const t=re(e);return{store:e,subscription:t,getServerState:o?()=>o:void 0,stabilityCheck:u,noopCheck:c}}),[e,o,u,c]),i=t.useMemo((()=>e.getState()),[e]);oe((()=>{const{subscription:t}=s;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[s,i]);const a=n||N;return t.createElement(a.Provider,{value:s},r)}function ce(e=N){const t=e===N?L:F(e);return function(){const{store:e}=t();return e}}const se=ce();function ie(e=N){const t=e===N?se:ce(e);return function(){return t().dispatch}}const ae=ie();var fe,le;fe=$.useSyncExternalStoreWithSelector,V=fe,le=e.unstable_batchedUpdates,E=le;export{ue as P,ae as a,T as u};
