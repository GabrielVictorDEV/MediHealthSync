(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6490:function(e,t,n){Promise.resolve().then(n.bind(n,2279))},2279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(119),s=n(5698),a=n(6054),r=n(3084);function i(){let[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)(""),l=(0,s.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ix,{}),(0,o.jsxs)("div",{className:"h-screen grid grid-cols-2",children:[(0,o.jsx)("section",{className:"bg-white-100 flex flex-col justify-center items-center",children:(0,o.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,o.jsx)("p",{className:"text-4xl font-extrabold tracking-wider text-pink-100",children:"ACESSAR APLICA\xc7\xc3O"}),(0,o.jsx)("hr",{className:"w-[260px] border-pink-100 border-4 rounded-full"})]})}),(0,o.jsx)("main",{className:"bg-pink-100 flex justify-center items-center flex-col gap-4",children:(0,o.jsxs)("div",{className:"w-full p-[100px] flex flex-col gap-8",children:[(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("label",{htmlFor:"login",className:"text-[40px] justify-start flex font-semibold text-white-100",children:"LOGIN"}),(0,o.jsx)("input",{type:"text",id:"login",value:e,onChange:e=>t(e.target.value),className:"outline-none border-b-2 border-white-100 bg-transparent text-2xl pb-2 text-white-100"})]}),(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("label",{htmlFor:"password",className:"text-[40px] justify-start flex font-semibold text-white-100",children:"SENHA"}),(0,o.jsx)("input",{type:"password",id:"password",value:n,onChange:e=>i(e.target.value),className:"outline-none border-b-2 border-white-100 bg-transparent text-2xl pb-2 text-white-100"})]}),(0,o.jsx)("button",{onClick:()=>{"admin@gmail.com"===e&&"admin123456"===n?l.push("/home"):r.Am.error("Insira uma senha e login v\xe1lidos!",{position:"top-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},className:"bg-white-100 w-[300px] h-12 rounded-full font-bold text-lg text-pink-100 hover:bg-pink-100 hover:text-white-100 transition-all duration-500 border-2 border-white-100",children:"ACESSAR"})]})})]})]})}n(7899)},7899:function(){},9808:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6054),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,a={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},119:function(e,t,n){"use strict";e.exports=n(9808)},5698:function(e,t,n){e.exports=n(8308)},3084:function(e,t,n){"use strict";n.d(t,{Ix:function(){return x},Am:function(){return R}});var o=n(6054),s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(s&&(s+=" "),s+=o);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(o&&(o+=" "),o+=t);return o};let a=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||a(e);function u(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=e,p=s?`${t}--${l}`:t,m=s?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}(e,u,r):u()};f||(c?t():(h.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[f]),o.createElement(o.Fragment,null,i)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},p=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},m={info:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:h}=e,g=l||d&&0===f,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(y.transform=`scaleX(${f})`);let v=s("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),E=i(c)?c({rtl:p,type:r,defaultClassName:v}):s(v,c);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&a()}})}let E=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=function(e){let[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",x),document.addEventListener("touchmove",b),document.addEventListener("touchend",x);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=h(t.nativeEvent),l.y=g(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(t){if(l.boundingRect){let{top:n,bottom:o,left:s,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=s&&l.x<=a&&l.y>=n&&l.y<=o?T():E()}}function E(){n(!0)}function T(){n(!1)}function b(n){let o=r.current;l.canDrag&&o&&(l.didMove=!0,t&&T(),l.x=h(n),l.y=g(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function x(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",x);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",E,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}),[e.pauseOnFocusLoss]);let _={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return u&&d&&(_.onMouseEnter=T,_.onMouseLeave=E),m&&(_.onClick=e=>{p&&p(e),l.canCloseOnClick&&f()}),{playToast:E,pauseToast:T,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:_}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:E,position:T,className:b,style:x,bodyClassName:_,bodyStyle:C,progressClassName:I,progressStyle:N,updateId:O,role:w,progress:L,rtl:R,toastId:k,deleteToast:A,isIn:P,isLoading:j,iconOut:M,closeOnClick:$,theme:S}=e,B=s("Toastify__toast",`Toastify__toast-theme--${S}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":$}),D=i(b)?b({rtl:R,position:T,type:f,defaultClassName:B}):s(B,b),z=!!L||!u,F={closeToast:m,type:f,theme:S},H=null;return!1===l||(H=i(l)?l(F):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,F):y(F)),o.createElement(E,{isIn:P,done:A,position:T,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:k,onClick:d,className:D,...r,style:x,ref:a},o.createElement("div",{...P&&{role:w},className:i(_)?_({type:f}):s("Toastify__toast-body",_),style:C},null!=M&&o.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},M),o.createElement("div",null,c)),H,o.createElement(v,{...O&&!z?{key:`pb-${O}`}:{},rtl:R,theme:S,delay:u,isRunning:t,isIn:P,closeToast:m,hide:p,type:f,style:N,className:I,controlledProgress:z,progress:L||0})))},T=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},b=u(T("bounce",!0)),x=(u(T("slide",!0)),u(T("zoom")),u(T("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:p}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),u=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>p.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function E(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();b(e,t,n)}function T(e,n){var s,h;let{delay:y,staleId:T,...x}=n;if(!c(e)||!u.current||g.props.enableMultiContainer&&x.containerId!==g.props.containerId||p.has(x.toastId)&&null==x.updateId)return;let{toastId:_,updateId:C,data:I}=x,{props:N}=g,O=()=>v(_),w=null==C;w&&g.count++;let L={...N,style:N.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(x).filter(e=>{let[t,n]=e;return null!=n})),toastId:_,updateId:C,data:I,closeToast:O,isIn:!1,className:l(x.className||N.toastClassName),bodyClassName:l(x.bodyClassName||N.bodyClassName),progressClassName:l(x.progressClassName||N.progressClassName),autoClose:!x.isLoading&&(s=x.autoClose,h=N.autoClose,!1===s||a(s)&&s>0?s:h),deleteToast(){let e=d(p.get(_),"removed");p.delete(_),f.emit(4,e);let n=g.queue.length;if(g.count=null==_?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let e=null==_?g.props.limit:1;if(1===n||1===e)g.displayedToast++,E();else{let t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)E()}}else t()}};L.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):r(l)||a(l)?c=l:s?c=m.spinner():n in m&&(c=m[n](u))),c}(L),i(x.onOpen)&&(L.onOpen=x.onOpen),i(x.onClose)&&(L.onClose=x.onClose),L.closeButton=N.closeButton,!1===x.closeButton||c(x.closeButton)?L.closeButton=x.closeButton:!0===x.closeButton&&(L.closeButton=!c(N.closeButton)||N.closeButton);let R=e;(0,o.isValidElement)(e)&&!r(e.type)?R=(0,o.cloneElement)(e,{closeToast:O,toastProps:L,data:I}):i(e)&&(R=e({closeToast:O,toastProps:L,data:I})),N.limit&&N.limit>0&&g.count>N.limit&&w?g.queue.push({toastContent:R,toastProps:L,staleId:T}):a(y)?setTimeout(()=>{b(R,L,T)},y):b(R,L,T)}function b(e,t,n){let{toastId:o}=t;n&&p.delete(n);let a={content:e,props:t};p.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),f.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(g.containerId=e.containerId,f.cancelEmit(3).on(0,T).on(1,e=>u.current&&v(e)).on(5,y).emit(2,g),()=>{p.clear(),f.emit(3,g)}),[]),(0,o.useEffect)(()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:h}}(e),{className:h,style:g,rtl:y,containerId:v}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:v},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return i(h)?h({position:e,rtl:y,defaultClassName:t}):s(t,l(h))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:a}=e;return o.createElement(E,{...a,isIn:p(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)}))}))}));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:b,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let _,C=new Map,I=[],N=1;function O(e,t){return C.size>0?f.emit(0,e,t):I.push({content:e,options:t}),t.toastId}function w(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||a(t.toastId))?t.toastId:""+N++}}function L(e){return(t,n)=>O(t,w(e,n))}function R(e,t){return O(e,w("default",t))}R.loading=(e,t)=>O(e,w("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,n){let o,{pending:s,error:a,success:l}=t;s&&(o=r(s)?R.loading(s,n):R.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,s)=>{if(null==t)return void R.dismiss(o);let a={type:e,...c,...n,data:s},i=r(t)?{render:t}:t;return o?R.update(o,{...a,...i}):R(i.render,{...a,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},R.success=L("success"),R.info=L("info"),R.error=L("error"),R.warning=L("warning"),R.warn=R.warning,R.dark=(e,t)=>O(e,w("default",{theme:"dark",...t})),R.dismiss=e=>{C.size>0?f.emit(1,e):I=I.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},R.isActive=e=>{let t=!1;return C.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},R.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=C.get(n||_);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+N++};a.toastId!==e&&(a.staleId=e);let r=a.render||s;delete a.render,O(r,a)}},0)},R.done=e=>{R.update(e,{progress:1})},R.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),R.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,e=>{_=e.containerId||e,C.set(_,e),I.forEach(e=>{f.emit(0,e.content,e.options)}),I=[]}).on(3,e=>{C.delete(e.containerId||e),0===C.size&&f.off(0).off(1).off(5)})}},function(e){e.O(0,[258,892,744],function(){return e(e.s=6490)}),_N_E=e.O()}]);