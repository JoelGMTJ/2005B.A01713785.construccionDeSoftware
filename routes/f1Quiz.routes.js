const express = require('express');
const router = express.Router();

const filesystem = require('fs');

const teams = [
    {
        shortName: "McLaren",
        longName: "McLaren Mastercard F1 Team",
        color: "#F47600",
        piloto1: "Lando Norris",
        piloto2: "Oscar Piastri",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/McLaren/MCL40_C_OP_Social_1920x1080.webp",
        link: "https://www.mclaren.com/racing/formula-1/team/",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png"
    },

    {
        shortName: "Ferrari",
        longName: "Scuderia Ferrari HP",
        color: "#ED1131",
        piloto1: "Charles Leclerc",
        piloto2: "Lewis Hamilton",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Ferrari/G_V027BWQAASNgK.webp",
        link: "https://www.ferrari.com/en-EN/formula1",
        logo: "https://clipart-library.com/new_gallery/122-1229506_ferrari-logo-download-png-image-ferrari.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png"
    },

    {
        shortName: "Mercedes",
        longName: "Mercedes-AMG Petronas F1 Team",
        color: "#00D7B6",
        piloto1: "George Russel",
        piloto2: "Kimi Antonelli",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Mercedes/Mercedes-AMG%20F1%20W17%20E%20PERFORMANCE%20-%20GR%206.webp",
        link: "https://www.mercedesamgf1.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KIMANT01_Kimi_Antonelli/kimant01.png"
    },

    {
        shortName: "Red Bull",
        longName: "Oracle Red Bull Racing",
        color: "#3671C6",
        piloto1: "Max Verstappen",
        piloto2: "Isaac Hadjar",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Red%20Bull/SI202601150723.webp",
        link: "https://www.redbullracing.com/int-en",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Red_Bull_Racing_Logo_2026.svg/500px-Red_Bull_Racing_Logo_2026.svg.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isaac_Hadjar/isahad01.png"
    },

    {
        shortName: "Williams",
        longName: "Atlassian Williams F1 Team",
        color: "#1868DB",
        piloto1: "Alex Albon",
        piloto2: "Carlos Sainz",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Williams/f34h_v4-Sainz_169.webp",
        link: "https://www.williamsf1.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Williams_F1_logo_2026_%28Corrigindo%29.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png"
    },

    {
        shortName: "VCARB",
        longName: "Visa Cash App RB Formula One Team",
        color: "#6692FF",
        piloto1: "Liam Lawson",
        piloto2: "Arvid lindblad",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Racing%20Bulls%20(VCARB)/SI202601151081.webp",
        link: "https://www.visacashapprb.com/int-en",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/VCARB_F1_logo.svg/500px-VCARB_F1_logo.svg.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ARVLIN01_Arvid_Lindblad/arvlin01.png"
    },

    {
        shortName: "Aston Martin",
        longName: "Aston Martin Aramco F1 Team",
        color: "#229971",
        piloto1: "Fernando Alonso",
        piloto2: "Lance Stroll",
        imgLivery: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Aston%20Martin/GD2_2384%20copy.webp",
        link: "https://www.astonmartinf1.com/en-GB",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Aston_Martin_F1_Team_logo_2024.jpg?20250816150549",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png"
    },

    {
        shortName: "Haas",
        longName: "TGR Haas F1 Team",
        color: "#9C9FA2",
        piloto1: "Oliver Bearman",
        piloto2: "Esteban Ocon",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Haas/10-Photos-16x9-EO.0002.webp",
        link: "https://www.haasf1team.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/TGR_Haas_F1_Team_Logo_%282026%29.svg/640px-TGR_Haas_F1_Team_Logo_%282026%29.svg.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png"
    },

    {   
        shortName: "Audi",
        longName: "Audi Revolut F1 Team",
        color: "#F50537",
        piloto1: "Nico Hülkenberg",
        piloto2: "Gabriel Bortoleto",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Audi/16x9%20single%20image%20(39).webp",
        link: "https://www.audif1.com/en",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/640px-Audi-Logo_2016.svg.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png"
    },

    {
        shortName: "Alpine",
        longName: "BWT Alpine F1 Team",
        color: "#0093CC",
        piloto1: "Pierre Gasly",
        piloto2: "Franco Colapinto",
        imgLivery: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Alpine/TWJB_BWT_ALPINE_FORMULA_ONE_TEAM-A526_HERO_SHOT_2.webp",
        link: "https://www.alpinef1.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Alpine_F1_Team_Logo.svg",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png"
    },

    {
        shortName: "Cadillac",
        longName: "Cadillac F1 Team",
        color: "#000000",
        piloto1: "Sergio Perez",
        piloto2: "Valteri Bottas",
        imgLivery: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026/Cadillac/CadillacF1Team_2203_HiRes.jpg.webp",
        link: "https://www.cadillacf1team.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cadillac_Formula_1_Team_logo.png/640px-Cadillac_Formula_1_Team_logo.png",
        imgPiloto1: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png",
        imgPiloto2: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png"
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
        <a href="/main" style="color:red">Fórmula 1</a>
      </h1>
        
`;

const html_navBar = `
    <a class="button is-danger" href="/drivers">Drivers</a>
    <a class="button is-primary" href="/teams">Teams</a>
    <a class="button is-link" href="/quiz">Quiz</a> <br>
`

const html_footer = `
  </body>
</html>
`;

const html_quiz = `
    <form action="/quiz" method="POST">
        <div class="field">
            <label for="equipo" class="label">Equipo Favorito</label>
            <div class="control">
                <input id="equipo" name="equipo" class="input" type="text" placeholder="e.g Red Bull">
            </div>
        </div>

        <div class="field">
            <label for="piloto" class="label">Piloto</label>
            <div class="control">
                <input id="piloto" name="piloto" class="input" type="text" placeholder="e.g. Alex Albon">
            </div>
        </div>

        <div class="field">
            <label for="prediccionGanador" class="label">¿Quién crees que va a ganar?</label>
            <div class="control">
                <input id="prediccionGanador" name="prediccionGanador" class="input" type="text" placeholder="Obviamente va a ganar...">
            </div>
        </div>

        <input class="button is-primary" type="submit" value="Enviar resultados">
    </form>
`;

const html_quizConfirmation = `
    Gracias por contestar la encuesta :)
`

router.get('/',(request, response, next) => {
    response.send(html_header + html_navBar + html_quiz + html_footer); //Manda la respuesta
});

//Ver si puedo preguntar sobre esto que no entendi muy claro porque se necesita de poner si se supone que ya estoy dentro de la ruta, PREGUNTAR EN CLASE
//Quizas tambien preguntar esto de que si los cuadros de texto funcionan entre paginas pues tienen el mismo id o class or smth
router.post('/',(request, response, next) => {
    console.log(request.body);
    filesystem.writeFileSync("QuizF1.txt", JSON.stringify(request.body, null, 2));
    response.send(html_header + html_navBar + html_quizConfirmation + html_footer); //Manda la respuesta
});

module.exports = router;