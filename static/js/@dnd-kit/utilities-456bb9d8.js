import{r as n}from"../@ant-design/icons-74a3c655.js";function t(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.useMemo((()=>n=>{e.forEach((t=>t(n)))}),e)}const e="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function r(n){const t=Object.prototype.toString.call(n);return"[object Window]"===t||"[object global]"===t}function u(n){return"nodeType"in n}function o(n){var t,e;return n?r(n)?n:u(n)&&null!=(t=null==(e=n.ownerDocument)?void 0:e.defaultView)?t:window:window}function c(n){const{Document:t}=o(n);return n instanceof t}function s(n){return!r(n)&&n instanceof o(n).HTMLElement}function a(n){return n instanceof o(n).SVGElement}function i(n){return n?r(n)?n.document:u(n)?c(n)?n:s(n)?n.ownerDocument:document:document:document}const l=e?n.useLayoutEffect:n.useEffect;function f(t){const e=n.useRef(t);return l((()=>{e.current=t})),n.useCallback((function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return null==e.current?void 0:e.current(...t)}),[])}function d(){const t=n.useRef(null);return[n.useCallback(((n,e)=>{t.current=setInterval(n,e)}),[]),n.useCallback((()=>{null!==t.current&&(clearInterval(t.current),t.current=null)}),[])]}function m(t,e){void 0===e&&(e=[t]);const r=n.useRef(t);return l((()=>{r.current!==t&&(r.current=t)}),e),r}function g(t,e){const r=n.useRef();return n.useMemo((()=>{const n=t(r.current);return r.current=n,n}),[...e])}function h(t){const e=f(t),r=n.useRef(null),u=n.useCallback((n=>{n!==r.current&&(null==e||e(n,r.current)),r.current=n}),[]);return[r,u]}function b(t){const e=n.useRef();return n.useEffect((()=>{e.current=t}),[t]),e.current}let w={};function y(t,e){return n.useMemo((()=>{if(e)return e;const n=null==w[t]?0:w[t]+1;return w[t]=n,t+"-"+n}),[t,e])}function v(n){return function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),u=1;u<e;u++)r[u-1]=arguments[u];return r.reduce(((t,e)=>{const r=Object.entries(e);for(const[u,o]of r){const e=t[u];null!=e&&(t[u]=e+n*o)}return t}),{...t})}}const p=v(1),S=v(-1);function T(n){if(!n)return!1;const{KeyboardEvent:t}=o(n.target);return t&&n instanceof t}function x(n){if(function(n){if(!n)return!1;const{TouchEvent:t}=o(n.target);return t&&n instanceof t}(n)){if(n.touches&&n.touches.length){const{clientX:t,clientY:e}=n.touches[0];return{x:t,y:e}}if(n.changedTouches&&n.changedTouches.length){const{clientX:t,clientY:e}=n.changedTouches[0];return{x:t,y:e}}}return function(n){return"clientX"in n&&"clientY"in n}(n)?{x:n.clientX,y:n.clientY}:null}const E=Object.freeze({Translate:{toString(n){if(!n)return;const{x:t,y:e}=n;return"translate3d("+(t?Math.round(t):0)+"px, "+(e?Math.round(e):0)+"px, 0)"}},Scale:{toString(n){if(!n)return;const{scaleX:t,scaleY:e}=n;return"scaleX("+t+") scaleY("+e+")"}},Transform:{toString(n){if(n)return[E.Translate.toString(n),E.Scale.toString(n)].join(" ")}},Transition:{toString(n){let{property:t,duration:e,easing:r}=n;return t+" "+e+"ms "+r}}}),j="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function M(n){return n.matches(j)?n:n.querySelector(j)}export{E as C,y as a,x as b,p as c,l as d,i as e,d as f,o as g,b as h,g as i,e as j,s as k,h as l,T as m,M as n,r as o,u as p,c as q,f as r,S as s,a as t,m as u,t as v};