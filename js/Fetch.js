//fetch y petisiones s ervicios rest / api
var users=[];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())
    .then(data=>{
        users=data;
        console.log(users);
    });