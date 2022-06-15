let recuperoStorage = localStorage.getItem("cancionesFavoritas");
recuperoStorageToArray = JSON.parse(recuperoStorage);

let section = document.querySelector(".art_pl");
let contenidoSection = " ";

for(let i=0; i<recuperoStorageToArray.length; i++);{
       
    contenidoSection += `<section class="Playlist">
    <p class="title">Name: "${data.data.artist.Name}"</p>
    <p class="Album">Album: "${data.data.album.title} </p>
    </section>`
}


section.innerHTML = contenidoSection;




