

function setPelicula(pelicula){

localStorage.setItem(pelicula,pelicula);
}

function getPelicula(pelicula){
    localStorage.getItem(pelicula);
}

var form = document.querySelector("#form");
var divPeliculas = document.querySelector("#peliculas");



form.addEventListener("submit", ()=>{

    var input = document.querySelector("addPelicula").value;

    setPelicula(input);

    var pelicula = getPelicula(input);
    divPeliculas.append(pelicula);



});