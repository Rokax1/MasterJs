//LocalStorage



// comprobar disponibilidad localstorage 
if (typeof(Storage) !=='undefined') {
    console.log("disponible");
}else{
    console.log("no disponible");
}

//gurardar datos en local storage 


localStorage.setItem("titulo",'curso de JavaScript');

//recupera elemento del local storage

localStorage.getItem("titulo");

console.log(document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo"));

var usuario={
    nombre: "leandro",
    apellido: "sepulveda",
    email:"xd@gmail.com"
}
// json.stringify  convertir un objeto json en json string 
localStorage.setItem("usuario",JSON.stringify(usuario));


//recuperar objeto 
userJS= JSON.parse(localStorage.getItem("usuario"));

console.log(userJS);
document.querySelector("#datos").append(" "+userJS.email+" "+userJS.nombre);

localStorage.removeItem("usuario");

localStorage.clear()


