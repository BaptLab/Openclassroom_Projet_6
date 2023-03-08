/*Fonctions qui récupère les données*/

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

  } else {
    alert('Les données n\'ont pas pu être récupérées')
  }
}
  


function likeInteraction () {

  /*Compteur de likes général du photographe*/

  const allLikes = document.querySelectorAll('p.likes');
  let totalLikes = 0;
  //On parcours tous les compteur de like locaux et on les additionne
  for (let i = 0; i < allLikes.length; i++) {
      const likes = parseInt(allLikes[i].textContent);
      if (!isNaN(likes)) {
          totalLikes += likes;
      }
    }
  //display du total dans le DOM
  document.querySelector('#likes-total').innerText = totalLikes;


  /*Compteur de like propre à l'élement photo/vidéo + lien avec le compteur général*/

  const likeBtn = document.querySelectorAll('.like-btn');
  //On parcourt tous les compteurs locaux et on leur ajoute un évenement
  for(let i = 0; i<likeBtn.length; i++)
  likeBtn[i].addEventListener('click', () => {

    //SI non-liké
    if (likeBtn[i].classList.contains("fa-regular"))  
      {
      //incrément du compteur local
      const localCount = likeBtn[i].previousElementSibling;
      localCount.innerHTML  = parseInt(localCount.textContent)+1;

      //changement de style du coeur
      likeBtn[i].classList.add('fa-solid');
      likeBtn[i].classList.remove('fa-regular');

      //Incrément du compteur général
      let totalLike = document.querySelector('#likes-total');
      let actualTotal = parseInt(totalLike.textContent);
      actualTotal = actualTotal + 1;
      totalLike.innerText = actualTotal;
      }

      //SI déjà liké
      else if (likeBtn[i].classList.contains("fa-solid"))
      {
      //Décrément du compteur local
      const localCount = likeBtn[i].previousElementSibling;
      localCount.innerHTML  = parseInt(localCount.textContent)-1;

      //maj du style du coeur
      likeBtn[i].classList.remove('fa-solid');
      likeBtn[i].classList.add('fa-regular');

      //Décrément du compteur général
      let totalLike = document.querySelector('#likes-total');
      let actualTotal = parseInt(totalLike.textContent);
      actualTotal = actualTotal -1;
      totalLike.innerText = actualTotal;
    }
  });
}


/*Menu de tri*/


//fermeture modale de tri
function closeOptions() {
  document.querySelector('.select-menu').style.display = "none";
}

//ouverture modale de tri
function displayOptions() {
  document.querySelector('.select-menu').style.display = "flex";
}

//event ouverture modale de tri
const currentOption = document.querySelector('.option-selected');
currentOption.addEventListener('click', displayOptions);

//Fermeture modal de tri si clic à l'extérieur
window.addEventListener('click', (e) => {
  if(e.target !== document.querySelector('.option-selected')) {
    closeOptions()
  }
});

//fonction tri par popularité
async function orderByPopularity() {

  const allData =  await getPhotographers()
  const orderedData = allData[0];

  orderedData.sort(function(a,b) {
    return b.likes - a.likes;
    
  })
  document.querySelector('.picture-section').innerHTML = "";
  displayMedia(orderedData);
  likeInteraction();
}

//fonction de tri par date
async function orderByDate() {

  const allData =  await getPhotographers()
  const orderedData = allData[0];

  orderedData.sort(function(a,b) {
    return a.date - b.date;
    
  })
  document.querySelector('.picture-section').innerHTML = "";
  displayMedia(orderedData);
  likeInteraction();
}

//fonction de tri par titre
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
  likeInteraction();
}

//event tri par date
const dateOption = document.querySelector('#date');
dateOption.addEventListener('click', ()=> {
  closeOptions();
  orderByDate();
  currentOption.innerText = dateOption.innerText;
})

//event tri par popularité
const popularityOption = document.querySelector('#popularity');
popularityOption.addEventListener('click', ()=> {
  closeOptions();
  orderByPopularity();
  currentOption.innerText = popularityOption.innerText;
})

//event tri par titre
const titreOption = document.querySelector('#title');
titreOption.addEventListener('click', ()=> {
  closeOptions();
  orderByTitle();
  currentOption.innerText = titreOption.innerText;
})


/*Fonction principale*/

async function init() {
  //cloisonnement des deux groupes de données récupérés
  const [mediaData, profileData] = await getPhotographers();

  displayProfile(profileData);
  displayMedia(mediaData);
  likeInteraction();
};

init(); 

    