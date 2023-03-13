const modal = document.getElementById("contact_modal");

/*Fonction d'apparition de la modale de contact*/
async function displayModal() {
  modal.style.display = "block";
  document.querySelector("#first-name").focus();

  //récupération de la donnée "name" relative au photographe en question
  data = await getPhotographers();
  nameOfPhotographer = data[1].name;
  document.querySelector(
    "header h2"
  ).innerText = `Contactez-moi ${nameOfPhotographer}`;
}

/*Fonction de fermeture de la modale de contact*/
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

//close modal if press 'echap'
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/*Focus Loop*/
/* Récupération des différents élements focusable*/
const focusableElements = "img, input, button";
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener("keydown", function (e) {
  let isTabPressed = e.key === "Tab" || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else {
    // if tab key is pressed
    if (document.activeElement === lastFocusableElement) {
      // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

/*Récupération des inputs de la modale de contact*/
document.querySelector("#first-name").addEventListener("change", (e) => {
  return (firstName = e.target.value);
});
document.querySelector("#last-name").addEventListener("change", (e) => {
  return (lastName = e.target.value);
});
document.querySelector("#mail").addEventListener("change", (e) => {
  return (mail = e.target.value);
});
document.querySelector("#msg").addEventListener("change", (e) => {
  return (msg = e.target.value);
});

/*Evenement d'envoi des inputs de la modale de contact*/
const sendFrom = document.querySelector("#send-button");
sendFrom.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(firstName, lastName, mail, msg);
});

//SI clic en dehors de la modale -> fermeture de la modale de contact
window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal") &&
    e.target !== document.querySelector(".contact_button")
  ) {
    closeModal();
  }
});
