/*
--pida 6 numeros por pantalla y  los meta en un rray 
-- mostar el array entero todos sus elementos en el cuerpo de la pagina y en la consola 
-- ordenarlo t mostrarlo 
--mostrar cuantos elemntos tiene el array 
--busqueda de un valor introducido por el ususario que nos diga si lo encuentra y su indice 

*/

var numeros=[];
var numeroIngresado;

function pedirNumero (){

var elemento = parseInt( prompt("ingrese un numero"));
    if (isNaN(elemento)) {
        alert('solo puede ingresar numeros');
    } else{

        return elemento;
    }

return elemento;
}


function Mostrar(data){
 document.write("<ul>");

 data.forEach((element,index) => {
    document.write("<li> -" +element+"</li>");
});

 document.write("</ul>");

}

function OrdenarNumeros(data){
    return data.sort(function (a,b) {
        return a-b;        
    });
}



do {
  numeroIngresado = pedirNumero();

  if (typeof numeroIngresado != 'number' || isNaN( numeroIngresado)) {

        console.log('solo se pueden ingresar numeros');
        
  } else {
        numeros.push(numeroIngresado);
  }
    
} while (numeros.length < 6);


console.log('numeros ingresados '+numeros);
Mostrar(numeros);
console.log(" Numeros ordenados "+OrdenarNumeros(numeros));
console.log('el arreglo tiene  :', numeros.length);
