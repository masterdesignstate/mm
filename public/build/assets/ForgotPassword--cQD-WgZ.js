import{m as n,j as e,L as d}from"./app-DWVwFx0H.js";import{I as u}from"./InputError-D4Ts_jAg.js";import{P as x}from"./PrimaryButton-CHZGpPIl.js";import{T as c}from"./TextInput-CXtuOrOe.js";import{G as p}from"./GuestLayout-Bh-7sUvA.js";import"./ApplicationLogo-DI1jOIXn.js";import"./Grid-DCjwsiIX.js";function b({status:t}){const{data:a,setData:r,post:o,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(p,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 text-center  dark:text-gray-400 max-w-xl",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600 dark:text-green-400",children:t}),e.jsxs("form",{onSubmit:l,className:"w-96 mx-auto",children:[e.jsx(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(u,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"mt-4 flex items-center justify-center",children:e.jsx(x,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{b as default};
