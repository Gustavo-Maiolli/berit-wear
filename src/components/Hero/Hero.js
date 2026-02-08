import './Hero.css'

function Hero(){
     return (
        <div className="video-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-bg"
            >
            <source src="imgs/berit/Video-02.MP4"/>
            </video>
            <div className="Hero__text">
                <div className="Hero__upper__text">
                    <p>STREETWEAR COM PROPÓSITO</p>
                </div>
                <div className="Hero__mid__text">
                    <div className="Hero__mid__text__content-01">
                        <p>VISTA SUA FÉ</p>
                    </div>
                    <div className="Hero__mid__text__content-02">
                        <p>NAS RUAS</p>
                    </div>
                </div>
                <div className="Hero__lower__text">
                    <p>Roupas autorais com mensagens cristãs. Estilo urbano que expressa sua fé com autenticidade.</p>
                </div>
                <div className="Hero__buttons">
                    <div className="Hero__buttons__content-01">
                        <button>VER COLEÇÃO</button> 
                    </div>
                    <div className="Hero__buttons__content-02">
                        <button>NOSSA HISTÓRIA</button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Hero;