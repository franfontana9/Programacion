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
    let tituloCancion = document.querySelector (".h3ff");
    let foto = document.querySelector(".imgdd");
    let genero = document.querySelector(".h4ff");
    let year = document.querySelector(".h5ff");


    
    })



    .catch(function(error){
        console.log(error)
    })