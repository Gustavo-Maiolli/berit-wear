import { Link, useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import './Cart.css'

export default function Cart() {
    const location = useLocation();

    return (
        <>
            <Navbar></Navbar>
            <div className="main">
                <div className="main__content">
                    <div className="main__content__itens">
                        <div className="main__content__itens__item">
                            <div className="main__content__itens__item__img">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__itens__item__info">
                                <div className="main__content__itens__item__info__title">
                                    <h1>Camisa Berit Wear</h1>
                                    <p>R$99,99</p>
                                </div>
                                <div className="main__content__itens__item__info__description">
                                    <p style={{color:'#47a347',fontSize:'calc(10% + 1.5vmin)'}}>Frete Grátis</p>
                                    <p style={{opacity:'0.5',fontSize:'calc(10% + 1.5vmin)'}}>Tamanho: G</p>
                                    <div className="main__content__itens__item__info__description__buttons">
                                        <button>-</button>
                                        <span> 1 </span>
                                        <button>+</button>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="main__content__itens__item">
                            <div className="main__content__itens__item__img">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__itens__item__info">
                                <div className="main__content__itens__item__info__title">
                                    <h1>Camisa Berit Wear</h1>
                                    <p>R$199,98</p>
                                </div>
                                <div className="main__content__itens__item__info__description">
                                    <p style={{color:'#47a347',fontSize:'calc(10% + 1.5vmin)'}}>Frete Grátis</p>
                                    <p style={{opacity:'0.5',fontSize:'calc(10% + 1.5vmin)'}}>Tamanho: M</p>
                                    <div className="main__content__itens__item__info__description__buttons">
                                        <button>-</button>
                                        <span> 2 </span>
                                        <button>+</button>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="main__content__itens__item">
                            <div className="main__content__itens__item__img">
                                <img src="https://res.cloudinary.com/dohv3aakv/image/upload/v1770833343/we-24_vejfpx.jpg"></img>
                            </div>
                            <div className="main__content__itens__item__info">
                                <div className="main__content__itens__item__info__title">
                                    <h1>Camisa Berit Wear</h1>
                                    <p>R$99,99</p>
                                </div>
                                <div className="main__content__itens__item__info__description">
                                    <p style={{color:'#47a347',fontSize:'calc(10% + 1.5vmin)'}}>Frete Grátis</p>
                                    <p style={{opacity:'0.5',fontSize:'calc(10% + 1.5vmin)'}}>Tamanho: M</p>
                                    <div className="main__content__itens__item__info__description__buttons">
                                        <button>-</button>
                                        <span> 1 </span>
                                        <button>+</button>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="main__content__summary">
                        <div className="main__content__summary__title">
                            <h1>Resumo da compra</h1>
                        </div>
                        <div className="main__content__summary__subtitle">
                            <div className="main__content__summary__subtitle__left">
                                <p>Subtotal:</p> 
                                <p style={{color:'#D62828',fontSize:'calc(10% + 1.5vmin)'}}>Desconto:</p> 
                                <p>Frete:</p>
                                <p>Total:</p>
                            </div>
                            <div className="main__content__summary__subtitle__right">
                                <p>R$399,96</p>
                                <p style={{color:'#D62828',fontSize:'calc(10% + 1.5vmin)'}}> - R$100,00</p> 
                                <p style={{color:'#47a347',fontSize:'calc(10% + 2vmin)'}}>Grátis</p>
                                <p>R$299,96</p>
                            </div>
                        </div>
                        <div className="main__content__summary__buttons">
                            <button className="main__content__summary__buttons__buy">Ir para pagamento</button>
                            <button className="main__content__summary__buttons__keep" style={{backgroundColor:'transparent'}}>
                                Continuar comprando
                            </button>
                        </div>
                        <div className="main__content__summary__cupon">
                            <input placeholder="Insira seu cupom de desconto"></input>
                            <button>Aplicar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}