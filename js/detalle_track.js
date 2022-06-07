let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idTrack = qsToObject.get("id");
console.log(idTrack);

let urlDetalle = `https://api.allorigins.win/raw?url= http://api.deezer.com/chart/0/tracks/?id=${idTrack}`

fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })


