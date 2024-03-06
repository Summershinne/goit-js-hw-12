import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = '42718144-5d5fd5e0a4a425e2316f701b3';
const BASE_URI = 'https://pixabay.com/api/';
export function getImages(searchQuery) {
    const params = new URLSearchParams({
        key: KEY,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });
    return fetch(`${BASE_URI}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Search failed");
            }
            return response.json()
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            }
            return data;
        })
        .catch(error => console.error('Error fetching data:', error));
    
}
