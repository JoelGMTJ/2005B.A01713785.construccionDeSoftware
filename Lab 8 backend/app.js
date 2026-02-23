console.log("Hello world")

const filesystem = require('fs');
//Require es como el import o include
//filesystem es como quieres que se llame las funciones que requieres

filesystem.writeFileSync("hola.txt", "Hola mundo");

const http = require("http");

const html = `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lab 8</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    <link rel="stylesheet" href="css/formato.css">
</head>

<body>
    Hola mundo desde html
</body>

</html>
`;

const server = http.createServer((request, response) => {
    //    console.log(request);  
    //    console.log(response);
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);