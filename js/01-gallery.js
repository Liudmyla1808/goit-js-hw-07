import { galleryItems } from './gallery-items.js';
// Change code below this line

 const divEl = document.querySelector('.gallery');

 const Gallery = galleryItems.map(({preview, original, description}) => 
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
        </div> `).join('');
        divEl.insertAdjacentHTML ("beforeend", Gallery );

divEl.addEventListener('click', onClickImg);

function onClickImg (e) {
e.preventDefault();
if (!e.target.classList.contains('gallery__image')) {
    return
}
const largeImg = e.target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`)

instance.show()
}
window.addEventListener("keydown", (e) => 
{
    if (e.code === "Escape") {
        instance.close();
    }
});
