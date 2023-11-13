import{u as e,a as t}from"./react-redux-f2c040a7.js";import{r as s,av as l,U as n}from"./@ant-design/icons-8d84517b.js";import{l as i,i as r,o as a,j as o,n as c,q as d}from"./index-93471900.js";import{F as u}from"./ahooks-4a9cec88.js";import{d as x}from"./react-router-dom-68488153.js";import{S as h,C as m,T as p,F as j,I as f,B as g,j as v,k as C}from"./antd-41055c6a.js";import{R as b,B as V,C as I,X as P,Y as y,T as F,a as k,P as q,b as E,c as w}from"./recharts-62b39eab.js";function T(){const t=e((e=>e.components.present)),{componentList:s=[],selectedId:l,copiedComponent:n}=t,i=s.find((e=>e.fe_id===l));return{componentList:s,selectedId:l,selectedComponent:i,copiedComponent:n}}function N(){return e((e=>e.pageInfo))}function A(){const{id:e=""}=x(),l=t(),{data:n,loading:o,error:c,run:d}=u((async e=>{if(!e)throw new Error("缺少问卷 id");return await a(e)}),{manual:!0});return s.useEffect((()=>{if(!n)return;const{title:e="",desc:t="",js:s="",css:a="",componentList:o=[]}=n;let c="";o.length>0&&(c=o[0].fe_id),l(i({componentList:o,selectedId:c,copiedComponent:null})),l(r({title:e,desc:t,js:s,css:a}))}),[n]),s.useEffect((()=>{d(e)}),[e]),{loading:o,error:c}}const L={title:"多选标题",isVertical:!1,list:[{value:"item1",text:"选项1",checked:!1},{value:"item2",text:"选项2",checked:!1},{value:"item3",text:"选项3",checked:!1}]},{Paragraph:S}=p,z={title:"多选",type:"questionCheckbox",Component:e=>{const{title:t,isVertical:s,list:l=[]}={...L,...e};return o.jsxs("div",{children:[o.jsx(S,{strong:!0,children:t}),o.jsx(h,{direction:s?"vertical":"horizontal",children:l.map((e=>{const{value:t,text:s,checked:l}=e;return o.jsx(m,{value:t,checked:l,children:s},t)}))})]})},PropComponent:e=>{const{title:t,isVertical:s,list:i=[],onChange:r,disabled:a}=e,[d]=j.useForm();return o.jsxs(j,{layout:"vertical",form:d,initialValues:{title:t,isVertical:s,list:i},disabled:a,onValuesChange:()=>{if(null==r)return;const e=d.getFieldsValue();e.list&&(e.list=e.list.filter((e=>!(null==e.text))));const{list:t=[]}=e;t.forEach((e=>{e.value||(e.value=c(5))})),r(e)},children:[o.jsx(j.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"选项",children:o.jsx(j.List,{name:"list",children:(e,{add:t,remove:s})=>o.jsxs(o.Fragment,{children:[e.map((({key:e,name:t},n)=>o.jsxs(h,{align:"baseline",children:[o.jsx(j.Item,{name:[t,"checked"],valuePropName:"checked",children:o.jsx(m,{})}),o.jsx(j.Item,{name:[t,"text"],rules:[{required:!0,message:"请输入选项文字"},{validator:(e,t)=>{const{list:s=[]}=d.getFieldsValue();let l=0;return s.forEach((e=>{e.text===t&&l++})),1===l?Promise.resolve():Promise.reject(new Error("和其他选项重复了"))}}],children:o.jsx(f,{placeholder:"输入选项文字..."})}),n>0&&o.jsx(l,{onClick:()=>s(t)})]},e))),o.jsx(j.Item,{children:o.jsx(g,{type:"link",onClick:()=>t({text:"",value:"",checked:!1}),icon:o.jsx(n,{}),block:!0,children:"添加选项"})})]})})}),o.jsx(j.Item,{name:"isVertical",valuePropName:"checked",children:o.jsx(m,{children:"竖向排列"})})]})},StatComponent:({stat:e})=>o.jsx("div",{style:{width:"300px",height:"300px"},children:o.jsx(b,{width:"100%",height:"100%",children:o.jsxs(V,{width:400,height:300,data:e,margin:{top:5,right:30,left:0,bottom:5},children:[o.jsx(I,{strokeDasharray:"3 3"}),o.jsx(P,{dataKey:"name"}),o.jsx(y,{}),o.jsx(F,{}),o.jsx(k,{dataKey:"count",fill:"#8884d8"})]})})}),defaultProps:L},B={title:"问卷标题",desc:"问卷描述"},{Title:G,Paragraph:K}=p,{TextArea:R}=f,_={title:"问卷信息",type:"questionInfo",Component:e=>{const{title:t,desc:s=""}={...B,...e},l=s.split("\n");return o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(G,{style:{fontSize:"24px"},children:t}),o.jsx(K,{children:l.map(((e,t)=>o.jsxs("span",{children:[t>0&&o.jsx("br",{}),e]},t)))})]})},PropComponent:e=>{const{title:t,desc:l,onChange:n,disabled:i}=e,[r]=j.useForm();return s.useEffect((()=>{r.setFieldsValue({title:t,desc:l})}),[t,l]),o.jsxs(j,{layout:"vertical",initialValues:{title:t,desc:l},onValuesChange:function(){n&&n(r.getFieldsValue())},disabled:i,form:r,children:[o.jsx(j.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入问卷标题"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"描述",name:"desc",children:o.jsx(R,{})})]})},defaultProps:B},D={title:"输入框标题",placeholder:"请输入..."},{Paragraph:M}=p,U={title:"输入框",type:"questionInput",Component:e=>{const{title:t,placeholder:s}={...D,...e};return o.jsxs("div",{children:[o.jsx(M,{strong:!0,children:t}),o.jsx("div",{children:o.jsx(f,{placeholder:s})})]})},PropComponent:e=>{const{title:t,placeholder:l,onChange:n,disabled:i}=e,[r]=j.useForm();return s.useEffect((()=>{r.setFieldsValue({title:t,placeholder:l})}),[t,l]),o.jsxs(j,{layout:"vertical",initialValues:{title:t,placeholder:l},form:r,onValuesChange:function(){n&&n(r.getFieldsValue())},disabled:i,children:[o.jsx(j.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"Placeholder",name:"placeholder",children:o.jsx(f,{})})]})},defaultProps:D},X={text:"一行段落",isCenter:!1},{Paragraph:Y}=p,{TextArea:H}=f,J={title:"段落",type:"questionParagraph",Component:e=>{const{text:t="",isCenter:s=!1}={...X,...e},l=t.split("\n");return o.jsx(Y,{style:{textAlign:s?"center":"start",marginBottom:"0"},children:l.map(((e,t)=>o.jsxs("span",{children:[t>0&&o.jsx("br",{}),e]},t)))})},PropComponent:e=>{const{text:t,isCenter:l,onChange:n,disabled:i}=e,[r]=j.useForm();return s.useEffect((()=>{r.setFieldsValue({text:t,isCenter:l})}),[t,l]),o.jsxs(j,{layout:"vertical",initialValues:{text:t,isCenter:l},onValuesChange:function(){n&&n(r.getFieldsValue())},disabled:i,form:r,children:[o.jsx(j.Item,{label:"段落内容",name:"text",rules:[{required:!0,message:"请输入段落内容"}],children:o.jsx(H,{})}),o.jsx(j.Item,{name:"isCenter",valuePropName:"checked",children:o.jsx(m,{children:"居中显示"})})]})},defaultProps:X},O={title:"单选标题",isVertical:!1,options:[{value:"item1",text:"选项1"},{value:"item2",text:"选项2"},{value:"item3",text:"选项3"}],value:""},{Paragraph:Q}=p;const W={title:"单选",type:"questionRadio",Component:e=>{const{title:t,options:s=[],value:l,isVertical:n}={...O,...e};return o.jsxs("div",{children:[o.jsx(Q,{strong:!0,children:t}),o.jsx(v.Group,{value:l,children:o.jsx(h,{direction:n?"vertical":"horizontal",children:s.map((e=>{const{value:t,text:s}=e;return o.jsx(v,{value:t,children:s},t)}))})})]})},PropComponent:e=>{const{title:t,isVertical:i,value:r,options:a=[],onChange:d,disabled:u}=e,[x]=j.useForm();return s.useEffect((()=>{x.setFieldsValue({title:t,isVertical:i,value:r,options:a})}),[t,i,r,a]),o.jsxs(j,{layout:"vertical",initialValues:{title:t,isVertical:i,value:r,options:a},onValuesChange:function(){if(null==d)return;const e=x.getFieldsValue();e.options&&(e.options=e.options.filter((e=>!(null==e.text))));const{options:t=[]}=e;t.forEach((e=>{e.value||(e.value=c(5))})),d(e)},disabled:u,form:x,children:[o.jsx(j.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"选项",children:o.jsx(j.List,{name:"options",children:(e,{add:t,remove:s})=>o.jsxs(o.Fragment,{children:[e.map((({key:e,name:t},n)=>o.jsxs(h,{align:"baseline",children:[o.jsx(j.Item,{name:[t,"text"],rules:[{required:!0,message:"请输入选项文字"},{validator:(e,t)=>{const{options:s=[]}=x.getFieldsValue();let l=0;return s.forEach((e=>{e.text===t&&l++})),1===l?Promise.resolve():Promise.reject(new Error("和其他选项重复了"))}}],children:o.jsx(f,{placeholder:"输入选项文字..."})}),n>1&&o.jsx(l,{onClick:()=>s(t)})]},e))),o.jsx(j.Item,{children:o.jsx(g,{type:"link",onClick:()=>t({text:"",value:""}),icon:o.jsx(n,{}),block:!0,children:"添加选项"})})]})})}),o.jsx(j.Item,{label:"默认选中",name:"value",children:o.jsx(C,{value:r,options:a.map((({text:e,value:t})=>({value:t,label:e||""})))})}),o.jsx(j.Item,{name:"isVertical",valuePropName:"checked",children:o.jsx(m,{children:"竖向排列"})})]})},defaultProps:O,StatComponent:({stat:e=[]})=>{const t=s.useMemo((()=>{let t=0;return e.forEach((e=>t+=e.count)),t}),[e]);return o.jsx("div",{style:{width:"300px",height:"400px"},children:o.jsx(b,{width:"100%",height:"100%",children:o.jsxs(q,{children:[o.jsx(E,{dataKey:"count",data:e,cx:"40%",cy:"40%",outerRadius:50,fill:"#8884d8",label:e=>"".concat(e.name,": ").concat((100*(e.count/t)).toFixed(2),"%"),children:e.map(((e,t)=>o.jsx(w,{fill:d[t]},t)))}),o.jsx(F,{})]})})})}},Z={title:"输入框标题",placeholder:"请输入..."},{Paragraph:$}=p,{TextArea:ee}=f,te={title:"多行输入",type:"questionTextarea",Component:e=>{const{title:t,placeholder:s}={...Z,...e};return o.jsxs("div",{children:[o.jsx($,{strong:!0,children:t}),o.jsx("div",{children:o.jsx(ee,{placeholder:s})})]})},PropComponent:e=>{const{title:t,placeholder:l,onChange:n,disabled:i}=e,[r]=j.useForm();return s.useEffect((()=>{r.setFieldsValue({title:t,placeholder:l})}),[t,l]),o.jsxs(j,{layout:"vertical",initialValues:{title:t,placeholder:l},form:r,onValuesChange:function(){n&&n(r.getFieldsValue())},disabled:i,children:[o.jsx(j.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"Placeholder",name:"placeholder",children:o.jsx(f,{})})]})},defaultProps:Z},se={text:"一级标题",level:1,isCenter:!1},{Title:le}=p,ne={title:"标题",type:"questionTitle",Component:e=>{const{text:t="",level:s=1,isCenter:l=!1}={...se,...e};return o.jsx(le,{level:s,style:{textAlign:l?"center":"start",marginBottom:"0",fontSize:(n=s,1===n?"24px":2===n?"20px":"16px")},children:t});var n},PropComponent:e=>{const{text:t,level:l,isCenter:n,onChange:i,disabled:r}=e,[a]=j.useForm();return s.useEffect((()=>{a.setFieldsValue({text:t,level:l,isCenter:n})}),[t,l,n]),o.jsxs(j,{form:a,layout:"vertical",onValuesChange:function(){i&&i(a.getFieldsValue())},initialValues:{text:t,level:l,isCenter:n},disabled:r,children:[o.jsx(j.Item,{label:"标题内容",name:"text",rules:[{required:!0,message:"请输入标题内容"}],children:o.jsx(f,{})}),o.jsx(j.Item,{label:"层级",name:"level",children:o.jsx(C,{options:[{value:1,text:1},{value:2,text:2},{value:3,text:3}]})}),o.jsx(j.Item,{name:"isCenter",valuePropName:"checked",children:o.jsx(m,{children:"居中显示"})})]})},defaultProps:se},ie=[{groupId:"textGroup",groupName:"文本显示",components:[_,J,ne]},{groupId:"inputGroup",groupName:"用户输入",components:[U,te]},{groupId:"chooseGroup",groupName:"用户选择",components:[z,W]}],re=[z,_,U,J,W,te,ne];function ae(e){return re.find((t=>t.type===e))}export{N as a,A as b,ie as c,ae as g,T as u};
