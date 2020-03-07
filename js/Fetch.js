//fetch y petisiones s ervicios rest / api


var divUsers = document.querySelector("#Users");
var divProfesor = document.querySelector("#profesor");
var divJanet = document.querySelector("#janet");

   
        getUsers()
        .then(data=>data.json())
        .then(users=>{
        ListadoUsers(users.data);

            return getInfo();
        })
        .then(data =>{
           divProfesor.innerHTML=data;
           
            return getJanet()
        })
        .then(data=>data.json())
        .then(user =>{
            MostrarJanet(user.data);

            
        })
        .catch(error =>{ // capturar errores en la promesas
            console.log(error);
            alert('error en las peticiones');
        });
        




    function getUsers(){
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){


        var profesor={
            nombre:'Victor',
            apellido :'robles',
            url: 'xd.com',
        }


        return new Promise((resolve,reject)=>{
            var profesor_string ="";
            setTimeout(function(){

                profesor_string=  JSON.stringify(profesor);
                if(typeof profesor_string !='string' || profesor_string=="" ){

                    return reject("error");
    
                  }
    
                  return resolve(profesor_string);

            },3000);
             
             
        });



        

        JSON.stringify(profesor);

    }

    function ListadoUsers(users){

        users.map((user,i)=>{
            let  nombre = document.createElement('h2');
 
             nombre.innerHTML = i +" "+ user.first_name + " "+ user.last_name 
             divUsers.appendChild(nombre);
 
 
             document.querySelector(".loading").style.display='none';
         });

    }


    function MostrarJanet(user){


            let  nombre = document.createElement('h4');
            let avatar = document.createElement("img");
             nombre.innerHTML = user.first_name + " "+ user.last_name ;
             avatar.src=user.avatar;
             avatar.width="100";

             divJanet.appendChild(nombre);
             divJanet.appendChild(avatar);
 
 
             document.querySelector("#janet .loading").style.display='none';
     

    }