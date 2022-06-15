let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idArtist = qsToObject.get("id");
console.log(idArtist);

let link = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtist}/albums`
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtist}`;

fetch(url)
     .then(function(response){
       return response.json()
     })
     .then(function(data){
      console.log(data);
      let info=data;
      let span = document.querySelector('.a_ad');

      span.innerHTML=`<h3 class="h3_ad">${info.name} </h3>
      <img class="img_red" src="${info.picture_big}" alt="">
      <p class="p_da"> Albums </p>`
    })
     .catch(function(error){
     console.log(error)
})


fetch(link)
     .then(function(response){
       return response.json()
     })
     .then(function(data){
      console.log(data);
      let info=data;
      let span = document.querySelector('.a_ad');
      for(let i=0; i<5;i++){
        span.innerHTML  +=`<p class="p_da"> ${info.data[i].title} </p>`
      }
     
    })

     .catch(function(error){
     console.log(error)
})