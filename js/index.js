//canciones


let url = "https://api.allorigins.win/get?url= https://api.deezer.com/chart"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.contents);
        let info = data

        //capturamos la lista de canciones

        let section = document.querySelector(".canciones");
        let article = "";
        for(i=0; i<info.length; i++ ){
            article += `<article>
            <h4><a href="./detail-track.html">${data[i].tracks.title}</a></h4>
                <p>${data[i].tracks.title}</p>
                <img src="${data[i].picture}" height=150px >
            </article>`

        }
        section.innerHTML += article
    })
    .catch(function(error){
        console.log(error);
    })