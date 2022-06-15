let results = document.querySelector('.content_search');

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('resultado');
console.log(terminoBuscado)

let url = `https://api.allorigins.win/raw?url=./search-result.html?resultado=${terminoBuscado}`
    let formulario = document.querySelector(".formulario");
    let buscador = document.querySelector(".buscador");
    
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
    


fetch (url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.data
        console.log(data);
        
        
        if (data.length > 0){
        for (let i = 0; i < info.length; i++) {
            
            results.innerHTML += `<article>
            <img scr=${info.data[i].picture}        alt=""   />
            <a href="./detail-track.html?Id=${info.data[i].id}"> 
            <p>Name:${info.data[i].title}   </p>
            </a>
            </article>
            `
            }} else{
                results.innerHTML=`
                <h1 class="artistas3">No hay resultados</h1> 
                `
            } 

           
        
    })
    .catch(function (error) {
        console.log(error);
    })
    
