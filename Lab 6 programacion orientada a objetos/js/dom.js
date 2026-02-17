const mclaren = {
    shortName : "McLaren",
    longName : "McLaren Mastercard F1 Team",
    color: "#F47600",
    piloto1: "Lando Norris",
    piloto2: "Oscar Piastri",
    img: "imagenes/McLaren.avif",
}

const ferrari = {
    shortName : "Ferrari",
    longName : "Scuderia Ferrari HP",
    color: "#ED1131",
    piloto1: "Charles Leclerc",
    piloto2 : "Lewis Hamilton",
    img: "imagenes/ferrari.avif",
}

const mercedes = {
    shortName : "Mercedes",
    longName : "Mercedes-AMG Petronas Formula One Team",
    color: "#00D7B6",
    piloto1: "George Russel",
    piloto2 : "Kimi Antonelli",
    img: "imagenes/mercedes.avif",
}

const williams = {
    shortName : "Williams",
    longName : "Atlassian Williams F1 Team",
    color: "#1868DB",
    piloto1: "Alex Albon",
    piloto2 : "Carlos Sainz",
    img: "imagenes/williams.avif",
}

const haas = {
    shortName : "Haas",
    longName : "TGR Haas F1 Team",
    color: "#9C9FA2",
    piloto1: "Oliver Bearman",
    piloto2 : "Esteban Ocon",
    img: "imagenes/haas.avif",
}

const redbull = {
    shortName : "Red Bull",
    longName : "Oracle Red Bull Racing",
    color: "#3671C6",
    piloto1: "Max Verstappen",
    piloto2: "Liam Lawson",
    img: "imagenes/red bull.avif",
}

const astonmartin = {
    shortName : "Aston Martin",
    longName : "Aston Martin Aramco F1 Team",
    color: "#229971",
    piloto1: "Fernando Alonso",
    piloto2: "Lance Stroll",
    img: "imagenes/aston martin.avif",
}

const alpine = {
    shortName : "Alpine",
    longName : "BWT Alpine F1 Team",
    color: "#0093CC",
    piloto1: "Pierre Gasly",
    piloto2: "Jack Doohan",
    img: "imagenes/alpine.avif",
}

const rb = {
    shortName : "VCARB",
    longName : "Visa Cash App RB Formula One Team",
    color: "#6692FF",
    piloto1: "Yuki Tsunoda",
    piloto2: "Isack Hadjar",
    img: "imagenes/racing bulls.avif",
}

const audi = {
    shortName : "Audi",
    longName : "Audi Revolut F1 Team",
    color: "#F50537",
    piloto1: "Nico Hülkenberg",
    piloto2: "Gabriel Bortoleto",
    img: "imagenes/audi.avif",
}

const cadillac = {
    shortName : "Cadillac",
    longName : "Cadillac F1 Team",
    color: "#FFFFFF",
    piloto1: "Sergio Perez",
    piloto2: "Valteri Bottas",
    img: "imagenes/cadillac.avif",
}

// Array de equipos con sus ID de div correspondientes
const teams = [
    { team: mclaren, divId: "div_mclaren" },
    { team: ferrari, divId: "div_ferrari" },
    { team: mercedes, divId: "div_mercedes" },
    { team: redbull, divId: "div_redbull" },
    { team: williams, divId: "div_williams" },
    { team: haas, divId: "div_haas" },
    { team: astonmartin, divId: "div_astonmartin" },
    { team: alpine, divId: "div_alpine" },
    { team: rb, divId: "div_rb" },
    { team: audi, divId: "div_audi" },
    { team: cadillac, divId: "div_cadillac" },
];

const on_hover = (team, divTeam) => {
    divTeam.innerHTML = `
        <div style="color: ${team.color}">${team.longName}</div>
        <figure class="image is-16by9">
            <img class="is-rounded" src="${team.img}" alt="${team.shortName} livery">
        </figure>
    `;
}
const off_hover = (team, divTeam) => {
    divTeam.innerHTML = `
        <div style="color: ${team.color}">${team.shortName}</div>
        <img  class="image is-16by9 is-rounded"    src="${team.img}" alt=${team.shortName} livery></img>
    `;
}

// Aplicar eventos a todos los equipos con un loop
teams.forEach(({ team, divId }) => {
    const div = document.getElementById(divId);
    div.onmouseover = () => on_hover(team, div);
    div.onmouseleave = () => off_hover(team, div);
    off_hover(team,div);
});