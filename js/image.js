const gallery = document.querySelector(".gallery");

const images = [
  "../Img/gallery/gallery-1.jpg",
  "../Img/gallery/gallery-2.jpg",
  "../Img/gallery/gallery-4.jpg",
  "../Img/gallery/gallery-5.jpg",
  "../Img/gallery/gallery-3.jpg",
];

images.forEach((element) => {
  gallery.innerHTML += `<img src='${element}' class="img">`;
});

//! modal gallery light-box

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const imgSrc = e.target.getAttribute("src");

    const imageInstance = basicLightbox.create(`
      <img src="${imgSrc}" alt="Modal image" >`);

    imageInstance.show();
  }
});
