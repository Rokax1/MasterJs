/*
 <!-- 
        1 formulario con los campos nombre pellido y edad 
        2 boton para enviar formulario submit
        3 mostrar esos datos por pantalla 
        4. tener un boton que al darle clikc nos muestra los datos actuales del formulario 
     -->
*/

window.addEventListener('load',()=>{
 
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display ="none";

    formulario.addEventListener('submit', ()=>{

        console.log('formulario capturado');

        var nombre = document.querySelector("#nombre").value;
        var apellido= document.querySelector("#apellido").value;
        var edad= parseInt( document.querySelector("#edad").value);
       
        if (nombre.trim() ==null || nombre.trim().length ==0) {
            alert("el nombre no es valido ");
            document.querySelector("#nombreError").innerHTML="el nombre no es valido";
            return false;
        }else{
            document.querySelector("#nombreError").style.display="none";
        }
        if (apellido.trim() ==null || apellido.trim().length ==0) {
            alert("el apellido  no es valido ");
            document.querySelector("#apellidoError").innerHTML="el apellido no es valido";
            return false;
        }else{
            document.querySelector("#nombreError").style.display="none";
        }
        if (edad ==null || edad <= 0 || isNaN(edad)) {
            alert("la edad  no es valida ");
            document.querySelector("#edadError").innerHTML="la edad no es valida";
            return false;
        }else{
            document.querySelector("#nombreError").style.display="none";
        }
        


        var datos = [nombre,apellido,edad];

        box_dashed.style.display = "block";

        var key;
        for ( key in datos) {
            var parrafo = document.createElement("p");
            parrafo.append(datos[key]);
            box_dashed.append(parrafo);
        }

    
        
        


    });

 

   




});