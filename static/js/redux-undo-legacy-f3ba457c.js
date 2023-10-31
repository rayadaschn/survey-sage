System.register([],(function(t,e){"use strict";return{execute:function(){t({C:function(t,y={}){!function(t){i=t}(y.debug);const T={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:e.UNDO,redoType:e.REDO,jumpToPastType:e.JUMP_TO_PAST,jumpToFutureType:e.JUMP_TO_FUTURE,jumpType:e.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...y,initTypes:n(y.initTypes,["@@redux-undo/INIT"]),clearHistoryType:n(y.clearHistoryType,[e.CLEAR_HISTORY])},g=T.neverSkipReducer?(e,n,...r)=>({...e,present:t(e.present,n,...r)}):t=>t;let U;return(e=U,n={},...y)=>{!function(t,e){o={header:[],prev:[],action:[],next:[],msgs:[]},i&&(console.group?(o.header=["%credux-undo","font-style: italic","action",t.type],o.action=s("action",u.action,t),o.prev=s("prev history",u.prevState,e)):(o.header=["redux-undo action",t.type],o.action=["action",t],o.prev=["prev history",e]))}(n,e);let x,_=e;if(!U){if(a("history is uninitialized"),void 0===e)return _=c(t(e,{type:"@@redux-undo/CREATE_HISTORY"},...y),T.ignoreInitialState),a("do not set initialState on probe actions"),p(_),_;!function(t){return typeof t.present<"u"&&typeof t.future<"u"&&typeof t.past<"u"&&Array.isArray(t.future)&&Array.isArray(t.past)}(e)?(_=U=c(e,T.ignoreInitialState),a("initialHistory initialized: initialState is not a history",U)):(_=U=T.ignoreInitialState?e:r(e.past,e.present,e.future),a("initialHistory initialized: initialState is a history",U))}switch(n.type){case void 0:return _;case T.undoType:return x=f(_,-1),a("perform undo"),p(x),g(x,n,...y);case T.redoType:return x=f(_,1),a("perform redo"),p(x),g(x,n,...y);case T.jumpToPastType:return x=d(_,n.index),a(`perform jumpToPast to ${n.index}`),p(x),g(x,n,...y);case T.jumpToFutureType:return x=l(_,n.index),a(`perform jumpToFuture to ${n.index}`),p(x),g(x,n,...y);case T.jumpType:return x=f(_,n.index),a(`perform jump to ${n.index}`),p(x),g(x,n,...y);case function(t,e){return e.indexOf(t)>-1?t:!t}(n.type,T.clearHistoryType):return x=c(_.present,T.ignoreInitialState),a("perform clearHistory"),p(x),g(x,n,...y);default:if(x=t(_.present,n,...y),T.initTypes.some((t=>t===n.type)))return a("reset history due to init action"),p(U),U;if(_._latestUnfiltered===x)return _;if("function"==typeof T.filter&&!T.filter(n,x,_)){const t=r(_.past,x,_.future,_.group);return T.syncFilter||(t._latestUnfiltered=_._latestUnfiltered),a("filter ignored action, not storing it in past"),p(t),t}const e=T.groupBy(n,x,_);if(null!=e&&e===_.group){const t=r(_.past,x,_.future,_.group);return a("groupBy grouped the action with the previous action"),p(t),t}return _=function(t,e,n,i){const o=t.past.length+1;a("inserting",e),a("new free: ",n-o);const{past:u,_latestUnfiltered:s}=t,p=n&&n<=o,c=u.slice(p?1:0),l=null!=s?[...c,s]:c;return r(l,e,[],i)}(_,x,T.limit,e),a("inserted new state into history"),p(_),_}}},D:function(t){const e=n(t);return t=>e.indexOf(t.type)<0}});const e={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"};function n(t,e=[]){return Array.isArray(t)?t:"string"==typeof t?[t]:e}function r(t,e,n,r=null){return{past:t,present:e,future:n,group:r,_latestUnfiltered:e,index:t.length,limit:t.length+n.length+1}}let i,o;t("M",{undo:()=>({type:e.UNDO}),redo:()=>({type:e.REDO}),jumpToFuture:t=>({type:e.JUMP_TO_FUTURE,index:t}),jumpToPast:t=>({type:e.JUMP_TO_PAST,index:t}),jump:t=>({type:e.JUMP,index:t}),clearHistory:()=>({type:e.CLEAR_HISTORY})});const u={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function s(t,e,n){return[`%c${t}`,`color: ${e}; font-weight: bold`,n]}function p(t){i&&(console.group?o.next=s("next history",u.nextState,t):o.next=["next history",t],function(){const{header:t,prev:e,next:n,action:r,msgs:i}=o;console.group}())}function a(...t){i&&(o.msgs=o.msgs.concat([...t,"\n"]))}function c(t,e){const n=r([],t,[]);return e&&(n._latestUnfiltered=null),n}function l(t,e){if(e<0||e>=t.future.length)return t;const{past:n,future:i,_latestUnfiltered:o}=t;return r([...n,o,...i.slice(0,e)],i[e],i.slice(e+1))}function d(t,e){if(e<0||e>=t.past.length)return t;const{past:n,future:i,_latestUnfiltered:o}=t,u=n.slice(0,e),s=[...n.slice(e+1),o,...i];return r(u,n[e],s)}function f(t,e){return e>0?l(t,e-1):e<0?d(t,t.past.length+e):t}}}}));
