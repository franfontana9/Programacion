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

let url = `https://api.allorigins.win/raw?url=./search-result.html?resultado=${terminoBuscado}`
let linkArtist = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${terminoBuscado}`
let linkTrack = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${terminoBuscado}`
let linkAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${terminoBuscado}`


    
.then(function (response) {
        return response.json();
    })
    .then(function(data) {
        let info = data.data
        let results = document.querySelector('.content_search');
        let busqueda =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busqueda += `<article> 
            <a> href="detalleartistas.html?id= ${info[i].name}</a>
            </article>`

            }
        results.innerHTML= busqueda
        } 
        else if(info.length==0){
                busqueda =`
                <article class="content_search">
                <h1 class="h1_sr">No hay resultados coincidentes</h1>
            </article>`
        results.innerHTML = busqueda
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
        let busqueda =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busqueda += `<article> 
            <a> href="detail-track.html?id=${info[i].title}</a>
            </article>`

            }
        results.innerHTML= busqueda
        } 
        else if(info.length=0){
                results.innerHTML=`
                <h1 class="artistas3">No hay resultados</h1> 
                `
        } 
        

           
        
    })
    .catch(function (error) {
        console.log(error);
    })

fetch (linkAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.data
        let results = document.querySelector('.content_search');
        let busqueda =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busqueda += `<article> 
            <a> href="detalledeldisco.html?id=${info[i].album}</a>
            </article>`

            }
        results.innerHTML= busqueda
        } 
        else if(info.length=0){
                results.innerHTML=`
                <h1 class="artistas3">No hay resultados</h1> 
                `
        } 
        

           
        
    })
    .catch(function (error) {
        console.log(error);
    })

