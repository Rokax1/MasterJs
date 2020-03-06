//json JavaScript Objet Model 


window.addEventListener('load', ()=>{

    var pelicula ={
        titulo:'Batman vs superman',
        year: '2017',
        pais: 'estados unidos',
    }
    
    var peliculas=[
        {titulo:"la verdad duele",
        year:2016,
        pais:"francia"},
        pelicula,
    ];
    
    
    var caja_peliculas = document.querySelector("#peliculas");
    var index;
    
    for ( index in peliculas) {
         var p = document.createElement("p");
    
        p.append(peliculas[index].titulo +" - "+ peliculas[index].year);
    
        //console.log(p,caja_peliculas);
        caja_peliculas.append(p);
    }



    









});
