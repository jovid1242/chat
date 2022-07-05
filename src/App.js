import React, { useState } from "react";
import io from "socket.io-client";
import "./App.css";
import Chat from "./components/chat/Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = (e) => {
    e.preventDefault();
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="App">
      <p>Join a chat</p>
      <form action="" onSubmit={joinRoom}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Room id"
        />
        <button>Send</button>
      </form>
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
