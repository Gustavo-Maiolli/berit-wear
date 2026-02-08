import './About.css'

function About(){
    return(
        <div className="About">
            <div className="About__text">
                <div className="About__upper__text">
                    <p>SOBRE NÓS</p>
                </div>
                <div className="About__mid__text">
                    <p>BERIT STREETWEAR</p>
                </div>
                <div className="About__lower__text">
                    <div>
                        <p>
                            Berit significa "aliança" em hebraico. Nossa marca nasceu do desejo de exalar mensagem cristã no dia-a-dia, criando peças que expressam fé de forma autêntica e estilosa sem dizer uma palavra.Berit significa "aliança" em hebraico. Nossa marca nasceu do desejo de unir a cultura streetwear com a mensagem cristã, criando peças que expressam fé de forma autêntica e estilosa.
                        </p> 
                    </div>
                    <div style={{marginTop: "10%"}}>
                        <p>
                            Cada camiseta é mais do que uma roupa — é uma declaração de fé nas ruas. Designs autorais com referências bíblicas, para quem quer vestir sua fé com orgulho. TRANSBORDE O AMOR DE CRISTO SEM DIZER UMA PALAVRA, USE BERIT.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;