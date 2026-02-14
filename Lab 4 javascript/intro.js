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

const n1 = Math.floor(Math.random() * 20);
const n2 = Math.floor(Math.random() * 20);

const ans = n1+n2;

const time1 = Date.now();
const userAns = parseInt(prompt("Cuanto vale " + n1 + " + " + n2 + "?"));
const time2 = Date.now();
let ansTime = time2-time1;
ansTime /= 1000;
if (userAns == ans){
    document.write("Respuesta correcta");
} else {
    document.write("Respuesta incorrecta");
}
document.write("<br><br>")
document.write("Te has tardado " + ansTime + " segundos")
document.write("<br><br>")
document.write("Los siguientes ejercicios están en la consola")
document.write("<br>")
document.write("Presiona ctrl + shift + i para acceder a la consola")
document.write("<br><br>")


/* La practica de usar document.write es mala, 
esto pues si se hace después de haber cargado la pagina
borrará todo el contenido previo
se prefiere usar en inner.html */

/*
Ejercicio 3---------------------------------------------------------------------
*/

function counter(array){
    let amountAns = [0,0,0];
    for (let i = 0; i < array.length; i++){
        if (array[i] == 0){
            amountAns[1] += 1;
        } else if (array[i] < 0){
            amountAns[0] += 1;
        } else{
            amountAns[2] += 1;
        }
    }
    return amountAns;
}

const arr1 = [[3, -7, 10, 0, -2, 8, -9, 4, -1, 6],
              [-10, 5, -3, 9, 1, -6, 7, -4, 2, -8],
              [0, -1, 4, -5, 10, -10, 3, -2, 8, -7],
              [6, -9, 2, -3, 5, -8, 0, 7, -4, 1]];

for (let i = 0; i < arr1.length; i++){
    let amountAns = counter(arr1[i]);
    console.log("Cantidad de numeros negativos: " + amountAns[0]);
    console.log("Cantidad de ceros: " + amountAns[1]);
    console.log("Cantidad de numeros positivos: " + amountAns[2]);
    console.log("Fin de caso " + (i+1))
}

/*
Ejercicio 4---------------------------------------------------------------------
*/

const arr2 = 
[[12, 87, 45, 3, 99, 54, 68, 21, 76, 30],
[100, 5, 73, 41, 88, 19, 64, 27, 90, 2],
[34, 0, 57, 82, 16, 49, 95, 23, 71, 60],
[8, 92, 38, 74, 11, 53, 67, 29, 84, 46]];

function promedio(array){
    let avg = 0;
    for (let i = 0; i < array.length; i++){
        avg += array[i];
    }
    avg /= array.length;
    return avg;
}

for (let i = 0; i < arr2.length; i++){
    let avg = promedio(arr2[i]);
    console.log("Promedio de set de numeros " + (i+1) + ": " + avg)
}

/*
Ejercicio 5---------------------------------------------------------------------
*/

function inverso(num){
    let nOfDigits = (Math.floor(Math.log10(num))+1);
    let rest;
    let inv = 0;
    for (let i = 0; i < nOfDigits; i++){
        inv = inv*10;
        rest = num%10;
        inv += rest;
        num = Math.floor(num/10);
    }
    return inv;
}

let arr3 = [6372,4569,1234,987654321,10];

for (let i = 0; i < arr3.length; i++){
    let inv = inverso(arr3[i]);
    console.log("Inverso de " + (arr3[i]) + "= " + inv)
}