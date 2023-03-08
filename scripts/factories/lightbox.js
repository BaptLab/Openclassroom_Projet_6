/*Factory pattern de création des éléments lightBox*/
function createLightbox(data, elementPosition) {

    //Récupération du DOM pour futur append
    const modalBg = document.querySelector('.bground');
    modalBg.style.display = "block";

    //création de la section relatif au contenu lightbox et ajout au DOM
    const lightbox = document.createElement('div')
    lightbox.style.display = "block";
    modalBg.appendChild(lightbox);

    //création d'un conteneur pour les élements ligthbox
    const lightboxContainer = document.createElement('div');
    lightboxContainer.classList.add('lightbox-container');
    lightbox.classList.add('lightbox');

    //Initialisattion d'un compteur pour naviguer dans parmi les élements
    let i = elementPosition-1 

    //Récupération des données utiles de la bd json
    const {image, video, title} = data[i];

    //SI le contenu est une vidéo
    if(data[i].hasOwnProperty('video')) {

        //Création de l'élement lightbox vidéo
        const lightboxElement = document.createElement('video');
        lightboxElement.setAttribute('src',`./assets/photographers/Sample Photos/${profileData.name}/${video}`);
        lightboxElement.setAttribute('id',`element${i+1}`);            
        lightboxElement.classList.add('lightbox-element');
        lightboxElement.setAttribute('controls', '');
        lightboxElement.setAttribute('autoplay', '');
        lightboxElement.setAttribute('alt', title);

        //Création de l'élement description lié à la vidéo
        const lightboxElementDescription = document.createElement('p');
        lightboxElementDescription.classList.add('lightbox-element-description');
        lightboxElementDescription.innerText = title;

        //Ajout des élements au conteneur lightbox
        lightboxContainer.appendChild(lightboxElement);
        lightboxContainer.appendChild(lightboxElementDescription);

    }

    //Même principe SI le contenu est une image
    else if(data[i].hasOwnProperty('image')) {
        const lightboxElement = document.createElement('img');
        lightboxElement.setAttribute('src', `./assets/photographers/Sample Photos/${profileData.name}/${image}`);
        lightboxElement.setAttribute('id',`element${i}`);            
        lightboxElement.classList.add('lightbox-element');
        lightboxElement.setAttribute('alt', title);

        const lightboxElementDescription = document.createElement('p');
        lightboxElementDescription.classList.add('lightbox-element-description');
        lightboxElementDescription.innerText = title;

        lightboxContainer.appendChild(lightboxElement);
        lightboxContainer.appendChild(lightboxElementDescription);
    }

    //Ajout de l'élément au conteneur une fois créé
    lightbox.appendChild(lightboxContainer);
    


    /*Event de Fermeture lightbox & modalbg*/
    const closelightbox = document.createElement('img');
    closelightbox.setAttribute('src', './assets/icons/close.svg');
    closelightbox.classList.add('close-lightbox');
    lightbox.appendChild(closelightbox);

    closelightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        modalBg.style.display = "none";
    })


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

    const rightArrow = document.createElement('img');
    rightArrow.setAttribute('src', './assets/icons/arrow.png');
    rightArrow.classList.add('right-arrow');

    const leftArrow = document.createElement('img');
    leftArrow.setAttribute('src', './assets/icons/arrow.png');
    leftArrow.classList.add('left-arrow');

    //event en cas de clic sur les flêches
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', previousSlide);

    //event de pression des touches <- & -> du clavier
    document.addEventListener("keydown", (event)=> {
        if (event.keyCode === 39) {
            nextSlide();
        }
        else if (event.keyCode === 37) {
            previousSlide();
        }
    });
    
    /*ajout des flêches au DOM*/
    lightbox.appendChild(leftArrow);
    lightbox.appendChild(rightArrow);
   
    return lightbox;
}



