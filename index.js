import{a as m,S as d,i as n}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s){return m.get("https://pixabay.com/api/",{params:{key:"55696654-5263066477aa053d936427b42",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
   <li class="gallery-item">
   <a class="gallery-link" href="${a}">
   <img class="gallery-img" src="${t}" alt="${e}" />
   </a>
   <div class="info">
   <p><b>Likes </b>${r}</p>
   <p><b>Views </b>${i}</p>
   <p><b>Comments </b>${u}</p>
   <p><b>Downloads </b>${f}</p>
   </div>
   </li>
  `).join("");l.innerHTML=o,g.refresh()}function y(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const x=document.querySelector(".form");x.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:"432px"});return}y(),b(),p(o).then(t=>{t.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:"432px"}):h(t.hits)}).catch(t=>{console.log(t)}).finally(()=>{L(),s.target.reset()})});
//# sourceMappingURL=index.js.map
