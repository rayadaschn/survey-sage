System.register(["./@ant-design/icons-legacy-8a53ea1d.js","./antd-legacy-b7496cb9.js","./react-redux-legacy-820530fb.js","./@reduxjs/toolkit-legacy-6c0238ec.js","./react-router-dom-legacy-c35f62ec.js","./axios-legacy-787fab56.js","./ahooks-legacy-d449a4e1.js"],(function(e,s){"use strict";var t,n,r,a,l,i,c,o,d,x,u,m,h,j,p,g,f,v,y,b,w,N,S,k,C,I,E,_,F,R,P,q,T,z,$,L,O,D,A,U,B,M,V,W,H,K,J,Y,G,Q,X,Z,ee,se;return{setters:[e=>{t=e.r,n=e.ae,r=e.af,a=e.U,l=e.M,i=e.ag,c=e.ah,o=e.ai,d=e.ac,x=e.aj,u=e.ad,m=e.ak,h=e.O,j=e.al,p=e.R},e=>{g=e.r,f=e.S,v=e.T,y=e.m,b=e.B,w=e.L,N=e.a,S=e.D,k=e.F,C=e.I,I=e.R,E=e.b,_=e.P,F=e.M,R=e.E,P=e.c,q=e.d,T=e.e,z=e.f,$=e.C,L=e.g,O=e.t},e=>{D=e.u,A=e.a,U=e.P},e=>{B=e.c,M=e.a},e=>{V=e.L,W=e.u,H=e.a,K=e.b,J=e.c,Y=e.O,G=e.d,Q=e.R},e=>{X=e.a},e=>{Z=e.u,ee=e.a,se=e.b}],execute:function(){var e=document.createElement("style");e.textContent='#--unocss--{layer:__ALL__}:root{--w-space-xs: 8px;--w-space-sm: 16px;--w-space: 24px;--w-space-lg: 32px;--w-radius-xs: 4px;--w-radius: 8px;--w-radius-lg: 12px;--w-radius-xl: 16px;--c-white: #fff;--c-black: #000;--c-blue: #3b82f6;--c-red: #ef4444;--c-yellow: #f59e0b;--c-green: #42b983;--c-gray: #9ca3af;--c-disable: rgba(0, 0, 0, .25);--c-brand: var(--c-green);--c-bg: #f8f8f8;--c-text: #374151;--c-tips: var(--c-gray);--c-border: var(--c-gray);--c-mask: rgba(0, 0, 0, .7);--c-hover: var(--c-brand)}:root.dark{--c-bg: #181818;--c-text: #e5e7eb}html{width:100%;overflow-x:hidden}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:"tnum";font-variant:tabular-nums;background-color:var(--c-bg);margin:0}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#374151;border-radius:4px}::-webkit-scrollbar-thumb:hover{background-color:#1f2937}::-webkit-scrollbar-track{background-color:#6b7280;border-radius:4px}._container_1fxih_1 h1{font-size:28px;color:#f7f7f7}\n',document.head.appendChild(e);var s={exports:{}},te={},ne=t,re=Symbol.for("react.element"),ae=Symbol.for("react.fragment"),le=Object.prototype.hasOwnProperty,ie=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function oe(e,s,t){var n,r={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(l=s.ref),s)le.call(s,n)&&!ce.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:re,type:e,key:a,ref:l,props:r,_owner:ie.current}}te.Fragment=ae,te.jsx=oe,te.jsxs=oe,s.exports=te;var de=s.exports,xe={},ue=g;xe.createRoot=ue.createRoot,xe.hydrateRoot=ue.hydrateRoot;const me={username:"",nickname:""},he=B({name:"user",initialState:me,reducers:{loginReducer:(e,s)=>s.payload,logoutReducer:()=>me}}),je=he.reducer,{loginReducer:pe,logoutReducer:ge}=he.actions,fe=B({name:"pageInfo",initialState:{title:"",desc:"",js:"",css:""},reducers:{resetPageInfo:(e,s)=>s.payload}}),ve=fe.reducer,{resetPageInfo:ye}=fe.actions,be=B({name:"components",initialState:{componentList:[],selectedId:"",copiedComponent:null},reducers:{resetComponents:(e,s)=>s.payload}}),{resetComponents:we}=be.actions,Ne=be.reducer,Se=M({reducer:{user:je,pageInfo:ve,components:Ne}}),ke="_container_1fxih_1",{Title:Ce}=v,Ie=()=>de.jsx("div",{children:de.jsx(V,{to:"/",children:de.jsxs(f,{className:ke,children:[de.jsx(Ce,{children:de.jsx(n,{})}),de.jsx(Ce,{children:"问卷调查"})]})})}),Ee="USER_TOKEN";function _e(){const{username:e,nickname:s}=D((e=>e.user));return{username:e,nickname:s}}const Fe="keyword",Re="page",Pe="pageSize",qe=X.create({timeout:1e4,baseURL:"https://huy.wiki:3002/"});async function Te(){return await qe.post("/api/question/")}async function ze(e={}){return await qe.get("/api/question",{params:e})}async function $e(e,s){const t=`/api/question/${e}`;return await qe.patch(t,s)}async function Le(){return await qe.get("/api/user/info")}function Oe(){const{id:e=""}=W(),s=A(),{data:n,loading:r,error:a,run:l}=Z((async e=>{if(!e)throw new Error("缺少问卷 id");const s=await async function(e){const s=`/api/question/${e}`;return await qe.get(s)}(e);return s}),{manual:!0});return t.useEffect((()=>{if(!n)return;const{title:e="",desc:t="",js:r="",css:a="",componentList:l=[]}=n;let i="";l.length>0&&(i=l[0].fe_id),s(we({componentList:l,selectedId:i,copiedComponent:null})),s(ye({title:e,desc:t,js:r,css:a}))}),[n]),t.useEffect((()=>{l(e)}),[e]),{loading:r,error:a}}function De(e={}){const{isStar:s,isDeleted:t}=e,[n]=H(),{data:r,loading:a,error:l,refresh:i}=Z((async()=>{const e=n.get(Fe)||"",r=parseInt(n.get(Re)||"")||1,a=parseInt(n.get(Pe)||"")||10;return await ze({keyword:e,isStar:s,isDeleted:t,page:r,pageSize:a})}),{refreshDeps:[n]});return{data:r,loading:a,error:l,refresh:i}}function Ae(){const e=A(),[s,n]=t.useState(!0),{run:r}=Z(Le,{manual:!0,onSuccess(s){const{username:t,nickname:n}=s;e(pe({username:t,nickname:n}))},onFinally(){n(!1)}}),{username:a}=_e();return t.useEffect((()=>{a?n(!1):r()}),[s]),{waitingUserData:s}}function Ue(e){const{username:s}=_e(),{pathname:n}=K(),r=J();t.useEffect((()=>{e||(s?function(e){return[Rs,Ps].includes(e)}(n)&&r(qs):function(e){return[Fs,Rs,Ps].includes(e)}(n)||r(Rs))}),[e,s,n])}qe.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${localStorage.getItem(Ee)||""}`,e)),(e=>(y.error(e.message),Promise.reject(e)))),qe.interceptors.response.use((e=>{const s=e.data||{},{errno:t,data:n,msg:r}=s;return 203===t||0!==t&&200!==t?(y.error(r||"请求失败"),Promise.reject(n)):n}),(e=>{let s="";const t=e.response?.status;switch(t){case 401:s="token 失效，请重新登录";break;case 403:s="拒绝访问";break;case 404:s="请求地址错误";break;case 500:s="服务器故障";break;default:s="网络连接故障"}return y.error(s),Promise.reject(e)}));const Be=()=>{const e=J(),s=A(),{username:t,nickname:n}=_e(),a=de.jsxs(de.Fragment,{children:[de.jsxs("span",{className:"color-light",children:[de.jsx(r,{}),n]}),de.jsx(b,{type:"link",onClick:function(){s(ge()),localStorage.removeItem(Ee),y.success("退出成功"),e(Rs)},children:"退出"})]}),l=de.jsx(V,{to:Rs,children:"登录"});return de.jsx(de.Fragment,{children:t?a:l})},{Header:Me,Content:Ve,Footer:We}=w,He=()=>{const{waitingUserData:e}=Ae();return Ue(e),de.jsxs(w,{children:[de.jsxs(Me,{className:"px-6",children:[de.jsx("div",{className:"float-left",children:de.jsx(Ie,{})}),"MainLayout header",de.jsx("div",{className:"float-right",children:de.jsx(Be,{})})]}),de.jsx(Ve,{className:"min-h-[calc(100vh-140px)]",children:e?de.jsx("div",{className:"mt-15 text-center",children:de.jsx(N,{})}):de.jsx(Y,{})}),de.jsx(We,{className:"border-t border-gray-200 border-solid bg-white text-center",children:"问卷调查@2023 Created by Huy"})]})},Ke=()=>{const e=J(),{pathname:s}=K(),{loading:t,run:n}=Z(Te,{manual:!0,onSuccess(s){e(`question/edit/${s.id}`),y.success("创建成功")}});return de.jsxs("div",{className:"mx-auto my-0 w-300 flex py-6",children:[de.jsx("div",{className:"w-30",children:de.jsxs(f,{direction:"vertical",children:[de.jsx(b,{type:"primary",size:"large",icon:de.jsx(a,{}),onClick:n,disabled:t,children:"新建问卷"}),de.jsx(S,{}),de.jsx(b,{type:s.startsWith("/manage/list")?"default":"text",size:"large",icon:de.jsx(l,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),de.jsx(b,{type:s.startsWith("/manage/star")?"default":"text",size:"large",icon:de.jsx(i,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),de.jsx(b,{type:s.startsWith("/manage/trash")?"default":"text",size:"large",icon:de.jsx(c,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),de.jsx("div",{className:"ml-15 flex-1",children:de.jsx(Y,{})})]})},Je=()=>{const{waitingUserData:e}=Ae();return Ue(e),de.jsx("div",{className:"h-screen",children:e?de.jsx("div",{className:"mt-15 text-center",children:de.jsx(N,{})}):de.jsx(Y,{})})},{Title:Ye}=v,Ge=()=>{const e=J(),{run:s}=Z((async e=>{const{username:s,password:t,nickname:n}=e;await async function(e,s,t){const n={username:e,password:s,nickname:t||e};return await qe.post("/api/user/register",n)}(s,t,n)}),{manual:!0,onSuccess(){y.success("注册成功"),e(Rs)}});return de.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[de.jsx("div",{children:de.jsxs(f,{children:[de.jsx(Ye,{level:2,children:de.jsx(o,{})}),de.jsx(Ye,{level:2,children:"注册新用户"})]})}),de.jsx("div",{children:de.jsxs(k,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{s(e)},children:[de.jsx(k.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:de.jsx(C,{})}),de.jsx(k.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:de.jsx(C.Password,{})}),de.jsx(k.Item,{label:"确认密码",name:" confirm",rules:[{required:!0,message:"请输入密码"},({getFieldValue:e})=>({validator:(s,t)=>t&&e("password")!==t?Promise.reject(new Error("两次密码不一致")):Promise.resolve()})],children:de.jsx(C.Password,{})}),de.jsx(k.Item,{label:"昵称",name:"nickname",children:de.jsx(C,{})}),de.jsx(k.Item,{wrapperCol:{offset:4,span:18},children:de.jsxs(f,{children:[de.jsx(b,{type:"primary",htmlType:"submit",children:"注册"}),de.jsx(V,{to:Rs,children:"已有账户，请登录"})]})})]})})]})},Qe=()=>{const e=J();return de.jsx(de.Fragment,{children:de.jsx(I,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:de.jsx(b,{type:"primary",onClick:()=>e(qs),children:"返回首页"})})})},{confirm:Xe}=F,Ze=e=>{const s=J(),{_id:n,title:r,isPublished:a,answerContent:l,currentAt:o,isStar:h}=e,[j,p]=t.useState(h),{loading:g,run:v}=Z((async()=>{await $e(n,{isStar:!j})}),{manual:!0,onSuccess(){p(!j),y.success("已更新")}}),{loading:w,run:N}=Z((async()=>await async function(e){const s=`/api/question/duplicate/${e}`;return await qe.post(s)}(n)),{manual:!0,onSuccess(e){y.success("复制成功"),s(`/question/edit/${e.id}`)}}),[k,C]=t.useState(!1),{loading:I,run:F}=Z((async()=>await $e(n,{isDeleted:!0})),{manual:!0,onSuccess(){y.success("删除成功"),C(!0)}});return k?null:de.jsxs("div",{className:"mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md",children:[de.jsxs("div",{className:"flex",children:[de.jsx("div",{className:"flex-1",children:de.jsx(V,{to:a?`/question/stat/${n}`:`/question/edit/${n}`,children:de.jsxs(f,{children:[h&&de.jsx(i,{style:{color:"red"}}),r]})})}),de.jsx("div",{className:"flex-1 text-center font-size-3",children:de.jsxs(f,{children:[a?de.jsx(E,{color:"processing",children:"已发布"}):de.jsx(E,{children:"未发布"}),de.jsxs("span",{children:["答卷: ",l]}),de.jsx("span",{children:o})]})})]}),de.jsx(S,{className:"m-3"}),de.jsxs("div",{className:"flex",children:[de.jsx("div",{className:"flex-1",children:de.jsxs(f,{children:[de.jsx(b,{icon:de.jsx(d,{}),type:"text",size:"small",onClick:()=>{s(`/question/edit/${n}`)},children:"编辑问卷"}),de.jsx(b,{icon:de.jsx(x,{}),type:"text",size:"small",onClick:()=>{s(`/question/stat/${n}`)},children:"数据统计"})]})}),de.jsx("div",{className:"flex-1 text-center",children:de.jsxs(f,{children:[de.jsx(b,{type:"text",icon:de.jsx(i,{}),color:"#999",size:"small",onClick:v,disabled:g,children:j?"取消标星":"标星"}),de.jsx(_,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:N,children:de.jsx(b,{type:"text",icon:de.jsx(u,{}),color:"#999",size:"small",disabled:w,children:"复制"})}),de.jsx(b,{type:"text",icon:de.jsx(c,{}),size:"small",color:"#999",onClick:()=>{Xe({title:"确定删除该问卷?",icon:de.jsx(m,{}),onOk:F})},disabled:I,children:"删除"})]})})]})]})},{Search:es}=C,ss=()=>{const e=J(),{pathname:s}=K(),[n,r]=t.useState(""),[a]=H();return t.useEffect((()=>{const e=a.get(Fe)||"";r(e)}),[a]),de.jsx(es,{placeholder:"请输入关键字",value:n,onChange:function(e){r(e.target.value)},onSearch:function(t){e({pathname:s,search:`${Fe}=${t}`})},className:"w-50"})},{Title:ts}=v,ns=()=>{const[e,s]=t.useState(!1),[n,r]=t.useState(1),[a,l]=t.useState([]),[i,c]=t.useState(0),o=i>a.length,[d]=H(),x=d.get(Fe)||"";t.useEffect((()=>{s(!1),r(1),l([]),c(0)}),[x]);const{run:u,loading:m}=Z((async()=>await ze({page:n,pageSize:10,keyword:x})),{manual:!0,onSuccess(e){const{list:s=[],total:t=0}=e;l(a.concat(s)),c(t),r(n+1)}}),h=t.useRef(null),{run:j}=ee((()=>{const e=h.current;if(null==e)return;const t=e.getBoundingClientRect();if(null==t)return;const{bottom:n}=t;n<=document.body.clientHeight&&(u(),s(!0))}),{wait:1e3});t.useEffect((()=>{j()}),[d]),t.useEffect((()=>(o&&window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)})),[d,o]);const p=t.useMemo((()=>!e||m?de.jsx(N,{}):0===i?de.jsx(R,{description:"暂无数据"}):o?de.jsx("span",{children:"开始加载下一页"}):de.jsx("span",{children:"没有更多了..."})),[e,m,o]);return de.jsxs(de.Fragment,{children:[de.jsxs("div",{className:"flex",children:[de.jsx("div",{className:"flex-1",children:de.jsx(ts,{level:3,children:"我的问卷"})}),de.jsx("div",{className:"flex-1 text-center",children:de.jsx(ss,{})})]}),de.jsx("div",{className:"mb-5",children:a.length>0&&a.map((e=>{const{_id:s}=e;return de.jsx(Ze,{...e},s)}))}),de.jsx("div",{className:"text-center color-blue",children:de.jsx("div",{ref:h,children:p})})]})},rs=e=>{const{total:s}=e,[n,r]=t.useState(1),[a,l]=t.useState(10),[i]=H();t.useEffect((()=>{const e=parseInt(i.get(Re)||"")||1;r(e);const s=parseInt(i.get(Pe)||"")||10;l(s)}),[i]);const c=J(),{pathname:o}=K();return de.jsx(P,{current:n,pageSize:a,total:s,onChange:(e,s)=>{i.set(Re,e.toString()),i.set(Pe,s.toString()),c({pathname:o,search:i.toString()})}})},{Title:as}=v,{confirm:ls}=F,is=()=>{se("问卷调查");const{data:e={},loading:s,refresh:n}=De({isDeleted:!0}),{list:r=[],total:a=0}=e,[l,i]=t.useState([]),c=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?de.jsx(E,{color:"processing",children:"已发布"}):de.jsx(E,{children:"未发布"})},{title:"答卷",dataIndex:"answerCount"},{title:"创建时间",dataIndex:"createdAt"}],{run:o}=Z((async()=>{for await(const e of l)await $e(e,{isDeleted:!1})}),{manual:!0,debounceWait:500,onSuccess(){y.success("恢复成功"),n(),i([])}}),{run:d}=Z((async()=>await async function(e){return await qe.delete("/api/question",{data:{ids:e}})}(l)),{manual:!0,onSuccess(){y.success("删除成功"),n(),i([])}});return de.jsxs(de.Fragment,{children:[de.jsxs("div",{className:"flex",children:[de.jsx("div",{className:"flex-1",children:de.jsx(as,{level:3,children:"回收站"})}),de.jsx("div",{className:"flex-1 text-center",children:de.jsx(ss,{})})]}),de.jsxs("div",{className:"mb-5",children:[s&&de.jsx("div",{className:"text-center",children:de.jsx(N,{})}),!s&&0===r.length&&de.jsx(R,{description:"暂无数据"}),r.length>0&&de.jsxs("div",{children:[de.jsxs(f,{className:"mb",children:[de.jsx(b,{type:"primary",disabled:0===l.length,onClick:o,children:"恢复"}),de.jsx(b,{danger:!0,disabled:0===l.length,onClick:()=>{ls({title:"确定彻底删除该问卷?",icon:de.jsx(m,{}),content:"删除以后不可撤回",onOk:d})},children:"彻底删除"})]}),de.jsx(q,{rowKey:e=>e._id,dataSource:r,columns:c,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{i(e)}}})]})]}),de.jsx("div",{className:"text-center color-blue",children:r.length>0&&de.jsx(rs,{total:a})})]})},{Title:cs}=v,os=()=>{const{data:e={},loading:s}=De({isStar:!0}),{list:t=[],total:n=0}=e;return de.jsxs(de.Fragment,{children:[de.jsxs("div",{className:"flex",children:[de.jsx("div",{className:"flex-1",children:de.jsx(cs,{level:3,children:"星标问卷"})}),de.jsx("div",{className:"flex-1 text-center",children:de.jsx(ss,{})})]}),de.jsxs("div",{className:"mb-5",children:[s&&de.jsx("div",{className:"text-center",children:de.jsx(N,{})}),!s&&0===t.length&&de.jsx(R,{description:"暂无数据"}),t.length>0&&t.map((e=>{const{_id:s}=e;return de.jsx(Ze,{...e},s)}))]}),de.jsx("div",{className:"text-center color-blue",children:t.length>0&&de.jsx(rs,{total:n})})]})},ds=()=>(J(),de.jsxs("div",{className:"mx-6 flex border-b border-green-300 bg-white",children:[de.jsx("div",{className:"flex-1",children:de.jsxs(f,{children:[de.jsx(b,{type:"link",icon:de.jsx(h,{}),children:"返回"}),de.jsx("div",{className:"mb-0 text-[18px] leading-none",children:"标题"})]})}),de.jsx("div",{className:"flex-1 text-center leading-[2]",children:"中部"}),de.jsx("div",{className:"flex-1 text-center leading-[2]",children:"右侧"})]})),xs=()=>de.jsxs(de.Fragment,{children:[de.jsx("div",{children:"lib"})," "]}),us=()=>de.jsxs(de.Fragment,{children:[de.jsx("div",{children:"layers"})," "]}),ms=()=>{const e=[{key:"componentLib",label:de.jsxs("span",{children:[de.jsx(j,{}),"组件库"]}),children:de.jsx(xs,{})},{key:"layers",label:de.jsxs("span",{children:[de.jsx(l,{}),"组件库"]}),children:de.jsx(us,{})}];return de.jsx(de.Fragment,{children:de.jsx(T,{items:e,defaultActiveKey:"componentLib"})})},hs={text:"一级标题",level:1,isCenter:!1},{Title:js}=v,ps=e=>{const{text:s="",level:t=1,isCenter:n=!1}={...hs};return de.jsx(js,{level:t,style:{textAlign:n?"center":"start",marginBottom:"0",fontSize:(r=t,1===r?"24px":2===r?"20px":"16px")},children:s});var r},gs=e=>{const{text:s,level:n,isCenter:r,onChange:a,disabled:l}=e,[i]=k.useForm();return t.useEffect((()=>{i.setFieldsValue({text:s,level:n,isCenter:r})}),[s,n,r]),de.jsxs(k,{form:i,layout:"vertical",onValuesChange:function(){a&&a(i.getFieldsValue())},initialValues:{text:s,level:n,isCenter:r},disabled:l,children:[de.jsx(k.Item,{label:"标题内容",name:"text",rules:[{required:!0,message:"请输入标题内容"}],children:de.jsx(C,{})}),de.jsx(k.Item,{label:"层级",name:"level",children:de.jsx(z,{options:[{value:1,text:1},{value:2,text:2},{value:3,text:3}]})}),de.jsx(k.Item,{name:"isCenter",valuePropName:"checked",children:de.jsx($,{children:"居中显示"})})]})},fs=({loading:e})=>e?de.jsx("div",{className:"mt-6 text-center",children:de.jsx(N,{})}):de.jsx(de.Fragment,{children:de.jsxs("div",{children:[de.jsx("div",{children:de.jsx("div",{children:de.jsx(ps,{})})}),de.jsx("div",{children:de.jsx("div",{children:de.jsx(gs,{})})})]})}),vs=()=>de.jsx(de.Fragment,{children:"EditRightPanel.tsx"}),ys=()=>{const{loading:e}=Oe(),{title:s}=D((e=>e.pageInfo));return se(`问卷编辑 - ${s}`),de.jsxs("div",{className:"h-screen flex flex-col bg-[#f0f2f5]",children:[de.jsx(ds,{}),de.jsx("div",{className:"flex-1 py-3",children:de.jsxs("div",{className:"mx-6 h-100% flex",children:[de.jsx("div",{className:"w-75 bg-white px-3",children:de.jsx(ms,{})}),de.jsx("div",{className:"relative flex-1 overflow-hidden",children:de.jsx("div",{className:"absolute left-1/2 top-1/2 h-178 w-100 flex transform items-center justify-center overflow-auto shadow-2xl -translate-x-1/2 -translate-y-1/2",children:de.jsx(fs,{loading:e})})}),de.jsx("div",{className:"w-75 bg-white px-3",children:de.jsx(vs,{})})]})})]})},bs=()=>{const{loading:e,questionData:s}=Oe();return de.jsxs("div",{children:[de.jsx("p",{children:"Stat"}),e?de.jsx("p",{children:"loading"}):de.jsx("p",{children:JSON.stringify(s)})]})},{Title:ws,Paragraph:Ns}=v,Ss=()=>{const e=J();return de.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:de.jsxs("div",{className:"text-center",children:[de.jsx(ws,{children:"问卷调查 | 在线投票"}),de.jsx(Ns,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),de.jsx("div",{className:"h-15 font-24",children:de.jsx(b,{className:"b-rounded-4",type:"primary",onClick:()=>e(qs),children:"开始使用"})})]})})},{Title:ks}=v,Cs="USERNAME",Is="PASSWORD",Es=()=>{const e=J(),s=A(),[n]=k.useForm();t.useEffect((()=>{const{username:e,password:s}={username:localStorage.getItem(Cs),password:localStorage.getItem(Is)};n.setFieldsValue({username:e,password:s})}),[]);const{run:r}=Z((async(e,t)=>{const n=await async function(e,s){const t={username:e,password:s};return await qe.post("/api/user/login",t)}(e,t);return n.token&&s(pe({username:e,nickname:e})),n}),{manual:!0,onSuccess(s){const{token:t=""}=s;!function(e){localStorage.setItem(Ee,e)}(t),y.success("登录成功"),e(qs)}});return de.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[de.jsx("div",{children:de.jsxs(f,{children:[de.jsx(ks,{level:2,children:de.jsx(o,{})}),de.jsx(ks,{level:2,children:"登录"})]})}),de.jsx("div",{children:de.jsxs(k,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{const{username:s,password:t,remember:n}=e||{};r(s,t),n?function(e,s){localStorage.setItem(Cs,e),localStorage.setItem(Is,s)}(s,t):(localStorage.removeItem(Cs),localStorage.removeItem(Is))},children:[de.jsx(k.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:de.jsx(C,{})}),de.jsx(k.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:de.jsx(C.Password,{})}),de.jsx(k.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:0,span:10},children:de.jsx($,{children:"记住我"})}),de.jsx(k.Item,{wrapperCol:{offset:4,span:18},children:de.jsxs(f,{children:[de.jsx(b,{type:"primary",htmlType:"submit",children:"登录"}),de.jsx(V,{to:Ps,children:"注册新用户"})]})})]})})]})},_s=G([{path:"/",element:de.jsx(He,{}),children:[{path:"/",element:de.jsx(Ss,{})},{path:"login",element:de.jsx(Es,{})},{path:"register",element:de.jsx(Ge,{})},{path:"manage",element:de.jsx(Ke,{}),children:[{path:"list",element:de.jsx(ns,{})},{path:"star",element:de.jsx(os,{})},{path:"trash",element:de.jsx(is,{})}]},{path:"*",element:de.jsx(Qe,{})}]},{path:"question",element:de.jsx(Je,{}),children:[{path:"edit/:id",element:de.jsx(ys,{})},{path:"stat/:id",element:de.jsx(bs,{})}]}],{basename:"/survey-sage"}),Fs="/",Rs="/login",Ps="/register",qs="/manage/list",Ts=()=>de.jsx(L,{theme:{algorithm:O.defaultAlgorithm},children:de.jsx(Q,{router:_s})});xe.createRoot(document.getElementById("root")).render(de.jsx(p.StrictMode,{children:de.jsx(U,{store:Se,children:de.jsx(Ts,{})})}))}}}));
