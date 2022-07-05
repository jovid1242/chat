import React from "react";
import io from "socket.io-client";
import Login from "./pages/auth/Login";

import "./styles/global.css";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
