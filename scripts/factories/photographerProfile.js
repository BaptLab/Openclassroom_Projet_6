/*factory pattern pour la génération du profil du photographe sur sa page personnelle*/
function displayProfile(data) {

    const photographersHeader = document.querySelector(".photograph-header");
    const { name, portrait, city, country, tagline, price, id } = data; 
    const picture = `./assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;

    //creation du div avec nom/city/country/tagline
    const infos = document.createElement('div');

    //Name
    const photographerName = document.createElement( 'h1' );
    photographerName.textContent = name;

    //City + country
    const photographerLocation = document.createElement('p');
    photographerLocation.innerText = `${city}, ${country}`;

    //tagline
    const photographerTagline = document.createElement('p');
    photographerTagline.innerText = tagline;

    //Append to the block
    infos.appendChild(photographerName);
    infos.appendChild(photographerLocation);
    infos.appendChild(photographerTagline);

    //Img
    const photographersPicture = document.createElement( 'img' );
    photographersPicture.setAttribute("src", picture)
    photographersPicture.setAttribute("alt", name )

    //Append to the DOM
    photographersHeader.prepend(infos);
    photographersHeader.appendChild(photographersPicture);

    //Country + City
    photographerLocation.classList.add('location');

    //Tagline
    photographerTagline.classList.add('tagline');

    //Price
    document.querySelector('#price').innerText = `${price}€/jours`;
}