import "../../Styles/ContatosST/ContatosST.css";

export default function Contatos(){
    return(
        <div className="Contatos">
            <h1>Entre em contato com a gente</h1>

            <div className="icones_redes_sociais">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                </a>

                <a href="https://wa.me/000000000000" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" />
                </a>
            </div>
        </div>
    )
}