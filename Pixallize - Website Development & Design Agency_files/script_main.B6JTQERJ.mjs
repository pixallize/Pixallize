import{A as B,B as L,C as h,D as m,E as T,F as x,I as V,J as C,L as N,M as U,N as H,Na as Y,P as M,R as W,T as Z,c as w,d as o,f as I,g as P,h as _,ha as q,i as S,k as O,ka as G,na as A,oa as j,p as D,q as z,ua as J,za as K}from"./chunk-RFKLC3UJ.mjs";import"./chunk-JR5VT52U.mjs";import{c as e}from"./chunk-RIUMFBNJ.mjs";var ne="default"in h?B:h,f={},Q=ne;f.createRoot=Q.createRoot;f.hydrateRoot=Q.hydrateRoot;var R=f.createRoot,X=f.hydrateRoot;var p={augiA20Il:{elements:{dHR9jnNcl:"app",L4pJd2xZx:"booking",O3mrytpgN:"faq",P1nofV9ub:"hero",POS9w1fV3:"process"},page:m(()=>import("./spITJxR27kmYZwzA5FmTICMn9lOMIw22zW54SF5oy2A.ZVO3Z53M.mjs")),path:"/"},T5dTZ3qtb:{elements:{lwq2V8FXA:"app",Te8z0alcp:"hero"},page:m(()=>import("./yO3iMGUk0AXFP2kkoC9etDNpC-vfnxlXW6pjpoRr8Sw.QJLCV7X5.mjs")),path:"/blog"},ZKsf6KlUK:{elements:{HeYfdD5SW:"hero"},page:m(()=>import("./VE_UYU_FGP0veVt1D1VSzHsy3DciPyhNp24Wy0Ih2NQ.TVBMFU6Q.mjs")),path:"/faq"},kqzD7aPZU:{elements:{YFs1jJRz7:"hero"},page:m(()=>import("./19DKT8mHbG18BDN3r1VYfWaK1GYJh3_al_P6U8I9_sM.GM4R6TAZ.mjs")),path:"/404"},WWcEOea2n:{elements:{},page:m(()=>import("./ZdBxL9jCL91VWKojGUJzEryg-BxcsvmytfwbaXrpeU8.XOQYVQPY.mjs")),path:"/blog/:Z6p6xQkGw"}},y=[{code:"en",id:"default",name:"English",slug:""}],g={},$="de45aca5cb7d9a395876711b832088edc5169051e7e1420461ab596705634bbd";async function ce({routeId:t,pathVariables:s,localeId:n}){typeof e<"u"&&(async()=>{let l=p[t],a="default",b=y.find(({id:d})=>n?d===n:d===a).code,E=null;if(l?.collectionId&&g){let d=await g[l.collectionId]?.(),[k]=Object.values(s);d&&typeof k=="string"&&(E=await d.getRecordIdBySlug(k,b||void 0)??null)}let v=Intl.DateTimeFormat().resolvedOptions(),re=v.timeZone,te=v.locale;e.__framer_events.push(["published_site_pageview",{framerSiteId:$??null,routePath:l?.path||"/",collectionItemId:E,framerLocale:b||null,webPageId:t,referrer:document.referrer||null,url:e.location.href,hostname:e.location.hostname||null,pathname:e.location.pathname||null,hash:e.location.hash||null,search:e.location.search||null,timezone:re,locale:te}])})(),await p[t].page.preload();let r=o(J,{isWebsite:!0,routeId:t,pathVariables:s,routes:p,collectionUtils:g,framerSiteId:$,notFoundPage:m(()=>import("./19DKT8mHbG18BDN3r1VYfWaK1GYJh3_al_P6U8I9_sM.GM4R6TAZ.mjs")),isReducedMotion:void 0,localeId:n,locales:y,preserveQueryParams:void 0,siteCanonicalURL:"https://incomparable-variation-851093.framer.app",EditorBar:typeof e>"u"?void 0:m(async()=>{let{createEditorBar:l}=await import("https://edit.framer.com/init.mjs");return{default:l({dependencies:{__version:1,framer:{useCurrentRoute:x,useLocaleInfo:C,useRouter:T},react:{createElement:o,memo:P,useCallback:S,useEffect:O,useRef:D,useState:z},"react-dom":{createPortal:L}}})}})}),u=o(j,{children:r,value:{codeBoundaries:!0,editorBarSubtle:!1,enableAsyncURLUpdates:!0,newTrackingEvents:!0,pauseOffscreen:!0,replaceNestedLinks:!0,useGranularSuspense:!0,wrapUpdatesInTransitions:!0}}),c=o(A,{children:u});return o(V,{children:c,value:{routes:{}}})}var F=typeof document<"u";if(F){e.__framer_importFromPackage=(s,n)=>()=>o(W,{error:'Package component not supported: "'+n+'" in "'+s+'"'}),e.process={...e.process,env:{...e.process?e.process.env:void 0,NODE_ENV:"production"}},e.__framer_events=e.__framer_events||[],Z();let t=document.getElementById("main");"framerHydrateV2"in t.dataset?ee(!0,t):ee(!1,t)}function ie(){F&&e.__framer_events.push(arguments)}async function ee(t,s){function n(r,u,c=!0){if(r.caught||e.__framer_hadFatalError)return;let i=u?.componentStack;if(c){if(console.warn(`Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`,r,i),Math.random()>.01)return}else console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/");ie(c?"published_site_load_recoverable_error":"published_site_load_error",{message:String(r),componentStack:i,stack:i?void 0:r instanceof Error&&typeof r.stack=="string"?r.stack:null})}try{let r,u,c,i;if(t){let a=JSON.parse(s.dataset.framerHydrateV2);r=a.routeId,u=a.localeId,c=a.pathVariables,i=a.breakpoints}else{let a=M(p,decodeURIComponent(location.pathname),!0,y);r=a.routeId,u=a.localeId,c=a.pathVariables}let l=await ce({routeId:r,localeId:u,pathVariables:c});t?(Y("framer-rewrite-breakpoints",()=>{K(i),e.__framer_onRewriteBreakpoints?.(i)}),_(()=>{H(),U(),N(),X(s,l,{onRecoverableError:n})})):R(s,{onRecoverableError:n}).render(l)}catch(r){throw n(r,void 0,!1),r}}(function(){F&&_(()=>{R(document.getElementById("__framer-badge-container")).render(o(w,{},o(q(G),{className:"__framer-badge",__framer__threshold:.5,__framer__animateOnce:!0,__framer__opacity:0,__framer__targetOpacity:1,__framer__rotate:0,__framer__x:0,__framer__y:10,__framer__scale:1,__framer__transition:{type:"spring",ease:[.44,0,.56,1],duration:.3,delay:1,stiffness:350,damping:40,mass:1.5},__framer__rotateX:0,__framer__rotateY:0,__framer__perspective:1200},o(I(()=>import("./PX9hIOIVM-JIQTCNRG.mjs"))))))})})();export{ce as getPageRoot};
//# sourceMappingURL=script_main.B6JTQERJ.mjs.map
