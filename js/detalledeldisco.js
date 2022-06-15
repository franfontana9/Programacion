let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idDisco = qsToObject.get('id'); 
console.log(idDisco);


let urlDisco = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idDisco}`



fetch(urlDisco)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);      
       

    let span = document.querySelector (".spanff");
    let titulo = document.querySelector (".h2ff");
    let tituloAlbum = document.querySelector (".h3ff");
    let foto = document.querySelector(".imgdd");
    let genero = document.querySelector(".h4ff");
    let year = document.querySelector(".h5ff");
    let links = document.querySelectorAll(".spanff a");
    let fondo = document.querySelector(".bodydetalledisco");
    let listacanciones= document.querySelector(".canciones");

    
   

   
   
    fondo.style.backgroundImage= `url(${data.cover_medium})`;
    links[0].href=`./detalleartistas.html?id=${data.artist.id}`;
    links[1].href=`./detalledelgenero.html?id=${data.genres.data[0].id}`;
    titulo.innerHTML= data.artist.name;
    tituloAlbum.innerHTML= data.title;
    foto.src = data.cover_medium;
    genero.innerHTML = data.genres.data[0].name;
    year.innerHTML= data.release_date;
    

    for(let i=0 ; i<data.tracks.data.length ; i++){

        listacanciones.innerHTML += `<li>${data.tracks.data[i].title}</li>`
    }
    

    })



    .catch(function(error){
        console.log(error)
    })