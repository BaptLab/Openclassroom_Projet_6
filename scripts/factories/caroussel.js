function createCaroussel(data) {
    const mediaData = data;
    console.log(mediaData);
    const caroussel = document.createElement('ul')
    caroussel.classList.add('caroussel');
    for(let i=0; i < mediaData.length; i++) {
        const {image, video} = mediaData[i];
        if(mediaData[i].hasOwnProperty('video')) {
            const carousselElement = document.createElement('li');
            carousselElement.setAttribute('src',`./assets/photographers/Sample Photos/${profileData.name}/${video}`);
            carousselElement.setAttribute('id',`element${i+1}`);
            carousselElement.classList.add('caroussel-element');
            caroussel.appendChild(carousselElement);
            console.log(`element ${i+1} done !`)
        }
        else if(mediaData[i].hasOwnProperty('image')) {
            const carousselElement = document.createElement('li');
            carousselElement.setAttribute('src', `./assets/photographers/Sample Photos/${profileData.name}/${image}`);
            carousselElement.setAttribute('id',`element${i}`);
            carousselElement.classList.add('caroussel-element');
            caroussel.appendChild(carousselElement);
            console.log(`element ${i+1} done !`)
        }
    }
    document.querySelector('.bground').appendChild(caroussel);
    caroussel.setAttribute('display', 'none');
    return caroussel;
}