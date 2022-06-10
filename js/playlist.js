let recuperoStorage = localStorage.getItem("playlist");
recuperoStorageAArray = JSON.parse(recuperoStorage);

let section = document.querySelector(".playlist")

let url="https://api.allorigins.win/raw?url= http://api.deezer.com/chart/0/tracks"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       

        
    })
    .catch(function(error){
        console.log(error);
    })
