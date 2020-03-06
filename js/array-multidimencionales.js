var categorias =['accion','terror','comedia'];

var peliculas =['la verdad duele','la vida es bella','gran torino','php'];

var cine = [categorias,peliculas];

/*
var indice= peliculas.indexOf('gran torino');
console.log('indice :', indice);
if (indice>-1) {
    peliculas.splice(indice,1);
    
}

//covertir array en texto 
var texto =peliculas.join();


var cadena = "texto1 , texto 2 , texto 3"
var cadenaArray= cadena.split(",")


document.write("<ul>");
for (let pelicula in peliculas) {

    document.write("<li> "+peliculas[pelicula]+" </li>");
    

}
document.write("</ul>");
*/


// console.log('cadenaArray :', cadenaArray);
// console.log('texto :', texto);
// console.log('peliculas :', peliculas);




//bisquedas
//findIndex
precios=[10,20,30,50,100,500,1000,1,2,3,4,5,6,7,8,9];

var busquedaPrecios= precios.some(precio=>precio==20);

var busqueda =peliculas.find(pelicula => 
   pelicula =="php"
);



console.log(busqueda);
console.log('busquedaPrecios :', busquedaPrecios);




//console.log(cine[0][1]);
/*
var elemento = "";
do{
     elemento = prompt("inroduce tu pelicula: ");
    peliculas.push(elemento);
}
while (elemento != "acabar") ;


  peliculas.pop();

console.log('peliculas :', peliculas);*/


// peliculas.push = "batman";
// console.log('peliculas :', peliculas);cuatc

