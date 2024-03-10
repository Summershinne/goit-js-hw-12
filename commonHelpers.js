import{a as h,i as f,S as y}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="42718144-5d5fd5e0a4a425e2316f701b3",b="https://pixabay.com/api/";let L=15;async function w(t,s){const o=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:L});try{const n=await h.get(`${b}?${o}`);if(!n.status===200)throw new Error("Network response was not OK!");const e=n.data;return e.hits.length===0&&f.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),e}catch(n){console.error("Error fetching data:",n)}}function v(t){return t.hits.map(o=>`<div class="gallery-item">
                <a class="item-link" href="${o.largeImageURL}"> 
                    <img
                        class="item-image"
                        src="${o.webformatURL}"
                        alt="${o.tags}"
                        /></a>
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${o.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${o.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${o.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${o.downloads}</span></p>
                    </div>
               
            </div>
            `).join("")}const S=document.querySelector("#searchForm"),a=document.querySelector(".gallery"),C=document.querySelector('[name="searchQuery"]'),i=document.querySelector(".load-more-btn"),d=document.querySelector(".loader");let p="",l=1,u=0;i.style.display="none";d.style.display="none";S.addEventListener("submit",$);i.addEventListener("click",q);const E=new y(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:250});function $(t){t.preventDefault(),d.style.display="block",a.innerHTML="",l=1,p=C.value.trim(),m()}function m(){w(p,l).then(t=>{u=t.totalHits,a.insertAdjacentHTML("beforeend",v(t)),d.style.display="none",E.refresh(),P(t)}).catch(t=>{console.log(t)})}function q(){l++,m()}function P(t){a.children.length<u?i.style.display="block":l*15>=u?(i.style.display="none",f.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4CAF50",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#4CAF50",position:"topRight"})):renderMurcup(t)}function k(){const t=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*t,behavior:"smooth"})}a.addEventListener("scroll",k);
//# sourceMappingURL=commonHelpers.js.map
