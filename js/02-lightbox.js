import { galleryItems } from "./gallery-items.js";
// Change code below this line

function getContentTemplate(dataArr) {
  const contentArr = dataArr.map((item) => {
    return `
          <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}"
          alt="${item.description}"/>
          </a>
          </li>
          `;
  });
  return contentArr.join("");
}

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", getContentTemplate(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
