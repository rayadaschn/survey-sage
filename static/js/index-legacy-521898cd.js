System.register(["./@ant-design/icons-legacy-fccabc0f.js","./antd-legacy-169349f7.js","./react-redux-legacy-cf372a7a.js","./@reduxjs/toolkit-legacy-a49fdba0.js","./lodash-es-legacy-e3523841.js","./react-router-dom-legacy-51d62e45.js","./axios-legacy-787fab56.js","./ahooks-legacy-399fe639.js","./redux-undo-legacy-0558ac97.js","./recharts-legacy-fbfff4d6.js"],(function(e,t){"use strict";var s,n,l,r,i,a,c,o,d,x,u,m,h,p,j,g,f,v,y,b,C,w,k,I,N,S,P,_,F,E,V,L,q,T,R,z,A,D,$,O,H,U,B,M,K,W,G,J,Y,X,Q,Z,ee,te,se,ne,le,re,ie,ae,ce,oe,de,xe,ue,me,he,pe,je,ge,fe,ve,ye,be,Ce,we,ke,Ie,Ne,Se,Pe,_e,Fe,Ee;return{setters:[e=>{s=e.r,n=e.ae,l=e.af,r=e.U,i=e.M,a=e.ag,c=e.ah,o=e.ai,d=e.ac,x=e.aj,u=e.ad,m=e.ak,h=e.W,p=e.al,j=e.am,g=e.an,f=e.K,v=e.ao,y=e.ap,b=e.L,C=e.O,w=e.aq,k=e.z,I=e.ar,N=e.as,S=e.at,P=e.R},e=>{_=e.r,F=e.S,E=e.m,V=e.B,L=e.L,q=e.a,T=e.D,R=e.F,z=e.I,A=e.T,D=e.R,$=e.b,O=e.P,H=e.M,U=e.E,B=e.c,M=e.d,K=e.e,W=e.C,G=e.f,J=e.g,Y=e.h,X=e.i,Q=e.j,Z=e.t},e=>{ee=e.u,te=e.a,se=e.P},e=>{ne=e.c,le=e.p,re=e.a},e=>{ie=e.c},e=>{ae=e.L,ce=e.u,oe=e.a,de=e.b,xe=e.c,ue=e.O,me=e.d,he=e.R},e=>{pe=e.a},e=>{je=e.F,ge=e.G,fe=e.H,ve=e.I,ye=e.J},e=>{be=e.M},e=>{Ce=e.R,we=e.B,ke=e.C,Ie=e.X,Ne=e.Y,Se=e.T,Pe=e.a,_e=e.P,Fe=e.b,Ee=e.c}],execute:function(){var e=document.createElement("style");e.textContent='#--unocss--{layer:__ALL__}:root{--w-space-xs: 8px;--w-space-sm: 16px;--w-space: 24px;--w-space-lg: 32px;--w-radius-xs: 4px;--w-radius: 8px;--w-radius-lg: 12px;--w-radius-xl: 16px;--c-white: #fff;--c-black: #000;--c-blue: #3b82f6;--c-red: #ef4444;--c-yellow: #f59e0b;--c-green: #42b983;--c-gray: #9ca3af;--c-disable: rgba(0, 0, 0, .25);--c-brand: var(--c-green);--c-bg: #f8f8f8;--c-text: #374151;--c-tips: var(--c-gray);--c-border: var(--c-gray);--c-mask: rgba(0, 0, 0, .7);--c-hover: var(--c-brand)}:root.dark{--c-bg: #181818;--c-text: #e5e7eb}html{width:100%;overflow-x:hidden}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:"tnum";font-variant:tabular-nums;background-color:var(--c-bg);margin:0}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#374151;border-radius:4px}::-webkit-scrollbar-thumb:hover{background-color:#1f2937}::-webkit-scrollbar-track{background-color:#6b7280;border-radius:4px}\n',document.head.appendChild(e);var t={exports:{}},Ve={},Le=s,qe=Symbol.for("react.element"),Te=Symbol.for("react.fragment"),Re=Object.prototype.hasOwnProperty,ze=Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ae={key:!0,ref:!0,__self:!0,__source:!0};function De(e,t,s){var n,l={},r=null,i=null;for(n in void 0!==s&&(r=""+s),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(i=t.ref),t)Re.call(t,n)&&!Ae.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:qe,type:e,key:r,ref:i,props:l,_owner:ze.current}}Ve.Fragment=Te,Ve.jsx=De,Ve.jsxs=De,t.exports=Ve;var $e=t.exports,Oe={},He=_;Oe.createRoot=He.createRoot,Oe.hydrateRoot=He.hydrateRoot;const Ue={username:"",nickname:""},Be=ne({name:"user",initialState:Ue,reducers:{loginReducer:(e,t)=>t.payload,logoutReducer:()=>Ue}}),Me=Be.reducer,{loginReducer:Ke,logoutReducer:We}=Be.actions,Ge=ne({name:"pageInfo",initialState:{title:"",desc:"",js:"",css:""},reducers:{resetPageInfo:(e,t)=>t.payload,changePageTitle:le(((e,t)=>{e.title=t.payload}))}}),Je=Ge.reducer,{resetPageInfo:Ye,changePageTitle:Xe}=Ge.actions;let Qe=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");function Ze(e,t){const s=t.filter((e=>!e.isHidden)),n=s.findIndex((t=>t.fe_id===e));if(n<0)return"";let l="";const r=s.length;return l=r<=1?"":n+1===r?s[n-1].fe_id:s[n+1].fe_id,l}function et(e,t){const{selectedId:s,componentList:n}=e,l=n.findIndex((e=>e.fe_id===s));l<0?e.componentList.push(t):e.componentList.splice(l+1,0,t),e.selectedId=t.fe_id}const tt=ne({name:"components",initialState:{componentList:[],selectedId:"",copiedComponent:null},reducers:{resetComponents:(e,t)=>t.payload,changeSelectedId:le(((e,t)=>{e.selectedId=t.payload})),addComponent:le(((e,t)=>{et(e,t.payload)})),changeComponentProps:le(((e,t)=>{const{fe_id:s,newProps:n}=t.payload,l=e.componentList.find((e=>e.fe_id===s));l&&(l.props={...l.props,...n})})),removeSelectedComponent:le((e=>{const{componentList:t=[],selectedId:s}=e,n=Ze(s,t);e.selectedId=n;const l=t.findIndex((e=>e.fe_id===s));t.splice(l,1)})),changeComponentHidden:le(((e,t)=>{const{componentList:s=[]}=e,{fe_id:n,isHidden:l}=t.payload;let r="";r=l?Ze(n,s):n,e.selectedId=r;const i=s.find((e=>e.fe_id===n));i&&(i.isHidden=l)})),toggleComponentLocked:le(((e,t)=>{const{fe_id:s}=t.payload,n=e.componentList.find((e=>e.fe_id===s));n&&(n.isLocked=!n.isLocked)})),copySelectedComponent:le((e=>{const{selectedId:t,componentList:s=[]}=e,n=s.find((e=>e.fe_id===t));null!=n&&(e.copiedComponent=ie(n))})),pasteCopiedComponent:le((e=>{const{copiedComponent:t}=e;null!=t&&(t.fe_id=Qe(),et(e,t))})),selectPrevComponent:le((e=>{const{selectedId:t,componentList:s}=e,n=s.findIndex((e=>e.fe_id===t));n<0||n<=0||(e.selectedId=s[n-1].fe_id)})),selectNextComponent:le((e=>{const{selectedId:t,componentList:s}=e,n=s.findIndex((e=>e.fe_id===t));n<0||n+1!==s.length&&(e.selectedId=s[n+1].fe_id)})),changeComponentTitle:le(((e,t)=>{const{title:s,fe_id:n}=t.payload,l=e.componentList.find((e=>e.fe_id===n));l&&(l.title=s)})),moveComponent:le(((e,t)=>{t.payload}))}}),{resetComponents:st,changeSelectedId:nt,addComponent:lt,changeComponentProps:rt,removeSelectedComponent:it,changeComponentHidden:at,toggleComponentLocked:ct,copySelectedComponent:ot,pasteCopiedComponent:dt,selectPrevComponent:xt,selectNextComponent:ut,changeComponentTitle:mt,moveComponent:ht}=tt.actions,pt=tt.reducer,jt=re({reducer:{user:Me,pageInfo:Je,components:pt}}),gt=()=>$e.jsx("div",{children:$e.jsx(ae,{to:"/",children:$e.jsx(F,{children:$e.jsxs("div",{className:"text-7 color-white",children:[$e.jsx(n,{}),$e.jsx("span",{children:"问卷调查"})]})})})}),ft="keyword",vt="page",yt="pageSize",bt=["#FF2D2D","#BE77FF","#2894FF","#00EC00","#EAC100","#FF9D6F"],Ct=pe.create({timeout:1e4,baseURL:"https://huy.wiki:3002/"});Ct.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${localStorage.getItem(wt)||""}`,e)),(e=>(E.error(e.message),Promise.reject(e)))),Ct.interceptors.response.use((e=>{const t=e.data||{},{errno:s,data:n,msg:l}=t;return 203===s||0!==s&&200!==s?(E.error(l||"请求失败"),Promise.reject(n)):n}),(e=>{let t="";const s=e.response?.status;switch(s){case 401:t="token 失效，请重新登录";break;case 403:t="拒绝访问";break;case 404:t="请求地址错误";break;case 500:t="服务器故障";break;default:t="网络连接故障"}return E.error(t),Promise.reject(e)}));const wt="USER_TOKEN",kt=()=>document.activeElement===document.body;function It(){const e=te((e=>e.components)),{componentList:t=[],selectedId:s,copiedComponent:n}=e,l=t.find((e=>e.fe_id===s));return{componentList:t,selectedId:s,selectedComponent:l,copiedComponent:n}}function Nt(){return te((e=>e.pageInfo))}function St(){const{username:e,nickname:t}=te((e=>e.user));return{username:e,nickname:t}}async function Pt(){return await Ct.post("/api/question/")}async function _t(e={}){return await Ct.get("/api/question",{params:e})}async function Ft(e,t){const s=`/api/question/${e}`;return await Ct.patch(s,t)}async function Et(){return await Ct.get("/api/user/info")}function Vt(){const{id:e=""}=ce(),t=ee(),{data:n,loading:l,error:r,run:i}=ge((async e=>{if(!e)throw new Error("缺少问卷 id");const t=await async function(e){const t=`/api/question/${e}`;return await Ct.get(t)}(e);return t}),{manual:!0});return s.useEffect((()=>{if(!n)return;const{title:e="",desc:s="",js:l="",css:r="",componentList:i=[]}=n;let a="";i.length>0&&(a=i[0].fe_id),t(st({componentList:i,selectedId:a,copiedComponent:null})),t(Ye({title:e,desc:s,js:l,css:r}))}),[n]),s.useEffect((()=>{i(e)}),[e]),{loading:l,error:r}}function Lt(e={}){const{isStar:t,isDeleted:s}=e,[n]=oe(),{data:l,loading:r,error:i,refresh:a}=ge((async()=>{const e=n.get(ft)||"",l=parseInt(n.get(vt)||"")||1,r=parseInt(n.get(yt)||"")||10;return await _t({keyword:e,isStar:t,isDeleted:s,page:l,pageSize:r})}),{refreshDeps:[n]});return{data:l,loading:r,error:i,refresh:a}}function qt(){const e=ee(),[t,n]=s.useState(!0),{run:l}=ge(Et,{manual:!0,onSuccess(t){const{username:s,nickname:n}=t;e(Ke({username:s,nickname:n}))},onFinally(){n(!1)}}),{username:r}=St();return s.useEffect((()=>{r?n(!1):l()}),[t]),{waitingUserData:t}}function Tt(e){const{username:t}=St(),{pathname:n}=de(),l=xe();s.useEffect((()=>{e||(t?function(e){return[ln,rn].includes(e)}(n)&&l(an):function(e){return[nn,ln,rn].includes(e)}(n)||l(ln))}),[e,t,n])}const Rt=()=>{const e=xe(),t=ee(),{username:s,nickname:n}=St(),r=$e.jsxs($e.Fragment,{children:[$e.jsxs("span",{className:"color-light",children:[$e.jsx(l,{}),n]}),$e.jsx(V,{type:"link",onClick:function(){t(We()),localStorage.removeItem(wt),E.success("退出成功"),e(ln)},children:"退出"})]}),i=$e.jsx(ae,{to:ln,children:"登录"});return $e.jsx($e.Fragment,{children:s?r:i})},{Header:zt,Content:At,Footer:Dt}=L,$t=()=>{const{waitingUserData:e}=qt();return Tt(e),$e.jsxs(L,{children:[$e.jsxs(zt,{className:"px-6",children:[$e.jsx("div",{className:"float-left",children:$e.jsx(gt,{})}),"MainLayout header",$e.jsx("div",{className:"float-right",children:$e.jsx(Rt,{})})]}),$e.jsx(At,{className:"min-h-[calc(100vh-140px)]",children:e?$e.jsx("div",{className:"mt-15 text-center",children:$e.jsx(q,{})}):$e.jsx(ue,{})}),$e.jsx(Dt,{className:"border-t border-gray-200 border-solid bg-white text-center",children:"问卷调查 ©2023 - present. Created by Huy"})]})},Ot=()=>{const e=xe(),{pathname:t}=de(),{loading:s,run:n}=ge(Pt,{manual:!0,onSuccess(t){e(`question/edit/${t.id}`),E.success("创建成功")}});return $e.jsxs("div",{className:"mx-auto my-0 w-300 flex py-6",children:[$e.jsx("div",{className:"w-30",children:$e.jsxs(F,{direction:"vertical",children:[$e.jsx(V,{type:"primary",size:"large",icon:$e.jsx(r,{}),onClick:n,disabled:s,children:"新建问卷"}),$e.jsx(T,{}),$e.jsx(V,{type:t.startsWith("/manage/list")?"default":"text",size:"large",icon:$e.jsx(i,{}),onClick:()=>e("/manage/list"),children:"我的问卷"}),$e.jsx(V,{type:t.startsWith("/manage/star")?"default":"text",size:"large",icon:$e.jsx(a,{}),onClick:()=>e("/manage/star"),children:"星标问卷"}),$e.jsx(V,{type:t.startsWith("/manage/trash")?"default":"text",size:"large",icon:$e.jsx(c,{}),onClick:()=>e("/manage/trash"),children:"回收站"})]})}),$e.jsx("div",{className:"ml-15 flex-1",children:$e.jsx(ue,{})})]})},Ht=()=>{const{waitingUserData:e}=qt();return Tt(e),$e.jsx("div",{className:"h-screen",children:e?$e.jsx("div",{className:"mt-15 text-center",children:$e.jsx(q,{})}):$e.jsx(ue,{})})},{Title:Ut}=A,Bt=()=>{const e=xe(),{run:t}=ge((async e=>{const{username:t,password:s,nickname:n}=e;await async function(e,t,s){const n={username:e,password:t,nickname:s||e};return await Ct.post("/api/user/register",n)}(t,s,n)}),{manual:!0,onSuccess(){E.success("注册成功"),e(ln)}});return $e.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[$e.jsx("div",{children:$e.jsxs(F,{children:[$e.jsx(Ut,{level:2,children:$e.jsx(o,{})}),$e.jsx(Ut,{level:2,children:"注册新用户"})]})}),$e.jsx("div",{children:$e.jsxs(R,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{t(e)},children:[$e.jsx(R.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:$e.jsx(z.Password,{})}),$e.jsx(R.Item,{label:"确认密码",name:" confirm",rules:[{required:!0,message:"请输入密码"},({getFieldValue:e})=>({validator:(t,s)=>s&&e("password")!==s?Promise.reject(new Error("两次密码不一致")):Promise.resolve()})],children:$e.jsx(z.Password,{})}),$e.jsx(R.Item,{label:"昵称",name:"nickname",children:$e.jsx(z,{})}),$e.jsx(R.Item,{wrapperCol:{offset:4,span:18},children:$e.jsxs(F,{children:[$e.jsx(V,{type:"primary",htmlType:"submit",children:"注册"}),$e.jsx(ae,{to:ln,children:"已有账户，请登录"})]})})]})})]})},Mt=()=>{const e=xe();return $e.jsx($e.Fragment,{children:$e.jsx(D,{status:"404",title:"404",subTitle:"抱歉，您访问的页面不存在",extra:$e.jsx(V,{type:"primary",onClick:()=>e(an),children:"返回首页"})})})},{confirm:Kt}=H,Wt=e=>{const t=xe(),{_id:n,title:l,isPublished:r,answerContent:i,currentAt:o,isStar:h}=e,[p,j]=s.useState(h),{loading:g,run:f}=ge((async()=>{await Ft(n,{isStar:!p})}),{manual:!0,onSuccess(){j(!p),E.success("已更新")}}),{loading:v,run:y}=ge((async()=>await async function(e){const t=`/api/question/duplicate/${e}`;return await Ct.post(t)}(n)),{manual:!0,onSuccess(e){E.success("复制成功"),t(`/question/edit/${e.id}`)}}),[b,C]=s.useState(!1),{loading:w,run:k}=ge((async()=>await Ft(n,{isDeleted:!0})),{manual:!0,onSuccess(){E.success("删除成功"),C(!0)}});return b?null:$e.jsxs("div",{className:"mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md",children:[$e.jsxs("div",{className:"flex",children:[$e.jsx("div",{className:"flex-1",children:$e.jsx(ae,{to:r?`/question/stat/${n}`:`/question/edit/${n}`,children:$e.jsxs(F,{children:[h&&$e.jsx(a,{style:{color:"red"}}),l]})})}),$e.jsx("div",{className:"flex-1 text-center font-size-3",children:$e.jsxs(F,{children:[r?$e.jsx($,{color:"processing",children:"已发布"}):$e.jsx($,{children:"未发布"}),$e.jsxs("span",{children:["答卷: ",i]}),$e.jsx("span",{children:o})]})})]}),$e.jsx(T,{className:"m-3"}),$e.jsxs("div",{className:"flex",children:[$e.jsx("div",{className:"flex-1",children:$e.jsxs(F,{children:[$e.jsx(V,{icon:$e.jsx(d,{}),type:"text",size:"small",onClick:()=>{t(`/question/edit/${n}`)},children:"编辑问卷"}),$e.jsx(V,{icon:$e.jsx(x,{}),type:"text",size:"small",onClick:()=>{t(`/question/stat/${n}`)},children:"数据统计"})]})}),$e.jsx("div",{className:"flex-1 text-center",children:$e.jsxs(F,{children:[$e.jsx(V,{type:"text",icon:$e.jsx(a,{}),color:"#999",size:"small",onClick:f,disabled:g,children:p?"取消标星":"标星"}),$e.jsx(O,{title:"确定复制该问卷?",okText:"确认",cancelText:"取消",onConfirm:y,children:$e.jsx(V,{type:"text",icon:$e.jsx(u,{}),color:"#999",size:"small",disabled:v,children:"复制"})}),$e.jsx(V,{type:"text",icon:$e.jsx(c,{}),size:"small",color:"#999",onClick:()=>{Kt({title:"确定删除该问卷?",icon:$e.jsx(m,{}),onOk:k})},disabled:w,children:"删除"})]})})]})]})},{Search:Gt}=z,Jt=()=>{const e=xe(),{pathname:t}=de(),[n,l]=s.useState(""),[r]=oe();return s.useEffect((()=>{const e=r.get(ft)||"";l(e)}),[r]),$e.jsx(Gt,{placeholder:"请输入关键字",value:n,onChange:function(e){l(e.target.value)},onSearch:function(s){e({pathname:t,search:`${ft}=${s}`})},className:"w-50"})},{Title:Yt}=A,Xt=()=>{const[e,t]=s.useState(!1),[n,l]=s.useState(1),[r,i]=s.useState([]),[a,c]=s.useState(0),o=a>r.length,[d]=oe(),x=d.get(ft)||"";s.useEffect((()=>{t(!1),l(1),i([]),c(0)}),[x]);const{run:u,loading:m}=ge((async()=>await _t({page:n,pageSize:10,keyword:x})),{manual:!0,onSuccess(e){const{list:t=[],total:s=0}=e;i(r.concat(t)),c(s),l(n+1)}}),h=s.useRef(null),{run:p}=fe((()=>{const e=h.current;if(null==e)return;const s=e.getBoundingClientRect();if(null==s)return;const{bottom:n}=s;n<=document.body.clientHeight&&(u(),t(!0))}),{wait:1e3});s.useEffect((()=>{p()}),[d]),s.useEffect((()=>(o&&window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)})),[d,o]);const j=s.useMemo((()=>!e||m?$e.jsx(q,{}):0===a?$e.jsx(U,{description:"暂无数据"}):o?$e.jsx("span",{children:"开始加载下一页"}):$e.jsx("span",{children:"没有更多了..."})),[e,m,o]);return $e.jsxs($e.Fragment,{children:[$e.jsxs("div",{className:"flex",children:[$e.jsx("div",{className:"flex-1",children:$e.jsx(Yt,{level:3,children:"我的问卷"})}),$e.jsx("div",{className:"flex-1 text-center",children:$e.jsx(Jt,{})})]}),$e.jsx("div",{className:"mb-5",children:r.length>0&&r.map((e=>{const{_id:t}=e;return $e.jsx(Wt,{...e},t)}))}),$e.jsx("div",{className:"text-center color-blue",children:$e.jsx("div",{ref:h,children:j})})]})},Qt=e=>{const{total:t}=e,[n,l]=s.useState(1),[r,i]=s.useState(10),[a]=oe();s.useEffect((()=>{const e=parseInt(a.get(vt)||"")||1;l(e);const t=parseInt(a.get(yt)||"")||10;i(t)}),[a]);const c=xe(),{pathname:o}=de();return $e.jsx(B,{current:n,pageSize:r,total:t,onChange:(e,t)=>{a.set(vt,e.toString()),a.set(yt,t.toString()),c({pathname:o,search:a.toString()})}})},{Title:Zt}=A,{confirm:es}=H,ts=()=>{ve("问卷调查");const{data:e={},loading:t,refresh:n}=Lt({isDeleted:!0}),{list:l=[],total:r=0}=e,[i,a]=s.useState([]),c=[{title:"标题",dataIndex:"title"},{title:"是否发布",dataIndex:"isPublished",render:e=>e?$e.jsx($,{color:"processing",children:"已发布"}):$e.jsx($,{children:"未发布"})},{title:"答卷",dataIndex:"answerCount"},{title:"创建时间",dataIndex:"createdAt"}],{run:o}=ge((async()=>{for await(const e of i)await Ft(e,{isDeleted:!1})}),{manual:!0,debounceWait:500,onSuccess(){E.success("恢复成功"),n(),a([])}}),{run:d}=ge((async()=>await async function(e){return await Ct.delete("/api/question",{data:{ids:e}})}(i)),{manual:!0,onSuccess(){E.success("删除成功"),n(),a([])}});return $e.jsxs($e.Fragment,{children:[$e.jsxs("div",{className:"flex",children:[$e.jsx("div",{className:"flex-1",children:$e.jsx(Zt,{level:3,children:"回收站"})}),$e.jsx("div",{className:"flex-1 text-center",children:$e.jsx(Jt,{})})]}),$e.jsxs("div",{className:"mb-5",children:[t&&$e.jsx("div",{className:"text-center",children:$e.jsx(q,{})}),!t&&0===l.length&&$e.jsx(U,{description:"暂无数据"}),l.length>0&&$e.jsxs("div",{children:[$e.jsxs(F,{className:"mb",children:[$e.jsx(V,{type:"primary",disabled:0===i.length,onClick:o,children:"恢复"}),$e.jsx(V,{danger:!0,disabled:0===i.length,onClick:()=>{es({title:"确定彻底删除该问卷?",icon:$e.jsx(m,{}),content:"删除以后不可撤回",onOk:d})},children:"彻底删除"})]}),$e.jsx(M,{rowKey:e=>e._id,dataSource:l,columns:c,pagination:!1,rowSelection:{type:"checkbox",onChange:e=>{a(e)}}})]})]}),$e.jsx("div",{className:"text-center color-blue",children:l.length>0&&$e.jsx(Qt,{total:r})})]})},{Title:ss}=A,ns=()=>{const{data:e={},loading:t}=Lt({isStar:!0}),{list:s=[],total:n=0}=e;return $e.jsxs($e.Fragment,{children:[$e.jsxs("div",{className:"flex",children:[$e.jsx("div",{className:"flex-1",children:$e.jsx(ss,{level:3,children:"星标问卷"})}),$e.jsx("div",{className:"flex-1 text-center",children:$e.jsx(Jt,{})})]}),$e.jsxs("div",{className:"mb-5",children:[t&&$e.jsx("div",{className:"text-center",children:$e.jsx(q,{})}),!t&&0===s.length&&$e.jsx(U,{description:"暂无数据"}),s.length>0&&s.map((e=>{const{_id:t}=e;return $e.jsx(Wt,{...e},t)}))]}),$e.jsx("div",{className:"text-center color-blue",children:s.length>0&&$e.jsx(Qt,{total:n})})]})},ls=()=>{const e=ee(),{selectedId:t,componentList:s,selectedComponent:n,copiedComponent:l}=It(),r=s.findIndex((e=>e.fe_id===t)),i=r<=0,a=r+1>=s.length,o=n?.isLocked?"primary":"default",d=[{title:"删除",shape:"circle",icon:$e.jsx(c,{}),onClick:()=>{e(it())}},{title:"隐藏",shape:"circle",icon:$e.jsx(h,{}),onClick:()=>{e(at({fe_id:t,isHidden:!0}))}},{title:"锁定",type:o,shape:"circle",icon:$e.jsx(p,{}),onClick:()=>{e(ct({fe_id:t}))}},{title:"复制",shape:"circle",icon:$e.jsx(u,{}),onClick:()=>{e(ot())}},{title:"粘贴",shape:"circle",icon:$e.jsx(j,{}),onClick:()=>{e(dt())},disabled:null==l},{title:"上移",shape:"circle",icon:$e.jsx(g,{}),onClick:()=>{i||e(ht({oldIndex:r,newIndex:r-1}))},disabled:i},{title:"下移",shape:"circle",icon:$e.jsx(f,{}),onClick:()=>{a||e(ht({oldIndex:r,newIndex:r+1}))},disabled:a},{title:"撤销",shape:"circle",icon:$e.jsx(v,{}),onClick:()=>{e(be.undo())}},{title:"重做",shape:"circle",icon:$e.jsx(y,{}),onClick:()=>{e(be.redo())}}];return $e.jsx(F,{children:d.map((e=>{const{title:t,type:s,shape:n,icon:l,onClick:r,disabled:i}=e;return $e.jsx(K,{title:t,children:$e.jsx(V,{type:s,shape:n,icon:l,onClick:r,disabled:i})},t)}))})},rs=()=>{const{title:e}=Nt(),t=ee(),[n,l]=s.useState(!1),r=e=>{const s=e.target.value.trim();s&&t(Xe(s))};return n?$e.jsx(z,{value:e,onChange:r,onPressEnter:()=>l(!1),onBlur:()=>l(!1)}):$e.jsxs(F,{children:[$e.jsx("div",{children:e}),$e.jsx(V,{icon:$e.jsx(d,{}),type:"text",onClick:()=>l(!0)})]})},is=()=>{const{id:e}=ce(),{componentList:t=[]}=It(),s=Nt(),{loading:n,run:l}=ge((async()=>{e&&await Ft(e,{...s,componentList:t})}),{manual:!0});return je(["ctrl.s","meta.s"],(e=>{e.preventDefault(),n||l()})),ye((()=>{l()}),[t,s],{wait:1e3}),$e.jsx(V,{onClick:l,disabled:n,icon:n?$e.jsx(b,{}):null,children:"保存"})},as=()=>{const e=xe(),{id:t}=ce(),{componentList:s=[]}=It(),n=Nt(),{loading:l,run:r}=ge((async()=>{t&&await Ft(t,{...n,componentList:s,isPublished:!0})}),{manual:!0,onSuccess(){E.success("发布成功"),e("/question/stat/"+t)}});return $e.jsx(V,{type:"primary",onClick:r,disabled:l,icon:l?$e.jsx(b,{}):null,children:"发布"})},cs=()=>$e.jsxs(F,{children:[$e.jsx(is,{}),$e.jsx(as,{})]}),os=()=>{const e=xe();return $e.jsxs("div",{className:"mx-6 flex border-b border-green-300 bg-white py-4",children:[$e.jsx("div",{className:"flex-1",children:$e.jsxs(F,{children:[$e.jsx(V,{type:"link",icon:$e.jsx(C,{}),onClick:()=>e(-1),children:"返回"}),$e.jsx("div",{className:"mb-0 text-[18px] leading-none",children:$e.jsx(rs,{})})]})}),$e.jsx("div",{className:"flex-1 text-center leading-[2]",children:$e.jsx(ls,{})}),$e.jsx("div",{className:"mr-3 flex-1 text-right leading-[2]",children:$e.jsx(cs,{})})]})},ds={title:"多选标题",isVertical:!1,list:[{value:"item1",text:"选项1",checked:!1},{value:"item2",text:"选项2",checked:!1},{value:"item3",text:"选项3",checked:!1}]},{Paragraph:xs}=A,us={title:"多选",type:"questionCheckbox",Component:e=>{const{title:t,isVertical:s,list:n=[]}={...ds,...e};return $e.jsxs("div",{children:[$e.jsx(xs,{strong:!0,children:t}),$e.jsx(F,{direction:s?"vertical":"horizontal",children:n.map((e=>{const{value:t,text:s,checked:n}=e;return $e.jsx(W,{value:t,checked:n,children:s},t)}))})]})},PropComponent:e=>{const{title:t,isVertical:s,list:n=[],onChange:l,disabled:i}=e,[a]=R.useForm();return $e.jsxs(R,{layout:"vertical",form:a,initialValues:{title:t,isVertical:s,list:n},disabled:i,onValuesChange:()=>{if(null==l)return;const e=a.getFieldsValue();e.list&&(e.list=e.list.filter((e=>!(null==e.text))));const{list:t=[]}=e;t.forEach((e=>{e.value||(e.value=Qe(5))})),l(e)},children:[$e.jsx(R.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"选项",children:$e.jsx(R.List,{name:"list",children:(e,{add:t,remove:s})=>$e.jsxs($e.Fragment,{children:[e.map((({key:e,name:t},n)=>$e.jsxs(F,{align:"baseline",children:[$e.jsx(R.Item,{name:[t,"checked"],valuePropName:"checked",children:$e.jsx(W,{})}),$e.jsx(R.Item,{name:[t,"text"],rules:[{required:!0,message:"请输入选项文字"},{validator:(e,t)=>{const{list:s=[]}=a.getFieldsValue();let n=0;return s.forEach((e=>{e.text===t&&n++})),1===n?Promise.resolve():Promise.reject(new Error("和其他选项重复了"))}}],children:$e.jsx(z,{placeholder:"输入选项文字..."})}),n>0&&$e.jsx(w,{onClick:()=>s(t)})]},e))),$e.jsx(R.Item,{children:$e.jsx(V,{type:"link",onClick:()=>t({text:"",value:"",checked:!1}),icon:$e.jsx(r,{}),block:!0,children:"添加选项"})})]})})}),$e.jsx(R.Item,{name:"isVertical",valuePropName:"checked",children:$e.jsx(W,{children:"竖向排列"})})]})},StatComponent:({stat:e})=>$e.jsx("div",{style:{width:"400px",height:"300px"},children:$e.jsx(Ce,{width:"100%",height:"100%",children:$e.jsxs(we,{width:400,height:300,data:e,margin:{top:5,right:30,left:0,bottom:5},children:[$e.jsx(ke,{strokeDasharray:"3 3"}),$e.jsx(Ie,{dataKey:"name"}),$e.jsx(Ne,{}),$e.jsx(Se,{}),$e.jsx(Pe,{dataKey:"count",fill:"#8884d8"})]})})}),defaultProps:ds},ms={title:"问卷标题",desc:"问卷描述"},{Title:hs,Paragraph:ps}=A,{TextArea:js}=z,gs={title:"问卷信息",type:"questionInfo",Component:e=>{const{title:t,desc:s=""}={...ms,...e},n=s.split("\n");return $e.jsxs("div",{style:{textAlign:"center"},children:[$e.jsx(hs,{style:{fontSize:"24px"},children:t}),$e.jsx(ps,{children:n.map(((e,t)=>$e.jsxs("span",{children:[t>0&&$e.jsx("br",{}),e]},t)))})]})},PropComponent:e=>{const{title:t,desc:n,onChange:l,disabled:r}=e,[i]=R.useForm();return s.useEffect((()=>{i.setFieldsValue({title:t,desc:n})}),[t,n]),$e.jsxs(R,{layout:"vertical",initialValues:{title:t,desc:n},onValuesChange:function(){l&&l(i.getFieldsValue())},disabled:r,form:i,children:[$e.jsx(R.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入问卷标题"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"描述",name:"desc",children:$e.jsx(js,{})})]})},defaultProps:ms},fs={title:"输入框标题",placeholder:"请输入..."},{Paragraph:vs}=A,ys={title:"输入框",type:"questionInput",Component:e=>{const{title:t,placeholder:s}={...fs,...e};return $e.jsxs("div",{children:[$e.jsx(vs,{strong:!0,children:t}),$e.jsx("div",{children:$e.jsx(z,{placeholder:s})})]})},PropComponent:e=>{const{title:t,placeholder:n,onChange:l,disabled:r}=e,[i]=R.useForm();return s.useEffect((()=>{i.setFieldsValue({title:t,placeholder:n})}),[t,n]),$e.jsxs(R,{layout:"vertical",initialValues:{title:t,placeholder:n},form:i,onValuesChange:function(){l&&l(i.getFieldsValue())},disabled:r,children:[$e.jsx(R.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"Placeholder",name:"placeholder",children:$e.jsx(z,{})})]})},defaultProps:fs},bs={text:"一行段落",isCenter:!1},{Paragraph:Cs}=A,{TextArea:ws}=z,ks={title:"段落",type:"questionParagraph",Component:e=>{const{text:t="",isCenter:s=!1}={...bs,...e},n=t.split("\n");return $e.jsx(Cs,{style:{textAlign:s?"center":"start",marginBottom:"0"},children:n.map(((e,t)=>$e.jsxs("span",{children:[t>0&&$e.jsx("br",{}),e]},t)))})},PropComponent:e=>{const{text:t,isCenter:n,onChange:l,disabled:r}=e,[i]=R.useForm();return s.useEffect((()=>{i.setFieldsValue({text:t,isCenter:n})}),[t,n]),$e.jsxs(R,{layout:"vertical",initialValues:{text:t,isCenter:n},onValuesChange:function(){l&&l(i.getFieldsValue())},disabled:r,form:i,children:[$e.jsx(R.Item,{label:"段落内容",name:"text",rules:[{required:!0,message:"请输入段落内容"}],children:$e.jsx(ws,{})}),$e.jsx(R.Item,{name:"isCenter",valuePropName:"checked",children:$e.jsx(W,{children:"居中显示"})})]})},defaultProps:bs},Is={title:"单选标题",isVertical:!1,options:[{value:"item1",text:"选项1"},{value:"item2",text:"选项2"},{value:"item3",text:"选项3"}],value:""},{Paragraph:Ns}=A,Ss={title:"单选",type:"questionRadio",Component:e=>{const{title:t,options:s=[],value:n,isVertical:l}={...Is,...e};return $e.jsxs("div",{children:[$e.jsx(Ns,{strong:!0,children:t}),$e.jsx(G.Group,{value:n,children:$e.jsx(F,{direction:l?"vertical":"horizontal",children:s.map((e=>{const{value:t,text:s}=e;return $e.jsx(G,{value:t,children:s},t)}))})})]})},PropComponent:e=>{const{title:t,isVertical:n,value:l,options:i=[],onChange:a,disabled:c}=e,[o]=R.useForm();return s.useEffect((()=>{o.setFieldsValue({title:t,isVertical:n,value:l,options:i})}),[t,n,l,i]),$e.jsxs(R,{layout:"vertical",initialValues:{title:t,isVertical:n,value:l,options:i},onValuesChange:function(){if(null==a)return;const e=o.getFieldsValue();e.options&&(e.options=e.options.filter((e=>!(null==e.text))));const{options:t=[]}=e;t.forEach((e=>{e.value||(e.value=Qe(5))})),a(e)},disabled:c,form:o,children:[$e.jsx(R.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"选项",children:$e.jsx(R.List,{name:"options",children:(e,{add:t,remove:s})=>$e.jsxs($e.Fragment,{children:[e.map((({key:e,name:t},n)=>$e.jsxs(F,{align:"baseline",children:[$e.jsx(R.Item,{name:[t,"text"],rules:[{required:!0,message:"请输入选项文字"},{validator:(e,t)=>{const{options:s=[]}=o.getFieldsValue();let n=0;return s.forEach((e=>{e.text===t&&n++})),1===n?Promise.resolve():Promise.reject(new Error("和其他选项重复了"))}}],children:$e.jsx(z,{placeholder:"输入选项文字..."})}),n>1&&$e.jsx(w,{onClick:()=>s(t)})]},e))),$e.jsx(R.Item,{children:$e.jsx(V,{type:"link",onClick:()=>t({text:"",value:""}),icon:$e.jsx(r,{}),block:!0,children:"添加选项"})})]})})}),$e.jsx(R.Item,{label:"默认选中",name:"value",children:$e.jsx(J,{value:l,options:i.map((({text:e,value:t})=>({value:t,label:e||""})))})}),$e.jsx(R.Item,{name:"isVertical",valuePropName:"checked",children:$e.jsx(W,{children:"竖向排列"})})]})},defaultProps:Is,StatComponent:({stat:e=[]})=>{const t=s.useMemo((()=>{let t=0;return e.forEach((e=>t+=e.count)),t}),[e]);return $e.jsx("div",{style:{width:"300px",height:"400px"},children:$e.jsx(Ce,{width:"100%",height:"100%",children:$e.jsxs(_e,{children:[$e.jsx(Fe,{dataKey:"count",data:e,cx:"50%",cy:"50%",outerRadius:50,fill:"#8884d8",label:e=>`${e.name}: ${function(e){return(100*e).toFixed(2)}(e.count/t)}%`,children:e.map(((e,t)=>$e.jsx(Ee,{fill:bt[t]},t)))}),$e.jsx(Se,{})]})})})}},Ps={title:"输入框标题",placeholder:"请输入..."},{Paragraph:_s}=A,{TextArea:Fs}=z,Es={title:"多行输入",type:"questionTextarea",Component:e=>{const{title:t,placeholder:s}={...Ps,...e};return $e.jsxs("div",{children:[$e.jsx(_s,{strong:!0,children:t}),$e.jsx("div",{children:$e.jsx(Fs,{placeholder:s})})]})},PropComponent:e=>{const{title:t,placeholder:n,onChange:l,disabled:r}=e,[i]=R.useForm();return s.useEffect((()=>{i.setFieldsValue({title:t,placeholder:n})}),[t,n]),$e.jsxs(R,{layout:"vertical",initialValues:{title:t,placeholder:n},form:i,onValuesChange:function(){l&&l(i.getFieldsValue())},disabled:r,children:[$e.jsx(R.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"Placeholder",name:"placeholder",children:$e.jsx(z,{})})]})},defaultProps:Ps},Vs={text:"一级标题",level:1,isCenter:!1},{Title:Ls}=A,qs={title:"标题",type:"questionTitle",Component:e=>{const{text:t="",level:s=1,isCenter:n=!1}={...Vs,...e};return $e.jsx(Ls,{level:s,style:{textAlign:n?"center":"start",marginBottom:"0",fontSize:(l=s,1===l?"24px":2===l?"20px":"16px")},children:t});var l},PropComponent:e=>{const{text:t,level:n,isCenter:l,onChange:r,disabled:i}=e,[a]=R.useForm();return s.useEffect((()=>{a.setFieldsValue({text:t,level:n,isCenter:l})}),[t,n,l]),$e.jsxs(R,{form:a,layout:"vertical",onValuesChange:function(){r&&r(a.getFieldsValue())},initialValues:{text:t,level:n,isCenter:l},disabled:i,children:[$e.jsx(R.Item,{label:"标题内容",name:"text",rules:[{required:!0,message:"请输入标题内容"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"层级",name:"level",children:$e.jsx(J,{options:[{value:1,text:1},{value:2,text:2},{value:3,text:3}]})}),$e.jsx(R.Item,{name:"isCenter",valuePropName:"checked",children:$e.jsx(W,{children:"居中显示"})})]})},defaultProps:Vs},Ts=[{groupId:"textGroup",groupName:"文本显示",components:[gs,ks,qs]},{groupId:"inputGroup",groupName:"用户输入",components:[ys,Es]},{groupId:"chooseGroup",groupName:"用户选择",components:[us,Ss]}],Rs=[us,gs,ys,ks,Ss,Es,qs];function zs(e){return Rs.find((t=>t.type===e))}const{Title:As}=A,Ds=()=>$e.jsx($e.Fragment,{children:Ts.map(((e,t)=>{const{groupId:n,groupName:l,components:r}=e;return $e.jsxs("div",{children:[$e.jsx(As,{level:3,style:{fontSize:"16px",marginTop:t>0?"20px":"0"},children:l}),$e.jsx("div",{children:r.map((e=>(e=>{const{title:t,type:n,Component:l,defaultProps:r}=e,i=ee(),a=s.useCallback((()=>{i(lt({fe_id:Qe(),title:t,type:n,props:r}))}),[]);return $e.jsx("div",{onClick:a,className:"mb-3 cursor-pointer border border-light rounded border-solid bg-light p-3 hover:border-[#d9d9d9]",children:$e.jsx("div",{className:"pointer-events-none",children:$e.jsx(l,{})})},n)})(e)))})]},n)}))}),$s=()=>{const{componentList:e,selectedId:t}=It(),n=ee(),[l,r]=s.useState(""),i=e=>{const s=e.target.value.trim();s&&t&&n(mt({fe_id:t,title:s}))};return $e.jsx($e.Fragment,{children:e.map((s=>{const{fe_id:a,title:c,isHidden:o,isLocked:d}=s,x=k({"flex-auto line-height-loose":!0,"color-blue":a===t}),u="opacity-20",m=k({[u]:o}),j=k({[u]:o});return $e.jsxs("div",{className:"flex border-b border-b-green-200 border-b-solid py-2",children:[$e.jsxs("div",{className:x,onClick:()=>(s=>{const l=e.find((e=>e.fe_id===s));return l&&l.isHidden?E.info("不能选中隐藏的组件!"):s!==t?(n(nt(s)),void r("")):void r(s)})(a),children:[a===l&&$e.jsx(z,{value:c,onChange:i,onPressEnter:()=>r(""),onBlur:()=>r("")}),a!==l&&c]}),$e.jsx("div",{className:"w-12 text-end",children:$e.jsxs(F,{children:[$e.jsx(V,{size:"small",shape:"circle",className:m,icon:$e.jsx(h,{}),type:o?"primary":"text",onClick:()=>((e,t)=>{n(at({fe_id:e,isHidden:t}))})(a,!o)}),$e.jsx(V,{size:"small",shape:"circle",className:j,icon:$e.jsx(p,{}),type:d?"primary":"text",onClick:()=>(e=>{n(ct({fe_id:e}))})(a)})]})})]},a)}))})},Os=()=>{const e=[{key:"componentLib",label:$e.jsxs("span",{children:[$e.jsx(I,{}),"组件库"]}),children:$e.jsx(Ds,{})},{key:"layers",label:$e.jsxs("span",{children:[$e.jsx(i,{}),"图层"]}),children:$e.jsx($s,{})}];return $e.jsx($e.Fragment,{children:$e.jsx(Y,{items:e,defaultActiveKey:"componentLib"})})},Hs=({loading:e})=>{const{componentList:t,selectedIs:s}=It(),n=ee();if(function(){const e=ee();je(["backspace","delete"],(()=>{kt()&&e(it())})),je(["ctrl.c","meta.c"],(()=>{kt()&&e(ot())})),je(["ctrl.v","meta.v"],(()=>{kt()&&e(dt())})),je("uparrow",(()=>{kt()&&e(xt())})),je("downarrow",(()=>{kt()&&e(ut())})),je(["ctrl.z","meta.z"],(()=>{kt()&&e(be.undo())}),{exactMatch:!0}),je(["ctrl.shift.z","meta.shift.z"],(()=>{kt()&&e(be.redo())}))}(),e)return $e.jsx("div",{className:"mt-6 text-center",children:$e.jsx(q,{})});const l=e=>{const{type:t,props:s}=e,n=zs(t);if(null==n)return null;const{Component:l}=n;return $e.jsx(l,{...s})};return $e.jsx("div",{className:"min-h-[100%] overflow-hidden bg-white",children:t.map((e=>{const{fe_id:t}=e,s=k({"m-3 border border-white rounded-sm border-solid p-3 hover:border-gray-200":!0});return $e.jsx("div",{className:s,onClick:e=>{return s=t,e.stopPropagation(),void n(nt(s));var s},children:$e.jsx("div",{className:"pointer-events-none",children:l(e)})},t)}))})},Us=()=>$e.jsx("div",{className:"text-center",children:"未选中组件"}),Bs=()=>{const e=ee(),{selectedComponent:t}=It();if(null==t)return $e.jsx(Us,{});const{type:s,props:n}=t,l=zs(s);if(null==l)return $e.jsx(Us,{});const{PropComponent:r}=l;return $e.jsx(r,{...n,onChange:s=>{const{fe_id:n}=t;e(rt({fe_id:n,newProps:s}))}})},Ms=()=>{const e=Nt(),[t]=R.useForm(),s=ee();return $e.jsxs(R,{layout:"vertical",initialValues:e,onValuesChange:()=>{s(Ye(t.getFieldsValue()))},form:t,children:[$e.jsx(R.Item,{name:"title",label:"问卷标题",rules:[{required:!0,message:"请输入标题"}],children:$e.jsx(z,{placeholder:"请输入标题"})}),$e.jsx(R.Item,{name:"desc",label:"问卷描述",children:$e.jsx(X,{placeholder:"问卷描述信息"})}),$e.jsx(R.Item,{name:"css",label:"样式代码",children:$e.jsx(X,{placeholder:"请输入 CSS 样式代码"})}),$e.jsx(R.Item,{name:"js",label:"脚本代码",children:$e.jsx(X,{placeholder:"请输入 JS 脚本代码"})})]})},Ks=()=>{const[e,t]=s.useState("prop"),{selectedId:n}=It();s.useEffect((()=>{t(n?"prop":"setting")}),[n]);const l=[{key:"prop",label:$e.jsxs("span",{children:[$e.jsx(N,{}),"属性"]}),children:$e.jsx(Bs,{})},{key:"setting",label:$e.jsxs("span",{children:[$e.jsx(S,{}),"页面设置"]}),children:$e.jsx(Ms,{})}];return $e.jsx(Y,{activeKey:e,items:l})},Ws=()=>{const e=ee(),{loading:t}=Vt(),{title:s}=Nt();return ve(s?`问卷编辑 - ${s}`:"问卷调查"),$e.jsxs("div",{className:"h-screen flex flex-col bg-[#f0f2f5]",children:[$e.jsx(os,{}),$e.jsx("div",{className:"flex-1 py-3",children:$e.jsxs("div",{className:"mx-6 h-100% flex",children:[$e.jsx("div",{className:"w-75 bg-white px-3",children:$e.jsx(Os,{})}),$e.jsx("div",{className:"relative flex-1 overflow-hidden",onClick:()=>{e(nt(""))},children:$e.jsx("div",{className:"absolute left-1/2 top-1/2 h-178 w-150 transform items-center justify-center overflow-auto shadow-2xl -translate-x-1/2 -translate-y-1/2",children:$e.jsx(Hs,{loading:t})})}),$e.jsx("div",{className:"w-75 bg-white px-3",children:$e.jsx(Ks,{})})]})})]})},Gs=()=>{const{loading:e,questionData:t}=Vt();return $e.jsxs("div",{children:[$e.jsx("p",{children:"Stat"}),e?$e.jsx("p",{children:"loading"}):$e.jsx("p",{children:JSON.stringify(t)})]})},{Title:Js,Paragraph:Ys}=A,Xs=()=>{const e=xe();return $e.jsx("div",{className:"h-150 flex flex-col items-center justify-center",children:$e.jsxs("div",{className:"text-center",children:[$e.jsx(Js,{children:"问卷调查 | 在线投票"}),$e.jsx(Ys,{children:"已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份"}),$e.jsx("div",{className:"h-15 font-24",children:$e.jsx(V,{className:"b-rounded-4",type:"primary",onClick:()=>e(an),children:"开始使用"})})]})})},{Title:Qs}=A,Zs="USERNAME",en="PASSWORD",tn=()=>{const e=xe(),t=ee(),[n]=R.useForm();s.useEffect((()=>{const{username:e,password:t}={username:localStorage.getItem(Zs),password:localStorage.getItem(en)};n.setFieldsValue({username:e,password:t})}),[]);const{run:l}=ge((async(e,s)=>{const n=await async function(e,t){const s={username:e,password:t};return await Ct.post("/api/user/login",s)}(e,s);return n.token&&t(Ke({username:e,nickname:e})),n}),{manual:!0,onSuccess(t){const{token:s=""}=t;!function(e){localStorage.setItem(wt,e)}(s),E.success("登录成功"),e(an)}});return $e.jsxs("div",{className:"flex flex-col items-center justify-center bg-white",children:[$e.jsx("div",{children:$e.jsxs(F,{children:[$e.jsx(Qs,{level:2,children:$e.jsx(o,{})}),$e.jsx(Qs,{level:2,children:"登录"})]})}),$e.jsx("div",{children:$e.jsxs(R,{labelCol:{span:6},wrapperCol:{span:16},onFinish:e=>{const{username:t,password:s,remember:n}=e||{};l(t,s),n?function(e,t){localStorage.setItem(Zs,e),localStorage.setItem(en,t)}(t,s):(localStorage.removeItem(Zs),localStorage.removeItem(en))},children:[$e.jsx(R.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"},{type:"string",min:5,max:20,message:"字符长度在 5-20 之间"},{pattern:/^\w+$/,message:"只能所字符下划线"}],children:$e.jsx(z,{})}),$e.jsx(R.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],children:$e.jsx(z.Password,{})}),$e.jsx(R.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:0,span:10},children:$e.jsx(W,{children:"记住我"})}),$e.jsx(R.Item,{wrapperCol:{offset:4,span:18},children:$e.jsxs(F,{children:[$e.jsx(V,{type:"primary",htmlType:"submit",children:"登录"}),$e.jsx(ae,{to:rn,children:"注册新用户"})]})})]})})]})},sn=me([{path:"/",element:$e.jsx($t,{}),children:[{path:"/",element:$e.jsx(Xs,{})},{path:"login",element:$e.jsx(tn,{})},{path:"register",element:$e.jsx(Bt,{})},{path:"manage",element:$e.jsx(Ot,{}),children:[{path:"list",element:$e.jsx(Xt,{})},{path:"star",element:$e.jsx(ns,{})},{path:"trash",element:$e.jsx(ts,{})}]},{path:"*",element:$e.jsx(Mt,{})}]},{path:"question",element:$e.jsx(Ht,{}),children:[{path:"edit/:id",element:$e.jsx(Ws,{})},{path:"stat/:id",element:$e.jsx(Gs,{})}]}],{basename:"/survey-sage"}),nn="/",ln="/login",rn="/register",an="/manage/list",cn=()=>$e.jsx(Q,{theme:{algorithm:Z.defaultAlgorithm},children:$e.jsx(he,{router:sn})});Oe.createRoot(document.getElementById("root")).render($e.jsx(P.StrictMode,{children:$e.jsx(se,{store:jt,children:$e.jsx(cn,{})})}))}}}));
