 //Fonctions qui récupère les données
 async function getPhotographers() {
    const photographers = await fetch('./data/photographers.json');   
    if (photographers.ok) {
        const data = await photographers.json();
        const params = new URLSearchParams(window.location.search);
        const idProfile = params.get('id');

        const filteredPhotographerData = data.photographers.filter((item) => {
            return item.id == idProfile;
        });   
        const filteredMediaData = data.media.filter((item) => {
            return item.photographerId == idProfile;
        });

        return filteredData = [filteredMediaData, profileData = filteredPhotographerData[0]];
        /* retourne un tableau avec :
        [0] = données relatives au TRAVAIL du photographe
        [1] = données relatives au PROFIL du photographe */

    } else {
      alert('Les données n\'ont pas pu être récupérées')
    }
  }
  


async function init() {
    const profile = await getPhotographers();
    displayProfile(profile);
    displayMedia(profile);
};

init(); 
