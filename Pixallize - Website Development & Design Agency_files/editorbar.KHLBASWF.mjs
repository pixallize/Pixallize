import{a}from"https://app.framerstatic.com/chunk-4BNDGEUC.mjs";import{a as n}from"https://app.framerstatic.com/chunk-IJ25RF36.mjs";import"https://app.framerstatic.com/chunk-BQNQQCEJ.mjs";function l(){return!new URL(window.location.href).searchParams.get("source")?.endsWith(n().previewDomain)}async function u(){let e=window.deferredJsFiles;if(!e)return;let r=e.map(o=>new Promise((s,i)=>{let t=document.createElement("script");t.src=o,t.async=!1,t.defer=!0,t.onload=()=>s(),t.onerror=()=>i(),document.body.appendChild(t)}));await Promise.all(r)}async function m(){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",window.cssBundleURL);let r=new Promise((o,s)=>{e.onload=()=>o(),e.onerror=()=>s()});document.head.appendChild(e),await r}async function f(){let e=new URLSearchParams(window.location.search),r=e.get("framerSiteId");if(!r)return null;let o=e.get("features"),s={};try{o&&(s=JSON.parse(o))}catch{}Object.defineProperty(window,"editorBarFeatures",{value:Object.freeze(s),writable:!1});let i=await a(r);if(l()&&i.status!=="success")return;import("https://app.framerstatic.com/editorbar-R5KFXFBV.mjs").catch(console.error),await Promise.all([u(),m()]);let[{default:t},{renderReact:c},{EditorBar:d}]=await Promise.all([import("https://app.framerstatic.com/react-52BSKFE4.mjs"),import("https://app.framerstatic.com/renderReact-5OFC7QR7.mjs"),import("https://app.framerstatic.com/EditorBar-IPOV2KFN.mjs")]);c(t.createElement(d,{access:i,siteId:r}),document.getElementById("root"))}f().catch(console.error);
//# sourceMappingURL=https://app.framerstatic.com/editorbar.KHLBASWF.mjs.map
