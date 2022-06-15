let results = document.querySelector('.content_search');

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let busqueda = queryStringObj.get('=');

fetch ('https://api.allorigins.win/raw?url=https://api.deezer.com/q=' + busqueda)

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
    