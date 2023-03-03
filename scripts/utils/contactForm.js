async function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    data = await getPhotographers();
    nameOfPhotographer = data[1].name;
    document.querySelector("header h2").innerText = `Contactez-moi ${nameOfPhotographer}`;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


//Récupération des inputs 

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


const sendFrom = document.querySelector('#send-button');
sendFrom.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(firstName, lastName, mail, msg);
})