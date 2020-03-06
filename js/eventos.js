// eventos del raton 


// carga todos los documentos despues de que cargue la pagina 
window.addEventListener('load', () =>{

        function cambiarColor(){
            var bg = boton.style.background
        if (bg =="green") {
            boton.style.background="red"
        

        }else{
            boton.style.background="green"
        }

        boton.style.padding="10px"
        boton.style.border="1px solid #ccc"

        return true;
        }


        var boton = document.querySelector("#boton");
        //evento click 
        boton.addEventListener('click',function(){
            cambiarColor();

        });

        //mouse over 

        boton.addEventListener('mouseover',function(){

            boton.style.background ="#ccc"

        });

        boton.addEventListener('mouseout',function(){
            boton.style.background= "black"
        });


        //focus
        var input = document.querySelector("#campoNombre");

        input.addEventListener('focus',function(){
            //boton.style.background= "black"
            console.log('estas dentro del imput');
        });

        //blur 
        input.addEventListener('blur',function(){
            //boton.style.background= "black"
            console.log('estas fuers del imput');
        });

        //keydown

        input.addEventListener('keydown',function(e){
            //boton.style.background= "black"
            console.log('[keydown] tecla pulsada ',String.fromCharCode(e.keyCode));
        });

        //keypress
        input.addEventListener('keypress',function(e){
            //boton.style.background= "black"
            console.log('[keypress] tecla precionada',String.fromCharCode(e.keyCode));
        });
        //keyup

        input.addEventListener('keyup',function(e){
            //boton.style.background= "black"
            console.log('[keypress] tecla soltada',String.fromCharCode(e.keyCode));
        });


});