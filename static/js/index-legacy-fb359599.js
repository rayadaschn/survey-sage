System.register(["./@ant-design/icons-legacy-5f01ad2a.js","./antd-legacy-8cfa796e.js","./react-router-dom-legacy-aaee96a4.js","./axios-legacy-787fab56.js","./ahooks-legacy-ce987591.js"],(function(e,s){"use strict";var t,r,a,n,i,l,c,o,d,x,h,j,m,u,p,g,f,b,v,y,w,N,k,S,C,_,I,q,E,T,P,R,z,F,O,$,L,A,D,U,B,M;return{setters:[e=>{t=e.r,r=e.ad,a=e.ae,n=e.M,i=e.af,l=e.ag,c=e.ah,o=e.ab,d=e.ai,x=e.ac,h=e.aj,j=e.ak,m=e.R},e=>{u=e.r,p=e.S,g=e.T,f=e.L,b=e.m,v=e.B,y=e.D,w=e.F,N=e.I,k=e.R,S=e.a,C=e.P,_=e.M,I=e.b,q=e.E,E=e.c,T=e.C,P=e.t},e=>{R=e.L,z=e.O,F=e.u,O=e.a,$=e.b,L=e.c,A=e.d,D=e.R},e=>{U=e.a},e=>{B=e.u,M=e.a}],execute:function(){var e=document.createElement("style");e.textContent='#--unocss--{layer:__ALL__}:root{--w-space-xs: 8px;--w-space-sm: 16px;--w-space: 24px;--w-space-lg: 32px;--w-radius-xs: 4px;--w-radius: 8px;--w-radius-lg: 12px;--w-radius-xl: 16px;--c-white: #fff;--c-black: #000;--c-blue: #3b82f6;--c-red: #ef4444;--c-yellow: #f59e0b;--c-green: #42b983;--c-gray: #9ca3af;--c-disable: rgba(0, 0, 0, .25);--c-brand: var(--c-green);--c-bg: #f8f8f8;--c-text: #374151;--c-tips: var(--c-gray);--c-border: var(--c-gray);--c-mask: rgba(0, 0, 0, .7);--c-hover: var(--c-brand)}:root.dark{--c-bg: #181818;--c-text: #e5e7eb}html{width:100%;overflow-x:hidden}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:"tnum";font-variant:tabular-nums;background-color:var(--c-bg);margin:0}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#374151;border-radius:4px}::-webkit-scrollbar-thumb:hover{background-color:#1f2937}::-webkit-scrollbar-track{background-color:#6b7280;border-radius:4px}._container_1fxih_1 h1{font-size:28px;color:#f7f7f7}\n',document.head.appendChild(e);var s={exports:{}},W={},H=t,J=Symbol.for("react.element"),K=Symbol.for("react.fragment"),Q=Object.prototype.hasOwnProperty,V=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function G(e,s,t){var r,a={},n=null,i=null;for(r in void 0!==t&&(n=""+t),void 0!==s.key&&(n=""+s.key),void 0!==s.ref&&(i=s.ref),s)Q.call(s,r)&&!Y.hasOwnProperty(r)&&(a[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:J,type:e,key:n,ref:i,props:a,_owner:V.current}}W.Fragment=K,W.jsx=G,W.jsxs=G,s.exports=W;var X=s.exports,Z={},ee=u;Z.createRoot=ee.createRoot,Z.hydrateRoot=ee.hydrateRoot;const se="_container_1fxih_1",{Title:te}=g,re=()=>X.jsx("div",{children:X.jsx(R,{to:"/",children:X.jsxs(p,{className:se,children:[X.jsx(te,{children:X.jsx(r,{})}),X.jsx(te,{children:"问卷调查"})]})})}),ae=()=>X.jsx(X.Fragment,{children:X.jsx(R,{to:Le,children:"登录"})}),{Header:ne,Content:ie,Footer:le}=f,ce=()=>X.jsxs(f,{children:[X.jsxs(ne,{className:"px-6",children:[X.jsx("div",{className:"float-left",children:X.jsx(re,{})}),"MainLayout header",X.jsx("div",{className:"float-right",children:X.jsx(ae,{})})]}),X.jsx(ie,{className:"min-h-[calc(100vh-140px)]",children:X.jsx(z,{})}),X.jsx(le,{className:"border-t border-gray-200 border-solid bg-white text-center",children:"文件调查@2023 Created by Huy"})]}),oe="keyword",de=U.create({timeout:1e4,baseURL:"https://huy.wiki:3002/"});async function xe(){return await de.post("/api/question/")}de.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${localStorage.getItem("USER_TOKEN")||""}`,e)),(e=>(b.error(e.message),Promise.reject(e)))),de.interceptors.response.use((e=>{const s=e.data||{},{errno:t,data:r,msg:a}=s;return 203===t||200!==t?(b.error(a||"请求失败"),Promise.reject(r)):r}),(e=>{let s="";const t=e.response?.status;switch(t){case 401:s="token 失效，请重新登录";break;case 403:s="拒绝访问";break;case 404:s="请求地址错误";break;case 500:s="服务器故障";break;default:s="网络连接故障"}return b.error(s),Promise.reject(e)}));const he=()=>{const e=F(),{pathname:s}=O(),{loading:t,run:r}=B(xe,{manual:!0,onSuccess(s){e(`question/edit/${s.id}`),b.success("创建成功")}});return X.jsxs("div",{className:"py-6",children:[X.jsx("div",{className:"w-30",children:X.jsxs(p,{direction:"vertical",children:[X.jsx(v,{type:"primary",size:"large",icon:X.jsx(a,{}),onClick:r,disabled:t,children:"新建问卷"}),X.jsx(y,{}),X.jsx(v,{type:s.startsWith("/manage/list")?"default":"text",size:"large",icon:X.jsx(n,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),X.jsx(v,{type:s.startsWith("/manage/star")?"default":"text",size:"large",icon:X.jsx(i,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),X.jsx(v,{type:s.startsWith("/manage/trash")?"default":"text",size:"large",icon:X.jsx(l,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),X.jsx("div",{className:"ml-15 flex-1",children:X.jsx(z,{})})]})},je=()=>X.jsxs(X.Fragment,{children:[X.jsx("p",{children:"Question layout"}),X.jsx("div",{children:X.jsx(z,{})})]}),{Title:me}=g,ue=()=>X.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[X.jsx("div",{children:X.jsxs(p,{children:[X.jsx(me,{level:2,children:X.jsx(c,{})}),X.jsx(me,{level:2,children:"注册新用户"})]})}),X.jsx("div",{children:X.jsxs(w,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{},children:[X.jsx(w.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:X.jsx(N,{})}),X.jsx(w.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:X.jsx(N.Password,{})}),X.jsx(w.Item,{label:"确认密码",name:" confirm",rules:[{required:!0,message:"请输入密码"},({getFieldValue:e})=>({validator:(s,t)=>t&&e("password")!==t?Promise.reject(new Error("两次密码不一致")):Promise.resolve()})],children:X.jsx(N.Password,{})}),X.jsx(w.Item,{label:"昵称",name:"nickname",children:X.jsx(N,{})}),X.jsx(w.Item,{wrapperCol:{offset:4,span:18},children:X.jsxs(p,{children:[X.jsx(v,{type:"primary",htmlType:"submit",children:"注册"}),X.jsx(R,{to:Le,children:"已有账户，请登录"})]})})]})})]}),pe=()=>{const e=F();return X.jsx(X.Fragment,{children:X.jsx(k,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:X.jsx(v,{type:"primary",onClick:()=>e(Ae),children:"返回首页"})})})},{confirm:ge}=_,fe=e=>{const{id:s,title:t,isPublished:r,answerContent:a,currentAt:n,isStar:c}=e,j=F();return X.jsxs("div",{className:"mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md",children:[X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"flex-1",children:X.jsx(R,{to:r?`/question/stat/${s}`:`/question/edit/${s}`,children:X.jsxs(p,{children:[c&&X.jsx(i,{style:{color:"red"}}),t]})})}),X.jsx("div",{className:"flex-1 text-center font-size-3",children:X.jsxs(p,{children:[r?X.jsx(S,{color:"processing",children:"已发布"}):X.jsx(S,{children:"未发布"}),X.jsxs("span",{children:["答卷: ",a]}),X.jsx("span",{children:n})]})})]}),X.jsx(y,{className:"m-3"}),X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"flex-1",children:X.jsxs(p,{children:[X.jsx(v,{icon:X.jsx(o,{}),type:"text",size:"small",onClick:()=>{j(`/question/edit/${s}`)},children:"编辑问卷"}),X.jsx(v,{icon:X.jsx(d,{}),type:"text",size:"small",onClick:()=>{j(`/question/stat/${s}`)},children:"数据统计"})]})}),X.jsx("div",{className:"flex-1 text-center",children:X.jsxs(p,{children:[X.jsx(v,{type:"text",icon:X.jsx(i,{}),color:"#999",size:"small",children:"标星"}),X.jsx(C,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:()=>{},children:X.jsx(v,{type:"text",icon:X.jsx(x,{}),color:"#999",size:"small",children:"复制"})}),X.jsx(v,{type:"text",icon:X.jsx(l,{}),size:"small",color:"#999",onClick:()=>{ge({title:"确定删除该问卷?",icon:X.jsx(h,{}),onOk:()=>b.success("删除")})},children:"删除"})]})})]})]})},{Search:be}=N,ve=()=>{const e=F(),{pathname:s}=O(),[r,a]=t.useState(""),[n]=$();return t.useEffect((()=>{const e=n.get(oe)||"";a(e)}),[n]),X.jsx(be,{placeholder:"请输入关键字",value:r,onChange:function(e){a(e.target.value)},onSearch:function(t){e({pathname:s,search:`${oe}=${t}`})},className:"w-50"})};function ye(){const{id:e=""}=L(),[s,r]=t.useState(!0),[a,n]=t.useState({});return t.useEffect((()=>{!async function(){const s=await async function(e){const s=`/api/question/${e}`;return await de.get(s)}(e);n(s),r(!1)}()}),[e]),{loading:s,questionData:a}}function we(e={}){const{isStar:s,isDeleted:t}=e,[r]=$(),{data:a,loading:n,error:i}=B((async()=>{const e=r.get(oe)||"",a=parseInt(r.get("page")||"")||1,n=parseInt(r.get("pageSize")||"")||10,i=await async function(e={}){return await de.get("/api/question",{params:e})}({keyword:e,isStar:s,isDeleted:t,page:a,pageSize:n});return i}));return{data:a,loading:n,error:i}}const{Title:Ne}=g,ke=()=>{const{data:e={},loading:s}=we(),{list:t=[],total:r=0}=e;return X.jsxs(X.Fragment,{children:[X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"flex-1",children:X.jsx(Ne,{level:3,children:"我的问卷"})}),X.jsx("div",{className:"flex-1 text-center",children:X.jsx(ve,{})})]}),X.jsxs("div",{className:"mb-5",children:[s&&X.jsx("div",{className:"text-center",children:X.jsx(I,{})}),t.length>0&&t.map((e=>{const{_id:s}=e;return X.jsx(fe,{...e},s)}))]}),X.jsx("div",{className:"color-blue",children:"footer"})]})},{Title:Se}=g,{confirm:Ce}=_,_e=()=>{M("问卷调查");const{data:e={},loading:s}=we({isStar:!0}),{list:r=[],total:a=0}=e,[n,i]=t.useState([]),l=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?X.jsx(S,{color:"processing",children:"已发布"}):X.jsx(S,{children:"未发布"})},{title:"答卷",dataIndex:"answerCount"},{title:"创建时间",dataIndex:"createdAt"}];return X.jsxs(X.Fragment,{children:[X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"flex-1",children:X.jsx(Se,{level:3,children:"回收站"})}),X.jsx("div",{className:"flex-1 text-center",children:X.jsx(ve,{})})]}),X.jsxs("div",{className:"mb-5",children:[s&&X.jsx("div",{className:"text-center",children:X.jsx(I,{})}),!s&&0===r.length&&X.jsx(q,{description:"暂无数据"}),r.length>0&&X.jsxs("div",{children:[X.jsxs(p,{className:"mb",children:[X.jsx(v,{type:"primary",disabled:0===n.length,children:"恢复"}),X.jsx(v,{danger:!0,disabled:0===n.length,onClick:()=>{Ce({title:"确定彻底删除该问卷?",icon:X.jsx(j,{}),content:"删除以后不可撤回",onOk:()=>alert("删除")})},children:"彻底删除"})]}),X.jsx(E,{rowKey:e=>e._id,dataSource:r,columns:l,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{i(e)}}})]})]})]})},{Title:Ie}=g,qe=()=>{const{data:e={},loading:s}=we({isStar:!0}),{list:t=[],total:r=0}=e;return X.jsxs(X.Fragment,{children:[X.jsxs("div",{className:"flex",children:[X.jsx("div",{className:"flex-1",children:X.jsx(Ie,{level:3,children:"星标问卷"})}),X.jsx("div",{className:"flex-1 text-center",children:X.jsx(ve,{})})]}),X.jsxs("div",{className:"mb-5",children:[s&&X.jsx("div",{className:"text-center",children:X.jsx(I,{})}),!s&&0===t.length&&X.jsx(q,{description:"暂无数据"}),t.length>0&&t.map((e=>{const{_id:s}=e;return X.jsx(fe,{...e},s)}))]}),X.jsx("div",{className:"color-blue",children:"分页"})]})},Ee=()=>{const{loading:e,questionData:s}=ye();return X.jsxs("div",{children:[X.jsx("p",{children:"编辑"}),e?X.jsx("p",{children:"loading"}):X.jsx("p",{children:JSON.stringify(s)})]})},Te=()=>{const{loading:e,questionData:s}=ye();return X.jsxs("div",{children:[X.jsx("p",{children:"Stat"}),e?X.jsx("p",{children:"loading"}):X.jsx("p",{children:JSON.stringify(s)})]})},{Title:Pe,Paragraph:Re}=g,ze=()=>{const e=F();return X.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:X.jsxs("div",{className:"text-center",children:[X.jsx(Pe,{children:"问卷调查 | 在线投票"}),X.jsx(Re,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),X.jsx("div",{className:"h-15 font-24",children:X.jsx(v,{className:"b-rounded-4",type:"primary",onClick:()=>e(Ae),children:"开始使用"})})]})})},{Title:Fe}=g,Oe=()=>X.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[X.jsx("div",{children:X.jsxs(p,{children:[X.jsx(Fe,{level:2,children:X.jsx(c,{})}),X.jsx(Fe,{level:2,children:"登录"})]})}),X.jsx("div",{children:X.jsxs(w,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{},children:[X.jsx(w.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:X.jsx(N,{})}),X.jsx(w.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:X.jsx(N.Password,{})}),X.jsx(w.Item,{wrapperCol:{offset:4,span:18},children:X.jsxs(p,{children:[X.jsx(v,{type:"primary",htmlType:"submit",children:"登录"}),X.jsx(R,{to:"/",children:"注册新用户"})]})})]})})]}),$e=A([{path:"/",element:X.jsx(ce,{}),children:[{path:"/",element:X.jsx(ze,{})},{path:"login",element:X.jsx(Oe,{})},{path:"register",element:X.jsx(ue,{})},{path:"manage",element:X.jsx(he,{}),children:[{path:"list",element:X.jsx(ke,{})},{path:"star",element:X.jsx(qe,{})},{path:"trash",element:X.jsx(_e,{})}]},{path:"*",element:X.jsx(pe,{})}]},{path:"question",element:X.jsx(je,{}),children:[{path:"edit/:id",element:X.jsx(Ee,{})},{path:"stat/:id",element:X.jsx(Te,{})}]}],{basename:"/survey-sage"}),Le="/login",Ae="/manage/list",De=()=>X.jsx(T,{theme:{algorithm:P.defaultAlgorithm},children:X.jsx(D,{router:$e})});Z.createRoot(document.getElementById("root")).render(X.jsx(m.StrictMode,{children:X.jsx(De,{})}))}}}));
