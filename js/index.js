//canciones


let url = "https://developers.deezer.com/api/track"

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