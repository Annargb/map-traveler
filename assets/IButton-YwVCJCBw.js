import{e as n,o,h as s,i,s as l}from"./index-BCh-9xHG.js";const u={__name:"IButton",props:{variant:{default:"primary",type:String,validator:t=>["primary","gradient","outlined"].includes(t)}},setup(t){const r=t,e=n(()=>r.variant==="gradient"?"bg-gradient-to-r from-[#FFA279] to-[#F3743D]":"bg-[#FFA279]");return(a,d)=>(o(),s("button",{class:l(["rounded-xl py-3 px-10 text-white font-bold -tracking-wider",e.value])},[i(a.$slots,"default")],2))}};export{u as _};
