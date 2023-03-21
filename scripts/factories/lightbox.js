/*Factory pattern de création des éléments lightBox*/
function createLightbox() {
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
  lightbox.setAttribute("aria-label", "image closeup view");
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
    modalBg.innerHTML = "";
    modalBg.style.display = "none";
  }
  closelightbox.addEventListener("click", closinglightbox);

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

function displayLightboxElement(data, elementPosition) {
  //Initialisattion d'un compteur pour naviguer dans parmi les élements
  lightboxContainer = document.querySelector(".lightbox-container");
  //Récupération des données utiles de la bd json

  for (let j = 0; j < data.length; j++) {
    const { image, video, title } = data[j];
    //SI le contenu est une vidéo
    if (Object.prototype.hasOwnProperty.call(data[j], "video")) {
      //Création de l'élement lightbox vidéo
      const lightboxElement = document.createElement("video");
      lightboxElement.setAttribute(
        "src",
        `./assets/photographers/Sample Photos/${profileData.name}/${video}`
      );
      lightboxElement.setAttribute("id", `element${j + 1}`);
      lightboxElement.classList.add("lightbox-element");
      lightboxElement.setAttribute("controls", "");
      lightboxElement.setAttribute("autoplay", "");
      lightboxElement.setAttribute("alt", title);
      lightboxElement.style.display = "none";
      //Création de l'élement description lié à la vidéo
      const lightboxElementDescription = document.createElement("p");
      lightboxElementDescription.setAttribute("id", `description${j + 1}`);
      lightboxElementDescription.classList.add("lightbox-element-description");
      lightboxElementDescription.innerText = title;

      //laisse apparaître l'élément cliqué uniquement
      if (j == elementPosition - 1) {
        lightboxElement.style.display = "block";
      } else {
        lightboxElement.style.display = "none";
      }

      lightboxElementDescription.style.display = "none";

      //Ajout des élements au conteneur lightbox
      lightboxContainer.appendChild(lightboxElement);
      lightboxContainer.appendChild(lightboxElementDescription);
    }

    //Même principe SI le contenu est une image
    else if (Object.prototype.hasOwnProperty.call(data[j], "image")) {
      const lightboxElement = document.createElement("img");
      lightboxElement.setAttribute(
        "src",
        `./assets/photographers/Sample Photos/${profileData.name}/${image}`
      );
      lightboxElement.setAttribute("id", `element${j + 1}`);
      lightboxElement.classList.add("lightbox-element");
      lightboxElement.setAttribute("alt", title);

      //laisse apparaître l'élément cliqué uniquement
      if (j == elementPosition - 1) {
        lightboxElement.style.display = "block";
      } else {
        lightboxElement.style.display = "none";
      }

      const lightboxElementDescription = document.createElement("p");
      lightboxElementDescription.setAttribute("id", `description${j + 1}`);
      lightboxElementDescription.classList.add("lightbox-element-description");
      lightboxElementDescription.innerText = title;
      lightboxElementDescription.style.display = "none";
      if (j == elementPosition - 1) {
        lightboxElementDescription.style.display = "block";
      } else {
        lightboxElementDescription.style.display = "none";
      }

      lightboxContainer.appendChild(lightboxElement);
      lightboxContainer.appendChild(lightboxElementDescription);
    }
  }

  /*Navigation dans les élements lightbox*/
  function nextSlide() {
    //SI ce n'est PAS le dernier élement ET l'élément de "transition"
    console.log(elementPosition);
    console.log(data.length);
    if (elementPosition < data.length && elementPosition != 0) {
      document.querySelector("#element" + elementPosition).style.display =
        "none";
      document.querySelector("#description" + elementPosition).style.display =
        "none";
      elementPosition++;
      document.querySelector("#element" + elementPosition).style.display =
        "block";
      document.querySelector("#description" + elementPosition).style.display =
        "block";
    }
    //SI c'est le dernier élement de la boucle
    else if (elementPosition == data.length) {
      document.querySelector("#element" + elementPosition).style.display =
        "none";
      document.querySelector("#description" + elementPosition).style.display =
        "none";
      //on attribue une valeur de transition et on relance la fonction
      elementPosition = 0;
      nextSlide();
    }
    //Si il s'agit de la valeur de transition
    else {
      elementPosition++;
      document.querySelector("#element" + elementPosition).style.display =
        "block";
      document.querySelector("#description" + elementPosition).style.display =
        "block";
    }
  }

  //Même principe en sens inverse
  function previousSlide() {
    console.log(elementPosition);
    if (elementPosition > 1 && elementPosition != data.length + 1) {
      document.querySelector("#element" + elementPosition).style.display =
        "none";
      document.querySelector("#description" + elementPosition).style.display =
        "none";
      elementPosition--;
      document.querySelector("#element" + elementPosition).style.display =
        "block";
      document.querySelector("#description" + elementPosition).style.display =
        "block";
    } else if (elementPosition == 1) {
      document.querySelector("#element" + elementPosition).style.display =
        "none";
      document.querySelector("#description" + elementPosition).style.display =
        "none";
      elementPosition = data.length + 1;
      previousSlide();
    } else {
      elementPosition--;
      document.querySelector("#element" + elementPosition).style.display =
        "block";
      document.querySelector("#description" + elementPosition).style.display =
        "block";
    }
  }

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

  //event en cas de clic sur les flêches
  document.querySelector(".right-arrow").addEventListener("click", nextSlide);
  document
    .querySelector(".left-arrow")
    .addEventListener("click", previousSlide);
}
