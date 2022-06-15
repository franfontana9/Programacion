let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idDetalle = qsToObject.get('id'); 



let urlDetalle= `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idDetalle}/artists/`                 

let url =`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${idDetalle}`

fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.data
        let genero = document.querySelector(".sectionff");
        let articles = "";

        for(let i=0 ; i<info.length ; i++){
            
            genero += `<article class= "articleff">
                         <p class="pff"><a class="pff" href="detalleartistas.html?id=${data.data[i].id}">${data.data[i].name}</a></p>
                        </article>`
        }
        console.log(articles);
        
        genero.innerHTML = articles;
   
    })

    .catch(function(error){
        console.log(error);
    })

//ARTISTAS//


fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

         info = data.data;
        let section = document.querySelector('.section2ff');
        let article = document.querySelector('.article2ff');
        let title = document.querySelector('.pff');
        let image = document.querySelector('.imagenff');

        title.innerText = info.title;
        image.src= info.picture; 
        
        let articles = "";


        for(let i=1 ; i<info.length; i++){
            
            articles += `<article class="article2ff">
            <img class="imagenff" src="${data.data[i].picture_big}" height= "100px" width="100px"  >
            <p class="pff"><a class="pff" href="./detalleartistas.html?id=${data.data[i].id}">${data.data[i].name}</a></p>
                </article>`
       
        }  

        section.innerHTML = articles;
        section.style.display = "flex";
        section.style.flexDirection = "row";
    })
    
    
    .catch(function(error){
        console.log(error);
    })