//canciones


let url = "https://api.allorigins.win/get?url= https://api.deezer.com/track/3135556 "

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.contents);
        let info = data.contents;

        let section = document.querySelector(".canciones");
        let article = "";
            article += `<article>
            <h4><a href="./detail-track.html?id=${info.id}">${info.title}</a></h4>
                <p>${info.name}</p>
                <img src="${info.picture}" height=150px >
            </article>`
        section.innerHTML = article
    })
    .catch(function(error){
        console.log(error);
    })