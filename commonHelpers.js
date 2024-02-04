import{i as p,a as g,S as f}from"./assets/vendor-527658dd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const m=document.querySelector(".form"),n=document.getElementById("search-bar");document.querySelector(".submit-btn");const o=document.getElementById("gallery"),i=document.querySelector(".loading"),e=document.getElementById("load-more-btn");let s="",r=1;m.addEventListener("submit",async u=>{if(u.preventDefault(),s=n.value.trim(),r=1,!s){p.error({title:"Error",message:"Please enter a search query."});return}i.style.display="block",o.innerHTML="",e.style.display="none";const l=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`;try{const d=(await g.get(l)).data;i.style.display="none",d.hits.length===0?(p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),o.innerHTML=""):(o.innerHTML="",d.hits.forEach(t=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
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
   `,o.appendChild(a)}),new f("#gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",history:!1,animationSpeed:250,close:!0}).refresh(),d.totalHits>15&&(e.style.display="block"))}catch(c){console.error("Error:",c)}}),e.addEventListener("click",async()=>{r++;const y=`https://pixabay.com/api/?key=42199698-86ec1f577e997e517f326ea6b&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`;try{const c=(await g.get(y)).data;if(c.hits.length===0)e.style.display="none",p.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});else{c.hits.forEach(t=>{const a=document.createElement("div");a.className="card",a.innerHTML=`
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
        `,o.appendChild(a)}),new f("#gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom",history:!1,animationSpeed:250,close:!0}).refresh();const h=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy(0,h*2)}}catch(l){console.error("Error:",l)}})});
//# sourceMappingURL=commonHelpers.js.map
