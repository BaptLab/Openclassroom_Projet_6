/*Fonction d'apparition de la modale de contact*/
async function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    //récupération de la donnée "name" relative au photographe en question
    data = await getPhotographers();
    nameOfPhotographer = data[1].name;
    document.querySelector("header h2").innerText = `Contactez-moi ${nameOfPhotographer}`;
}

/*Fonction de fermeture de la modale de contact*/
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


/*Récupération des inputs de la modale de contact*/
document.querySelector('#first-name').addEventListener('change', (e)=> {
    return firstName = e.target.value;
})
document.querySelector('#last-name').addEventListener('change', (e) => {
    return lastName = e.target.value;
})
document.querySelector('#mail').addEventListener('change', (e) => {
    return mail = e.target.value;
})
document.querySelector('#msg').addEventListener('change', (e) => {
    return msg = e.target.value;
})

/*Evenement d'envoi des inputs de la modale de contact*/
const sendFrom = document.querySelector('#send-button');
sendFrom.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(firstName, lastName, mail, msg);
})

//SI clic en dehors de la modale -> fermeture de la modale de contact
window.addEventListener('click', (e) => {
    if (!e.target.closest('.modal') && e.target !== document.querySelector('.contact_button')) {
      closeModal()
    }
  }
);
  