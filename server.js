const io = require('socket.io')(3000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credential: true
    }
});//llamar la libreria socket


/* Mensajes sobre la conexion sobre la base de datos. */

io.on('connection', (socket) => {
    console.log('Usuario Conectado');
    socket.emit('message', 'Hola mundo'); //Recibe el dato del socket io. 
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    socket.on('chatmsg', msg =>{
        io.emit('message', msg);
    })
});