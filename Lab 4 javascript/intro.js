document.getElementById("dream").onclick = () => {
    document.getElementById("cry").innerHTML = "Forza Ferrari";
    document.getElementById("long_text").innerHTML = "Ferrari is the strongest team in the paddock, they beat all the other teams, win the constructors after 18 long years, scoring 18 morbillion constructor points and destroying all their rivals";
}


/*
Ejercicio 1---------------------------------------------------------------------
*/
function calcular_cuadrado(n){
    return n*n;
}

function calcular_cubo(n){
    return n*n*n;
}

console.assert(calcular_cuadrado(5) === 25, "Error de calculo");
console.assert(calcular_cubo(3) === 27, "Error de calculo");

let nEjercicio1 = parseInt(prompt("Ingresa un numero para el ejercicio 1"));
/*segun internet es necesario poner parseInt para que el input se considere int
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt */

if (nEjercicio1 > 0){
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
        
        for (let i = 1; i <= nEjercicio1; i++) {
            document.write("<tr>");
            document.write("<td>" + i + "</td>");
            document.write("<td>" + calcular_cuadrado(i) + "</td>");
            document.write("<td>" + calcular_cubo(i) + "</td>");
            document.write("</tr>");
        }
    document.write("</table>");
}

document.write("<br>")

/*
Ejercicio 2---------------------------------------------------------------------
*/

let n1 = Math.floor(Math.random() * 20);
let n2 = Math.floor(Math.random() * 20);

let ans = n1+n2;

let time1 = Date.now();
let userAns = parseInt(prompt("Cuanto vale " + n1 + " + " + n2 + "?"));
let time2 = Date.now();
if (userAns == ans){
    document.write("Respuesta correcta");
} else {
    document.write("Respuesta incorrecta");
}
document.write("<br>")
document.write()
/* La practica de usar document.write es mala, se prefiere usar en inner.html */

