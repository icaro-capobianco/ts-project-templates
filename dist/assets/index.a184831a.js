import{u as e,C as t,B as n,M as l,a as o,b as r,c as a,d as c,e as s,f as m,g as i,h as u}from"./vendor.49f45bfe.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const a=new URL(e,l);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),o(s)},onload(){n(self[t].moduleMap[a]),o(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const d=()=>{const{isOpen:i,onOpen:u,onClose:d}=e(),[p,E]=t.useState(0);return t.createElement(t.Fragment,null,t.createElement(n,{onClick:u},"Open Modal"),t.createElement(n,{onClick:E.bind(null,p+1)},"Click ",p),t.createElement(l,{isOpen:i,onClose:d},t.createElement(o,null),t.createElement(r,null,t.createElement(a,null,"Modal Title"),t.createElement(c,null),t.createElement(s,null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat libero odio sint officiis."),t.createElement(m,null,t.createElement(n,{colorScheme:"blue",mr:3,onClick:d},"Close"),t.createElement(n,{variant:"ghost"},"Secondary Action")))))},p=document.getElementById("root");p&&i.render(t.createElement(u,null,t.createElement(d,null)),p);
