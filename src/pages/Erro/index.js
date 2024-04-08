import { Link } from "react-router-dom";
import "./style.css"
function Erro(){
    return(
        <div className="Erro">
            <h2 className="titulo">Ops! Parece que essa página não existe!</h2>
            <span className="subtitulo">Encontramos essas páginas aqui:</span>
            <br/>
            <div className="rotas">
                <Link to="/" className="rota">Home</Link>
                <br/>
                <Link to="/missões" className="rota">Missões</Link>

                <br/>
            </div>
            
        </div>
    );
}

export default Erro;