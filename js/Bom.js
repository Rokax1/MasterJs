// bom browser objet model 


function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.href);
}


function  redirect(url){
    window.location.href=url;
}

function AbrirVentana(url){
window.open(url,"","width=400,heigth=300");
}


getBom();
