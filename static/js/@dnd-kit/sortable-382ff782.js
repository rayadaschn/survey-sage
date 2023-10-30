import{r as e,R as t}from"../@ant-design/icons-a547670a.js";import{K as r,u as n,a as i,b as a,g as o}from"./core-bfdf9a21.js";import{a as s,d,v as c,m as u,C as l}from"./utilities-5fc7a870.js";function g(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function f(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function v(e){return null!==e&&e>=0}const p=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const a=g(t,n,r),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},x={scaleX:1,scaleY:1},I=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[r])?t:n;if(!s)return null;if(i===r){const e=a[o];return e?{x:0,y:r<o?e.top+e.height-(s.top+s.height):e.top-s.top,...x}:null}const d=function(e,t,r){const n=e[t],i=e[t-1],a=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):a?a.top-(n.top+n.height):0;return a?a.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(a,i,r);return i>r&&i<=o?{x:0,y:-s.height-d,...x}:i<r&&i>=o?{x:0,y:s.height+d,...x}:{x:0,y:0,...x}};const b="Sortable",m=t.createContext({activeIndex:-1,containerId:b,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:p,disabled:{draggable:!1,droppable:!1}});function h(r){let{children:i,id:a,items:o,strategy:c=p,disabled:u=!1}=r;const{active:l,dragOverlay:g,droppableRects:v,over:x,measureDroppableContainers:I}=n(),h=s(b,a),y=Boolean(null!==g.rect),R=e.useMemo((()=>o.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[o]),w=null!=l,D=l?R.indexOf(l.id):-1,O=x?R.indexOf(x.id):-1,N=e.useRef(R),C=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(R,N.current),S=-1!==O&&-1===D||C,T=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(u);d((()=>{C&&w&&I(R)}),[C,R,w,I]),e.useEffect((()=>{N.current=R}),[R]);const E=e.useMemo((()=>({activeIndex:D,containerId:h,disabled:T,disableTransforms:S,items:R,overIndex:O,useDragOverlay:y,sortedRects:f(R,v),strategy:c})),[D,h,T.draggable,T.droppable,S,R,O,v,y,c]);return t.createElement(m.Provider,{value:E},i)}const y=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return g(r,n,i).indexOf(t)},R=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:d,transition:c}=e;return!(!c||!n)&&((s===a||i!==o)&&(!!r||o!==i&&t===d))},w={duration:200,easing:"ease"},D="transform",O=l.Transition.toString({property:D,duration:0,easing:"linear"}),N={roleDescription:"sortable"};function C(t){let{animateLayoutChanges:r=R,attributes:n,disabled:s,data:g,getNewIndex:f=y,id:p,strategy:x,resizeObserverConfig:I,transition:b=w}=t;const{items:h,containerId:C,activeIndex:S,disabled:T,disableTransforms:E,sortedRects:M,overIndex:j,useDragOverlay:A,strategy:X}=e.useContext(m),Y=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(s,T),z=h.indexOf(p),B=e.useMemo((()=>({sortable:{containerId:C,index:z,items:h},...g})),[C,g,z,h]),L=e.useMemo((()=>h.slice(h.indexOf(p))),[h,p]),{rect:F,node:K,isOver:P,setNodeRef:U}=i({id:p,data:B,disabled:Y.droppable,resizeObserverConfig:{updateMeasurementsFor:L,...I}}),{active:k,activatorEvent:q,activeNodeRect:G,attributes:H,setNodeRef:J,listeners:Q,isDragging:V,over:W,setActivatorNodeRef:Z,transform:$}=a({id:p,data:B,attributes:{...N,...n},disabled:Y.draggable}),_=c(U,J),ee=Boolean(k),te=ee&&!E&&v(S)&&v(j),re=!A&&V,ne=re&&te?$:null,ie=te?null!=ne?ne:(null!=x?x:X)({rects:M,activeNodeRect:G,activeIndex:S,overIndex:j,index:z}):null,ae=v(S)&&v(j)?f({id:p,items:h,activeIndex:S,overIndex:j}):z,oe=null==k?void 0:k.id,se=e.useRef({activeId:oe,items:h,newIndex:ae,containerId:C}),de=h!==se.current.items,ce=r({active:k,containerId:C,isDragging:V,isSorting:ee,id:p,index:z,items:h,newIndex:se.current.newIndex,previousItems:se.current.items,previousContainerId:se.current.containerId,transition:b,wasDragging:null!=se.current.activeId}),ue=function(t){let{disabled:r,index:n,node:i,rect:a}=t;const[s,c]=e.useState(null),u=e.useRef(n);return d((()=>{if(!r&&n!==u.current&&i.current){const e=a.current;if(e){const t=o(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&c(r)}}n!==u.current&&(u.current=n)}),[r,n,i,a]),e.useEffect((()=>{s&&c(null)}),[s]),s}({disabled:!ce,index:z,node:K,rect:F});return e.useEffect((()=>{ee&&se.current.newIndex!==ae&&(se.current.newIndex=ae),C!==se.current.containerId&&(se.current.containerId=C),h!==se.current.items&&(se.current.items=h)}),[ee,ae,C,h]),e.useEffect((()=>{if(oe===se.current.activeId)return;if(oe&&!se.current.activeId)return void(se.current.activeId=oe);const e=setTimeout((()=>{se.current.activeId=oe}),50);return()=>clearTimeout(e)}),[oe]),{active:k,activeIndex:S,attributes:H,data:B,rect:F,index:z,newIndex:ae,items:h,isOver:P,isSorting:ee,isDragging:V,listeners:Q,node:K,overIndex:j,over:W,setNodeRef:_,setActivatorNodeRef:Z,setDroppableNodeRef:U,setDraggableNodeRef:J,transform:null!=ue?ue:ie,transition:function(){if(ue||de&&se.current.newIndex===z)return O;if(re&&!u(q)||!b)return;if(ee||ce)return l.Transition.toString({...b,property:D});return}()}}r.Down,r.Right,r.Up,r.Left;export{h as S,g as a,C as u,I as v};
