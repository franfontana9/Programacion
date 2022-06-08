//canciones


let url="https://api.allorigins.win/raw?url= http://api.deezer.com/chart/0/tracks"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.data;
        let sectionCanciones = document.querySelector(".canciones");
        let lista= " ";
        
        for (i=0; i<info.length; i++){
            lista += `<article>
            <h4><a href="./detail-track.html?id=${info[i].id}">${info[i].title}</a></h4>
            <p>${info[i].artist.name}</p>
            <img src="${info[i].album.cover}">
            </article>`
         }
         console.log(lista);
         sectionCanciones.innerHTML = lista;
         sectionCanciones.style.display="flex";
         sectionCanciones.style.flexDirection="column"
         sectionCanciones.style.flexWrap="noWrap";
 
    })
    .catch(function(error){
        console.log(error);
    })

//Artistas
 let album = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"
 
 fetch(album)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })