import{r as i,R as f,j as d,m as Te}from"./app-DWVwFx0H.js";import{I as $e}from"./InputError-D4Ts_jAg.js";import{I as De}from"./InputLabel-DDwI6YJe.js";import{x as V,E as ae,o as Ce,n as K,f as Y,s as q,u as je,a as Pe,P as N,F as T,m as W,I as E,c as Re,r as U,T as J,H as Ie,t as Ne,y as Se,R as Me,b as Le,d as Oe,w as Ae,l as ee,e as He,X as Be}from"./portal-Nag5ktkl.js";import{n as Ue,o as b,K as P,y as O,l as le,u as z,p as Ye,L as S,f as se,t as ue,O as te,a as ie,i as M,s as qe,z as ce,F as L}from"./transition-Bor8iJJF.js";import{T as ze}from"./TextInput-CXtuOrOe.js";import"./index-BcsBccMf.js";let Ve=i.createContext(()=>{});function Ke({value:e,children:t}){return f.createElement(Ve.Provider,{value:e},t)}function We(e,t=typeof document<"u"?document.defaultView:null,n){let r=V(e,"escape");ae(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Ce.Escape&&n(o))})}function Ge(){var e;let[t]=i.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=i.useState((e=t==null?void 0:t.matches)!=null?e:!1);return Ue(()=>{if(!t)return;function o(s){r(s.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Ze({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=K(n),o=b(()=>{var s,u;let l=[];for(let a of e)a!==null&&(a instanceof HTMLElement?l.push(a):"current"in a&&a.current instanceof HTMLElement&&l.push(a.current));if(t!=null&&t.current)for(let a of t.current)l.push(a);for(let a of(s=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?s:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((u=n==null?void 0:n.getRootNode())==null?void 0:u.host))||l.some(c=>a.contains(c))||l.push(a));return l});return{resolveContainers:o,contains:b(s=>o().some(u=>u.contains(s)))}}let de=i.createContext(null);function ne({children:e,node:t}){let[n,r]=i.useState(null),o=fe(t??n);return f.createElement(de.Provider,{value:o},e,o===null&&f.createElement(Y,{features:q.Hidden,ref:s=>{var u,l;if(s){for(let a of(l=(u=je(s))==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?l:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(s)){r(a);break}}}}))}function fe(e=null){var t;return(t=i.useContext(de))!=null?t:e}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function _e(){let e=i.useRef(0);return Pe(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Qe="div";var C=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(C||{});function Xe(e,t){let n=i.useRef(null),r=O(n,t),{initialFocus:o,initialFocusFallback:s,containers:u,features:l=15,...a}=e;le()||(l=0);let c=K(n);nt(l,{ownerDocument:c});let m=rt(l,{ownerDocument:c,container:n,initialFocus:o,initialFocusFallback:s});ot(l,{ownerDocument:c,container:n,containers:u,previousActiveElement:m});let F=_e(),v=b(y=>{let k=n.current;k&&(w=>w())(()=>{z(F.current,{[I.Forwards]:()=>{N(k,T.First,{skipElements:[y.relatedTarget,s]})},[I.Backwards]:()=>{N(k,T.Last,{skipElements:[y.relatedTarget,s]})}})})}),h=V(!!(l&2),"focus-trap#tab-lock"),p=Ye(),$=i.useRef(!1),D={ref:r,onKeyDown(y){y.key=="Tab"&&($.current=!0,p.requestAnimationFrame(()=>{$.current=!1}))},onBlur(y){if(!(l&4))return;let k=me(u);n.current instanceof HTMLElement&&k.add(n.current);let w=y.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(pe(k,w)||($.current?N(n.current,z(F.current,{[I.Forwards]:()=>T.Next,[I.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&E(y.target)))}},x=S();return f.createElement(f.Fragment,null,h&&f.createElement(Y,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:q.Focusable}),x({ourProps:D,theirProps:a,defaultTag:Qe,name:"FocusTrap"}),h&&f.createElement(Y,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:q.Focusable}))}let Je=P(Xe),et=Object.assign(Je,{features:C});function tt(e=!0){let t=i.useRef(U.slice());return W(([n],[r])=>{r===!0&&n===!1&&ue(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=U.slice())},[e,U,t]),b(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function nt(e,{ownerDocument:t}){let n=!!(e&8),r=tt(n);W(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&E(r())},[n]),Re(()=>{n&&E(r())})}function rt(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let s=i.useRef(null),u=V(!!(e&1),"focus-trap#initial-focus"),l=se();return W(()=>{if(e===0)return;if(!u){o!=null&&o.current&&E(o.current);return}let a=n.current;a&&ue(()=>{if(!l.current)return;let c=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===c){s.current=c;return}}else if(a.contains(c)){s.current=c;return}if(r!=null&&r.current)E(r.current);else{if(e&16){if(N(a,T.First|T.AutoFocus)!==J.Error)return}else if(N(a,T.First)!==J.Error)return;if(o!=null&&o.current&&(E(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}s.current=t==null?void 0:t.activeElement})},[o,u,e]),s}function ot(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let s=se(),u=!!(e&4);ae(t==null?void 0:t.defaultView,"focus",l=>{if(!u||!s.current)return;let a=me(r);n.current instanceof HTMLElement&&a.add(n.current);let c=o.current;if(!c)return;let m=l.target;m&&m instanceof HTMLElement?pe(a,m)?(o.current=m,E(m)):(l.preventDefault(),l.stopPropagation(),E(c)):E(o.current)},!0)}function pe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{}),lt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(lt||{});let st={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=i.createContext(null);G.displayName="DialogContext";function A(e){let t=i.useContext(G);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}return t}function ut(e,t){return z(t.type,st,e,t)}let re=P(function(e,t){let n=i.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:s,initialFocus:u,role:l="dialog",autoFocus:a=!0,__demoMode:c=!1,unmount:m=!1,...F}=e,v=i.useRef(!1);l=function(){return l==="dialog"||l==="alertdialog"?l:(v.current||(v.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let h=ie();o===void 0&&h!==null&&(o=(h&M.Open)===M.Open);let p=i.useRef(null),$=O(p,t),D=K(p),x=o?0:1,[y,k]=i.useReducer(ut,{titleId:null,descriptionId:null,panelRef:i.createRef()}),w=b(()=>s(!1)),Z=b(g=>k({type:0,id:g})),j=le()?x===0:!1,[ye,he]=Ne(),we={get current(){var g;return(g=y.panelRef.current)!=null?g:p.current}},H=fe(),{resolveContainers:B}=Ze({mainTreeNode:H,portals:ye,defaultContainers:[we]}),_=h!==null?(h&M.Closing)===M.Closing:!1;Se(c||_?!1:j,{allowed:b(()=>{var g,X;return[(X=(g=p.current)==null?void 0:g.closest("[data-headlessui-portal]"))!=null?X:null]}),disallowed:b(()=>{var g;return[(g=H==null?void 0:H.closest("body > *:not(#headlessui-portal-root)"))!=null?g:null]})}),Me(j,B,g=>{g.preventDefault(),w()}),We(j,D==null?void 0:D.defaultView,g=>{g.preventDefault(),g.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),w()}),Le(c||_?!1:j,D,B),Oe(j,p,w);let[ve,xe]=Ae(),be=i.useMemo(()=>[{dialogState:x,close:w,setTitleId:Z,unmount:m},y],[x,y,w,Z,m]),Q=i.useMemo(()=>({open:x===0}),[x]),Ee={ref:$,id:r,role:l,tabIndex:-1,"aria-modal":c?void 0:x===0?!0:void 0,"aria-labelledby":y.titleId,"aria-describedby":ve,unmount:m},Fe=!Ge(),R=C.None;j&&!c&&(R|=C.RestoreFocus,R|=C.TabLock,a&&(R|=C.AutoFocus),Fe&&(R|=C.InitialFocus));let ke=S();return f.createElement(qe,null,f.createElement(ee,{force:!0},f.createElement(He,null,f.createElement(G.Provider,{value:be},f.createElement(Be,{target:p},f.createElement(ee,{force:!1},f.createElement(xe,{slot:Q},f.createElement(he,null,f.createElement(et,{initialFocus:u,initialFocusFallback:p,containers:B,features:R},f.createElement(Ke,{value:w},ke({ourProps:Ee,theirProps:F,slot:Q,defaultTag:it,features:ct,visible:x===0,name:"Dialog"})))))))))))}),it="div",ct=te.RenderStrategy|te.Static;function dt(e,t){let{transition:n=!1,open:r,...o}=e,s=ie(),u=e.hasOwnProperty("open")||s!==null,l=e.hasOwnProperty("onClose");if(!u&&!l)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!u)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!l)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!s&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?f.createElement(ne,null,f.createElement(ce,{show:r,transition:n,unmount:o.unmount},f.createElement(re,{ref:t,...o}))):f.createElement(ne,null,f.createElement(re,{ref:t,open:r,...o}))}let ft="div";function mt(e,t){let n=i.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...s}=e,[{dialogState:u,unmount:l},a]=A("Dialog.Panel"),c=O(t,a.panelRef),m=i.useMemo(()=>({open:u===0}),[u]),F=b(D=>{D.stopPropagation()}),v={ref:c,id:r,onClick:F},h=o?L:i.Fragment,p=o?{unmount:l}:{},$=S();return f.createElement(h,{...p},$({ourProps:v,theirProps:s,slot:m,defaultTag:ft,name:"Dialog.Panel"}))}let pt="div";function gt(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:s}]=A("Dialog.Backdrop"),u=i.useMemo(()=>({open:o===0}),[o]),l={ref:t,"aria-hidden":!0},a=n?L:i.Fragment,c=n?{unmount:s}:{},m=S();return f.createElement(a,{...c},m({ourProps:l,theirProps:r,slot:u,defaultTag:pt,name:"Dialog.Backdrop"}))}let yt="h2";function ht(e,t){let n=i.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:s,setTitleId:u}]=A("Dialog.Title"),l=O(t);i.useEffect(()=>(u(r),()=>u(null)),[r,u]);let a=i.useMemo(()=>({open:s===0}),[s]),c={ref:l,id:r};return S()({ourProps:c,theirProps:o,slot:a,defaultTag:yt,name:"Dialog.Title"})}let wt=P(dt),ge=P(mt);P(gt);let vt=P(ht),xt=Object.assign(wt,{Panel:ge,Title:vt,Description:Ie});function oe({className:e="",disabled:t,children:n,...r}){return d.jsx("button",{...r,className:`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function bt({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const s=()=>{r&&o()},u={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return d.jsx(ce,{show:t,leave:"duration-200",children:d.jsxs(xt,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:s,children:[d.jsx(L,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:d.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),d.jsx(L,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:d.jsx(ge,{className:`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 ${u}`,children:e})})]})})}function Et({type:e="button",className:t="",disabled:n,children:r,...o}){return d.jsx("button",{...o,type:e,className:`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Pt({className:e=""}){const[t,n]=i.useState(!1),r=i.useRef(),{data:o,setData:s,delete:u,processing:l,reset:a,errors:c,clearErrors:m}=Te({password:""}),F=()=>{n(!0)},v=p=>{p.preventDefault(),u(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>a()})},h=()=>{n(!1),m(),a()};return d.jsxs("section",{className:`space-y-6 ${e}`,children:[d.jsxs("header",{children:[d.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),d.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),d.jsx(oe,{onClick:F,children:"Delete Account"}),d.jsx(bt,{show:t,onClose:h,children:d.jsxs("form",{onSubmit:v,className:"p-6",children:[d.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),d.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),d.jsxs("div",{className:"mt-6",children:[d.jsx(De,{htmlFor:"password",value:"Password",className:"sr-only"}),d.jsx(ze,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:p=>s("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),d.jsx($e,{message:c.password,className:"mt-2"})]}),d.jsxs("div",{className:"mt-6 flex justify-end",children:[d.jsx(Et,{onClick:h,children:"Cancel"}),d.jsx(oe,{className:"ms-3",disabled:l,children:"Delete Account"})]})]})})]})}export{Pt as default};
