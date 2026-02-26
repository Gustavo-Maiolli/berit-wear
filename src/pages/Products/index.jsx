import { Link, useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import './Products.css'

export default function ProductDetail() {
    const location = useLocation();

    return (
        <>
            <Navbar></Navbar>
            <div className="main">
                <div className="main__content">
                    <div className="main__content__product">
                        <div className="main__content__product__sidebar">
                            <div className="main__content__product__sidebar__item">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__product__sidebar__item">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__product__sidebar__item">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__product__sidebar__item">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                        </div>
                        <div className="main__content__product__image">
                            <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                        </div>
                    </div>
                    <div className="main__content__detail">
                        <div className="main__content__detail__description">
                            <div className="main__content__detail__description__title">
                                <h1>Camiseta Berit Classic</h1> <br></br>
                                <p>Camiseta de algodão 100% com estampa exclusiva da marca Berit.</p> <br></br>
                                <p>★★★★★ 4.8 (27)</p>
                            </div>
                            <div className="main__content__detail__description__price">
                                <h2 style={{color: '#D62828'}}>De  R̶$̶1̶2̶9̶,̶9̶9̶</h2>
                                <h1 style={{fontWeight: 'bold'}}>Por R$ 99,99</h1>
                            </div>
                            <div className="main__content__detail__description__text">
                                <p>Frete grátis acima de R$ 199,90</p>
                            </div>
                        </div>
                        <div className="main__content__detail__options">
                            <div className="main__content__detail__options__size">
                                <p>Escolha o tamanho:</p>
                                <div className="main__content__detail__options__size__buttons">
                                    <button>P</button>
                                    <button>M</button>
                                    <button>G</button>
                                    <button>GG</button>
                                </div>
                            </div>
                            <div className="main__content__detail__options__quantity">
                                <p>Quantidade:</p>
                                <div className="main__content__detail__options__quantity__buttons">
                                    <button>-</button>
                                    <button>1</button>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="main__content__detail__buttons">
                            <button className="main__content__detail__buttons__add">Adicionar ao carrinho</button>
                            <button className="main__content__detail__buttons__buy">Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}