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
            <img src="${info[i].album.cover}" height=150px>
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
    let infoAlbumes= data.data
    let sectionAlbumes = document.querySelector(".albumes")
    let listaAlbumes = " "

    for (i=0; i<infoAlbumes.length; i++){
        listaAlbumes += `<article>
        <h4><a href="./detalledeldisco.html?id=${infoAlbumes[i].id}">${infoAlbumes[i].title}</a></h4>
        <img src="${infoAlbumes[i].cover}" height=150px>
        </article>`
        }
        sectionAlbumes.innerHTML = listaAlbumes
        sectionAlbumes.style.display="flex";
        sectionAlbumes.style.flexDirection="column";
        sectionAlbumes.style.flexWrap="noWrap";
    })


    .catch(function(error){
        console.log(error);
    })
//Artistas
let urlArtistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
let artistas = document.querySelector(".art")
let listaArtistas = " "

fetch(urlArtistas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let infoArtistas = data.data
        console.log(data)
        for (i=0; i<infoArtistas.length; i++){
            listaArtistas += `<article>
            <h4> <a href="./detalleartistas.html?id=${infoArtistas[i].id}">${infoArtistas[i].name}</a></h4>
            <img src="${infoArtistas[i].picture}" height=150px>
            </article>
            `
        }
        artistas.innerHTML = listaArtistas
    })
