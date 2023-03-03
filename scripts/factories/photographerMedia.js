function displayMedia(data){
    
    //cloisonnement des données 
    // const caroussel = createCaroussel(data);
    //boucle qui parcoure le chaque objet du tableau
    for(i=0; i < data.length; i++) {
    
    //récupération des valeur des propriété utiles
        const {image,title,video,likes} = data[i];
        const pictureSection = document.querySelector('.picture-section')
        
        

        //création objet SI le contenu de l'objet est une VIDEO
        if(data[i].hasOwnProperty('video')) {
            
            const pictureArticle = document.createElement('article');
            pictureArticle.classList.add('picture-article');
            pictureArticle.setAttribute('id',`${i+1}`);

            const videoContent = document.createElement('video');
            videoContent.classList.add('content');
            videoContent.setAttribute('src',`./assets/photographers/Sample Photos/${profileData.name}/${video}`);
            
            const pictureDescription = document.createElement('p');
            pictureDescription.innerText = title;
            
            const likesCount = document.createElement('p');
            likesCount.innerText = likes;

            const heart = document.createElement('i');
            heart.classList.add('no-liked');
            heart.classList.add('like-btn');
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
        else if(data[i].hasOwnProperty('image')){

            const pictureArticle = document.createElement('article');
            pictureArticle.classList.add('picture-article');
            pictureArticle.setAttribute('id',`${i+1}`);

            
            const pictureContent = document.createElement('img');
            pictureContent.classList.add('content');
            pictureContent.setAttribute('src', `./assets/photographers/Sample Photos/${profileData.name}/${image}`)

            const pictureDescription = document.createElement('p');
            pictureDescription.innerText = title;
            
            const likesCount = document.createElement('p');
            likesCount.classList.add('likes');
            likesCount.innerText = likes;

            const heart = document.createElement('i');
            heart.classList.add('like-btn');
            heart.classList.add('no-liked');
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

    //Compteur de likes
    const allLikes = document.querySelectorAll('p.likes');
    let totalLikes = 0;
    
        for (let i = 0; i < allLikes.length; i++) {
            const likes = parseInt(allLikes[i].textContent);
            if (!isNaN(likes)) {
                totalLikes += likes;
            }
        }

    //display du total dans le DOM
    document.querySelector('#likes-total').innerText = totalLikes;
    


    
    //like interaction
    



    const modalBg = document.querySelector('.bground');
    const contents = document.querySelectorAll('.content');

    for (let i =0; i < contents.length; i++) {
        contents[i].addEventListener('click', (elementClicked) => {
        const elementPosition = elementClicked.target.parentElement.id;
        createCaroussel(data,elementPosition);
        // caroussel.style.display = "flex";
        // modalBg.style.display = "block";
       
        }
    )
}


}



