import './Products.css'

function Products(){
    return(
        <div className="Container-Products">
            <div className="Products__text">
                <div className="Products__upper__text">
                    <p>COLEÇÃO</p>
                </div>
                <div className="Products__mid__text">
                    <p>NOSSOS PRODUTOS</p>
                </div>
                <div className="Products__lower__text">
                    <p>Cada peça carrega uma mensagem. Cada estampa conta uma história de fé.</p>
                </div>
            </div>
            <div className="Products__itens">
                <div className="Products__itens__content">
                    <div className="Products__itens__content__img">
                        <img src="/imgs/berit-marca/we-24.jpg"></img>
                    </div>
                    <div className="Products__itens__content__text">
                        <div className="Products__itens__content__text__title">
                            <p>Camiseta Berit Classic</p>
                        </div>
                        <div className="Products__itens__content__text__description">
                            <p>Camiseta branca com logo Berit. Design minimalista e autêntico.</p>
                        </div>
                        <div className="Products__itens__content__text__value">
                            <p>R$100</p>
                        </div>
                    </div>
                </div>
                <div className="Products__itens__content">
                    <div className="Products__itens__content__img">
                        <img src="/imgs/berit/we-57.jpg"></img>
                    </div>
                    <div className="Products__itens__content__text">
                        <div className="Products__itens__content__text__title">
                            <p>Camiseta Manga Longa Hebraico</p>
                        </div>
                        <div className="Products__itens__content__text__description">
                            <p>Manga longa com letras hebraicas. Estilo único e significado profundo.</p>
                        </div>
                        <div className="Products__itens__content__text__value">
                            <p>R$100</p>
                        </div>
                    </div>
                </div>
                <div className="Products__itens__content">
                    <div className="Products__itens__content__img">
                        <img src="/imgs/berit/we-87.jpg"></img>
                    </div>
                    <div className="Products__itens__content__text">
                        <div className="Products__itens__content__text__title">
                            <p>Camiseta Colossenses 3:14</p>
                        </div>
                        <div className="Products__itens__content__text__description">
                            <p>Camiseta preta com referência bíblica. Amor acima de tudo.</p>
                        </div>
                        <div className="Products__itens__content__text__value">
                            <p>R$100</p>
                        </div>
                    </div>
                </div>
                <div className="Products__itens__content">
                    <div className="Products__itens__content__img">
                        <img src="/imgs/berit/we-110.jpg"></img>
                    </div>
                    <div className="Products__itens__content__text">
                        <div className="Products__itens__content__text__title">
                            <p>Camiseta Boa Semente</p>
                        </div>
                        <div className="Products__itens__content__text__description">
                            <p>Verde musgo com mensagem 'Boa Semente, Boa Terra, Bom Fruto'.</p>
                        </div>
                        <div className="Products__itens__content__text__value">
                            <p>R$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;