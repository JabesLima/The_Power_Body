import "../../Styles/ErroPageST/ErroPageST.css";
import { useNavigate } from "react-router-dom";

export default function ErroPage(){
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };
    return(
        <div className="ErroPage">
            <div>
            <h1>404 - Página não encontrada!</h1>
            <p>Desculpe, a página que você está tentando acessar não existe.</p>
            <button onClick={handleGoHome} className="btn-home">Voltar para a Página Inicial</button>
            </div>
        </div>
    )
}