(()=>{"use strict";
if(document.getElementById("dsat-root"))return;
const VIDEO_SRC="/assets/videos/ZeroMotion-Transparent-OBS.webm";
function el(t,a={},...c){const e=document.createElement(t);for(const k in a){const v=a[k];if(k==="style"&&typeof v==="object")Object.assign(e.style,v);else if(k.startsWith("on")&&typeof v==="function")e.addEventListener(k.slice(2),v);else k==="dataset"?Object.assign(e.dataset,v):e.setAttribute(k,v)}for(const n of c) n&&e.append(n);return e}
const mount=(()=>{
  const footerBottom=document.querySelector(".footer-bottom");
  if(footerBottom) return (n)=>{
    // Insert between copyright and legal links
    const copyright=footerBottom.querySelector(".footer-copyright");
    const legal=footerBottom.querySelector(".footer-legal");
    if(copyright && legal) {
      copyright.after(n);
    } else if(copyright) {
      copyright.after(n);
    } else {
      footerBottom.append(n);
    }
  };
  const f=document.querySelector("footer");
  if(f) return (n)=>f.append(n);
  return (n)=>{n.id="dsat-fixed";document.body.append(n)};
})();
const root=el("div",{id:"dsat-root",role:"complementary","aria-hidden":"false"});
const link=el("a",{id:"dsat-link",href:"https://zeromotionmarketing.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Website designed and developed by ZeroMotion Marketing"});
const sr=el("span",{id:"dsat-sr"},"Website designed and developed by ZeroMotion Marketing");
const brandText=el("span",{id:"dsat-brand-text"},"Designed & Developed by ZeroMotion Marketing");
const video=el("video",{id:"dsat-video",muted:"",autoplay:"",loop:"",playsinline:"",preload:"none"}, el("source",{src:VIDEO_SRC,type:"video/webm"}));
const fallback=el("div",{id:"dsat-fallback"},"ZM");

// reduced motion → no autoplay video
const reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let usingFallback=false;
function showFallback(){ if(usingFallback) return; usingFallback=true; try{ link.innerHTML=""; link.append(fallback,brandText,sr);}catch{} }
function showVideo(){ if(usingFallback) return; try{ link.innerHTML=""; link.append(video,brandText,sr);}catch{} }

if(reduced){ 
  showFallback(); 
} else { 
  showVideo(); 
  // Give video time to load, then try to play
  setTimeout(()=>{
    video.play().catch(()=>{
      console.log('DSAT: Video failed to play, showing fallback');
      showFallback();
    });
  }, 100);
}

link.addEventListener("keydown",e=>{ if(e.key===" "){ e.preventDefault(); link.click(); }});

// Pause offscreen to save CPU
const io= "IntersectionObserver" in window ? new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting && !reduced && !usingFallback){ video.play().catch(()=>showFallback()); }
    else { try{ video.pause(); }catch{} }
  });
},{threshold:0.01}) : null;
if(io) io.observe(root);

// Load CSS external first; inline fallback if blocked
const cssHref=(document.querySelector('link[href*="dsat.css"]')||{}).href || "/dsat.css";
function injectInlineCSS(){
  if(document.getElementById("dsat-style")) return;
  const style=el("style",{id:"dsat-style"});
  style.textContent=`#dsat-root{display:flex;align-items:center;justify-content:center;gap:.5rem;opacity:.6;transition:opacity .3s ease;z-index:2147483646;margin:0;padding:0}#dsat-root:hover{opacity:.8}#dsat-link{display:flex;align-items:center;gap:.4rem;text-decoration:none;color:rgba(255,255,255,.5);transition:all .3s ease}#dsat-link:hover{color:rgba(255,60,43,.7)}#dsat-video,#dsat-fallback{width:18px;height:18px;border-radius:50%;box-shadow:none}#dsat-video{animation:dsat-spin 15s linear infinite;filter:none;opacity:.7}#dsat-fallback{display:grid;place-items:center;background:transparent;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.2);font:500 8px/1 system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;animation:dsat-spin 15s linear infinite}#dsat-brand-text{font-size:.7rem;font-weight:400;letter-spacing:.02em;text-transform:none}@keyframes dsat-spin{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){#dsat-video,#dsat-fallback{animation:none}}#dsat-fixed{position:fixed;right:20px;bottom:20px;background:rgba(10,10,12,.95);padding:1rem 1.5rem;border-radius:12px;border:1px solid rgba(255,60,43,.2);box-shadow:0 4px 20px rgba(0,0,0,.3)}#dsat-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;clip-path:inset(50%)}`;
  document.head.append(style);
}
const linkEl=el("link",{rel:"stylesheet",href:cssHref,id:"dsat-css"});
linkEl.addEventListener("error",injectInlineCSS);
document.head.append(linkEl);

root.append(link);
document.body?mount(root):document.addEventListener("DOMContentLoaded",()=>mount(root));
})();
