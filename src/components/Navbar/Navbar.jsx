import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <div class="navbar__img">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770832887/berit-logo-02_thnwbo.jpg"></img>
                </Link>
            </div>
            <div class="navbar__links">
                <div class="navbar__content__product">
                    <a>Produtos</a>
                </div>
                <div class="navbar__content__about">
                    <a>Sobre</a>
                </div>
                <div class="navbar__content__mensage">
                    <a>Contato</a>
                </div>
            </div>
            <div class="navbar__icons">
                <div class="navbar__icons__cart">
                    <img src="assets/cart-arrow-down-solid-full.svg"></img>
                </div>
                <div class="navbar__icons__login">
                    <Link to="/login">
                        <img src="assets/user-solid-full.svg"></img>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;