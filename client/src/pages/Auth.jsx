import axios from "axios";

const Auth = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    // console.log(value)
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth`, { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Erro de autenticação", e));
  };
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
          <button className="auth-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
