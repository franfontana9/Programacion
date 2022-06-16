let formulario = document.querySelector(".formulario");
let buscador = document.querySelector(".buscador");
//Buscador
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if (buscador.value==""){
        return alert("¡No se puede realizar una búsqueda con el campo vacío!")
        }
    else if (buscador.value.length<3){
        return alert("¡Se debe realizar una búsqueda con al menos 3 caracteres!")
    }
    else {
        this.submit()
    }

})

//


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('resultado');
console.log(terminoBuscado)

let linkArtist = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${terminoBuscado}`
let linkTrack = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${terminoBuscado}`
let linkAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${terminoBuscado}`


    
fetch(linkArtist)
    .then(function(response){
    return response.json()
    })
    .then(function(data) {
        let info = data.data
        let results = document.querySelector('.content_search');
        let busquedaArtist =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busquedaArtist += `<article> 
            <a class='buscar' href="detallartistas.html?id=${info[i].id}>${info[i].name}</a>
            </article>`

            }
        results.innerHTML= busquedaArtist
        } 
        else if(info.length==0){
                busquedaArtist =`
                <article class="content_search">
                <h1 class="h1_sr">No hay resultados coincidentes</h1>
            </article>`
        results.innerHTML = busquedaArtist
        } 
        
       
    })
    .catch(function (error) {
        console.log(error);
    })


    
fetch (linkTrack)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.data
        let results = document.querySelector('.content_search');
        let busquedaTrack =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busquedaTrack += `<article> 
            <a class="buscar" href="detail-track.html?id=${info[i].id}>${info[i].title}</a>
            </article>`

            }
        results.innerHTML= busquedaTrack
        } 
        else if(info.length==0){
            busquedaTrack =`
            <article class="content_search">
            <h1 class="h1_sr">No hay resultados coincidentes</h1>
        </article>`
    results.innerHTML = busquedaTrack
    }  
    } 
        
      
    )
    .catch(function (error) {
        console.log(error);
    })

fetch (linkAlbum)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let info = data.data
        let results = document.querySelector('.content_search');
        let busquedaAlbum =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busquedaAlbum += `<article> 
            <a class= "buscar" href="detalledeldisco.html?id=${info[i].id}>${info[i].title}</a>
            </article>`

            }
        results.innerHTML= busquedaAlbum
        } 
        else if(info.length==0){
            busquedaAlbum =`
            <article class="content_search">
            <h1 class="h1_sr">No hay resultados coincidentes</h1>
        </article>`
    results.innerHTML = busquedaAlbum
    } 
        
   
    })
    .catch(function (error) {
        console.log(error);
    })

