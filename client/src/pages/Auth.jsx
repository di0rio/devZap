import React from "react";

const Auth = () => {
    const onSubmit = () => {

    }
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Bem-vindo✌️</div>
        <div className="form-subtitle">
          Informe o nome de usuário para continuar
        </div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" type="username" />
          <button className="auth-button" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
