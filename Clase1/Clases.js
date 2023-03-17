class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especie = 'Humano';

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`);
    }

    obtenerEspecie = () => {
        console.log(`Soy ${Persona.especie}`);
    }
}

const persona1 = new Persona('Alex');
const persona2 = new Persona('Pablo');

persona1.saludar();
persona1.obtenerEspecie();

persona2.saludar();
persona2.obtenerEspecie();
