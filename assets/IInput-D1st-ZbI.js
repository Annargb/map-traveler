import{r,e as i,o as c,h as x,a as m,t as y,c as f,m as b,A as g}from"./index-CoKHFR3d.js";const B=({mutationFn:n,onSuccess:l,onError:e})=>{const s=r(),t=r(!1),a=r(null);return{data:s,isLoading:t,error:a,mutation:async(...o)=>{t.value=!0;try{s.value=await n(...o),a.value=null,l==null||l(s)}catch(u){a.value=u,e==null||e(a)}finally{t.value=!1}}}},_={class:"w-full text-[#2C2C2C]"},h={class:"block"},k={class:"block text-xs px-3 mb-2"},d="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary",C=Object.assign({inheritAttrs:!1},{__name:"IInput",props:{modelValue:String,label:String,placeholder:String,type:{default:"text",type:String}},emits:["update:modelValue"],setup(n,{emit:l}){const e=n,s=l,t=i(()=>e.type==="textarea"),a=i(()=>t.value?d+" resize-none":d),p=i(()=>t.value?"textarea":"input");return(o,u)=>(c(),x("div",_,[m("label",h,[m("span",k,y(e.label),1),(c(),f(g(p.value),b({class:a.value},{...o.$props,...o.$attrs},{value:n.modelValue,onInput:u[0]||(u[0]=v=>s("update:modelValue",v.target.value))}),null,16,["class","value"]))])]))}});export{C as _,B as u};
