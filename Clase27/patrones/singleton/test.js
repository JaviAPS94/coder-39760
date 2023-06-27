import MongoSingleton from "./singleton.js";

const firstIntance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thirdInstance = MongoSingleton.getInstance();

//Ennuestra app podemos tener multiples usuarios, por cada usuario que vayamos a crear
// const user = new User();
//Ingresa Alex
//Federico = Alex
//Juan Pablo = Alex