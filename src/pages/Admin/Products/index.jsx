import { Link, useLocation } from "react-router-dom";
import "./Products.css";

export default function AdminProdutos() {
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

        <Link to="/admin/estoque" className="admin-tab">
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
            <h2 className="admin-section-title">Gerenciar Produtos</h2>

            <div className="admin-toolbar">
                <input type="text" className="admin-search-input" placeholder="Buscar produto..." readOnly />
                <button className="admin-add-btn">+ Novo Produto</button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                <thead>
                    <tr>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Status</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Calça Cargo Bege</td>
                    <td>Calças</td>
                    <td>R$ 219,90</td>
                    <td>12</td>
                    <td><span className="admin-badge low-stock">Baixo</span></td>
                    <td>
                        <button className="admin-action-btn edit">Editar</button>
                        <button className="admin-action-btn delete">Remover</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Moletom Zip Cinza</td>
                    <td>Moletons</td>
                    <td>R$ 259,90</td>
                    <td>30</td>
                    <td><span className="admin-badge in-stock">Em estoque</span></td>
                    <td>
                        <button className="admin-action-btn edit">Editar</button>
                        <button className="admin-action-btn delete">Remover</button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </section>
      </main>
    </div>
  );
}