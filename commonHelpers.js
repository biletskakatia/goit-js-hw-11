import{i as c,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="43802076-938fa3042b8f90b237e1b6cb9",h="https://pixabay.com/api/",m=s=>{const o=new URLSearchParams({q:s,key:p,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})},f=s=>s.map(({webformatURL:o,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:d})=>`
        <li class="gallery-item">
                <a href="${t}" >
                    <img src="${o}" alt="${a}" class="gallery-img" />
                </a>
                <div class="details">
        <div class="detail-row">
            <p>Likes:</p>
            <span>${e}</span>
        </div>
        <div class="detail-row">
            <p>Views:</p>
            <span>${r}</span>
        </div>
        <div class="detail-row">
            <p>Comments:</p>
            <span>${i}</span>
        </div>
        <div class="detail-row">
            <p>Downloads:</p>
            <span>${d}</span>
        </div>
    </div>
            </li>
        `).join(""),g=document.querySelector(".js-search-form"),n=document.querySelector(".gallery"),l=document.querySelector(".js-loader");function y(s){s.preventDefault();const o=s.target.querySelector(".search-input").value.trim();if(o===""){n.innerHTML="",s.target.reset(),c.error({title:"Error",message:"Illegal operation, enter a name",position:"topRight"});return}n.innerHTML="",console.log("Removing is-hidden class"),l.classList.remove("is-hidden"),m(o).then(t=>{(t.total===0||!t.hits)&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML=f(t.hits),new u(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom"}).refresh()}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),console.log("Adding is-hidden class"),l.classList.add("is-hidden")})}g.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
