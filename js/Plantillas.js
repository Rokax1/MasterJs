var nombre = prompt("nombre");
var apellido = prompt("apellido");

var texto = `
    <h2> hola que tal  </h2>
    <h3> mi nombre es ${nombre}</h3>
    <h3> mi nombre es ${apellido}</h3>
`;

document.write(texto);