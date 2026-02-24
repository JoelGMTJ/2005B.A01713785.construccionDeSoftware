console.log("Hello world")

const filesystem = require('fs');
//Require es como el import o include
//filesystem es como quieres que se llame las funciones que requieres

filesystem.writeFileSync("hola.txt", "Hola mundo");

const http = require("http");

const html_header = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Esto es una prueba</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        <a href="/" style="color:red">Fórmula 1</a>
      </h1>
        
`;

const html_footer = `
  <!-- Aqui podrían ir los archivos js -->
  </body>
</html>
`;

const html_body = `

`;

const html_problemDescription = `
<h2 class="subtitle">Descripción del problema</h2>
<b>Este problema lo resolví como parte de un evento llamado "Calendario de RAMviento en el cual
publicaban problemas a traves de codeforces de nivel fácil a medio, lo resolví a inicios de Diciembre 2025 en C++ <br>
Las respuestas estan en la consola de la app de node.js</b> <br><br>
  Alice and Bob are decorating a Christmas Tree. <br><br>
  Alice wants only 3
 types of ornaments to be used on the Christmas Tree: yellow, blue and red. They have y
 yellow ornaments, b
 blue ornaments and r
 red ornaments. <br><br>
 In Bob's opinion, a Christmas Tree will be beautiful if: <br><br>
 the number of blue ornaments used is greater by exactly 1
 than the number of yellow ornaments, and <br>
 the number of red ornaments used is greater by exactly 1
 than the number of blue ornaments. <br>
 That is, if they have 8
 yellow ornaments, 13
 blue ornaments and 9
 red ornaments, we can choose 4
 yellow, 5
 blue and 6
 red ornaments (5=4+1
 and 6=5+1
). <br><br>
Alice wants to choose as many ornaments as possible, but she also wants the Christmas Tree to be beautiful according to Bob's opinion.

<br><br>
In the example two paragraphs above, we would choose 7
 yellow, 8
 blue and 9
 red ornaments. If we do it, we will use 7+8+9=24
 ornaments. That is the maximum number. <br><br>
 Since Alice and Bob are busy with preparing food to the New Year's Eve, they are asking you to find out the maximum number of ornaments that can be used in their beautiful Christmas Tree! <br><br>
 It is guaranteed that it is possible to choose at least 6
 (1+2+3=6
) ornaments. <br><br>
`

const arrNum1 = [
  75,
  15,
  78,
  95,
  20
]

function returnAvg(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum+= arr[i];
  }
  
  const promedio = sum/arr.length;
  return promedio;
}

console.log(returnAvg(arrNum1))

function christmasTree(yellow, blue, red){
 
    blue = blue - 1;
    red = red - 2;
 
    let least = yellow;
    if (least > blue){
        least = blue;
    } 
    if (least > red){
        least = red;
    }
 
    return (least * 3) + 3;
}

console.log(christmasTree(13, 3, 6))

const server = http.createServer((request, response) => {
    // console.log(request);  
    // console.log(response);
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header + html_body + html_problemDescription+ html_footer);
    response.end();
});

server.listen(3000);