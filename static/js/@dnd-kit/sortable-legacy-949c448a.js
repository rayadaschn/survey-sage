System.register(["../@ant-design/icons-legacy-fccabc0f.js","./core-legacy-77cb7ec8.js","./utilities-legacy-ab1f8ca1.js"],(function(e,t){"use strict";var r,n,i,a,o,s,d,c,l,u,g,v;return{setters:[e=>{r=e.r,n=e.R},e=>{i=e.K,a=e.u,o=e.a,s=e.b,d=e.g},e=>{c=e.a,l=e.d,u=e.v,g=e.m,v=e.C}],execute:function(){function t(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function f(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function p(e){return null!==e&&e>=0}e({S:function(e){let{children:t,id:i,items:o,strategy:s=x,disabled:d=!1}=e;const{active:u,dragOverlay:g,droppableRects:v,over:p,measureDroppableContainers:I}=a(),h=c(b,i),y=Boolean(null!==g.rect),R=r.useMemo((()=>o.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[o]),w=null!=u,D=u?R.indexOf(u.id):-1,O=p?R.indexOf(p.id):-1,N=r.useRef(R),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(R,N.current),S=-1!==O&&-1===D||C,T=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(d);l((()=>{C&&w&&I(R)}),[C,R,w,I]),r.useEffect((()=>{N.current=R}),[R]);const E=r.useMemo((()=>({activeIndex:D,containerId:h,disabled:T,disableTransforms:S,items:R,overIndex:O,useDragOverlay:y,sortedRects:f(R,v),strategy:s})),[D,h,T.draggable,T.droppable,S,R,O,v,y,s]);return n.createElement(m.Provider,{value:E},t)},a:t,u:function(e){let{animateLayoutChanges:t=y,attributes:n,disabled:i,data:a,getNewIndex:c=h,id:f,strategy:x,resizeObserverConfig:I,transition:b=R}=e;const{items:N,containerId:C,activeIndex:S,disabled:T,disableTransforms:E,sortedRects:M,overIndex:j,useDragOverlay:A,strategy:X}=r.useContext(m),Y=function(e,t){var r,n;return"boolean"==typeof e?{draggable:e,droppable:!1}:{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,T),z=N.indexOf(f),B=r.useMemo((()=>({sortable:{containerId:C,index:z,items:N},...a})),[C,a,z,N]),L=r.useMemo((()=>N.slice(N.indexOf(f))),[N,f]),{rect:F,node:K,isOver:P,setNodeRef:U}=o({id:f,data:B,disabled:Y.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...I}}),{active:k,activatorEvent:q,activeNodeRect:G,attributes:H,setNodeRef:J,listeners:Q,isDragging:V,over:W,setActivatorNodeRef:Z,transform:$}=s({id:f,data:B,attributes:{...O,...n},disabled:Y.draggable}),_=u(U,J),ee=Boolean(k),te=ee&&!E&&p(S)&&p(j),re=!A&&V,ne=re&&te?$:null,ie=null!=x?x:X,ae=te?null!=ne?ne:ie({rects:M,activeNodeRect:G,activeIndex:S,overIndex:j,index:z}):null,oe=p(S)&&p(j)?c({id:f,items:N,activeIndex:S,overIndex:j}):z,se=null==k?void 0:k.id,de=r.useRef({activeId:se,items:N,newIndex:oe,containerId:C}),ce=N!==de.current.items,le=t({active:k,containerId:C,isDragging:V,isSorting:ee,id:f,index:z,items:N,newIndex:de.current.newIndex,previousItems:de.current.items,previousContainerId:de.current.containerId,transition:b,wasDragging:null!=de.current.activeId}),ue=function(e){let{disabled:t,index:n,node:i,rect:a}=e;const[o,s]=r.useState(null),c=r.useRef(n);return l((()=>{if(!t&&n!==c.current&&i.current){const e=a.current;if(e){const t=d(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==c.current&&(c.current=n)}),[t,n,i,a]),r.useEffect((()=>{o&&s(null)}),[o]),o}({disabled:!le,index:z,node:K,rect:F});return r.useEffect((()=>{ee&&de.current.newIndex!==oe&&(de.current.newIndex=oe),C!==de.current.containerId&&(de.current.containerId=C),N!==de.current.items&&(de.current.items=N)}),[ee,oe,C,N]),r.useEffect((()=>{if(se===de.current.activeId)return;if(se&&!de.current.activeId)return void(de.current.activeId=se);const e=setTimeout((()=>{de.current.activeId=se}),50);return()=>clearTimeout(e)}),[se]),{active:k,activeIndex:S,attributes:H,data:B,rect:F,index:z,newIndex:oe,items:N,isOver:P,isSorting:ee,isDragging:V,listeners:Q,node:K,overIndex:j,over:W,setNodeRef:_,setActivatorNodeRef:Z,setDroppableNodeRef:U,setDraggableNodeRef:J,transform:null!=ue?ue:ae,transition:ue||ce&&de.current.newIndex===z?D:re&&!g(q)||!b?void 0:ee||le?v.Transition.toString({...b,property:w}):void 0}}});const x=e=>{let{rects:r,activeIndex:n,overIndex:i,index:a}=e;const o=t(r,i,n),s=r[a],d=o[a];return d&&s?{x:d.left-s.left,y:d.top-s.top,scaleX:d.width/s.width,scaleY:d.height/s.height}:null},I={scaleX:1,scaleY:1};e("v",(e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[r])?t:n;if(!s)return null;if(i===r){const e=a[o];return e?{x:0,y:r<o?e.top+e.height-(s.top+s.height):e.top-s.top,...I}:null}const d=function(e,t,r){const n=e[t],i=e[t-1],a=e[t+1];return n?r<t?i?n.top-(i.top+i.height):a?a.top-(n.top+n.height):0:a?a.top-(n.top+n.height):i?n.top-(i.top+i.height):0:0}(a,i,r);return i>r&&i<=o?{x:0,y:-s.height-d,...I}:i<r&&i>=o?{x:0,y:s.height+d,...I}:{x:0,y:0,...I}}));const b="Sortable",m=n.createContext({activeIndex:-1,containerId:b,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:x,disabled:{draggable:!1,droppable:!1}}),h=e=>{let{id:r,items:n,activeIndex:i,overIndex:a}=e;return t(n,i,a).indexOf(r)},y=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:d,transition:c}=e;return!(!c||!n||s!==a&&i===o||!r&&(o===i||t!==d))},R={duration:200,easing:"ease"},w="transform",D=v.Transition.toString({property:w,duration:0,easing:"linear"}),O={roleDescription:"sortable"};i.Down,i.Right,i.Up,i.Left}}}));
