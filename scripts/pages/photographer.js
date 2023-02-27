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
        const filteredmediaData = data.media.filter((item) => {
            return item.photographerId == idProfile;
        });

        return filteredData = [filteredmediaData, profileData = filteredPhotographerData[0]];
        /* retourne un tableau avec :
        [0] = données relatives au TRAVAIL du photographe
        [1] = données relatives au PROFIL du photographe */

    } else {
      alert('Les données n\'ont pas pu être récupérées')
    }
  }
  



async function init() {

    //distinction des deux groupes de données
    const [mediaData, profileData] = await getPhotographers();

    displayProfile(profileData);
    displayMedia(mediaData);

};

init(); 



//done
async function orderByPopularity() {

  const allData =  await getPhotographers()
  const orderedData = allData[0];

  orderedData.sort(function(a,b) {
    return b.likes - a.likes;
    
  })
  document.querySelector('.picture-section').innerHTML = "";
  displayMedia(orderedData);
}

//done
async function orderByDate() {

  const allData =  await getPhotographers()
  const orderedData = allData[0];

  orderedData.sort(function(a,b) {
    return a.date - b.date;
    
  })
  document.querySelector('.picture-section').innerHTML = "";
  displayMedia(orderedData);
}

//done
async function orderByTitle() {
  
  const allData = await getPhotographers();
  const orderedData = allData[0];

  orderedData.sort(function(a,b) {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
  document.querySelector('.picture-section').innerHTML = "";
  displayMedia(orderedData);
}

//done
const dateBtn = document.querySelector('#sort-btn');
dateBtn.addEventListener('change', (e) => {
  console.log(e.target.value)
  if (e.target.value === 'Popularité') {
    orderByPopularity();
  }
  if (e.target.value === 'Date') {
    orderByDate();
  }
  if (e.target.value === 'Titre') {
    orderByTitle();
  }
});
