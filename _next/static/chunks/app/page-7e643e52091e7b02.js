(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2225:function(e,t,s){Promise.resolve().then(s.bind(s,2590))},2590:function(e,t,s){"use strict";s.r(t);var l=s(7437),n=s(2265);t.default=()=>{let[e,t]=(0,n.useState)(""),[s,a]=(0,n.useState)(""),[r,i]=(0,n.useState)([]),c=e=>{let t=[...r];t.splice(e,1),i(t)},x=(0,l.jsx)("h3",{children:"No Task Available"});return r.length>0&&(x=r.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex justify-between mb-8 w-2/3",children:[(0,l.jsx)("h4",{className:"text-2xl font-semibold",children:e.title}),(0,l.jsx)("h4",{className:"text-xl font-semibold",children:e.desp})]}),(0,l.jsx)("button",{onClick:()=>{c(t)},className:"bg-blue-900 text-white px-4 py-2",children:"Delete"})]},t))),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"bg-black text-white h-24 text-center text-5xl p-5",children:"Eshwar's Todolist"}),(0,l.jsxs)("form",{onSubmit:l=>{l.preventDefault(),i([...r,{title:e,desp:s}]),t(""),a(""),console.log(r)},children:[(0,l.jsx)("input",{type:"text",className:"m-5 border-zinc-800 border-4 text-2xl",placeholder:"Enter Your Task Here",value:e,onChange:e=>{t(e.target.value)}}),(0,l.jsx)("input",{type:"text",className:"m-5 border-zinc-800 border-4 text-2xl",placeholder:"Enter Task Description",value:s,onChange:e=>{a(e.target.value)}}),(0,l.jsx)("button",{className:"bg-black text-white text-2xl px-4 py-2 font-bold rounded",children:" ADD TASK "})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"p-8 bg-slate-200",children:(0,l.jsx)("ul",{children:x})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=2225)}),_N_E=e.O()}]);