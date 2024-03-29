/*factory pattern pour afficher les différents profils de photograhes sur la page d'accueil*/
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data; // => name = data.name & portrait = data.portrait --> nouvel syntaxe es6
  const picture = `./assets/photographers/Sample_Photos/Photographers_ID_Photos/${portrait}`; //portrait = data.portrait

  //fonction de modification du DOM = création de la card portrait
  function getUserCardDOM() {
    //Création de l'élement parent
    const article = document.createElement("article");

    //Img
    const photographersPicture = document.createElement("img");
    photographersPicture.setAttribute("src", picture);
    photographersPicture.setAttribute("alt", name);

    //Name
    const photographerName = document.createElement("h2");
    photographerName.textContent = name;

    //IMG + NAME link
    const photographerLink = document.createElement("a");
    photographerLink.setAttribute("href", "#");
    photographerLink.setAttribute("aria-label", `${name} - Profil`);
    photographerLink.appendChild(photographersPicture);
    photographerLink.appendChild(photographerName);
    article.appendChild(photographerLink);

    //Country + City
    const photographerLocation = document.createElement("p");
    photographerLocation.innerText = `${city}, ${country}`;
    article.appendChild(photographerLocation);
    photographerLocation.classList.add("location");

    //Tagline
    const photographerTagline = document.createElement("p");
    photographerTagline.innerText = tagline;
    article.appendChild(photographerTagline);
    photographerTagline.classList.add("tagline");

    //Price
    const photographerPrice = document.createElement("p");
    photographerPrice.innerText = `${price}€/jours`;
    article.appendChild(photographerPrice);
    photographerPrice.classList.add("price");

    //ID
    article.setAttribute("id", id);

    //Creation du lien de redirection
    article.addEventListener("click", () => {
      let urlProfile = `./photographer.html?id=${id}`;
      photographerLink.setAttribute("href", urlProfile);
    });

    return article;
  }

  return { name, picture, getUserCardDOM };
}
