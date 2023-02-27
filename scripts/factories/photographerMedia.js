function displayMedia(data){
    //cloisonnement des données 
    const mediaData = data[0];
    // const caroussel = createCaroussel(mediaData);
    //boucle qui parcoure le chaque objet du tableau
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
            pictureArticle.setAttribute('id',`${i+1}`);

            
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

    

    const modalBg = document.querySelector('.bground');
    const contents = document.querySelectorAll('.content');

    for (let i =0; i < contents.length; i++) {
        contents[i].addEventListener('click', (elementClicked) => {
        const elementPosition = elementClicked.target.parentElement.id;
        createCaroussel(mediaData,elementPosition);
        // caroussel.style.display = "flex";
        // modalBg.style.display = "block";
       
        }
    )
}
}


