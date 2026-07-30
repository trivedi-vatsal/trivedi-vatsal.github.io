import{j as y}from"./jsx-runtime.Df1x5K6o.js";import{r as a}from"./index.ClvYZcLq.js";import{c as D}from"./utils.BR_JCrAi.js";import{e as I}from"./proxy.DxhRgB1D.js";var O=(t,o,e,s,l,n,c,r)=>{let i=document.documentElement,x=["light","dark"];function m(u){(Array.isArray(t)?t:[t]).forEach($=>{let p=$==="class",d=p&&n?l.map(w=>n[w]||w):l;p?(i.classList.remove(...d),i.classList.add(n&&n[u]?n[u]:u)):i.setAttribute($,u)}),k(u)}function k(u){r&&x.includes(u)&&(i.style.colorScheme=u)}function f(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)m(s);else try{let u=localStorage.getItem(o)||e,$=c&&u==="system"?f():u;m($)}catch{}},M=["light","dark"],A="(prefers-color-scheme: dark)",N=typeof window>"u",P=a.createContext(void 0),K={setTheme:t=>{},themes:[]},G=()=>{var t;return(t=a.useContext(P))!=null?t:K},H=t=>a.useContext(P)?a.createElement(a.Fragment,null,t.children):a.createElement(_,{...t}),W=["light","dark"],_=({forcedTheme:t,disableTransitionOnChange:o=!1,enableSystem:e=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:n=W,defaultTheme:c=e?"system":"light",attribute:r="data-theme",value:i,children:x,nonce:m,scriptProps:k})=>{let[f,u]=a.useState(()=>R(l,c)),[$,p]=a.useState(()=>f==="system"?z():f),d=i?Object.values(i):n,w=a.useCallback(g=>{let h=g;if(!h)return;g==="system"&&e&&(h=z());let b=i?i[h]:h,V=o?Z(m):null,T=document.documentElement,j=v=>{v==="class"?(T.classList.remove(...d),b&&T.classList.add(b)):v.startsWith("data-")&&(b?T.setAttribute(v,b):T.removeAttribute(v))};if(Array.isArray(r)?r.forEach(j):j(r),s){let v=M.includes(c)?c:null,B=M.includes(h)?h:v;T.style.colorScheme=B}V?.()},[m]),C=a.useCallback(g=>{let h=typeof g=="function"?g(f):g;u(h);try{localStorage.setItem(l,h)}catch{}},[f]),E=a.useCallback(g=>{let h=z(g);p(h),f==="system"&&e&&!t&&w("system")},[f,t]);a.useEffect(()=>{let g=window.matchMedia(A);return g.addListener(E),E(g),()=>g.removeListener(E)},[E]),a.useEffect(()=>{let g=h=>{h.key===l&&(h.newValue?u(h.newValue):C(c))};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)},[C]),a.useEffect(()=>{w(t??f)},[t,f]);let F=a.useMemo(()=>({theme:f,setTheme:C,forcedTheme:t,resolvedTheme:f==="system"?$:f,themes:e?[...n,"system"]:n,systemTheme:e?$:void 0}),[f,C,t,$,e,n]);return a.createElement(P.Provider,{value:F},a.createElement(J,{forcedTheme:t,storageKey:l,attribute:r,enableSystem:e,enableColorScheme:s,defaultTheme:c,value:i,themes:n,nonce:m,scriptProps:k}),x)},J=a.memo(({forcedTheme:t,storageKey:o,attribute:e,enableSystem:s,enableColorScheme:l,defaultTheme:n,value:c,themes:r,nonce:i,scriptProps:x})=>{let m=JSON.stringify([e,o,n,t,r,c,s,l]).slice(1,-1);return a.createElement("script",{...x,suppressHydrationWarning:!0,nonce:typeof window>"u"?i:"",dangerouslySetInnerHTML:{__html:`(${O.toString()})(${m})`}})}),R=(t,o)=>{if(N)return;let e;try{e=localStorage.getItem(t)||void 0}catch{}return e||o},Z=t=>{let o=document.createElement("style");return t&&o.setAttribute("nonce",t),o.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(o),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(o)},1)}},z=t=>(t||(t=window.matchMedia(A)),t.matches?"dark":"light");const Q=({variant:t="circle",start:o="center",blur:e=!1,gifUrl:s=""}={})=>{const{theme:l,setTheme:n,resolvedTheme:c}=G(),[r,i]=a.useState(!1);a.useEffect(()=>{i(c==="dark")},[c]);const x="theme-transition-styles",m=a.useCallback((p,d)=>{if(typeof window>"u")return;let w=document.getElementById(x);w||(w=document.createElement("style"),w.id=x,document.head.appendChild(w)),w.textContent=p},[]),k=a.useCallback(()=>{i(!r);const p=S(t,o,e,s);if(m(p.css,p.name),typeof window>"u")return;const d=()=>{n(l==="light"?"dark":"light")};if(!document.startViewTransition){d();return}document.startViewTransition(d)},[l,n,t,o,e,s,m,r,i]),f=a.useCallback(()=>{i(!1);const p=S(t,o,e,s);if(m(p.css,p.name),typeof window>"u")return;const d=()=>{n("light")};if(!document.startViewTransition){d();return}document.startViewTransition(d)},[n,t,o,e,s,m,i]),u=a.useCallback(()=>{i(!0);const p=S(t,o,e,s);if(m(p.css,p.name),typeof window>"u")return;const d=()=>{n("dark")};if(!document.startViewTransition){d();return}document.startViewTransition(d)},[n,t,o,e,s,m,i]),$=a.useCallback(()=>{if(typeof window>"u")return;const p=window.matchMedia("(prefers-color-scheme: dark)").matches;i(p);const d=S(t,o,e,s);m(d.css,d.name);const w=()=>{n("system")};if(!document.startViewTransition){w();return}document.startViewTransition(w)},[n,t,o,e,s,m,i]);return{isDark:r,setIsDark:i,toggleTheme:k,setCrazyLightTheme:f,setCrazyDarkTheme:u,setCrazySystemTheme:$}},q=({className:t="",variant:o="circle",start:e="center",blur:s=!1,gifUrl:l=""})=>{const{isDark:n,toggleTheme:c}=Q({variant:o,start:e,blur:s,gifUrl:l});return y.jsxs("button",{type:"button",className:D("size-10 cursor-pointer rounded-full bg-black p-0 transition-all duration-300 active:scale-95",t),onClick:c,"aria-label":"Toggle theme",children:[y.jsx("span",{className:"sr-only",children:"Toggle theme"}),y.jsxs("svg",{viewBox:"0 0 240 240",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsxs(I.g,{animate:{rotate:n?-180:0},transition:{ease:"easeInOut",duration:.5},children:[y.jsx("path",{d:"M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5",fill:"white"}),y.jsx("path",{d:"M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5",fill:"black"})]}),y.jsx(I.path,{animate:{rotate:n?180:0},transition:{ease:"easeInOut",duration:.5},d:"M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z",fill:"white"})]})]})},L=t=>{switch(t){case"top-left":return{cx:"0",cy:"0"};case"top-right":return{cx:"40",cy:"0"};case"bottom-left":return{cx:"0",cy:"40"};case"bottom-right":return{cx:"40",cy:"40"};case"top-center":return{cx:"20",cy:"0"};case"bottom-center":return{cx:"20",cy:"40"};case"bottom-up":case"top-down":case"left-right":case"right-left":return{cx:"20",cy:"20"}}},X=(t,o)=>{if(t==="circle-blur"){if(o==="center")return'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>';const n=L(o);if(!n)throw new Error(`Invalid start position: ${o}`);const{cx:c,cy:r}=n;return`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="${c}" cy="${r}" r="18" fill="white" filter="url(%23blur)"/></svg>`}if(o==="center")return;if(t==="rectangle")return"";const e=L(o);if(!e)throw new Error(`Invalid start position: ${o}`);const{cx:s,cy:l}=e;return t==="circle"?`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="${s}" cy="${l}" r="20" fill="white"/></svg>`:""},Y=t=>{switch(t){case"top-left":return"top left";case"top-right":return"top right";case"bottom-left":return"bottom left";case"bottom-right":return"bottom right";case"top-center":return"top center";case"bottom-center":return"bottom center";case"bottom-up":case"top-down":case"left-right":case"right-left":return"center"}},S=(t,o="center",e=!1,s)=>{const l=X(t,o),n=Y(o);if(t==="rectangle"){const r=(i=>{switch(i){case"bottom-up":return{from:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-down":return{from:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"left-right":return{from:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"right-left":return{from:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-left":return{from:"polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"top-right":return{from:"polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"bottom-left":return{from:"polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};case"bottom-right":return{from:"polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};default:return{from:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",to:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}})(o);return{name:`${t}-${o}${e?"-blur":""}`,css:`
       ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: var(--expo-out);
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      @keyframes reveal-dark-${o}${e?"-blur":""} {
        from {
          clip-path: ${r.from};
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: ${r.to};
          ${e?"filter: blur(0px);":""}
        }
      }

      @keyframes reveal-light-${o}${e?"-blur":""} {
        from {
          clip-path: ${r.from};
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: ${r.to};
          ${e?"filter: blur(0px);":""}
        }
      }
      `}}if(t==="circle"&&o=="center")return{name:`${t}-${o}${e?"-blur":""}`,css:`
       ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: var(--expo-out);
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      @keyframes reveal-dark${e?"-blur":""} {
        from {
          clip-path: circle(0% at 50% 50%);
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: circle(100.0% at 50% 50%);
          ${e?"filter: blur(0px);":""}
        }
      }

      @keyframes reveal-light${e?"-blur":""} {
        from {
           clip-path: circle(0% at 50% 50%);
           ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: circle(100.0% at 50% 50%);
          ${e?"filter: blur(0px);":""}
        }
      }
      `};if(t==="gif")return{name:`${t}-${o}`,css:`
      ::view-transition-group(root) {
  animation-timing-function: var(--expo-in);
}

::view-transition-new(root) {
  mask: url('${s}') center / 0 no-repeat;
  animation: scale 3s;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: scale 3s;
}

@keyframes scale {
  0% {
    mask-size: 0;
  }
  10% {
    mask-size: 50vmax;
  }
  90% {
    mask-size: 50vmax;
  }
  100% {
    mask-size: 2000vmax;
  }
}`};if(t==="circle-blur")return o==="center"?{name:`${t}-${o}`,css:`
        ::view-transition-group(root) {
          animation-timing-function: var(--expo-out);
        }

        ::view-transition-new(root) {
          mask: url('${l}') center / 0 no-repeat;
          mask-origin: content-box;
          animation: scale 1s;
          transform-origin: center;
        }

        ::view-transition-old(root),
        .dark::view-transition-old(root) {
          animation: scale 1s;
          transform-origin: center;
          z-index: -1;
        }

        @keyframes scale {
          to {
            mask-size: 350vmax;
          }
        }
        `}:{name:`${t}-${o}`,css:`
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }

      ::view-transition-new(root) {
        mask: url('${l}') ${o.replace("-"," ")} / 0 no-repeat;
        mask-origin: content-box;
        animation: scale 1s;
        transform-origin: ${n};
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 1s;
        transform-origin: ${n};
        z-index: -1;
      }

      @keyframes scale {
        to {
          mask-size: 350vmax;
        }
      }
      `};if(t==="polygon"){const r=(i=>{switch(i){case"top-left":return{darkFrom:"polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",darkTo:"polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",lightFrom:"polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",lightTo:"polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)"};case"top-right":return{darkFrom:"polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",darkTo:"polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",lightFrom:"polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",lightTo:"polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)"};default:return{darkFrom:"polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",darkTo:"polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",lightFrom:"polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",lightTo:"polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)"}}})(o);return{name:`${t}-${o}${e?"-blur":""}`,css:`
      ::view-transition-group(root) {
        animation-duration: 0.7s;
        animation-timing-function: var(--expo-out);
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      @keyframes reveal-dark-${o}${e?"-blur":""} {
        from {
          clip-path: ${r.darkFrom};
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: ${r.darkTo};
          ${e?"filter: blur(0px);":""}
        }
      }

      @keyframes reveal-light-${o}${e?"-blur":""} {
        from {
          clip-path: ${r.lightFrom};
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: ${r.lightTo};
          ${e?"filter: blur(0px);":""}
        }
      }
      `}}if(t==="circle"&&o!=="center"){const r=(i=>{switch(i){case"top-left":return"0% 0%";case"top-right":return"100% 0%";case"bottom-left":return"0% 100%";case"bottom-right":return"100% 100%";case"top-center":return"50% 0%";case"bottom-center":return"50% 100%";default:return"50% 50%"}})(o);return{name:`${t}-${o}${e?"-blur":""}`,css:`
       ::view-transition-group(root) {
        animation-duration: 1s;
        animation-timing-function: var(--expo-out);
      }
            
      ::view-transition-new(root) {
        animation-name: reveal-light-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: none;
        z-index: -1;
      }
      .dark::view-transition-new(root) {
        animation-name: reveal-dark-${o}${e?"-blur":""};
        ${e?"filter: blur(2px);":""}
      }

      @keyframes reveal-dark-${o}${e?"-blur":""} {
        from {
          clip-path: circle(0% at ${r});
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: circle(150.0% at ${r});
          ${e?"filter: blur(0px);":""}
        }
      }

      @keyframes reveal-light-${o}${e?"-blur":""} {
        from {
           clip-path: circle(0% at ${r});
           ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          clip-path: circle(150.0% at ${r});
          ${e?"filter: blur(0px);":""}
        }
      }
      `}}return{name:`${t}-${o}${e?"-blur":""}`,css:`
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-in);
      }
      ::view-transition-new(root) {
        mask: url('${l}') ${o.replace("-"," ")} / 0 no-repeat;
        mask-origin: content-box;
        animation: scale-${o}${e?"-blur":""} 1s;
        transform-origin: ${n};
        ${e?"filter: blur(2px);":""}
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale-${o}${e?"-blur":""} 1s;
        transform-origin: ${n};
        z-index: -1;
      }
      @keyframes scale-${o}${e?"-blur":""} {
        from {
          ${e?"filter: blur(8px);":""}
        }
        ${e?"50% { filter: blur(4px); }":""}
        to {
          mask-size: 2000vmax;
          ${e?"filter: blur(0px);":""}
        }
      }
    `}};function ne(){return y.jsx(H,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"theme",children:y.jsx(q,{variant:"circle",start:"top-right"})})}export{ne as ModeToggle};
