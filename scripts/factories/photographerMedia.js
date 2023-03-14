/*Factory Pattern des contenus photos/vidéo*/
function displayMedia(data) {
  //data est un tableau comprenant toutes les photos/vidéos (objets) du photographe en question

  //boucle qui parcoure  chaque objet du tableau
  for (i = 0; i < data.length; i++) {
    //récupération des propriété utiles de chaque objet (photo ou vidéo) du tableau
    const { image, title, video, likes } = data[i];

    //récupération de la section général des images/vidéos
    const pictureSection = document.querySelector(".picture-section");

    //création objet SI le contenu de l'objet est une VIDEO
    if (Object.prototype.hasOwnProperty.call(data[i], "video")) {
      /*Création*/

      //Création de l'article (conteneur)
      const pictureArticle = document.createElement("article");
      pictureArticle.classList.add("picture-article");
      pictureArticle.setAttribute("id", `${i + 1}`);

      //Création de l'élement vidéo
      const videoContent = document.createElement("video");
      videoContent.classList.add("content");
      videoContent.setAttribute(
        "src",
        `./assets/photographers/Sample Photos/${profileData.name}/${video}`
      );
      videoContent.setAttribute("alt", title);
      //accessibilité
      videoContent.setAttribute("tabindex", "0");
      videoContent.setAttribute("onkeyup", "onKeyUp(event)");

      //Création de la section description (conteneur)
      const articleDescriptionSection = document.createElement("div");
      articleDescriptionSection.classList.add("article-description");

      //Création de la description de l'élement
      const pictureDescription = document.createElement("h3");
      pictureDescription.innerText = title;

      //Création de la partie likes
      const countSection = document.createElement("div");
      countSection.classList.add("count-section");

      //Création du compteur de like avec icone coeur
      const likesCount = document.createElement("span");
      likesCount.innerText = likes;

      const heart = document.createElement("i");
      heart.setAttribute("aria-label", "likes");
      heart.classList.add("no-liked");
      heart.classList.add("like-btn");
      heart.classList.add("fa-regular");
      heart.classList.add("fa-heart");
      //accessibilité
      heart.setAttribute("tabindex", "0");
      heart.setAttribute("onkeyup", "onKeyUp(event)");

      //Ajout du coeur et compteur à la partie likes
      countSection.appendChild(likesCount);
      countSection.appendChild(heart);

      /*Append*/

      //Ajout de la partie like & description à la section description
      articleDescriptionSection.appendChild(pictureDescription);
      articleDescriptionSection.appendChild(countSection);

      //Ajout de l'élement vidéo et de sa section description à l'article
      pictureArticle.appendChild(videoContent);
      pictureArticle.appendChild(articleDescriptionSection);

      //Ajout de l'article à la section
      pictureSection.appendChild(pictureArticle);
    }

    //Même principe avec la création d'un élément SI le contenu de l'objet est une IMAGE
    else if (Object.prototype.hasOwnProperty.call(data[i], "image")) {
      /*Création*/
      const pictureArticle = document.createElement("article");
      pictureArticle.classList.add("picture-article");
      pictureArticle.setAttribute("id", `${i + 1}`);

      const pictureContent = document.createElement("img");
      pictureContent.classList.add("content");
      pictureContent.setAttribute(
        "src",
        `./assets/photographers/Sample Photos/${profileData.name}/${image}`
      );
      pictureContent.setAttribute("alt", title);
      //accessibilité
      pictureContent.setAttribute("tabindex", "0");
      pictureContent.setAttribute("onkeyup", "onKeyUp(event)");

      const articleDescriptionSection = document.createElement("div");
      articleDescriptionSection.classList.add("article-description");

      const pictureDescription = document.createElement("h3");
      pictureDescription.innerText = title;

      const likesCount = document.createElement("span");
      likesCount.classList.add("likes");
      likesCount.innerText = likes;

      const heart = document.createElement("i");
      heart.setAttribute("aria-label", "likes");
      heart.classList.add("like-btn");
      heart.classList.add("no-liked");
      heart.classList.add("fa-regular");
      heart.classList.add("fa-heart");
      //accessibilité
      heart.setAttribute("tabindex", "0");
      heart.setAttribute("onkeyup", "onKeyUp(event)");

      const countSection = document.createElement("div");
      countSection.classList.add("count-section");
      countSection.appendChild(likesCount);
      countSection.appendChild(heart);

      /*Append*/
      articleDescriptionSection.appendChild(pictureDescription);
      articleDescriptionSection.appendChild(countSection);

      pictureArticle.appendChild(pictureContent);
      pictureArticle.appendChild(articleDescriptionSection);

      pictureSection.appendChild(pictureArticle);
    }
  }

  /*Event de création de lightbox*/

  const contents = document.querySelectorAll(".content");
  //On parcourt chaque élement vidéo/photo pour y ajouter l'évènement
  for (let i = 0; i < contents.length; i++) {
    contents[i].addEventListener("click", (elementClicked) => {
      //on récupère la position de l'élement inscrite via son attribut ID
      const elementPosition = elementClicked.target.parentElement.id;
      createLightbox(data, elementPosition);
    });
  }
}
