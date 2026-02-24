const express = require('express');
const router = express.Router();

const teams = [
    {
        shortName: "McLaren",
        longName: "McLaren Mastercard F1 Team",
        color: "#F47600",
        piloto1: "Lando Norris",
        piloto2: "Oscar Piastri",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/McLaren/MCL40_C_OP_Social_1920x1080.webp",
        link: "https://www.mclaren.com/racing/formula-1/team/",
    },

    {
        shortName: "Ferrari",
        longName: "Scuderia Ferrari HP",
        color: "#ED1131",
        piloto1: "Charles Leclerc",
        piloto2: "Lewis Hamilton",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Ferrari/G_V027BWQAASNgK.webp",
        link: "https://www.ferrari.com/en-EN/formula1",
    },

    {
        shortName: "Mercedes",
        longName: "Mercedes-AMG Petronas Formula One Team",
        color: "#00D7B6",
        piloto1: "George Russel",
        piloto2: "Kimi Antonelli",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Mercedes/Mercedes-AMG%20F1%20W17%20E%20PERFORMANCE%20-%20GR%206.webp",
        link: "https://www.mercedesamgf1.com",
    },

    {
        shortName: "Williams",
        longName: "Atlassian Williams F1 Team",
        color: "#1868DB",
        piloto1: "Alex Albon",
        piloto2: "Carlos Sainz",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Williams/f34h_v4-Sainz_169.webp",
        link: "https://www.williamsf1.com",
    },

    {
        shortName: "Haas",
        longName: "TGR Haas F1 Team",
        color: "#9C9FA2",
        piloto1: "Oliver Bearman",
        piloto2: "Esteban Ocon",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Haas/10-Photos-16x9-EO.0002.webp",
        link: "https://www.haasf1team.com",
    },

    {
        shortName: "Red Bull",
        longName: "Oracle Red Bull Racing",
        color: "#3671C6",
        piloto1: "Max Verstappen",
        piloto2: "Isaac Hadjar",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Red%20Bull/SI202601150723.webp",
        link: "https://www.redbullracing.com/int-en"
    },

    {
        shortName: "Aston Martin",
        longName: "Aston Martin Aramco F1 Team",
        color: "#229971",
        piloto1: "Fernando Alonso",
        piloto2: "Lance Stroll",
        img: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Aston%20Martin/GD2_2384%20copy.webp",
        link: "https://www.astonmartinf1.com/en-GB",
    },

    {
        shortName: "Alpine",
        longName: "BWT Alpine F1 Team",
        color: "#0093CC",
        piloto1: "Pierre Gasly",
        piloto2: "Franco Colapinto",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Alpine/TWJB_BWT_ALPINE_FORMULA_ONE_TEAM-A526_HERO_SHOT_2.webp",
        link: "https://www.alpinef1.com",
    },

    {
        shortName: "VCARB",
        longName: "Visa Cash App RB Formula One Team",
        color: "#6692FF",
        piloto1: "Liam Lawson",
        piloto2: "Arvid lindblad",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Racing%20Bulls%20(VCARB)/SI202601151081.webp",
        link: "https://www.visacashapprb.com/int-en",
    },

    {
        shortName: "Audi",
        longName: "Audi Revolut F1 Team",
        color: "#F50537",
        piloto1: "Nico Hülkenberg",
        piloto2: "Gabriel Bortoleto",
        img: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Audi/16x9%20single%20image%20(39).webp",
        link: "https://www.audif1.com/en",
    },

    {
        shortName: "Cadillac",
        longName: "Cadillac F1 Team",
        color: "#000000",
        piloto1: "Sergio Perez",
        piloto2: "Valteri Bottas",
        img: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Cadillac/CadillacF1Team_2203_HiRes.jpg.webp",
        link: "https://www.cadillacf1team.com",
    }
];

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
  </body>
</html>
`;

//Middleware
router.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

router.use((request, response, next) => {
    let html_body = `
        <div class="content px-6 mx-6">

            <h1 id="mainPageTitle">The F1 2026 grid</h1>
            <div class="columns" id="topColumn">
            `;
    for (let counter = 0; counter < teams.length; counter++) {
        html_body += `
                <div class="column mx-0.5" style="color:${teams[counter].color}">${teams[counter].shortName} <br>   
                <figure class="image is-16by9">
                    <img class="" src="${teams[counter].img}" alt="${teams[counter].shortName} livery">
                </figure>
                </div>
            `

        if (counter == 10) {
            html_body += `
                <div class="column mx-0.5"><br>   
                
                </div>
            `
        }
        if ((counter + 1) % 4 == 0) {
            html_body += `
                    </div>
                    <div class="columns">
                    `;
        }
    }
    html_body += `

                </div>
            `;

    response.send(html_header + html_body + html_footer); //Manda la respuesta
});


module.exports = router;