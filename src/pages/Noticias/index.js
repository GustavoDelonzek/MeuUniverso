import "./style.css"



import nebulosa from "../../assets/imagens/nebulosa.png"
import noticia2 from "../../assets/imagens/noticia2.png"
import noticia3 from "../../assets/imagens/noticia3.png"
import noticia4 from "../../assets/imagens/noticia4.png"

function Noticias(){
    return(
        <section className="bg-noticias" id="noticias">
        <div className="container py-4">
          <div className="row text-center text-white pt-5 pb-5">
            <div className="col-sm-12 titulo-noticias">
              <h1>Notícias Recentes</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={nebulosa}
                  className="card-img-top img-fluid"
                  alt="Foto de uma nebulosa"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Novas imagens do James Webb revelam Nebulosa do Anel com detalhes inéditos
                  </h5>
                  <p className="card-text">
                    As novas imagens capturam os detalhes complexos da nebulosa planetária, uma enorme
                    nuvem de gás e poeira cósmicos que abriga os restos de uma estrela moribunda.
                  </p>
                  <a
                    href="https://www.cnnbrasil.com.br/tecnologia/novas-imagens-revelam-nebulosa-do-anel-com-detalhes-ineditos/"
                    target="_blank"
                  >
                    Saiba mais.
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={noticia2}
                  className="card-img-top"
                  alt="campos magneticos"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Astrônomos descobrem objeto incomum que libera ondas de rádio no espaço há décadas
                  </h5>
                  <p className="card-text">
                    Especialistas acreditam que poderia ser um magnetar ou um tipo raro de estrela com
                    campos magnéticos extremamente fortes, capaz de liberar rajadas poderosas de
                    energia
                  </p>
                  <a
                    href="https://www.cnnbrasil.com.br/tecnologia/astronomos-descobrem-objeto-incomum-que-libera-ondas-de-radio-no-espaco-ha-decadas/"
                    target="_blank"
                  >
                    Saiba mais.
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={noticia3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    O que a Índia busca com missão ao Sol pouco depois de chegar à Lua
                  </h5>
                  <p className="card-text">
                    A Índia lançou a sua primeira missão de observação do Sol, poucos dias depois de o
                    país ter feito história ao tornar-se o primeiro a aterrar perto do pólo sul da Lua.
                  </p>
                  <a
                    href="https://www.bbc.com/portuguese/articles/c0kj08pl9p2o"
                    target="_blank"
                  >
                    Saiba mais.
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={noticia4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    O que luas de Saturno revelam sobre criação do Sistema Solar
                  </h5>
                  <p className="card-text">
                    Desde que a humanidade começou a olhar para o céu, nossa Lua nos encara de sua
                    órbita a uma distância relativamente curta do nosso planeta. Ela é o mais visível
                    dos satélites naturais do nosso Sistema Solar, mas não é o único.
                  </p>
                  <a
                    href="https://www.bbc.com/portuguese/articles/c4npn1kz0e2o"
                    target="_blank"
                  >
                    Saiba mais.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}

export default Noticias;