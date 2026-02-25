import { Link, useLocation } from "react-router-dom";
import "./Storage.css";

export default function AdminEstoque() {
  const location = useLocation();

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-left">
          <div className="admin-header-logo">
            <img
              src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770832887/berit-logo-02_thnwbo.jpg"
              alt="Logo"
            />
          </div>
        </div>

        <div className="admin-header-right">
          <Link to="/" className="admin-logout-btn">
            Sair
          </Link>
        </div>
      </header>

      <nav className="admin-tabs">
        <Link to="/admin/vendas" className="admin-tab">
          Vendas
        </Link>

        <Link
          to="/admin/estoque"
          className={`admin-tab ${
            location.pathname.includes("estoque") ? "active" : ""
          }`}
        >
          Estoque
        </Link>

        <Link to="/admin/produtos" className="admin-tab">
          Produtos
        </Link>
      </nav>

      <main className="admin-content">
        <section className="admin-content">
          <h2 className="admin-section-title">Controle de Estoque</h2>

          <div className="admin-stats">
            <div className="admin-stat-card">
              <div className="admin-stat-label">Total Produtos</div>
              <div className="admin-stat-value">6</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-label">Em Estoque</div>
              <div className="admin-stat-value">3</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-label">Estoque Baixo</div>
              <div className="admin-stat-value">2</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-label">Esgotados</div>
              <div className="admin-stat-value">1</div>
            </div>
          </div>

          <div className="admin-table-container">
            <div className="admin-table-header"><span className="admin-table-title">Visão do Estoque</span></div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Qtd.</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Camiseta Oversized Preta</td>
                  <td>Camisetas</td>
                  <td>R$ 129,90</td>
                  <td>45</td>
                  <td><span className="admin-badge in-stock">Em estoque</span></td>
                </tr>
                <tr>
                  <td>Camiseta boa semente</td>
                  <td>Jaquetas</td>
                  <td>R$ 349,90</td>
                  <td>0</td>
                  <td><span className="admin-badge out-of-stock">Esgotado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}