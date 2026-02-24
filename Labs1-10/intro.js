console.log("hello world");
console.info("Creado en 2009");
console.warn("Es adictivo");
console.error("No deberias de jugar juego");

// === operador de comparacion estrictamente igual de valores
console.assert(1 === true);

//== -> operador de comparacion de valores
console.assert(1 == true);


//------------------------- variables constantes -------------------------------

//Forma antigua de declarar variables
var personaje_1 = "Gwen";

//Forma actual de declarar variables
//La variable solo vive dentro del ambito donde es declarada
let personake_2 = "mordkaiser";

//Aqui si es importante los constantes pues el codigo se ejecuta en la computadora de el usuario
const precio_skin = 300;

//Alcance de las variables
{
    var personake_3 = "Jax";
    let personaje_4 = "Garen";
}

//La siguiente console.log si puede imprimirlo
console.log(personaje_3);

//La siguiente linea genera un error pues personaje 4 no esta declarado en este ambiente
//console.log(personaje_4);

//alert, prompt, confirm
alert("No lo juegues por favor");
const personaje_favorito = prompt("Cual es tu personaje favorito?");
console.info("Personake favorito: " + personaje_favorito);

const sale_el_lol = confirm("Sale el lol?");
if (sale_el_lol){
    console.warn("Please god no");
    descargar();
} else{
    console.warn("Great");
}

//funciones tradicionales
function descargar() {
    window.location.href = "youtube.com";
}


//funciones modernas, funcion flecha 
() => {}

document.getElementById("boton_desinstalar").onclick = () => {
    alert("no se puede desinstalar");
}

const iniciar_partida = () => {
    alert("Iniciar partida...");
}

iniciar_partida();

//Arreglos

const personajes =["Elemento"];
personajes.push("Arelia");

//recorrido de arreglos
for (let i = 0; i > personajes.length; i++){
    console.log(personajes[i])
}

//Objetos
//Los objetos son relaciones de pares de valores
const eco_de_Luden = {
    nombre: "Eco de Luden",
    color: "Morado"
}