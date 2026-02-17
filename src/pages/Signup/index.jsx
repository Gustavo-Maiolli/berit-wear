import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-logo-wrapper">
          <img src="imgs/berit/berit-text-black.png" className="signup-logo" />
        </div>
        <p className="signup-brand">Berit Wear</p>

        <h1 className="signup-title">Criar conta</h1>
        <p className="signup-subtitle">Preencha os campos para se cadastrar</p>

        <form noValidate>
          <div className="signup-form-row">
            <div className="signup-form-group">
              <label className="signup-label" htmlFor="signup-name">Nome</label>
              <input
                id="signup-name"
                className="signup-input"
                type="text"
                placeholder="João"
              />
            </div>

            <div className="signup-form-group">
              <label className="signup-label" htmlFor="signup-lastname">Sobrenome</label>
              <input
                id="signup-lastname"
                className="signup-input"
                type="text"
                placeholder="Silva"
              />
            </div>
          </div>

          <div className="signup-form-group">
            <label className="signup-label" htmlFor="signup-email">E-mail</label>
            <input
              id="signup-email"
              className="signup-input"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label" htmlFor="signup-password">Senha</label>
            <input
              id="signup-password"
              className="signup-input"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label" htmlFor="signup-confirm">Confirmar senha</label>
            <input
              id="signup-confirm"
              className="signup-input"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="signup-btn">Cadastrar</button>
        </form>

        <p className="signup-footer">
          Já tem conta?{" "}
          <Link to="/login" className="signup-footer-link">Entrar</Link>
        </p>
      </div>
    </div>
  );
}
