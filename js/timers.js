window.addEventListener('load' , ()=>{

        //timers 
        

        function Intervalo(){
        var tiempoIntevalo = setInterval(() =>{

            console.log("setinterval ejecutado");
          
            var encabezado = document.querySelector("h1");

            if (encabezado.style.fontSize =="50px") {

                encabezado.style.fontSize ="20px";

            } else {
                encabezado.style.fontSize ="50px";
            }



        },5000);

        return tiempoIntevalo;

    }

// solo se ejecuta una ves
/*
        var tiempoTimeOut = setTimeout(() =>{

            console.log("setinterval ejecutado");
          
            var encabezado = document.querySelector("h1");

            if (encabezado.style.fontSize =="50px") {

                encabezado.style.fontSize ="20px";

            } else {
                encabezado.style.fontSize ="50px";
            }



        },3000);

*/
        tiempo = Intervalo();

        var stop = document.querySelector("#stop");

        stop.addEventListener('click',()=>{
            console.log('stop');
            clearInterval(tiempo);

        });

        var start = document.querySelector("#start");

        start.addEventListener('click',()=>{
            alert('has iniciado el intervalo ');

            Intervalo();

        });
        



});