let formulario = document.querySelector('form');
let campoBusqueda = document.querySelector('submit');

formulario.addEventListener['submit',function(event){
formulario.preventDefault();
    if(campoBusqueda.length < 3){
     alert('Tenes que poner mas de 3 letras')
    } else{
        this.submit()
    }
}]
