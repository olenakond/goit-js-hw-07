import { galleryItems } from "./gallery-items.js";
// Change code below this line

function getContentTemplate(dataArr) {
  const contentArr = dataArr.map((item) => {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </li>
        `;
  });
  return contentArr.join("");
}

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", getContentTemplate(galleryItems));

galleryList.addEventListener("click", modalOpen);

const instance = basicLightbox.create(`
<img src="" width="800" height="600">
`, {
  onShow: (instance) => document.addEventListener("keydown", modalCloseWithEscape),
  onClose: (instance) => document.removeEventListener("keydown", modalCloseWithEscape)
});

function modalOpen(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const originalImgUrl = event.target.dataset.source;
    const instanceElement = instance.element().querySelector("img");
    instanceElement.src = originalImgUrl;
    instance.show();
  }
}

function modalCloseWithEscape(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
