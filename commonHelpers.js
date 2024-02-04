import{i as p,a as f}from"./assets/vendor-83076bc5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const m=document.querySelector(".form"),n=document.getElementById("search-bar");document.querySelector(".submit-btn");const o=document.getElementById("gallery"),c=document.querySelector(".loading"),e=document.getElementById("load-more-btn");let r="",s=1;m.addEventListener("submit",async u=>{if(u.preventDefault(),r=n.value.trim(),s=1,!r){p.error({title:"Error",message:"Please enter a search query."});return}c.style.display="block",o.innerHTML="",e.style.display="none";const d=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`;try{const l=(await f.get(d)).data;c.style.display="none",l.hits.length===0?(p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML=""):(o.innerHTML="",l.hits.forEach(t=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
    <a href="${t.largeImageURL}" data-lightbox="gallery">
      <img src="${t.webformatURL}" alt="${t.tags}"/>
    </a>
    <div class="card-info">
      <h3 class="img-desc">${t.tags}</h3>
      <div class="img-info">
      <p class="img-stat">Likes:<br>${t.likes}</p>
      <p class="img-stat">Views:<br>${t.views}</p>
      <p class="img-stat">Comments:<br>${t.comments}</p>
      <p class="img-stat">Downloads:<br>${t.downloads}</p>
      </div>
              </div>
   `,o.appendChild(a)}),l.totalHits>15&&(e.style.display="block"))}catch(i){console.error("Error:",i)}}),e.addEventListener("click",async()=>{s++;const y=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`;try{const i=(await f.get(y)).data;if(i.hits.length===0)e.style.display="none",p.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});else{i.hits.forEach(t=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
          <a href="${t.largeImageURL}" data-lightbox="gallery">
            <img src="${t.webformatURL}" alt="${t.tags}"/>
          </a>
          <div class="card-info">
            <h3 class="img-desc">${t.tags}</h3>
            <div class="img-info">
              <p class="img-stat">Likes:<br>${t.likes}</p>
              <p class="img-stat">Views:<br>${t.views}</p>
              <p class="img-stat">Comments:<br>${t.comments}</p>
              <p class="img-stat">Downloads:<br>${t.downloads}</p>
            </div>
          </div>
        `,o.appendChild(a)});const l=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy(0,l*2)}}catch(d){console.error("Error:",d)}})});
//# sourceMappingURL=commonHelpers.js.map
