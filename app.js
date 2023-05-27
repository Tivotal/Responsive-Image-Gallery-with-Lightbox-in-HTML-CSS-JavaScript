/* Created by Tivotal */

let images = document.querySelectorAll(".gallery .img");
let lightbox = document.querySelector(".lightbox");
let closeBtn = document.querySelector(".close-icon");

//lopping through all images
images.forEach((image) => {
  //click event for image
  image.addEventListener("click", () => {
    //calling showLightbox function with clicked image source passing as argument
    showLightBox(image.querySelector("img").src);
  });
});

let showLightBox = (src) => {
  //passing argument src as preview image source
  lightbox.querySelector("img").src = src;

  //showing lightbox
  lightbox.classList.add("show");

  //restricting document scrolling when lightbox is shown
  document.body.style.overflow = "hidden";
};

closeBtn.addEventListener("click", () => {
  //hiding lightbox
  lightbox.classList.remove("show");

  //making document scrollable
  document.body.style.overflow = "auto";
});
