import{j as e}from"./jsx-runtime.Df1x5K6o.js";import{c as a}from"./utils.BR_JCrAi.js";import{C as i,a as c,b as p}from"./collapsible.bnfvKYjo.js";import{c as o}from"./createLucideIcon.ClCaF7Cw.js";import"./index.ClvYZcLq.js";import"./index.Cav8kuxD.js";import"./index.D5KF_MXK.js";import"./index.DKhgivE1.js";/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=o("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=o("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);function y({items:t,className:n,children:l,...s}){return t.length?e.jsxs(i,{className:a("bg-card not-prose group/inline-toc rounded-xl border font-sans",n),...s,children:[e.jsxs(c,{className:"hover:bg-muted/50 focus-visible:ring-ring/50 inline-flex w-full items-center gap-2 rounded-xl py-2.5 pr-2 pl-4 text-sm font-medium transition-colors outline-none group-data-[state=open]/inline-toc:rounded-b-none focus-visible:ring-2 [&_svg]:size-4",children:[e.jsx(u,{className:"-translate-x-0.5"}),l??"On this page",e.jsx("div",{className:"text-muted-foreground ml-auto shrink-0",children:e.jsx(d,{className:"transition-transform duration-150 group-data-[state=open]/inline-toc:rotate-180"})})]}),e.jsx(p,{children:e.jsx("ul",{className:"flex flex-col px-4 pb-2",children:t.map(r=>e.jsx("li",{className:"flex py-1",children:e.jsx("a",{href:r.url,"data-depth":r.depth,className:"text-muted-foreground hover:text-accent-foreground text-sm transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-8",onClick:m,children:r.title})},r.url))})})]}):null}function m(t){t.preventDefault();const n=t.currentTarget.getAttribute("href")??"";history.pushState(null,"",n),document.getElementById(n.replace("#",""))?.scrollIntoView({behavior:"smooth"})}export{y as TOCInline};
