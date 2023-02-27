function displayMedia(data){
    //cloisonnement des données 
    const mediaData = data[0];
<<<<<<< HEAD
/*     const caroussel = createCaroussel(mediaData);
 */    //boucle qui parcoure le chaque objet du tableau
=======
    // const caroussel = createCaroussel(mediaData);
    //boucle qui parcoure le chaque objet du tableau
>>>>>>> 90f125613645c3abbd8cbd531ec10b6a6ba70f16
    for(i=0; i < mediaData.length; i++) {
    
    //récupération des valeur des propriété utiles
        const {image,title,video,likes} = mediaData[i];
        
        const pictureSection = document.querySelector('.picture-section')

        //création objet SI le contenu de l'objet est une VIDEO
        if(mediaData[i].hasOwnProperty('video')) {
            
            const pictureArticle = document.createElement('article');
            pictureArticle.classList.add('picture-article');
            pictureArticle.setAttribute('id',`${i+1}`);

            const videoContent = document.createElement('video');
            videoContent.classList.add('content');
            videoContent.setAttribute('src',`./assets/photographers/Sample Photos/${profileData.name}/${video}`);
            videoContent.setAttribute('controls', '');
            
            const pictureDescription = document.createElement('p');
            pictureDescription.innerText = title;
            
            const likesCount = document.createElement('p');
            likesCount.innerText = likes;

            const heart = document.createElement('i');
            heart.classList.add('fa-regular');
            heart.classList.add('fa-heart');

            const countSection = document.createElement('div');
            countSection.classList.add('count-section');
            countSection.appendChild(likesCount);
            countSection.appendChild(heart);

            
            const pictureText = document.createElement('div');
            pictureText.classList.add('article-description');
            pictureText.appendChild(pictureDescription);

            pictureText.appendChild(countSection);    

                
            pictureArticle.appendChild(videoContent);
            pictureArticle.appendChild(pictureText);
            pictureSection.appendChild(pictureArticle);    

        }
        //création éléement SI le contenu de l'objet est une IMAGE
        else if(mediaData[i].hasOwnProperty('image')){

            const pictureArticle = document.createElement('article');
            pictureArticle.classList.add('picture-article');
<<<<<<< HEAD
            pictureArticle.setAttribute('id', i+1);
=======
            pictureArticle.setAttribute('id',`${i+1}`);

>>>>>>> 90f125613645c3abbd8cbd531ec10b6a6ba70f16
            
            const pictureContent = document.createElement('img');
            pictureContent.classList.add('content');
            pictureContent.setAttribute('src', `./assets/photographers/Sample Photos/${profileData.name}/${image}`)

            const pictureDescription = document.createElement('p');
            pictureDescription.innerText = title;
            
            const likesCount = document.createElement('p');
            likesCount.innerText = likes;

            const heart = document.createElement('i');
            heart.classList.add('fa-regular');
            heart.classList.add('fa-heart');

            const countSection = document.createElement('div');
            countSection.classList.add('count-section');
            countSection.appendChild(likesCount);
            countSection.appendChild(heart);

            
            const pictureText = document.createElement('div');
            pictureText.classList.add('article-description');
            pictureText.appendChild(pictureDescription);
            pictureText.appendChild(countSection);    

            pictureArticle.appendChild(pictureContent);
            pictureArticle.appendChild(pictureText);    

            pictureSection.appendChild(pictureArticle);   
        }

    }

    

/*     const modalBg = document.querySelector('.bground');
 */
    const contents = document.querySelectorAll('.content');
    const contentID = contents.id;
    console.log(contentID);

    for (let i =0; i < contents.length; i++) {
<<<<<<< HEAD
        contents[i].addEventListener('click', () => {
        
        createCaroussel(contents, contentID)

        /* caroussel.style.display = "block";
        modalBg.style.display = "block"; */
=======
        contents[i].addEventListener('click', (elementClicked) => {
        const elementPosition = elementClicked.target.parentElement.id;
        createCaroussel(mediaData,elementPosition);
        // caroussel.style.display = "flex";
        // modalBg.style.display = "block";
       
>>>>>>> 90f125613645c3abbd8cbd531ec10b6a6ba70f16
        }
    )
}
}


