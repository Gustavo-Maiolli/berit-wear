import './Navbar.css'

function Navbar(){
    return (
        <nav class="navbar">
            <div class="navbar__img">
                <img src="/imgs/berit/berit-logo-02.png" alt="img navbar"/>
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
                    <img src="assets/user-solid-full.svg"></img>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;