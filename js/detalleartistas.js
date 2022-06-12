let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idTrack = qsToObject.get("id");
console.log(idArtista);

let linkDetalle = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtista}`
