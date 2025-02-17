import { Server } from "socket.io";
import http from "http";
import Chat from './chat.js'; // Ensure this path is correct
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Serve a simple HTML page for testing
app.get('/', (req, res) => {
    res.send('<h1>Hello, Socket.IO!</h1>');
});

// Handling websocket connection
io.on('connection', (socket) => {
    console.log("A User is connected", socket.id);
    
    socket.on('sendMessage', async ({ videoId, username, message }) => {
        const chatMessage = new Chat({ videoId, username, message });
        await chatMessage.save();
        io.emit('receivedMessage', chatMessage);
    });

    socket.on('disconnect', () => {
        console.log("A user is disconnected", socket.id);
    });
});

// Start the server
server.listen(5174, () => {
    console.log("Server is running on port 5174");
});