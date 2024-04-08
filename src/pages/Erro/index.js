import { Link } from "react-router-dom";
import "./style.css"
import imagem from "../../assets/imagens/error.svg"

function Erro() {
    return (
        <div className="Erro d-flex justify-content-center">
            <img src={imagem} className="img-fluid imagem-erro"></img>


        </div>
    );
}

export default Erro;