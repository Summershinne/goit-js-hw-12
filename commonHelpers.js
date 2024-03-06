import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="42718144-5d5fd5e0a4a425e2316f701b3",p="https://pixabay.com/api/";function m(o){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(e=>{if(!e.ok)throw new Error("Search failed");return e.json()}).then(e=>(e.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e)).catch(e=>console.error("Error fetching data:",e))}function h(o){return o.hits.map(e=>`<div class="gallery-item">
                <a class="item-link" href="${e.largeImageURL}"> 
                    <img
                        class="item-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                        /></a>
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${e.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${e.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${e.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${e.downloads}</span></p>
                    </div>
               
            </div>
            `).join("")}const y=document.querySelector("#searchForm"),i=document.querySelector(".gallery"),g=document.querySelector('[name="searchQuery"]'),c=document.querySelector(".load");let l="";y.addEventListener("submit",v);const L=new d(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:250});function v(o){o.preventDefault(),c.classList.remove("visually-hidden"),i.innerHTML="",l=g.value.trim(),m(l).then(s=>{c.classList.add("visually-hidden"),i.insertAdjacentHTML("beforeend",h(s)),L.refresh()}).catch(s=>{console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map
