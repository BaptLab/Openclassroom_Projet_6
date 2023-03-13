/*Factory pattern de création des éléments lightBox*/
function createLightbox(data, elementPosition) {
  //Récupération du DOM pour futur append
  const modalBg = document.querySelector(".bground");
  modalBg.style.display = "block";

  //création de la section relatif au contenu lightbox et ajout au DOM
  const lightbox = document.createElement("div");
  lightbox.style.display = "block";
  lightbox.setAttribute("open", "");

  modalBg.appendChild(lightbox);

  //création d'un conteneur pour les élements ligthbox
  const lightboxContainer = document.createElement("div");
  lightboxContainer.classList.add("lightbox-container");
  lightbox.classList.add("lightbox");

  //Initialisattion d'un compteur pour naviguer dans parmi les élements
  let i = elementPosition - 1;

  //Récupération des données utiles de la bd json
  const { image, video, title } = data[i];

  //SI le contenu est une vidéo
  if (data[i].hasOwnProperty("video")) {
    //Création de l'élement lightbox vidéo
    const lightboxElement = document.createElement("video");
    lightboxElement.setAttribute(
      "src",
      `./assets/photographers/Sample Photos/${profileData.name}/${video}`
    );
    lightboxElement.setAttribute("id", `element${i + 1}`);
    lightboxElement.classList.add("lightbox-element");
    lightboxElement.setAttribute("controls", "");
    lightboxElement.setAttribute("autoplay", "");
    lightboxElement.setAttribute("alt", title);

    //Création de l'élement description lié à la vidéo
    const lightboxElementDescription = document.createElement("p");
    lightboxElementDescription.classList.add("lightbox-element-description");
    lightboxElementDescription.innerText = title;

    //Ajout des élements au conteneur lightbox
    lightboxContainer.appendChild(lightboxElement);
    lightboxContainer.appendChild(lightboxElementDescription);
  }

  //Même principe SI le contenu est une image
  else if (data[i].hasOwnProperty("image")) {
    const lightboxElement = document.createElement("img");
    lightboxElement.setAttribute(
      "src",
      `./assets/photographers/Sample Photos/${profileData.name}/${image}`
    );
    lightboxElement.setAttribute("id", `element${i}`);
    lightboxElement.classList.add("lightbox-element");
    lightboxElement.setAttribute("alt", title);

    const lightboxElementDescription = document.createElement("p");
    lightboxElementDescription.classList.add("lightbox-element-description");
    lightboxElementDescription.innerText = title;

    lightboxContainer.appendChild(lightboxElement);
    lightboxContainer.appendChild(lightboxElementDescription);
  }

  //Ajout de l'élément au conteneur une fois créé
  lightbox.appendChild(lightboxContainer);

  /*Event de Fermeture lightbox & modalbg*/
  const closelightbox = document.createElement("img");
  closelightbox.setAttribute("src", "./assets/icons/close.svg");
  //accessibilité
  closelightbox.setAttribute("tabindex", "0");
  closelightbox.setAttribute("onkeyup", "onKeyUp(event)");
  closelightbox.setAttribute("aria-label", "Close dialog");
  closelightbox.classList.add("close-lightbox");
  closelightbox.classList.add("nav-btn");
  lightbox.appendChild(closelightbox);

  function closinglightbox() {
    lightbox.style.display = "none";
    lightbox.removeAttribute("open", "");
    modalBg.style.display = "none";
  }

  closelightbox.addEventListener("click", closinglightbox);

  /*Navigation dans les élements lightbox*/
  function nextSlide() {
    if (elementPosition < data.length) {
      modalBg.innerHTML = "";
      elementPosition++;
      createLightbox(data, elementPosition);
    }
  }

  function previousSlide() {
    if (elementPosition > 1) {
      modalBg.innerHTML = "";
      elementPosition--;
      createLightbox(data, elementPosition);
    }
  }

  /*Création boutons de navigation*/

  const rightArrow = document.createElement("img");
  rightArrow.setAttribute("src", "./assets/icons/arrow.png");
  //accessibilité
  rightArrow.setAttribute("tabindex", "0");
  rightArrow.setAttribute("onkeyup", "onKeyUp(event)");
  rightArrow.setAttribute("aria-label", "Next Image");
  rightArrow.classList.add("right-arrow");
  rightArrow.classList.add("nav-btn");

  const leftArrow = document.createElement("img");
  //accessibilité
  leftArrow.setAttribute("tabindex", "0");
  leftArrow.setAttribute("onkeyup", "onKeyUp(event)");
  leftArrow.setAttribute("src", "./assets/icons/arrow.png");
  leftArrow.setAttribute("aria-label", "Previous Image");
  leftArrow.classList.add("left-arrow");
  leftArrow.classList.add("nav-btn");

  //event en cas de clic sur les flêches
  rightArrow.addEventListener("click", nextSlide);
  leftArrow.addEventListener("click", previousSlide);

  //event de pression des touches <- & -> du clavier
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    }
    if (event.key === "ArrowLeft") {
      previousSlide();
    }
    if (event.key === "Escape") {
      closinglightbox();
    }
  });

  /*ajout des flêches au DOM*/
  lightbox.appendChild(leftArrow);
  lightbox.appendChild(rightArrow);

  rightArrow.focus();

  /*Focus Loop*/
  /* Récupération des différents élements focusable*/
  const focusableElements = ".nav-btn";
  const firstFocusableElement = lightbox.querySelectorAll(focusableElements)[0];
  const focusableContent = lightbox.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
  rightArrow.focus();

  return lightbox;
}
