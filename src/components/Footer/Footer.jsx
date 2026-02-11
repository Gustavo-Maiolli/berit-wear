import './Footer.css';

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer__content">
                <div className='Container'>
                    <div className='Container__content'>
                        <div className='Container__content__maps'>
                            <div className='Container__content__title'>
                                <p>ENTREGAMOS PARA TODA GRANDE SÃO PAULO</p>
                            </div>
                            <div className='Container__content__map'>
                                <iframe
                                    src="https://www.google.com/maps?q=Região+Bragantina+SP&z=9&output=embed"
                                    width="95%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Mapa Região Bragantina"
                                ></iframe>
                            </div>
                            <div className='Container__content__frete'>
                                <input type='number' placeholder='Consulte seu frete'></input>
                                <button style={{margin: "10px"}}> Consultar</button>
                            </div>
                        </div>
                        <div className='Container__content__message'>
                            <div className='Container__content__title'>
                                <p>DEIXE SEU FEEDBACK</p>
                            </div>
                            <div className='Container__content__text'>
                                <p>Nome:</p> 
                                <input type='subimit' placeholder='Insira seu nome' required></input>
                                <p>Email:</p> 
                                <input type='email' placeholder='Insira seu email' required></input>
                                <p>Feedback:</p> 
                                <input type='text' placeholder='Deixe seu feedback' required></input>
                                <button>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer__cards'>
                    <div className='Footer__cards__icons'>
                        <div className='Footer__cards__icons__text'>
                            <p>Siga nossas redes sociais: </p>
                        </div>
                        <div className='Footer__cards__icons__social'>
                            <a href='https://www.instagram.com/beritmusic/'>
                                <img src="assets/instagram-brands-solid-full.svg"></img>
                            </a>
                            <a href='https://www.instagram.com/beritmusic/'>
                                <img src="assets/facebook-brands-solid-full.svg"></img>
                            </a>
                            <a href='https://www.instagram.com/beritmusic/'>
                                <img src="assets/x-twitter-brands-solid-full.svg"></img>
                            </a>
                        </div>
                    </div>
                    <div className='Footer__cards__links'>
                        <div className='Footer__cards__links__berit'>
                            <div className='Footer__cards__links__header'>
                                <img src='https://res.cloudinary.com/dohv3aakv/image/upload/v1770820242/berit-text-black_v6pngd.png'></img>
                            </div>  
                            <div className='Footer__cards__links__content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis gravida diam in bibendum.
                                </p>
                            </div> 
                        </div>
                        <div className='Footer__cards__links__products'>
                            <div className='Footer__cards__links__header'>
                                <p>Nossos produtos:</p>
                            </div>
                            <div className='Footer__cards__links__content'>
                                <a href='#'>
                                    <p>Camisetas</p>
                                </a>
                                <a href='#'>
                                    <p>Bonés</p>
                                </a>
                                <a href='#'>
                                    <p>Tênis</p>
                                </a>
                            </div> 
                        </div>
                        <div className='Footer__cards__links__anothers'>
                            <div className='Footer__cards__links__header'>
                                <p>Links úteis:</p>
                            </div>
                            <div className='Footer__cards__links__content'>
                                <a href='#'>
                                    <p>Meus pedidos</p>
                                </a>
                                <a href='#'>
                                    <p>Carrinho</p>
                                </a>
                                <a href='#'>
                                    <p>Ajuda</p>
                                </a>
                            </div> 
                        </div>
                        <div className='Footer__cards__links__contact'>
                            <div className='Footer__cards__links__header'>
                                <p>Entre em contato:</p>
                            </div>
                            <div className='Footer__cards__links__contact__content'>
                                 <a href='#'>
                                    <img src='assets/phone-solid-full.svg'></img>
                                    <p>11 95947-7017</p>
                                </a>
                                <a href='#'>
                                    <img src='assets/envelope-solid-full.svg'></img>
                                    <p>berit@gmail.com.br</p>
                                </a>
                            </div> 
                        </div>
                    </div>
                    <div className='Footer__cards__copy'>
                        <p>© 2026 Berit StreetWear. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;