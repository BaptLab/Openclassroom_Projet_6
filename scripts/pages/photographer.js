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

    } else {
      alert('Les données n\'ont pas pu être récupérées')
    }
  }
  



function likeInteraction () {

  
  //incrémentation du total des likes au compteur général
  const likeBtn = document.querySelectorAll('.like-btn');
      for(let i = 0; i<likeBtn.length; i++)
      likeBtn[i].addEventListener('click', () => {
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
        else if (likeBtn[i].classList.contains("fa-solid"))
        {
          //incrément du compteur local
          const localCount = likeBtn[i].previousElementSibling;
          localCount.innerHTML  = parseInt(localCount.textContent)-1;

          //maj du style du coeur
          likeBtn[i].classList.remove('fa-solid');
          likeBtn[i].classList.add('fa-regular');

          //incrément du compteur général
          let totalLike = document.querySelector('#likes-total');
          let actualTotal = parseInt(totalLike.textContent);
          actualTotal = actualTotal -1;
          totalLike.innerText = actualTotal;
        }
      });
  
}

  

async function init() {

    //distinction des deux groupes de données
    const [mediaData, profileData] = await getPhotographers();

    displayProfile(profileData);
    displayMedia(mediaData);
    likeInteraction();

    

};

init(); 


window.addEventListener('click', (e) => {
  if(e.target !== document.querySelector('.option-selected')) {
    closeOptions()
  }
});






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


//tri par popularité
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

//tri par date
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

//tri par titre
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