const gallery = document.querySelector(".gallery");

const images = [
  "./Img/gallery/gallery-1.jpg",
  "./Img/gallery/gallery-2.jpg",
  "./Img/gallery/gallery-4.jpg",
  "./Img/gallery/gallery-5.jpg",
  "./Img/gallery/gallery-3.jpg",
];

const imageClasses = ["img-1", "img-2", "img-3", "img-4", "img-5"];

images.forEach((element, index) => {
  gallery.innerHTML += `<img src='${element}' class="img ${imageClasses[index]}">`;
});

//! modal gallery light-box

gallery.addEventListener("click", (e) => {
  /* e.target.matches("img") */
  if (e.target.tagName === "IMG") {
    const imgSrc = e.target.getAttribute("src");

    const imageInstance = basicLightbox.create(`
      <div class='lightbox'>
        <div class='btn' aria-label='close'>
          <i class='icon-close btn-close'></i>
        </div>
        <img src='${imgSrc}' alt='Modal image' class='modal-img'>
      </div>
    `);

    imageInstance.show();

    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      imageInstance.close();
    });
  }
});
