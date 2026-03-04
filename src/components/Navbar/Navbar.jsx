import './Navbar.css';
import { Link } from "react-router-dom";
import API_BASE_URL from "../../services/api";
import { useState, useEffect } from "react";

function Navbar() {
    const [userEmail, setUserEmail] = useState(null);
    const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

    useEffect(() => {
        let isMounted = true; 

        async function checkUser() {
            try {
                const response = await API_BASE_URL.get('/users/verify');
                if (isMounted && response.data?.email) {
                    setUserEmail(response.data.email);
                }
            } catch (error) {
                if (isMounted) setUserEmail(""); 
            }
        }

        checkUser();
        return () => { isMounted = false };
    }, []);

    console.log("Comparando:", {
        user: userEmail,
        admin: ADMIN_EMAIL.trim().toLowerCase(),
        match: userEmail === ADMIN_EMAIL.trim().toLowerCase()
    });

    return (
        <nav className="navbar">
            <div className="navbar__img">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770832887/berit-logo-02_thnwbo.jpg" alt="Logo" />
                </Link>
            </div>

            <div className="navbar__links">
                <div className="navbar__content__product"><a>Produtos</a></div>
                <div className="navbar__content__about"><a>Sobre</a></div>
                <div className="navbar__content__mensage"><a>Contato</a></div>

                {userEmail && ADMIN_EMAIL && 
                 userEmail.trim().toLowerCase() === ADMIN_EMAIL.trim().toLowerCase() && (
                    <div className="navbar__content__about">
                        <Link to="/admin/vendas">
                            <a> 
                                Painel administrativo 
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            <div className="navbar__icons">
                <div className="navbar__icons__cart">
                    <Link to="/cart">
                        <img src="assets/cart-arrow-down-solid-full.svg" alt="Carrinho" />
                    </Link>
                </div>
                <div className="navbar__icons__login">
                    <Link to="/login">
                        <img src="assets/user-solid-full.svg" alt="Login" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;