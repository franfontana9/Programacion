let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idTrack = qsToObject.get("id");
console.log(idTrack);


let urlDetalle = `https://api.allorigins.win/raw?url= http://api.deezer.com/chart/0/tracks/?id=${idTrack}`

fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        info= data.data;
        let album = document.querySelector(".trackAlbum");
        let foto = document.querySelector(".fotoAlbum");
        let artista_track= document.querySelector(".trackArtist");
        let track= document.querySelector(".track");
        let duracion = document.querySelector(".trackduration");

        // album.innerText= info.title;
        // foto.src= info.album;
        // artista_track.innerText= info.name;
        // track.innerText= info.title;
        // duracion.innerText=info.duration;
        
    // Favoritos
    let cancion = document.querySelector(".cancion");
    let cancionesFavoritas = [];

    
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
        let recuperoLista = localStorage.getItem("cancionesFavoritas");
        if(recuperoLista){
            let cancionesArray = JSON.parse(recuperoLista)
            cancionesFavoritas = cancionesArray
        }
    })

    })
    .catch(function(error){
        console.log(error)
    })




