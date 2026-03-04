import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import API_BASE_URL from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function linkToLogin() {
    navigate("/login");
  }
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const fullName = `${name} ${lastname}`.trim();

    if (!fullName || !email || !password || !confirmPassword) {
      return alert("Preencha todos os campos!");
    }

    if (password !== confirmPassword) {
      return alert("As senhas não coincidem");
    }

    if (password.length < 8) {
      return alert("A senha deve ter pelo menos 8 caracteres");
    }


    try {
      const userData = await API_BASE_URL.post('/users/signup', {
        name: fullName,
        email,
        password
      });

      alert(userData.data.message);
      linkToLogin();

    } catch (error) {
      alert(error.response?.data?.error || 'Erro ao criar conta');
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-logo-wrapper">
          <img src="imgs/berit/berit-text-black.png" className="signup-logo" />
        </div>
        <p className="signup-brand">Berit Wear</p>

        <h1 className="signup-title">Criar conta</h1>
        <p className="signup-subtitle">Preencha os campos para se cadastrar</p>

        <form noValidate onSubmit={handleSubmit}>
          <div className="signup-form-row">
            <div className="signup-form-group">
              <label className="signup-label" htmlFor="signup-name">Nome</label>
              <input
                id="signup-name"
                className="signup-input"
                type="text"
                placeholder="João"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="signup-form-group">
              <label className="signup-label" htmlFor="signup-lastname">Sobrenome</label>
              <input
                id="signup-lastname"
                className="signup-input"
                type="text"
                placeholder="Silva"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label" htmlFor="signup-password">Senha</label>
            <input
              id="signup-password"
              className="signup-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label" htmlFor="signup-confirm">Confirmar senha</label>
            <input
              id="signup-confirm"
              className="signup-input"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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