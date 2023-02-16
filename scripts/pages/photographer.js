                            //PAGE PROFIL//

//Fonctions qui récupère les données
/* async function getPhotographers() {
    let photographers = await fetch('../../data/photographers.json');   
    if(photographers.ok) {
        let data = photographers.json();
        filterData(data);
    }
    else {
        alert('Les données n\'ont pas pu être récupérées')
    }
} */


    //fonction qui affiche les données
    async function displayData(photographers) {
        //récupération de l'élement du DOM
        const photographersSection = document.querySelector(".photograph-header");

        //Pour chaque élement du tableau de données (1 élement = 1 objet = 1 profil)
        photographers.forEach((photographer) => {
            //l'objet renvoyé est assigné à une variable
            const photographerModel = photographerFactory(photographer);
            //on assigne à une variable le 3e element de l'objet --> la fonction de modif du DOM
            const userCardDOM = photographerModel.getUserCardDOM();
            //on modifie l'élement du DOM avec la nouvelle variable
            photographersSection.appendChild(userCardDOM);
        });
    };


  //fonction principale
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();


async function filterData() {
    let photographers = await fetch('../../data/photographers.json');   
    if(photographers.ok) {
        let data = photographers.json();
    }
    else {
        alert('Les données n\'ont pas pu être récupérées')
    }

    //récupération de tous les paramètres de l'URL
    let params = (new URL(window.location)).searchParams;
    //récupération de l'ID uniquement
    let idProfile = params.get('id');
    const result = data.filter( (idProfile, id) => 
    { 
        id === idProfile;
    })
}


async function getPhotographers() {
        filterData();
    };