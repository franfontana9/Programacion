//canciones


let url = "https://api.allorigins.win/get?url=https://api.deezer.com/chart/0/tracks"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data;

        let sectionCanciones = document.querySelector(".canciones");
        let article = "";
         for (i=0; i<info[5]; i++){
            article += `<article>
            <h4><a href="./detail-track.html?id=${info[i].id}">${info[i].title}</a></h4>
            <p>${info[i].name}</p>
            <img src="${info[i].picture} >
            </article>`
         }
         sectionCanciones.innerHTML = article
    })
    .catch(function(error){
        console.log(error);
    })