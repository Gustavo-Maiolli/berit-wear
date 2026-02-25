import { Link, useLocation } from "react-router-dom";
import "./Sales.css";

export default function AdminVendas() {
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
        <Link
          to="/admin/vendas"
          className={`admin-tab ${
            location.pathname.includes("vendas") ? "active" : ""
          }`}
        >
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

        <Link
          to="/admin/produtos"
          className={`admin-tab ${
            location.pathname.includes("produtos") ? "active" : ""
          }`}
        >
          Produtos
        </Link>
      </nav>

      <main className="admin-content">
        <section className="admin-content">
        <h2 className="admin-section-title">Relatório de Vendas</h2>

        <div className="admin-stats">
            <div className="admin-stat-card">
            <div className="admin-stat-label">Receita Total</div>
            <div className="admin-stat-value">R$ 1.899,00</div>
            <div className="admin-stat-change positive">+12% vs mês anterior</div>
            </div>
            <div className="admin-stat-card">
            <div className="admin-stat-label">Pedidos</div>
            <div className="admin-stat-value">5</div>
            <div className="admin-stat-change positive">+5% vs mês anterior</div>
            </div>
            <div className="admin-stat-card">
            <div className="admin-stat-label">Ticket Médio</div>
            <div className="admin-stat-value">R$ 379,80</div>
            <div className="admin-stat-change negative">-3% vs mês anterior</div>
            </div>
            <div className="admin-stat-card">
            <div className="admin-stat-label">Taxa Conversão</div>
            <div className="admin-stat-value">4.2%</div>
            <div className="admin-stat-change positive">+0.8% vs mês anterior</div>
            </div>
        </div>

        <div className="admin-chart-container">
            <div className="admin-chart-header">
            <span className="admin-chart-title">Vendas por Período</span>
            </div>
            <div className="admin-chart-bars">
            <div className="admin-chart-bar-wrapper"><div className="admin-chart-bar" style={{ height: '65%' }} /><span className="admin-chart-bar-label">Seg</span></div>
            <div className="admin-chart-bar-wrapper"><div className="admin-chart-bar" style={{ height: '80%' }} /><span className="admin-chart-bar-label">Ter</span></div>
            <div className="admin-chart-bar-wrapper"><div className="admin-chart-bar" style={{ height: '45%' }} /><span className="admin-chart-bar-label">Qua</span></div>
            <div className="admin-chart-bar-wrapper"><div className="admin-chart-bar" style={{ height: '90%' }} /><span className="admin-chart-bar-label">Qui</span></div>
            <div className="admin-chart-bar-wrapper"><div className="admin-chart-bar" style={{ height: '100%' }} /><span className="admin-chart-bar-label">Sex</span></div>
            </div>
        </div>

        <div className="admin-table-container">
            <div className="admin-table-header"><span className="admin-table-title">Últimos Pedidos</span></div>
            <table className="admin-table">
            <thead>
                <tr>
                <th>Pedido</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Itens</th>
                <th>Total</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>#0041</td>
                <td>22/02/2026</td>
                <td>João Silva</td>
                <td>3</td>
                <td>R$ 509,70</td>
                <td><span className="admin-badge completed">Concluído</span></td>
                </tr>
                <tr>
                <td>#0040</td>
                <td>21/02/2026</td>
                <td>Maria Santos</td>
                <td>1</td>
                <td>R$ 349,90</td>
                <td><span className="admin-badge pending">Pendente</span></td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>
      </main>
    </div>
  );
}