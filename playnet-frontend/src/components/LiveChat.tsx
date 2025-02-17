import React, {useState, useEffect} from "react";
import {io} from "socket.io-client";

const socket = io('http://localhost:5174');

const LiveChat = ({videoId}: {videoId: string}) => {

    const [messages, setMessages] = useState<{username: string, message: string}[]>([]);

    const [message, setMessage] = useState('');

    const [username, setUsername] = useState('');


    useEffect(() => {
        socket.on('receiveMessage', (msg) => setMessages((prev) => [...prev, msg]));
    }, []);


    const sendMessage = () => {
        if(message.trim()){
            socket.emit('sendMessage', {videoId, username, message});
            setMessage('');
        }
    };


    return (
        <div
        className="border p-4 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Live Chat</h2>
            <div className="h-96 overflow-y-scroll">
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.username}</strong>{msg.message}</p>
                ))}
            </div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 w-full mb-2" placeholder="Type your message here..."/>
            <button onClick={sendMessage} className="bg-blue-500 text-white p-2">Send</button>
        </div>
    );
};

export default LiveChat;