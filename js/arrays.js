//arrays , arreglos , matrices

 var nombre='leandro sepulveda';

 var nombres = ['leandro sepulveda','fernando mendez','juanito xd'];

 var lenguajes = new Array('php','js','go','java','perl');


document.write("<h1> lenguajes de programacion de 2018 </h1>");

document.write("<ul>");

lenguajes.forEach((element,index) => {
    document.write("<li>"+ index  +" -" +element+"</li>");
});

document.write("</ul>");







/*
document.write("<ul>");
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<li>"+lenguajes[index]+"</li>");
}
document.write("</ul>");
*/


/*
 var elemento= parseInt(prompt("que elemento del array quieres ??",0));

 if (elemento >= nombres.length) {
     alert("ingresa un numero menos a "+nombres.length)
 }
 alert(nombres[elemento]);*/