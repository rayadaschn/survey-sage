function e(){import.meta.url,import("_").catch((()=>1))}import{r as s,ab as t,ac as r,K as i,ad as n,ae as a,a9 as l,af as c,aa as d,ag as o,ah as h,R as x}from"./@ant-design/icons-9d4a3177.js";import{r as j,S as m,T as u,L as _,B as f,D as p,R as v,a as g,P as y,m as N,M as b,E as S,b as C,C as w,t as P}from"./antd-9fb71546.js";import{L as k,O as q,u as A,a as O,b as z,c as R,R as T}from"./react-router-dom-8b7ca612.js";import{u as L}from"./ahooks-b4220e90.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var E={exports:{}},F={},I=s,M=Symbol.for("react.element"),W=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,D=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function H(e,s,t){var r,i={},n=null,a=null;for(r in void 0!==t&&(n=""+t),void 0!==s.key&&(n=""+s.key),void 0!==s.ref&&(a=s.ref),s)B.call(s,r)&&!K.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:M,type:e,key:n,ref:a,props:i,_owner:D.current}}F.Fragment=W,F.jsx=H,F.jsxs=H,E.exports=F;var U=E.exports;var $={},J=j;$.createRoot=J.createRoot,$.hydrateRoot=J.hydrateRoot;const Q="_header_djf0z_1",Y="_left_djf0z_4",G="_right_djf0z_7",V="_main_djf0z_10",X="_footer_djf0z_13",Z="_container_1fxih_1",{Title:ee}=u,se=()=>U.jsx("div",{className:Z,children:U.jsx(k,{to:"/",children:U.jsxs(m,{children:[U.jsx(ee,{children:U.jsx(t,{})}),U.jsx(ee,{children:"问卷调查"})]})})}),te=()=>U.jsx(U.Fragment,{children:U.jsx(k,{to:He,children:"登录"})}),{Header:re,Content:ie,Footer:ne}=_,ae=()=>U.jsxs(_,{children:[U.jsxs(re,{className:Q,children:[U.jsx("div",{className:Y,children:U.jsx(se,{})}),"MainLayout header",U.jsx("div",{className:G,children:U.jsx(te,{})})]}),U.jsx(ie,{className:V,children:U.jsx(q,{})}),U.jsx(ne,{className:X,children:"文件调查@2023 Created by Huy"})]}),le="_container_drwq3_1",ce="_left_drwq3_7",de="_right_drwq3_10",oe=()=>{const e=A(),{pathname:s}=O();return U.jsxs("div",{className:le,children:[U.jsx("div",{className:ce,children:U.jsxs(m,{direction:"vertical",children:[U.jsx(f,{type:"primary",size:"large",icon:U.jsx(r,{}),children:"新建问卷"}),U.jsx(p,{}),U.jsx(f,{type:s.startsWith("/manage/list")?"default":"text",size:"large",icon:U.jsx(i,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),U.jsx(f,{type:s.startsWith("/manage/star")?"default":"text",size:"large",icon:U.jsx(n,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),U.jsx(f,{type:s.startsWith("/manage/trash")?"default":"text",size:"large",icon:U.jsx(a,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),U.jsx("div",{className:de,children:U.jsx(q,{})})]})},he=()=>U.jsxs(U.Fragment,{children:[U.jsx("p",{children:"Question layout"}),U.jsx("div",{children:U.jsx(q,{})})]}),xe=()=>U.jsx("div",{children:"Register"}),je=()=>{const e=A();return U.jsx(U.Fragment,{children:U.jsx(v,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:U.jsx(f,{type:"primary",onClick:()=>e(Ue),children:"返回首页"})})})},me={header:"_header_1euva_1",left:"_left_1euva_4",right:"_right_1euva_7",content:"_content_1euva_11",footer:"_footer_1euva_14"},ue="_container_1bfhx_1",_e="_title_1bfhx_10",fe="_left_1bfhx_13",pe="_right_1bfhx_16",ve="_button-container_1bfhx_21",{confirm:ge}=b,ye=e=>{const{id:s,title:t,isPublished:r,answerContent:i,currentAt:h,isStar:x}=e;return U.jsxs("div",{className:ue,children:[U.jsxs("div",{className:_e,children:[U.jsx("div",{className:fe,children:U.jsx(k,{to:r?"/question/stat/".concat(s):"/question/edit/".concat(s),children:U.jsxs(m,{children:[x&&U.jsx(n,{style:{color:"red"}}),t]})})}),U.jsx("div",{className:pe,children:U.jsxs(m,{children:[r?U.jsx(g,{color:"processing",children:"已发布"}):U.jsx(g,{children:"未发布"}),U.jsxs("span",{children:["答卷: ",i]}),U.jsx("span",{children:h})]})})]}),U.jsx(p,{className:"m-3"}),U.jsxs("div",{className:ve,children:[U.jsx("div",{className:fe,children:U.jsxs(m,{children:[U.jsx(f,{icon:U.jsx(l,{}),type:"text",size:"small",children:"编辑问卷"}),U.jsx(f,{icon:U.jsx(c,{}),type:"text",size:"small",children:"数据统计"})]})}),U.jsx("div",{className:pe,children:U.jsxs(m,{children:[U.jsx(f,{type:"text",icon:U.jsx(n,{}),size:"small",children:"标星"}),U.jsx(y,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:()=>{},children:U.jsx(f,{type:"text",icon:U.jsx(d,{}),size:"small",children:"复制"})}),U.jsx(f,{type:"text",icon:U.jsx(a,{}),size:"small",onClick:()=>{ge({title:"确定删除该问卷?",icon:U.jsx(o,{}),onOk:()=>N.success("删除")})},children:"删除"})]})})]})]})},{Title:Ne}=u,be=[{id:"q1",title:"问卷 1",isPublished:!1,isStar:!1,answerContent:9,currentAt:"1 月 1 日 12:45"},{id:"q2",title:"问卷 2",isPublished:!0,isStar:!1,answerContent:3,currentAt:"2 月 1 日 12:45"},{id:"q3",title:"问卷 3",isPublished:!1,isStar:!0,answerContent:1,currentAt:"3 月 1 日 12:45"},{id:"q4",title:"问卷 4",isPublished:!0,isStar:!0,answerContent:6,currentAt:"4 月 1 日 12:45"}],Se=()=>{const[e,t]=s.useState(be);return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:me.header,children:[U.jsx("div",{className:me.left,children:U.jsx(Ne,{level:3,children:"我的问卷"})}),U.jsx("div",{className:me.right,children:"(搜索)"})]}),U.jsx("div",{className:me.content,children:e.map((e=>{const{id:s}=e;return U.jsx(ye,{...e},s)}))}),U.jsx("div",{className:me.foot,children:"footer"})]})},Ce="_header_1euva_1",we="_left_1euva_4",Pe="_right_1euva_7",ke="_content_1euva_11",{Title:qe}=u,{confirm:Ae}=b,Oe=[{id:"q1",title:"问卷 1",isPublished:!1,isStar:!1,answerContent:9,currentAt:"1 月 1 日 12:45"},{id:"q2",title:"问卷 2",isPublished:!0,isStar:!1,answerContent:3,currentAt:"2 月 1 日 12:45"},{id:"q3",title:"问卷 3",isPublished:!1,isStar:!0,answerContent:1,currentAt:"3 月 1 日 12:45"},{id:"q4",title:"问卷 4",isPublished:!0,isStar:!0,answerContent:6,currentAt:"4 月 1 日 12:45"}],ze=()=>{L("问卷调查");const[e]=s.useState(Oe),[t,r]=s.useState([]),i=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?U.jsx(g,{color:"processing",children:"已发布"}):U.jsx(g,{children:"未发布"})},{title:"答卷",dataIndex:"answerContent"},{title:"创建时间",dataIndex:"currentAt"}];return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:Ce,children:[U.jsx("div",{className:we,children:U.jsx(qe,{level:3,children:"回收站"})}),U.jsxs("div",{className:Pe,children:["(搜索) ",JSON.stringify(t)]})]}),U.jsxs("div",{className:ke,children:[0===e.length&&U.jsx(S,{description:"暂无数据"}),e.length>0&&U.jsxs("div",{children:[U.jsxs(m,{className:"mb",children:[U.jsx(f,{type:"primary",disabled:0===t.length,children:"恢复"}),U.jsx(f,{danger:!0,disabled:0===t.length,onClick:()=>{Ae({title:"确定彻底删除该问卷?",icon:U.jsx(h,{}),content:"删除以后不可撤回",onOk:()=>alert("删除")})},children:"彻底删除"})]}),U.jsx(C,{rowKey:e=>e.id,dataSource:e,columns:i,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{r(e)}}})]})]})]})},Re={header:"_header_1euva_1",left:"_left_1euva_4",right:"_right_1euva_7",content:"_content_1euva_11",footer:"_footer_1euva_14"},{Title:Te}=u,Le=[{id:"q3",title:"问卷 3",isPublished:!1,isStar:!0,answerContent:1,currentAt:"3 月 1 日 12:45"},{id:"q4",title:"问卷 4",isPublished:!0,isStar:!0,answerContent:6,currentAt:"4 月 1 日 12:45"}],Ee=()=>{const[e]=s.useState(Le);return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:Re.header,children:[U.jsx("div",{className:Re.left,children:U.jsx(Te,{level:3,children:"星标问卷"})}),U.jsx("div",{className:Re.right,children:"(搜索)"})]}),U.jsxs("div",{className:Re.content,children:[0===e.length&&U.jsx(S,{description:"暂无数据"}),e.map((e=>{const{id:s}=e;return U.jsx(ye,{...e},s)}))]}),U.jsx("div",{className:Re.foot,children:"分页"})]})},Fe=()=>{const{id:e=""}=z();return U.jsxs("div",{children:["Edit ",e]})},Ie=()=>U.jsx("div",{children:"Stat"}),{Title:Me,Paragraph:We}=u,Be=()=>{const e=A();return U.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:U.jsxs("div",{className:"text-center",children:[U.jsx(Me,{children:"问卷调查 | 在线投票"}),U.jsx(We,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),U.jsx("div",{className:"h-15 font-24",children:U.jsx(f,{className:"b-rounded-4",type:"primary",onClick:()=>e(Ue),children:"开始使用"})})]})})},De=()=>U.jsx("div",{children:"Login"}),Ke=R([{path:"/",element:U.jsx(ae,{}),children:[{path:"/",element:U.jsx(Be,{})},{path:"login",element:U.jsx(De,{})},{path:"register",element:U.jsx(xe,{})},{path:"manage",element:U.jsx(oe,{}),children:[{path:"list",element:U.jsx(Se,{})},{path:"star",element:U.jsx(Ee,{})},{path:"trash",element:U.jsx(ze,{})}]},{path:"*",element:U.jsx(je,{})}]},{path:"question",element:U.jsx(he,{}),children:[{path:"edit/:id",element:U.jsx(Fe,{})},{path:"stat/:id",element:U.jsx(Ie,{})}]}]),He="/login",Ue="/manage/list",$e=()=>U.jsx(w,{theme:{algorithm:P.defaultAlgorithm},children:U.jsx(T,{router:Ke})});$.createRoot(document.getElementById("root")).render(U.jsx(x.StrictMode,{children:U.jsx($e,{})}));export{e as __vite_legacy_guard};