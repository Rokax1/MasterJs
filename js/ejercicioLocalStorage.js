

function setPelicula(pelicula){

localStorage.setItem(pelicula,pelicula);
}

function getPelicula(pelicula){
    localStorage.getItem(pelicula);
}
function dropPelicula(pelicula){
localStorage.removeItem(pelicula);
}

var form = document.querySelector("#form");
var formBorrar = document.querySelector("#formBorrar");
var divPeliculas = document.querySelector("#peliculas");



form.addEventListener("submit", ()=>{
  //  console.log("entra");

    var titulo = document.querySelector("#addPelicula").value;

    if (titulo.length >=1) {
        setPelicula(titulo);
    } 
});

formBorrar.addEventListener("submit", ()=>{
    //  console.log("entra");
  
      var titulo = document.querySelector("#deletePelicula").value;
  
      if (titulo.length >=1) {
        dropPelicula(titulo);
      } 
  });
  

var lista = document.querySelector("#Lista");
for (var key in localStorage) {
    if(typeof localStorage[key] == "string"){
        
        var li = document.createElement("li");
        li.append(localStorage[key]);
        lista.append(li);

    }
    //console.log(localStorage[key]);
}