System.register(["./@ant-design/icons-legacy-b44cd9f5.js","./antd-legacy-f0f30315.js","./react-redux-legacy-7f31b08b.js","./@reduxjs/toolkit-legacy-e0f2c019.js","./react-router-dom-legacy-e982bba6.js","./axios-legacy-787fab56.js","./ahooks-legacy-69dfea1b.js"],(function(e,s){"use strict";var t,n,r,a,i,c,l,o,d,x,u,m,h,j,p,g,f,y,b,v,w,S,k,N,C,I,_,E,R,q,P,F,T,z,$,D,O,L,A,U,M,B,W,H,J,K,V,Q,Y,G;return{setters:[e=>{t=e.r,n=e.ad,r=e.ae,a=e.af,i=e.M,c=e.ag,l=e.ah,o=e.ai,d=e.ab,x=e.aj,u=e.ac,m=e.ak,h=e.R},e=>{j=e.r,p=e.S,g=e.T,f=e.m,y=e.B,b=e.L,v=e.a,w=e.D,S=e.F,k=e.I,N=e.R,C=e.b,I=e.P,_=e.M,E=e.E,R=e.c,q=e.d,P=e.C,F=e.e,T=e.t},e=>{z=e.u,$=e.a,D=e.P},e=>{O=e.c,L=e.a},e=>{A=e.L,U=e.u,M=e.a,B=e.b,W=e.c,H=e.O,J=e.d,K=e.R},e=>{V=e.a},e=>{Q=e.u,Y=e.a,G=e.b}],execute:function(){var e=document.createElement("style");e.textContent='#--unocss--{layer:__ALL__}:root{--w-space-xs: 8px;--w-space-sm: 16px;--w-space: 24px;--w-space-lg: 32px;--w-radius-xs: 4px;--w-radius: 8px;--w-radius-lg: 12px;--w-radius-xl: 16px;--c-white: #fff;--c-black: #000;--c-blue: #3b82f6;--c-red: #ef4444;--c-yellow: #f59e0b;--c-green: #42b983;--c-gray: #9ca3af;--c-disable: rgba(0, 0, 0, .25);--c-brand: var(--c-green);--c-bg: #f8f8f8;--c-text: #374151;--c-tips: var(--c-gray);--c-border: var(--c-gray);--c-mask: rgba(0, 0, 0, .7);--c-hover: var(--c-brand)}:root.dark{--c-bg: #181818;--c-text: #e5e7eb}html{width:100%;overflow-x:hidden}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:"tnum";font-variant:tabular-nums;background-color:var(--c-bg);margin:0}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#374151;border-radius:4px}::-webkit-scrollbar-thumb:hover{background-color:#1f2937}::-webkit-scrollbar-track{background-color:#6b7280;border-radius:4px}._container_1fxih_1 h1{font-size:28px;color:#f7f7f7}\n',document.head.appendChild(e);var s={exports:{}},X={},Z=t,ee=Symbol.for("react.element"),se=Symbol.for("react.fragment"),te=Object.prototype.hasOwnProperty,ne=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,s,t){var n,r={},a=null,i=null;for(n in void 0!==t&&(a=""+t),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(i=s.ref),s)te.call(s,n)&&!re.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:ee,type:e,key:a,ref:i,props:r,_owner:ne.current}}X.Fragment=se,X.jsx=ae,X.jsxs=ae,s.exports=X;var ie=s.exports,ce={},le=j;ce.createRoot=le.createRoot,ce.hydrateRoot=le.hydrateRoot;const oe={username:"",nickname:""},de=O({name:"user",initialState:oe,reducers:{loginReducer:(e,s)=>s.payload,logoutReducer:()=>oe}}),xe=de.reducer,{loginReducer:ue,logoutReducer:me}=de.actions,he=L({reducer:{user:xe}}),je="_container_1fxih_1",{Title:pe}=g,ge=()=>ie.jsx("div",{children:ie.jsx(A,{to:"/",children:ie.jsxs(p,{className:je,children:[ie.jsx(pe,{children:ie.jsx(n,{})}),ie.jsx(pe,{children:"问卷调查"})]})})}),fe="USER_TOKEN",ye="keyword",be="page",ve="pageSize",we=V.create({timeout:1e4,baseURL:"https://huy.wiki:3002/"});async function Se(){return await we.post("/api/question/")}async function ke(e={}){return await we.get("/api/question",{params:e})}async function Ne(e,s){const t=`/api/question/${e}`;return await we.patch(t,s)}async function Ce(){return await we.get("/api/user/info")}function Ie(){const{id:e=""}=U(),[s,n]=t.useState(!0),[r,a]=t.useState({});return t.useEffect((()=>{!async function(){const s=await async function(e){const s=`/api/question/${e}`;return await we.get(s)}(e);a(s),n(!1)}()}),[e]),{loading:s,questionData:r}}function _e(e={}){const{isStar:s,isDeleted:t}=e,[n]=M(),{data:r,loading:a,error:i,refresh:c}=Q((async()=>{const e=n.get(ye)||"",r=parseInt(n.get(be)||"")||1,a=parseInt(n.get(ve)||"")||10;return await ke({keyword:e,isStar:s,isDeleted:t,page:r,pageSize:a})}),{refreshDeps:[n]});return{data:r,loading:a,error:i,refresh:c}}function Ee(){const{username:e,nickname:s}=z((e=>e.user));return{username:e,nickname:s}}function Re(e){const{username:s}=Ee(),{pathname:n}=B(),r=W();t.useEffect((()=>{e||(s?function(e){return[ds,xs].includes(e)}(n)&&r(us):function(e){return[os,ds,xs].includes(e)}(n)||r(ds))}),[e,s,n])}we.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${localStorage.getItem(fe)||""}`,e)),(e=>(f.error(e.message),Promise.reject(e)))),we.interceptors.response.use((e=>{const s=e.data||{},{errno:t,data:n,msg:r}=s;return 203===t||0!==t&&200!==t?(f.error(r||"请求失败"),Promise.reject(n)):n}),(e=>{let s="";const t=e.response?.status;switch(t){case 401:s="token 失效，请重新登录";break;case 403:s="拒绝访问";break;case 404:s="请求地址错误";break;case 500:s="服务器故障";break;default:s="网络连接故障"}return f.error(s),Promise.reject(e)}));const qe=()=>{const e=W(),s=$(),{username:t,nickname:n}=Ee(),a=ie.jsxs(ie.Fragment,{children:[ie.jsxs("span",{className:"color-light",children:[ie.jsx(r,{}),n]}),ie.jsx(y,{type:"link",onClick:function(){s(me()),localStorage.removeItem(fe),f.success("退出成功"),e(ds)},children:"退出"})]}),i=ie.jsx(A,{to:ds,children:"登录"});return ie.jsx(ie.Fragment,{children:t?a:i})},{Header:Pe,Content:Fe,Footer:Te}=b,ze=()=>{const{waitingUserData:e}=function(){const e=$(),[s,n]=t.useState(!0),{run:r}=Q(Ce,{manual:!0,onSuccess(s){const{username:t,nickname:n}=s;e(ue({username:t,nickname:n}))},onFinally(){n(!1)}}),{username:a}=Ee();return t.useEffect((()=>{a?n(!1):r()}),[s]),{waitingUserData:s}}();return Re(e),ie.jsxs(b,{children:[ie.jsxs(Pe,{className:"px-6",children:[ie.jsx("div",{className:"float-left",children:ie.jsx(ge,{})}),"MainLayout header",ie.jsx("div",{className:"float-right",children:ie.jsx(qe,{})})]}),ie.jsx(Fe,{className:"min-h-[calc(100vh-140px)]",children:e?ie.jsx("div",{className:"mt-15 text-center",children:ie.jsx(v,{})}):ie.jsx(H,{})}),ie.jsx(Te,{className:"border-t border-gray-200 border-solid bg-white text-center",children:"文件调查@2023 Created by Huy"})]})},$e=()=>{const e=W(),{pathname:s}=B(),{loading:t,run:n}=Q(Se,{manual:!0,onSuccess(s){e(`question/edit/${s.id}`),f.success("创建成功")}});return ie.jsxs("div",{className:"mx-auto my-0 w-300 flex py-6",children:[ie.jsx("div",{className:"w-30",children:ie.jsxs(p,{direction:"vertical",children:[ie.jsx(y,{type:"primary",size:"large",icon:ie.jsx(a,{}),onClick:n,disabled:t,children:"新建问卷"}),ie.jsx(w,{}),ie.jsx(y,{type:s.startsWith("/manage/list")?"default":"text",size:"large",icon:ie.jsx(i,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),ie.jsx(y,{type:s.startsWith("/manage/star")?"default":"text",size:"large",icon:ie.jsx(c,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),ie.jsx(y,{type:s.startsWith("/manage/trash")?"default":"text",size:"large",icon:ie.jsx(l,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),ie.jsx("div",{className:"ml-15 flex-1",children:ie.jsx(H,{})})]})},De=()=>ie.jsxs(ie.Fragment,{children:[ie.jsx("p",{children:"Question layout"}),ie.jsx("div",{children:ie.jsx(H,{})})]}),{Title:Oe}=g,Le=()=>{const e=W(),{run:s}=Q((async e=>{const{username:s,password:t,nickname:n}=e;await async function(e,s,t){const n={username:e,password:s,nickname:t||e};return await we.post("/api/user/register",n)}(s,t,n)}),{manual:!0,onSuccess(){f.success("注册成功"),e(ds)}});return ie.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[ie.jsx("div",{children:ie.jsxs(p,{children:[ie.jsx(Oe,{level:2,children:ie.jsx(o,{})}),ie.jsx(Oe,{level:2,children:"注册新用户"})]})}),ie.jsx("div",{children:ie.jsxs(S,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{s(e)},children:[ie.jsx(S.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:ie.jsx(k,{})}),ie.jsx(S.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:ie.jsx(k.Password,{})}),ie.jsx(S.Item,{label:"确认密码",name:" confirm",rules:[{required:!0,message:"请输入密码"},({getFieldValue:e})=>({validator:(s,t)=>t&&e("password")!==t?Promise.reject(new Error("两次密码不一致")):Promise.resolve()})],children:ie.jsx(k.Password,{})}),ie.jsx(S.Item,{label:"昵称",name:"nickname",children:ie.jsx(k,{})}),ie.jsx(S.Item,{wrapperCol:{offset:4,span:18},children:ie.jsxs(p,{children:[ie.jsx(y,{type:"primary",htmlType:"submit",children:"注册"}),ie.jsx(A,{to:ds,children:"已有账户，请登录"})]})})]})})]})},Ae=()=>{const e=W();return ie.jsx(ie.Fragment,{children:ie.jsx(N,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:ie.jsx(y,{type:"primary",onClick:()=>e(us),children:"返回首页"})})})},{confirm:Ue}=_,Me=e=>{const s=W(),{_id:n,title:r,isPublished:a,answerContent:i,currentAt:o,isStar:h}=e,[j,g]=t.useState(h),{loading:b,run:v}=Q((async()=>{await Ne(n,{isStar:!j})}),{manual:!0,onSuccess(){g(!j),f.success("已更新")}}),{loading:S,run:k}=Q((async()=>await async function(e){const s=`/api/question/duplicate/${e}`;return await we.post(s)}(n)),{manual:!0,onSuccess(e){f.success("复制成功"),s(`/question/edit/${e.id}`)}}),[N,_]=t.useState(!1),{loading:E,run:R}=Q((async()=>await Ne(n,{isDeleted:!0})),{manual:!0,onSuccess(){f.success("删除成功"),_(!0)}});return N?null:ie.jsxs("div",{className:"mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md",children:[ie.jsxs("div",{className:"flex",children:[ie.jsx("div",{className:"flex-1",children:ie.jsx(A,{to:a?`/question/stat/${n}`:`/question/edit/${n}`,children:ie.jsxs(p,{children:[h&&ie.jsx(c,{style:{color:"red"}}),r]})})}),ie.jsx("div",{className:"flex-1 text-center font-size-3",children:ie.jsxs(p,{children:[a?ie.jsx(C,{color:"processing",children:"已发布"}):ie.jsx(C,{children:"未发布"}),ie.jsxs("span",{children:["答卷: ",i]}),ie.jsx("span",{children:o})]})})]}),ie.jsx(w,{className:"m-3"}),ie.jsxs("div",{className:"flex",children:[ie.jsx("div",{className:"flex-1",children:ie.jsxs(p,{children:[ie.jsx(y,{icon:ie.jsx(d,{}),type:"text",size:"small",onClick:()=>{s(`/question/edit/${n}`)},children:"编辑问卷"}),ie.jsx(y,{icon:ie.jsx(x,{}),type:"text",size:"small",onClick:()=>{s(`/question/stat/${n}`)},children:"数据统计"})]})}),ie.jsx("div",{className:"flex-1 text-center",children:ie.jsxs(p,{children:[ie.jsx(y,{type:"text",icon:ie.jsx(c,{}),color:"#999",size:"small",onClick:v,disabled:b,children:j?"取消标星":"标星"}),ie.jsx(I,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:k,children:ie.jsx(y,{type:"text",icon:ie.jsx(u,{}),color:"#999",size:"small",disabled:S,children:"复制"})}),ie.jsx(y,{type:"text",icon:ie.jsx(l,{}),size:"small",color:"#999",onClick:()=>{Ue({title:"确定删除该问卷?",icon:ie.jsx(m,{}),onOk:R})},disabled:E,children:"删除"})]})})]})]})},{Search:Be}=k,We=()=>{const e=W(),{pathname:s}=B(),[n,r]=t.useState(""),[a]=M();return t.useEffect((()=>{const e=a.get(ye)||"";r(e)}),[a]),ie.jsx(Be,{placeholder:"请输入关键字",value:n,onChange:function(e){r(e.target.value)},onSearch:function(t){e({pathname:s,search:`${ye}=${t}`})},className:"w-50"})},{Title:He}=g,Je=()=>{const[e,s]=t.useState(!1),[n,r]=t.useState(1),[a,i]=t.useState([]),[c,l]=t.useState(0),o=c>a.length,[d]=M(),x=d.get(ye)||"";t.useEffect((()=>{s(!1),r(1),i([]),l(0)}),[x]);const{run:u,loading:m}=Q((async()=>await ke({page:n,pageSize:10,keyword:x})),{manual:!0,onSuccess(e){const{list:s=[],total:t=0}=e;i(a.concat(s)),l(t),r(n+1)}}),h=t.useRef(null),{run:j}=Y((()=>{const e=h.current;if(null==e)return;const t=e.getBoundingClientRect();if(null==t)return;const{bottom:n}=t;n<=document.body.clientHeight&&(u(),s(!0))}),{wait:1e3});t.useEffect((()=>{j()}),[d]),t.useEffect((()=>(o&&window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)})),[d,o]);const p=t.useMemo((()=>!e||m?ie.jsx(v,{}):0===c?ie.jsx(E,{description:"暂无数据"}):o?ie.jsx("span",{children:"开始加载下一页"}):ie.jsx("span",{children:"没有更多了..."})),[e,m,o]);return ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{className:"flex",children:[ie.jsx("div",{className:"flex-1",children:ie.jsx(He,{level:3,children:"我的问卷"})}),ie.jsx("div",{className:"flex-1 text-center",children:ie.jsx(We,{})})]}),ie.jsx("div",{className:"mb-5",children:a.length>0&&a.map((e=>{const{_id:s}=e;return ie.jsx(Me,{...e},s)}))}),ie.jsx("div",{className:"text-center color-blue",children:ie.jsx("div",{ref:h,children:p})})]})},Ke=e=>{const{total:s}=e,[n,r]=t.useState(1),[a,i]=t.useState(10),[c]=M();t.useEffect((()=>{const e=parseInt(c.get(be)||"")||1;r(e);const s=parseInt(c.get(ve)||"")||10;i(s)}),[c]);const l=W(),{pathname:o}=B();return ie.jsx(R,{current:n,pageSize:a,total:s,onChange:(e,s)=>{c.set(be,e.toString()),c.set(ve,s.toString()),l({pathname:o,search:c.toString()})}})},{Title:Ve}=g,{confirm:Qe}=_,Ye=()=>{G("问卷调查");const{data:e={},loading:s,refresh:n}=_e({isDeleted:!0}),{list:r=[],total:a=0}=e,[i,c]=t.useState([]),l=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?ie.jsx(C,{color:"processing",children:"已发布"}):ie.jsx(C,{children:"未发布"})},{title:"答卷",dataIndex:"answerCount"},{title:"创建时间",dataIndex:"createdAt"}],{run:o}=Q((async()=>{for await(const e of i)await Ne(e,{isDeleted:!1})}),{manual:!0,debounceWait:500,onSuccess(){f.success("恢复成功"),n(),c([])}}),{run:d}=Q((async()=>await async function(e){return await we.delete("/api/question",{data:{ids:e}})}(i)),{manual:!0,onSuccess(){f.success("删除成功"),n(),c([])}});return ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{className:"flex",children:[ie.jsx("div",{className:"flex-1",children:ie.jsx(Ve,{level:3,children:"回收站"})}),ie.jsx("div",{className:"flex-1 text-center",children:ie.jsx(We,{})})]}),ie.jsxs("div",{className:"mb-5",children:[s&&ie.jsx("div",{className:"text-center",children:ie.jsx(v,{})}),!s&&0===r.length&&ie.jsx(E,{description:"暂无数据"}),r.length>0&&ie.jsxs("div",{children:[ie.jsxs(p,{className:"mb",children:[ie.jsx(y,{type:"primary",disabled:0===i.length,onClick:o,children:"恢复"}),ie.jsx(y,{danger:!0,disabled:0===i.length,onClick:()=>{Qe({title:"确定彻底删除该问卷?",icon:ie.jsx(m,{}),content:"删除以后不可撤回",onOk:d})},children:"彻底删除"})]}),ie.jsx(q,{rowKey:e=>e._id,dataSource:r,columns:l,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{c(e)}}})]})]}),ie.jsx("div",{className:"text-center color-blue",children:r.length>0&&ie.jsx(Ke,{total:a})})]})},{Title:Ge}=g,Xe=()=>{const{data:e={},loading:s}=_e({isStar:!0}),{list:t=[],total:n=0}=e;return ie.jsxs(ie.Fragment,{children:[ie.jsxs("div",{className:"flex",children:[ie.jsx("div",{className:"flex-1",children:ie.jsx(Ge,{level:3,children:"星标问卷"})}),ie.jsx("div",{className:"flex-1 text-center",children:ie.jsx(We,{})})]}),ie.jsxs("div",{className:"mb-5",children:[s&&ie.jsx("div",{className:"text-center",children:ie.jsx(v,{})}),!s&&0===t.length&&ie.jsx(E,{description:"暂无数据"}),t.length>0&&t.map((e=>{const{_id:s}=e;return ie.jsx(Me,{...e},s)}))]}),ie.jsx("div",{className:"text-center color-blue",children:t.length>0&&ie.jsx(Ke,{total:n})})]})},Ze=()=>{const{loading:e,questionData:s}=Ie();return ie.jsxs("div",{children:[ie.jsx("p",{children:"编辑"}),e?ie.jsx("p",{children:"loading"}):ie.jsx("p",{children:JSON.stringify(s)})]})},es=()=>{const{loading:e,questionData:s}=Ie();return ie.jsxs("div",{children:[ie.jsx("p",{children:"Stat"}),e?ie.jsx("p",{children:"loading"}):ie.jsx("p",{children:JSON.stringify(s)})]})},{Title:ss,Paragraph:ts}=g,ns=()=>{const e=W();return ie.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:ie.jsxs("div",{className:"text-center",children:[ie.jsx(ss,{children:"问卷调查 | 在线投票"}),ie.jsx(ts,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),ie.jsx("div",{className:"h-15 font-24",children:ie.jsx(y,{className:"b-rounded-4",type:"primary",onClick:()=>e(us),children:"开始使用"})})]})})},{Title:rs}=g,as="USERNAME",is="PASSWORD",cs=()=>{const e=W(),[s]=S.useForm();t.useEffect((()=>{const{username:e,password:t}={username:localStorage.getItem(as),password:localStorage.getItem(is)};s.setFieldsValue({username:e,password:t})}),[]);const{run:n}=Q((async(e,s)=>{const t=await async function(e,s){const t={username:e,password:s};return await we.post("/api/user/login",t)}(e,s);return t}),{manual:!0,onSuccess(s){const{token:t=""}=s;!function(e){localStorage.setItem(fe,e)}(t),f.success("登录成功"),e(us)}});return ie.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[ie.jsx("div",{children:ie.jsxs(p,{children:[ie.jsx(rs,{level:2,children:ie.jsx(o,{})}),ie.jsx(rs,{level:2,children:"登录"})]})}),ie.jsx("div",{children:ie.jsxs(S,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{const{username:s,password:t,remember:r}=e||{};n(s,t),r?function(e,s){localStorage.setItem(as,e),localStorage.setItem(is,s)}(s,t):(localStorage.removeItem(as),localStorage.removeItem(is))},children:[ie.jsx(S.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:ie.jsx(k,{})}),ie.jsx(S.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:ie.jsx(k.Password,{})}),ie.jsx(S.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:0,span:10},children:ie.jsx(P,{children:"记住我"})}),ie.jsx(S.Item,{wrapperCol:{offset:4,span:18},children:ie.jsxs(p,{children:[ie.jsx(y,{type:"primary",htmlType:"submit",children:"登录"}),ie.jsx(A,{to:xs,children:"注册新用户"})]})})]})})]})},ls=J([{path:"/",element:ie.jsx(ze,{}),children:[{path:"/",element:ie.jsx(ns,{})},{path:"login",element:ie.jsx(cs,{})},{path:"register",element:ie.jsx(Le,{})},{path:"manage",element:ie.jsx($e,{}),children:[{path:"list",element:ie.jsx(Je,{})},{path:"star",element:ie.jsx(Xe,{})},{path:"trash",element:ie.jsx(Ye,{})}]},{path:"*",element:ie.jsx(Ae,{})}]},{path:"question",element:ie.jsx(De,{}),children:[{path:"edit/:id",element:ie.jsx(Ze,{})},{path:"stat/:id",element:ie.jsx(es,{})}]}],{basename:"/survey-sage"}),os="/",ds="/login",xs="/register",us="/manage/list",ms=()=>ie.jsx(F,{theme:{algorithm:T.defaultAlgorithm},children:ie.jsx(K,{router:ls})});ce.createRoot(document.getElementById("root")).render(ie.jsx(h.StrictMode,{children:ie.jsx(D,{store:he,children:ie.jsx(ms,{})})}))}}}));