import{A as c,o as m,h as u,b as n,w as _,d as g,B as f,C as b,k as o,t as V,n as w,F as v,D as x}from"./index-DQHvTjVo.js";import{_ as p,u as L}from"./useMutation-k-3wceVa.js";import{_ as S}from"./IButton-DKkvvRz6.js";const y={__name:"LoginForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(d,{emit:i}){const l=d,s=i,e=c({email:"",password:""});return(r,a)=>(m(),u("form",{onSubmit:a[2]||(a[2]=f(t=>s("submit",e),["prevent"]))},[n(p,{class:"mb-4",label:"Електронна пошта",placeholder:"email@gmail.com",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=t=>e.email=t)},null,8,["modelValue"]),n(p,{label:"Пароль",type:"password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=t=>e.password=t)},null,8,["modelValue"]),n(S,{class:"mt-10 w-full",variant:"gradient",type:"submit","is-loading":l.isLoading},{default:_(()=>[g(" Увійти ")]),_:1},8,["is-loading"])],32))}},k={key:0,class:"text-red-500"},h={__name:"LoginView",setup(d){const i=b(),{isLoading:l,error:s,mutation:e}=L({mutationFn:r=>x.loginUser(r),onSuccess:()=>i.replace("/map")});return(r,a)=>(m(),u(v,null,[n(y,{onSubmit:o(e),"is-loading":o(l)},null,8,["onSubmit","is-loading"]),o(s)?(m(),u("div",k,V(o(s).message),1)):w("",!0)],64))}};export{h as default};
