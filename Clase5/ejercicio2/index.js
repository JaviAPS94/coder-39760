import moment from "moment";

const hoy = moment();
const fechaNacimiento = moment('1994-11-01', 'YYYY-MM-DD');

if(fechaNacimiento.isValid()) {
    const diferencia = hoy.diff(fechaNacimiento,'years');
    console.log(diferencia);
} else {
    console.log('Fecha no válida');
}

console.log(hoy);