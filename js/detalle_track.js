let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idTrack = qsToObject.get("id");
console.log(idTrack);


let urlDetalle = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${idTrack}`

fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        info= data;
        let album = document.querySelector(".trackAlbum");
        let foto = document.querySelector(".fotoAlbum");
        let artista_track= document.querySelector(".trackArtist");
        let track= document.querySelector(".track");
        let duracion = document.querySelector(".trackduration");

        album.innerText= info.title;
        foto.src= info.album.cover;
        artista_track.innerText= info.artist.name;
        track.innerText= info.title;
        duracion.innerHTML +=info.duration;
        
    // Favoritos
    let cancion = document.querySelector(".cancion");
    let cancionesFavoritas = [];
    let recuperoLista = localStorage.getItem("cancionesFavoritas");
    if(recuperoLista){
        let cancionesArray = JSON.parse(recuperoLista)
        cancionesFavoritas = cancionesArray
    }

    
    cancion.addEventListener("click", function(evento){
        evento.preventDefault()


        if(cancionesFavoritas.includes(idTrack)){
            let sacarCancion = cancionesFavoritas.indexOf(idTrack)
            cancionesFavoritas.splice(sacarCancion, 1);
            cancion.innerText = "Agregar canción a mi playlist"
        }
        else{
            cancionesFavoritas.push(idTrack);
            cancion.innerText= "Sacar canción de mi playlist"
        }

        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas)
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString);
    })

    })
    .catch(function(error){
        console.log(error)
    })




