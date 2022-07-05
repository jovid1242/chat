import React, { useState } from "react";
import io from "socket.io-client";
import "../../styles/auth/login.scss";
const socket = io.connect("http://localhost:3001");

export default function Login() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = (e) => {
    e.preventDefault();
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login-header">
            <h4>Привет,</h4>
            <p>Добро пожаловать!</p>
          </div>
          <div className="login-body">
            <div className="login-body__head">
              <p>У тебя есть аккаунт?</p>
              <a href="#" className="text-shadow">
                Регистрация
              </a>
            </div>
            <form action="" className="form">
              <div className="form__group">
                <input type="text" placeholder="username*" />
              </div>
              <div className="form__group">
                <input type="password" placeholder="password*" />
              </div>

              <div className="reset">
                <a href="#" className="text-shadow">
                  Забыли пароль?
                </a>
              </div>

              <div className="form__group">
                <button className="chat-btn">Войти</button>
              </div>
            </form>
          </div>
          <div className="login-footer"></div>
        </div>
      </div>
    </div>
  );
}
