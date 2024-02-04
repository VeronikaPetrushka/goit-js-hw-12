import{i as d,a as f,S as g}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),s=document.getElementById("search-bar");document.querySelector(".submit-btn");const a=document.getElementById("gallery"),n=document.querySelector(".loading");o.addEventListener("submit",async e=>{e.preventDefault();const t=s.value.trim();if(!t){d.error({title:"Error",message:"Please enter a search query."});return}n.style.display="block";const y=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${c}&per_page=${p}`;try{const m=(await f.get(y)).data;n.style.display="none",m.hits.length===0?(d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=""):(a.innerHTML="",m.hits.forEach(r=>{const l=document.createElement("div");l.className="card",l.innerHTML=`
    <a href="${r.largeImageURL}" data-lightbox="gallery">
      <img src="${r.webformatURL}" alt="${r.tags}"/>
    </a>
    <div class="card-info">
      <h3 class="img-desc">${r.tags}</h3>
      <div class="img-info">
      <p class="img-stat">Likes:<br>${r.likes}</p>
      <p class="img-stat">Views:<br>${r.views}</p>
      <p class="img-stat">Comments:<br>${r.comments}</p>
      <p class="img-stat">Downloads:<br>${r.downloads}</p>
      </div>
              </div>
   `,a.appendChild(l)}),new g("#gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",history:!1,animationSpeed:250,close:!0}).refresh())}catch(u){console.error("Error:",u)}})});document.querySelector(".content-btn");let c=1,p=15;const h=Math.ceil(110/p);contentBtn.addEventListener("click",async()=>{if(c>h)return d.error({message:"We're sorry, there are no more posts to load"});try{const o=await addContent();c+=1,c>1&&(contentBtn.textContent="Load more")}catch(o){console.log(o)}});
//# sourceMappingURL=commonHelpers.js.map
