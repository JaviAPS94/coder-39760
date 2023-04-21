const socket = io()

socket.emit('message', 'Hola es un mensaje desde el front end');

socket.on('evento_socket_individual', data => {
    console.log(data);
});

socket.on('evento_todos_menos_actual', data => {
    console.log(data);
});

socket.on('evento_todos', data => {
    console.log(data);
});