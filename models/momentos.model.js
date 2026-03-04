const momentsList = [
{
    name: "Hulkenberg first podium",
    season: 2025,
    location: "Silverstone",
    videoLink: "https://youtu.be/daWr9xnkKS4?t=430",
    image: "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/b94e/live/9dea8bf0-5a90-11f0-9f6f-9b31b462c89f.jpg",
},
{
    name: "Verstappen Brazil P17 to win",
    season: 2024,
    location: "Sao Paolo",
    videoLink: "https://youtu.be/gbxJT-yBdcs?t=363",
    image: "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2024/F1_Grand_Prix_of_Brazil_and_Qualifying/2182695804.webp",
},
{
    name: "Ferrari fucks up Hungary",
    season: 2025,
    location: "Hungary",
    videoLink: "https://youtu.be/hrPtK5D5yn4?t=337",
    image: "https://i.redd.it/9p5k8ugl07l31.jpg",
},
{
    name: "Antonelli crashes leclerc",
    season: 2025,
    location: "Zandvoort",
    videoLink: "https://youtu.be/JIRqdeNl2cU?t=312",
    image: "https://scontent-qro3-1.xx.fbcdn.net/v/t39.30808-6/541006654_1287720919816829_5192374193151031322_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=o8iUfN96924Q7kNvwGHhOyg&_nc_oc=Admx-oZvyZXtiEApARHqKRdczCxoW8_M-1zb2Aes1YZ5f03T_Ow9YQB6PAtBdC2qZwU&_nc_zt=23&_nc_ht=scontent-qro3-1.xx&_nc_gid=peKpsOpp3kbCxfqLeI0fBw&_nc_ss=8&oh=00_Afx5CunK98sOI3op2O8kkL0cnEKkkkfgZvm5LsQUfu4qYg&oe=69AD519D",
},
];

module.exports = class Moments {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_name, mi_season, mi_location, mi_drivers, mi_videoLink, mi_image) {
        this.name = mi_name;
        this.season = mi_season;
        this.location = mi_location;
        this.drivers = mi_drivers,
        this.videoLink = mi_videoLink;
        this.image = mi_image;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        momentsList.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return momentsList;
    }

}