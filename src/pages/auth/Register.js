import React from "react";

export default function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__wrapper">
          <div className="register-header">
            <h4>Привет,</h4>
            <p>Добро пожаловать!</p>
          </div>
          <div className="register-body">
            <div className="register-body__head">
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
          <div className="register-footer"></div>
        </div>
      </div>
    </div>
  );
}
