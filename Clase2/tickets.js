class TicketManager {
    #precioBaseGanancia = 0.15;

    constructor() {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    // [] Arreglo de eventos se encuentra vacío
    // 1 2 3 4 5 6 7 8 9 10
    // idEvento 2 recibimos el id del evento
    // findIndex(2) resultado = 1
    // eventos[1]
    // {
    //     id: 1,   
    //     nombre: 'Concierto de rock',
    //     lugar: 'Buenos Aires',
    //     precio: 2800,
    //     capacidad: 5000,
    //     fecha: 2023-04-25,
    //     partipantes: [1,2,3,4,5,6,7]
    // },
    // {
    //     id: 2,   
    //     nombre: 'Concierto de pop',
    //     lugar: 'Buenos Aires',
    //     precio: 2800,
    //     capacidad: 5000,
    //     fecha: 2023-04-25,
    //     partipantes: [1,2,3,4,5]
    // }

    agregarEvento = (
        nombre, lugar, precio, capacidad = 50,
        fecha = new Date().toLocaleDateString()
    ) => {
        const evento = {
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes: []
        };

        if (this.eventos.length === 0) {
            evento.id = 1;
            // {
            //     id: 1,
            //     nombre,
            //     lugar,
            //     precio,
            //     capacidad,
            //     fecha,
            //     participantes: []
            // };
        } else {
            // 0 1 2 3
            //[1,2,3,4] // Tiene 4 elementos la longitud del arreglo
            // Longitud = 4 - 1
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }

        this.eventos.push(evento);        
    }

    agregarUsuario = (idEvento, idUsuario) => {     
        const eventoIndex = this.eventos
            .findIndex(evento => evento.id === idEvento);
        
        //tenemos almacenado el indice donde se encuentra nuestro evento
        // -1 retorna cuando no fue capaz de encontrar el elemento dentro del arreglo

        if (eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        // {
    //     id: 1,   
    //     nombre: 'Concierto de rock',
    //     lugar: 'Buenos Aires',
    //     precio: 2800,
    //     capacidad: 5000,
    //     fecha: 2023-04-25,
    //     partipantes: []
    // },
    // Recibimos el usuario con id 1

        const usuarioRegistrado = 
            this.eventos[eventoIndex].participantes.includes(idUsuario);
        // retorna un boolean
        

        if (usuarioRegistrado) {
            console.log('Usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idUsuario);
    }

    ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
        const eventoIndex = this.eventos.findIndex(e => e.id === idEvento);
        if (eventoIndex === -1) {
            console.log("Evento no encontrado");
            return;
        }
        const evento = this.eventos[eventoIndex];
        const newEvento = {
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length - 1].id + 1,
            participantes: []
        }
        this.eventos.push(newEvento);
    }
};

const manejadorEventos = new TicketManager();
manejadorEventos.agregarEvento('Evento coder 1', 'Argentina', 200);
manejadorEventos.agregarEvento('Evento coder 2', 'Mexico', 400);

manejadorEventos.agregarUsuario(1, 1);
manejadorEventos.ponerEventoEnGira(1, 'Mexico', '30/11/2024');
console.log(manejadorEventos.getEventos());
