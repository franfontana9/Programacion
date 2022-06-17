let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

 "https://api.allorigins.win/raw?url= https://api.deezer.com/genre"


https://cors-anywhere.herokuapp.com/



fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.data
        let section = document.querySelector(".ffsection");
        let articles = "";

        for(let i=0 ; i<info.length ; i++){
            
            articles += `<article class= "ffarticle">
                            <p class="pgeneros">Nombre: ${data.data[i].title}</p>
                            <img class="image" src="${data.data[i].pictures}" alt="">
                            <a class="ffcul" href="detalledelgenero.html?id=${data.data[i].id}">${data.data[i].name}</a>
                        </article>`

        }

        console.log(articles);
        
        section.innerHTML = articles;

        

    })

    .catch(function(error){
        console.log(error);
    })
