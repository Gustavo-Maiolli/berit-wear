import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        
        <div className="login-logo-wrapper">
          <img
            src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770832887/berit-logo-02_thnwbo.jpg"
            className="login-logo"
            alt="logo"
          />
        </div>

        <p className="login-brand">Berit Wear</p>

        <h1 className="login-title">Entrar</h1>
        <p className="login-subtitle">
          Acesse sua conta para continuar
        </p>

        {/* FORM ESTÁTICO */}
        <form>
          <div className="login-form-group">
            <label className="login-label" htmlFor="login-email">
              E-mail
            </label>
            <input
              id="login-email"
              className="login-input"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          <div className="login-form-group">
            <label className="login-label" htmlFor="login-password">
              Senha
            </label>
            <input
              id="login-password"
              className="login-input"
              type="password"
              placeholder="••••••••"
            />
            <button
              type="button"
              className="login-forgot"
            >
              Esqueceu a senha?
            </button>
          </div>

          <button type="button" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="login-divider">
          <div className="login-divider-line" />
          <span className="login-divider-text">ou</span>
          <div className="login-divider-line" />
        </div>

        <p className="login-footer">
          Não tem conta?{" "}
          <Link to="/signup" className="login-footer-link">
            Cadastre-se
          </Link>
        </p>

      </div>
    </div>
  );
}
