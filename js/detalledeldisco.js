let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idDisco = qsToObject.get('id'); 



let urlDisco = `https://api.allorigins.win/raw?url= https://api.deezer.com/album/?id=${idDisco}`

fetch(urlDisco)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        info= data.data;
      
        let foto = document.querySelector(".imgdd");
       

        // album.innerText= info.title;
        // foto.src= info.album;
        // artista_track.innerText= info.name;
        // track.innerText= info.title;
        // duracion.innerText=info.duration;
        
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