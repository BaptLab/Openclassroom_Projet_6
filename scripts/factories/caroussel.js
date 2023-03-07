function createCaroussel(data, elementPosition) {

    //récupération DOM utile 
    const modalBg = document.querySelector('.bground');


    //création de la section relatif au caroussel
    const caroussel = document.createElement('div')

    //création d'un conteneur pour les élementts
    const carousselContainer = document.createElement('div');
    carousselContainer.classList.add('caroussel-container');
    caroussel.classList.add('caroussel');


    //Initialisattion d'un compteur pour naviguer dans le caroussel
    let i = elementPosition-1 

    //Récupération des données utiles
    const {image, video, title} = data[i];

    //si le contenu est une vidéo
    if(data[i].hasOwnProperty('video')) {
        const carousselElement = document.createElement('video');
        carousselElement.setAttribute('src',`./assets/photographers/Sample Photos/${profileData.name}/${video}`);
        carousselElement.setAttribute('id',`element${i+1}`);            
        carousselElement.classList.add('caroussel-element');
        carousselElement.setAttribute('controls', '');
        carousselElement.setAttribute('autoplay', '');

        const carousselElementDescription = document.createElement('p');
        carousselElementDescription.classList.add('caroussel-element-description');
        carousselElementDescription.innerText = title;

        carousselContainer.appendChild(carousselElement);
        carousselContainer.appendChild(carousselElementDescription);

        }
    //si le contenu est une image
    else if(data[i].hasOwnProperty('image')) {
        const carousselElement = document.createElement('img');
        carousselElement.setAttribute('src', `./assets/photographers/Sample Photos/${profileData.name}/${image}`);
        carousselElement.setAttribute('id',`element${i}`);            
        carousselElement.classList.add('caroussel-element');

        const carousselElementDescription = document.createElement('p');
        carousselElementDescription.classList.add('caroussel-element-description');
        carousselElementDescription.innerText = title;

        carousselContainer.appendChild(carousselElement);
        carousselContainer.appendChild(carousselElementDescription);

        }

    caroussel.style.display = "flex";
    modalBg.style.display = "block";

    modalBg.appendChild(caroussel);
    caroussel.appendChild(carousselContainer);
    

    //Fermeture caroussel & modal
    const closeCaroussel = document.createElement('img');
    closeCaroussel.setAttribute('src', './assets/icons/close.svg');
    closeCaroussel.classList.add('close-caroussel');
    caroussel.appendChild(closeCaroussel);

    closeCaroussel.addEventListener('click', () => {
        caroussel.style.display = 'none';
        modalBg.style.display = "none";
    })


    //Création boutons de navigation
    const rightArrow = document.createElement('img');
    rightArrow.setAttribute('src', './assets/icons/arrow.png');
    rightArrow.classList.add('right-arrow');

    const leftArrow = document.createElement('img');
    leftArrow.setAttribute('src', './assets/icons/arrow.png');
    leftArrow.classList.add('left-arrow');


    //Navigation dans la gallerie
    function nextSlide() { 
        if (elementPosition < data.length) {
            modalBg.innerHTML = "";
            elementPosition++;
            createCaroussel(data, elementPosition);
        }
    }
    
    function previousSlide() { 
        if (elementPosition > 1) {
            modalBg.innerHTML = "";
            elementPosition--;
            createCaroussel(data, elementPosition);
        }
    }
    
    //event de click sur les flêches
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', previousSlide);
    
    //event de pression des touches <- & ->
    document.addEventListener("keydown", (event)=> {
        if (event.keyCode === 39) {
            nextSlide();
        }
        else if (event.keyCode === 37) {
            previousSlide();
        }
    });
    

    //ajout DOM des flêches
    caroussel.appendChild(leftArrow);
    caroussel.appendChild(rightArrow);
   
    return caroussel;
}



