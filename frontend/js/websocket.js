const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = (event) => {
    console.log("Mensaje recibido:", event.data);
    alert("Notificación: " + event.data);
};
