//factory pattern - fonction entière
function displayProfile(data) {

    const profileData = data[1];
    
    const photographersHeader = document.querySelector(".photograph-header");
    const { name, portrait, city, country, tagline, price, id } = profileData; 
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
    photographersPicture.setAttribute("alt", '' )


    //Append to the DOM
    photographersHeader.prepend(infos);
    photographersHeader.appendChild(photographersPicture);


    //Country + City
    photographerLocation.classList.add('location');

    //Tagline
    photographerTagline.classList.add('tagline');

        //Price
       /*  const photographerPrice = document.createElement('p');
        photographerPrice.innerText = `${price}€/jours`;
        article.appendChild(photographerPrice);
        photographerPrice.classList.add('price'); */

        //ID
        /* article.setAttribute('id', id) */


        //Creation du lien de redirection 
        /* article.addEventListener('click', (event) =>{
            let urlProfile = `../../photographer.html?id=${id}`;
            photographerLink.setAttribute('href', urlProfile)
        }) */

    }

