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

        album.innerText= info.title;
        foto.src= info.album;
        artista_track.innerText= info.name;
        track.innerText= info.title;
        duracion.innerText=info.duration;



    // Favoritos
        // let cancionesFavoritas = [];
        // let recuperoStorage = localStorage.getItem("favoritos");
        
        // if(recuperoStorage){
        //     let cancionesArray = JSON.parse(recuperoStorage)
        //     cancionesFavoritas = cancionesArray
        
        // }
        // let agregarCancion = document.querySelector(".icono");
        // if(cancionesFavoritas.includes(idTrack)){
        //     agregarCancion = `<i class=${"fa-solid fa-check"}></i>`
        // }
    })




