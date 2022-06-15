let recuperoStorge = localStorage.getItem('cancionesFavoritas');
recuperoStorgeToArray = JSON.parse(recuperoStorge);

let section = document.querySelector('.ar_pl');
let contenidoSection = " "

for(let i=0; i< recuperoStorgeToArray.length; i++){
    
    url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${recuperoStorgeToArray[i]}`
    console.log(url);
    fetch(url)
         .then(function(response){
           return response.json()
      })
         .then(function(data){
            console.log(data);
            let info = data;
            contenidoSection += `<article class="ar_pl" >
            <a class="pl_dt" href="detail-track.html?id=${info.id}">${info.title}  /</a>

            <a class="pl_dt" href="detalleartistas.html?id=${info.artist.id}">${info.artist.name}</a>
            </article>`
            section.innerHTML =  contenidoSection  
            section.style.display='flex'
            section.style.flexDirection = 'column'
            section.style.margin='20px'
            section.style.display='flex'


  
      })
      .then(function(error){
            console.log(error);
      })

}

section.innerHTML = contenidoSection;




