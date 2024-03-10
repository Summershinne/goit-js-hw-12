import { fetchData } from './js/pixabay-api.js';
import { render } from './js/render-functions.js'


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
const input = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector(".load-more-btn");
let searchQuery = "";
let currentPage = 1;
let totalHits = 0;
loadMoreBtn.style.display = "none";
const loader = document.querySelector('.loader');
   loader.style.display = 'none';

form.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);
const lightbox =
    new SimpleLightbox('.gallery a', {
        nav: true,
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });
function onSubmit(event) {
    event.preventDefault();
                    loader.style.display = 'block';
    container.innerHTML = "";
    currentPage = 1;
    searchQuery = input.value.trim();
    getImages();
}

function getImages() { 
    fetchData(searchQuery, currentPage).then(data => {
        totalHits = data.totalHits;
        container.insertAdjacentHTML("beforeend", render(data));
                loader.style.display = 'block';

    lightbox.refresh();
        handleLoadMoreButton(data);  
})
    .catch(error => {
        console.log(error);
    });
}
function onLoadMore() {
 currentPage++;
    getImages();
}
function handleLoadMoreButton(data) {
    if (container.children.length < totalHits) {
        loadMoreBtn.style.display = "block";

} else {
    const currentHits = currentPage * 15;
    if (currentHits >= totalHits) {
        loadMoreBtn.style.display = "none";
      iziToast.info({
        title: 'Info',
        message: `We're sorry, but you've reached the end of search results.`,
        backgroundColor: '#4CAF50',
        messageColor: '#fff',
        titleColor: '#fff',
        progressBarColor: '#4CAF50',
        position: 'topRight',
      });
    } else {
        renderMurcup(data); 
        
    } 
    }
    

}

function smoothScroll() {
    const itemHeight = container.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: 3 * itemHeight,
    behavior: "smooth",
  });
};
container.addEventListener("scroll", smoothScroll);
