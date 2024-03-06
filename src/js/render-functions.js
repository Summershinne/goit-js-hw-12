export function render(images) {
const murckup = images.hits
        .map(image => `<div class="gallery-item">
                <a class="item-link" href="${image.largeImageURL}"> 
                    <img
                        class="item-image"
                        src="${image.webformatURL}"
                        alt="${image.tags}"
                        /></a>
                    <div class="item-image-info">
                        <p class="info-title">Likes <span class="info-data">${image.likes}</span></p>
                        <p class="info-title">Views <span class="info-data">${image.views}</span></p>
                        <p class="info-title">Comments <span class="info-data">${image.comments}</span></p>
                        <p class="info-title">Downloads <span class="info-data">${image.downloads}</span></p>
                    </div>
               
            </div>
            `)
    .join("");
    return  murckup
}