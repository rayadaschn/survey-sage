function e(){import.meta.url,import("_").catch((()=>1))}import{r as s,ad as t,ae as n,af as a,M as r,ag as i,ah as c,ai as l,ab as o,aj as d,ac as x,ak as u,R as m}from"./@ant-design/icons-356ed3e5.js";import{r as h,S as j,T as p,m as f,B as g,L as y,D as v,F as w,I as S,R as b,a as N,P as k,M as C,b as I,E as _,c as q,d as E,C as P,e as R,t as O}from"./antd-ba30348b.js";import{P as T}from"./react-redux-c6e2dc6e.js";import{c as F,a as z}from"./@reduxjs/toolkit-7308b39d.js";import{L as D,u as L,O as A,a as M,b as W,c as B,d as U,R as $}from"./react-router-dom-51f307d3.js";import{a as H}from"./axios-83bdef92.js";import{u as K,a as J,b as V}from"./ahooks-4f7cf118.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var Q={exports:{}},Y={},G=s,X=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),ee=Object.prototype.hasOwnProperty,se=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function ne(e,s,t){var n,a={},r=null,i=null;for(n in void 0!==t&&(r=""+t),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(i=s.ref),s)ee.call(s,n)&&!te.hasOwnProperty(n)&&(a[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:X,type:e,key:r,ref:i,props:a,_owner:se.current}}Y.Fragment=Z,Y.jsx=ne,Y.jsxs=ne,Q.exports=Y;var ae=Q.exports;var re={},ie=h;re.createRoot=ie.createRoot,re.hydrateRoot=ie.hydrateRoot;const ce=z({reducer:{count:F({name:"count",initialState:100,reducers:{increase:e=>e+1,decrease:e=>e-1}}).reducer}}),le="_container_1fxih_1",{Title:oe}=p,de=()=>ae.jsx("div",{children:ae.jsx(D,{to:"/",children:ae.jsxs(j,{className:le,children:[ae.jsx(oe,{children:ae.jsx(t,{})}),ae.jsx(oe,{children:"问卷调查"})]})})}),xe="USER_TOKEN";const ue="keyword",me="page",he="pageSize",je=H.create({timeout:1e4,baseURL:"https://huy.wiki:3002/"});async function pe(){return await je.get("/api/user/info")}je.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem(xe)||""),e)),(e=>(f.error(e.message),Promise.reject(e)))),je.interceptors.response.use((e=>{const s=e.data||{},{errno:t,data:n,msg:a}=s;return 203===t||0!==t&&200!==t?(f.error(a||"请求失败"),Promise.reject(n)):n}),(e=>{var s;let t="";switch(null==(s=e.response)?void 0:s.status){case 401:t="token 失效，请重新登录";break;case 403:t="拒绝访问";break;case 404:t="请求地址错误";break;case 500:t="服务器故障";break;default:t="网络连接故障"}return f.error(t),Promise.reject(e)}));const fe=()=>{const e=L(),{data:s}=K(pe),{username:t,nickname:a}=s||{};const r=ae.jsxs(ae.Fragment,{children:[ae.jsxs("span",{className:"color-light",children:[ae.jsx(n,{}),a]}),ae.jsx(g,{type:"link",onClick:function(){localStorage.removeItem(xe),f.success("退出成功"),e(es)},children:"退出"})]}),i=ae.jsx(D,{to:es,children:"登录"});return ae.jsx(ae.Fragment,{children:t?r:i})},{Header:ge,Content:ye,Footer:ve}=y,we=()=>ae.jsxs(y,{children:[ae.jsxs(ge,{className:"px-6",children:[ae.jsx("div",{className:"float-left",children:ae.jsx(de,{})}),"MainLayout header",ae.jsx("div",{className:"float-right",children:ae.jsx(fe,{})})]}),ae.jsx(ye,{className:"min-h-[calc(100vh-140px)]",children:ae.jsx(A,{})}),ae.jsx(ve,{className:"border-t border-gray-200 border-solid bg-white text-center",children:"文件调查@2023 Created by Huy"})]});async function Se(){return await je.post("/api/question/")}async function be(e={}){return await je.get("/api/question",{params:e})}async function Ne(e,s){const t="/api/question/".concat(e);return await je.patch(t,s)}const ke=()=>{const e=L(),{pathname:s}=M(),{loading:t,run:n}=K(Se,{manual:!0,onSuccess(s){e("question/edit/".concat(s.id)),f.success("创建成功")}});return ae.jsxs("div",{className:"mx-auto my-0 w-300 flex py-6",children:[ae.jsx("div",{className:"w-30",children:ae.jsxs(j,{direction:"vertical",children:[ae.jsx(g,{type:"primary",size:"large",icon:ae.jsx(a,{}),onClick:n,disabled:t,children:"新建问卷"}),ae.jsx(v,{}),ae.jsx(g,{type:s.startsWith("/manage/list")?"default":"text",size:"large",icon:ae.jsx(r,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),ae.jsx(g,{type:s.startsWith("/manage/star")?"default":"text",size:"large",icon:ae.jsx(i,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),ae.jsx(g,{type:s.startsWith("/manage/trash")?"default":"text",size:"large",icon:ae.jsx(c,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),ae.jsx("div",{className:"ml-15 flex-1",children:ae.jsx(A,{})})]})},Ce=()=>ae.jsxs(ae.Fragment,{children:[ae.jsx("p",{children:"Question layout"}),ae.jsx("div",{children:ae.jsx(A,{})})]}),{Title:Ie}=p,_e=()=>{const e=L(),{run:s}=K((async e=>{const{username:s,password:t,nickname:n}=e;await async function(e,s,t){const n={username:e,password:s,nickname:t||e};return await je.post("/api/user/register",n)}(s,t,n)}),{manual:!0,onSuccess(){f.success("注册成功"),e(es)}});return ae.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[ae.jsx("div",{children:ae.jsxs(j,{children:[ae.jsx(Ie,{level:2,children:ae.jsx(l,{})}),ae.jsx(Ie,{level:2,children:"注册新用户"})]})}),ae.jsx("div",{children:ae.jsxs(w,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{s(e)},children:[ae.jsx(w.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:ae.jsx(S,{})}),ae.jsx(w.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:ae.jsx(S.Password,{})}),ae.jsx(w.Item,{label:"确认密码",name:" confirm",rules:[{required:!0,message:"请输入密码"},({getFieldValue:e})=>({validator:(s,t)=>t&&e("password")!==t?Promise.reject(new Error("两次密码不一致")):Promise.resolve()})],children:ae.jsx(S.Password,{})}),ae.jsx(w.Item,{label:"昵称",name:"nickname",children:ae.jsx(S,{})}),ae.jsx(w.Item,{wrapperCol:{offset:4,span:18},children:ae.jsxs(j,{children:[ae.jsx(g,{type:"primary",htmlType:"submit",children:"注册"}),ae.jsx(D,{to:es,children:"已有账户，请登录"})]})})]})})]})},qe=()=>{const e=L();return ae.jsx(ae.Fragment,{children:ae.jsx(b,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:ae.jsx(g,{type:"primary",onClick:()=>e(ts),children:"返回首页"})})})},{confirm:Ee}=C,Pe=e=>{const t=L(),{_id:n,title:a,isPublished:r,answerContent:l,currentAt:m,isStar:h}=e,[p,y]=s.useState(h),{loading:w,run:S}=K((async()=>{await Ne(n,{isStar:!p})}),{manual:!0,onSuccess(){y(!p),f.success("已更新")}}),{loading:b,run:C}=K((async()=>await async function(e){const s="/api/question/duplicate/".concat(e);return await je.post(s)}(n)),{manual:!0,onSuccess(e){f.success("复制成功"),t("/question/edit/".concat(e.id))}}),[I,_]=s.useState(!1),{loading:q,run:E}=K((async()=>await Ne(n,{isDeleted:!0})),{manual:!0,onSuccess(){f.success("删除成功"),_(!0)}});return I?null:ae.jsxs("div",{className:"mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md",children:[ae.jsxs("div",{className:"flex",children:[ae.jsx("div",{className:"flex-1",children:ae.jsx(D,{to:r?"/question/stat/".concat(n):"/question/edit/".concat(n),children:ae.jsxs(j,{children:[h&&ae.jsx(i,{style:{color:"red"}}),a]})})}),ae.jsx("div",{className:"flex-1 text-center font-size-3",children:ae.jsxs(j,{children:[r?ae.jsx(N,{color:"processing",children:"已发布"}):ae.jsx(N,{children:"未发布"}),ae.jsxs("span",{children:["答卷: ",l]}),ae.jsx("span",{children:m})]})})]}),ae.jsx(v,{className:"m-3"}),ae.jsxs("div",{className:"flex",children:[ae.jsx("div",{className:"flex-1",children:ae.jsxs(j,{children:[ae.jsx(g,{icon:ae.jsx(o,{}),type:"text",size:"small",onClick:()=>{t("/question/edit/".concat(n))},children:"编辑问卷"}),ae.jsx(g,{icon:ae.jsx(d,{}),type:"text",size:"small",onClick:()=>{t("/question/stat/".concat(n))},children:"数据统计"})]})}),ae.jsx("div",{className:"flex-1 text-center",children:ae.jsxs(j,{children:[ae.jsx(g,{type:"text",icon:ae.jsx(i,{}),color:"#999",size:"small",onClick:S,disabled:w,children:p?"取消标星":"标星"}),ae.jsx(k,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:C,children:ae.jsx(g,{type:"text",icon:ae.jsx(x,{}),color:"#999",size:"small",disabled:b,children:"复制"})}),ae.jsx(g,{type:"text",icon:ae.jsx(c,{}),size:"small",color:"#999",onClick:()=>{Ee({title:"确定删除该问卷?",icon:ae.jsx(u,{}),onOk:E})},disabled:q,children:"删除"})]})})]})]})},{Search:Re}=S,Oe=()=>{const e=L(),{pathname:t}=M(),[n,a]=s.useState("");const[r]=W();return s.useEffect((()=>{const e=r.get(ue)||"";a(e)}),[r]),ae.jsx(Re,{placeholder:"请输入关键字",value:n,onChange:function(e){a(e.target.value)},onSearch:function(s){e({pathname:t,search:"".concat(ue,"=").concat(s)})},className:"w-50"})},{Title:Te}=p,Fe=()=>{const[e,t]=s.useState(!1),[n,a]=s.useState(1),[r,i]=s.useState([]),[c,l]=s.useState(0),o=c>r.length,[d]=W(),x=d.get(ue)||"";s.useEffect((()=>{t(!1),a(1),i([]),l(0)}),[x]);const{run:u,loading:m}=K((async()=>await be({page:n,pageSize:10,keyword:x})),{manual:!0,onSuccess(e){const{list:s=[],total:t=0}=e;i(r.concat(s)),l(t),a(n+1)}}),h=s.useRef(null),{run:j}=J((()=>{const e=h.current;if(null==e)return;const s=e.getBoundingClientRect();if(null==s)return;const{bottom:n}=s;n<=document.body.clientHeight&&(u(),t(!0))}),{wait:1e3});s.useEffect((()=>{j()}),[d]),s.useEffect((()=>(o&&window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)})),[d,o]);const p=s.useMemo((()=>!e||m?ae.jsx(I,{}):0===c?ae.jsx(_,{description:"暂无数据"}):o?ae.jsx("span",{children:"开始加载下一页"}):ae.jsx("span",{children:"没有更多了..."})),[e,m,o]);return ae.jsxs(ae.Fragment,{children:[ae.jsxs("div",{className:"flex",children:[ae.jsx("div",{className:"flex-1",children:ae.jsx(Te,{level:3,children:"我的问卷"})}),ae.jsx("div",{className:"flex-1 text-center",children:ae.jsx(Oe,{})})]}),ae.jsx("div",{className:"mb-5",children:r.length>0&&r.map((e=>{const{_id:s}=e;return ae.jsx(Pe,{...e},s)}))}),ae.jsx("div",{className:"text-center color-blue",children:ae.jsx("div",{ref:h,children:p})})]})},ze=e=>{const{total:t}=e,[n,a]=s.useState(1),[r,i]=s.useState(10),[c]=W();s.useEffect((()=>{const e=parseInt(c.get(me)||"")||1;a(e);const s=parseInt(c.get(he)||"")||10;i(s)}),[c]);const l=L(),{pathname:o}=M();return ae.jsx(q,{current:n,pageSize:r,total:t,onChange:(e,s)=>{c.set(me,e.toString()),c.set(he,s.toString()),l({pathname:o,search:c.toString()})}})};function De(){const{id:e=""}=B(),[t,n]=s.useState(!0),[a,r]=s.useState({});return s.useEffect((()=>{!async function(){const s=await async function(e){const s="/api/question/".concat(e);return await je.get(s)}(e);r(s),n(!1)}()}),[e]),{loading:t,questionData:a}}function Le(e={}){const{isStar:s,isDeleted:t}=e,[n]=W(),{data:a,loading:r,error:i,refresh:c}=K((async()=>{const e=n.get(ue)||"",a=parseInt(n.get(me)||"")||1,r=parseInt(n.get(he)||"")||10;return await be({keyword:e,isStar:s,isDeleted:t,page:a,pageSize:r})}),{refreshDeps:[n]});return{data:a,loading:r,error:i,refresh:c}}const{Title:Ae}=p,{confirm:Me}=C,We=()=>{V("问卷调查");const{data:e={},loading:t,refresh:n}=Le({isDeleted:!0}),{list:a=[],total:r=0}=e,[i,c]=s.useState([]),l=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?ae.jsx(N,{color:"processing",children:"已发布"}):ae.jsx(N,{children:"未发布"})},{title:"答卷",dataIndex:"answerCount"},{title:"创建时间",dataIndex:"createdAt"}],{run:o}=K((async()=>{for await(const e of i)await Ne(e,{isDeleted:!1})}),{manual:!0,debounceWait:500,onSuccess(){f.success("恢复成功"),n(),c([])}}),{run:d}=K((async()=>await async function(e){return await je.delete("/api/question",{data:{ids:e}})}(i)),{manual:!0,onSuccess(){f.success("删除成功"),n(),c([])}});return ae.jsxs(ae.Fragment,{children:[ae.jsxs("div",{className:"flex",children:[ae.jsx("div",{className:"flex-1",children:ae.jsx(Ae,{level:3,children:"回收站"})}),ae.jsx("div",{className:"flex-1 text-center",children:ae.jsx(Oe,{})})]}),ae.jsxs("div",{className:"mb-5",children:[t&&ae.jsx("div",{className:"text-center",children:ae.jsx(I,{})}),!t&&0===a.length&&ae.jsx(_,{description:"暂无数据"}),a.length>0&&ae.jsxs("div",{children:[ae.jsxs(j,{className:"mb",children:[ae.jsx(g,{type:"primary",disabled:0===i.length,onClick:o,children:"恢复"}),ae.jsx(g,{danger:!0,disabled:0===i.length,onClick:()=>{Me({title:"确定彻底删除该问卷?",icon:ae.jsx(u,{}),content:"删除以后不可撤回",onOk:d})},children:"彻底删除"})]}),ae.jsx(E,{rowKey:e=>e._id,dataSource:a,columns:l,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{c(e)}}})]})]}),ae.jsx("div",{className:"text-center color-blue",children:a.length>0&&ae.jsx(ze,{total:r})})]})},{Title:Be}=p,Ue=()=>{const{data:e={},loading:s}=Le({isStar:!0}),{list:t=[],total:n=0}=e;return ae.jsxs(ae.Fragment,{children:[ae.jsxs("div",{className:"flex",children:[ae.jsx("div",{className:"flex-1",children:ae.jsx(Be,{level:3,children:"星标问卷"})}),ae.jsx("div",{className:"flex-1 text-center",children:ae.jsx(Oe,{})})]}),ae.jsxs("div",{className:"mb-5",children:[s&&ae.jsx("div",{className:"text-center",children:ae.jsx(I,{})}),!s&&0===t.length&&ae.jsx(_,{description:"暂无数据"}),t.length>0&&t.map((e=>{const{_id:s}=e;return ae.jsx(Pe,{...e},s)}))]}),ae.jsx("div",{className:"text-center color-blue",children:t.length>0&&ae.jsx(ze,{total:n})})]})},$e=()=>{const{loading:e,questionData:s}=De();return ae.jsxs("div",{children:[ae.jsx("p",{children:"编辑"}),e?ae.jsx("p",{children:"loading"}):ae.jsx("p",{children:JSON.stringify(s)})]})},He=()=>{const{loading:e,questionData:s}=De();return ae.jsxs("div",{children:[ae.jsx("p",{children:"Stat"}),e?ae.jsx("p",{children:"loading"}):ae.jsx("p",{children:JSON.stringify(s)})]})},{Title:Ke,Paragraph:Je}=p,Ve=()=>{const e=L();return ae.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:ae.jsxs("div",{className:"text-center",children:[ae.jsx(Ke,{children:"问卷调查 | 在线投票"}),ae.jsx(Je,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),ae.jsx("div",{className:"h-15 font-24",children:ae.jsx(g,{className:"b-rounded-4",type:"primary",onClick:()=>e(ts),children:"开始使用"})})]})})},{Title:Qe}=p,Ye="USERNAME",Ge="PASSWORD";const Xe=()=>{const e=L(),[t]=w.useForm();s.useEffect((()=>{const{username:e,password:s}={username:localStorage.getItem(Ye),password:localStorage.getItem(Ge)};t.setFieldsValue({username:e,password:s})}),[]);const{run:n}=K((async(e,s)=>{const t=await async function(e,s){const t={username:e,password:s};return await je.post("/api/user/login",t)}(e,s);return t}),{manual:!0,onSuccess(s){const{token:t=""}=s;!function(e){localStorage.setItem(xe,e)}(t),f.success("登录成功"),e(ts)}});return ae.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[ae.jsx("div",{children:ae.jsxs(j,{children:[ae.jsx(Qe,{level:2,children:ae.jsx(l,{})}),ae.jsx(Qe,{level:2,children:"登录"})]})}),ae.jsx("div",{children:ae.jsxs(w,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{const{username:s,password:t,remember:a}=e||{};n(s,t),a?function(e,s){localStorage.setItem(Ye,e),localStorage.setItem(Ge,s)}(s,t):(localStorage.removeItem(Ye),localStorage.removeItem(Ge))},children:[ae.jsx(w.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:ae.jsx(S,{})}),ae.jsx(w.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:ae.jsx(S.Password,{})}),ae.jsx(w.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:0,span:10},children:ae.jsx(P,{children:"记住我"})}),ae.jsx(w.Item,{wrapperCol:{offset:4,span:18},children:ae.jsxs(j,{children:[ae.jsx(g,{type:"primary",htmlType:"submit",children:"登录"}),ae.jsx(D,{to:ss,children:"注册新用户"})]})})]})})]})},Ze=U([{path:"/",element:ae.jsx(we,{}),children:[{path:"/",element:ae.jsx(Ve,{})},{path:"login",element:ae.jsx(Xe,{})},{path:"register",element:ae.jsx(_e,{})},{path:"manage",element:ae.jsx(ke,{}),children:[{path:"list",element:ae.jsx(Fe,{})},{path:"star",element:ae.jsx(Ue,{})},{path:"trash",element:ae.jsx(We,{})}]},{path:"*",element:ae.jsx(qe,{})}]},{path:"question",element:ae.jsx(Ce,{}),children:[{path:"edit/:id",element:ae.jsx($e,{})},{path:"stat/:id",element:ae.jsx(He,{})}]}],{basename:"/survey-sage"}),es="/login",ss="/register",ts="/manage/list",ns=()=>ae.jsx(R,{theme:{algorithm:O.defaultAlgorithm},children:ae.jsx($,{router:Ze})});re.createRoot(document.getElementById("root")).render(ae.jsx(m.StrictMode,{children:ae.jsx(T,{store:ce,children:ae.jsx(ns,{})})}));export{e as __vite_legacy_guard};
