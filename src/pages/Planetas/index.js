import './style.css'

import solImg from "../../assets/imagens/sol.png"
import mercurioImg from "../../assets/imagens/mercurio.png"
import venusImg from "../../assets/imagens/venus.png"
import terraImg from "../../assets/imagens/terra.png"
import marteImg from "../../assets/imagens/marte.png"
import jupiterImg from "../../assets/imagens/jupiter.png"
import saturnoImg from "../../assets/imagens/saturno.png"
import uranoImg from "../../assets/imagens/urano.png"
import netunoImg from "../../assets/imagens/netuno.png"

function Planetas(){
    return(
        <section id="planetas" className="bg-gradient-azul pb-5">
            <div className="container d-flex">
              <ul className="planet-list d-flex nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="sol-tab"
                    data-bs-toggle="tab"
                    href="#sol"
                    role="tab"
                    aria-controls="sol"
                    aria-selected="true"
                  >
                    <img src={solImg} className="sol img-fluid" alt="Sol" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="mercurio-tab"
                    data-bs-toggle="tab"
                    href="#mercurio"
                    role="tab"
                    aria-controls="mercurio"
                    aria-selected="false"
                  >
                    <img src={mercurioImg} className="mercurio img-fluid" alt="Mercúrio" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="venus-tab"
                    data-bs-toggle="tab"
                    href="#venus"
                    role="tab"
                    aria-controls="venus"
                    aria-selected="false"
                  >
                  <img src={venusImg} className="venus img-fluid" alt="Vênus" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="terra-tab"
                    data-bs-toggle="tab"
                    href="#terra"
                    role="tab"
                    aria-controls="terra"
                    aria-selected="false"
                  >
                    <img src={terraImg} className="terra img-fluid" alt="Terra" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="marte-tab"
                    data-bs-toggle="tab"
                    href="#marte"
                    role="tab"
                    aria-controls="marte"
                    aria-selected="false"
                  >
                    <img src={marteImg} className="marte img-fluid" alt="Marte" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="jupiter-tab"
                    data-bs-toggle="tab"
                    href="#jupiter"
                    role="tab"
                    aria-controls="jupiter"
                    aria-selected="false"
                  >
                    <img src={jupiterImg} className="jupiter img-fluid" alt="Júpiter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="saturno-tab"
                    data-bs-toggle="tab"
                    href="#saturno"
                    role="tab"
                    aria-controls="saturno"
                    aria-selected="false"
                  >
                    <img src={saturnoImg} className="saturno img-fluid" alt="Saturno" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="urano-tab"
                    data-bs-toggle="tab"
                    href="#urano"
                    role="tab"
                    aria-controls="urano"
                    aria-selected="false"
                  >
                    <img src={uranoImg} className="urano img-fluid" alt="Urano" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="netuno-tab"
                    data-bs-toggle="tab"
                    href="#netuno"
                    role="tab"
                    aria-controls="netuno"
                    aria-selected="false"
                  >
                    <img src={netunoImg} className="netuno img-fluid" alt="Netuno" />
                  </a>
                </li>
              </ul>
            

              <div className="tab-content" id="myTabsContent">
                <div className="tab-pane fade show active" id="sol" role="tabpanel" aria-labelledby="sol-tab">
                  <div className="row">
                    <div className="col-md-12">
                        <h1 className="titulo-principal">SOL</h1>
                    </div>
                  </div>

                  <div className="row align-content-center justify-content-center">
                      <div className="col-lg-5">
                      <h1>O que é o Sol?</h1>
                          <p>
                          O Sol é uma estrela localizada na Via Láctea. Formado essencialmente por hélio e hidrogênio, o Sol corresponde ao principal e também maior corpo celeste do Sistema Solar, composto por astros que o orbitam. Essa estrela desempenha um papel importante no fornecimento de energia na forma de calor aos planetas, além de ser fundamental para a manutenção da vida na Terra.
                          </p>
                      </div>
                      <div className="col-lg-5">
                              <h1>Tamanho do Sol</h1>
                              <p>
                              O Sol é quase 110 vezes maior do que o planeta Terra. A circunferência solar mede 4,3 milhões de quilômetros, enquanto a terrestre é de pouco mais de 40 mil km. A estrela dispõe também de um raio equatorial de 695.508 km, resultando em um diâmetro de 1.391.016 km. Trata-se do maior corpo celeste do nosso Sistema Solar, embora não seja a maior estrela da Via Láctea. Na verdade, o Sol é considerado uma estrela anã amarela, denominação essa empregada tanto em associação ao seu tamanho quanto à luminosidade que ela emite.
                              </p>
                      </div>
                  </div>

                  <div className="row justify-content-center">
                      <div className="col-lg-5">
                          <h1>Temperatura do Sol</h1>
                          <p>
                          A temperatura do Sol varia de acordo com a camada de sua estrutura. O núcleo, que corresponde à porção central da estrutura solar, é também a sua região mais quente. É nele que ocorre o processo de fusão dos átomos de hidrogênio, resultando na formação de hélio. A fusão nuclear é responsável pela geração do calor propagado para outras camadas. Assim, a temperatura do núcleo do Sol chega a 15,7 milhões de graus Celsius. Na superfície solar, que recebe o nome de fotosfera, a temperatura é muito menor do que no núcleo, chegando a 5.500 °C. A zona convectiva, que consiste em uma camada intermediária, apresenta temperaturas de até dois milhões de graus Celsius.
                          </p>
                      </div>

                      <div className="col-lg-5">
                          <h1>Características do Sol</h1>
                          <p>
                          A maior parte do Sol é composta pelos gases hélio e hidrogênio, não havendo superfícies sólidas. São, ao todo, seis camadas que formam esse astro, desde o núcleo, no seu interior, até a coroa, camada mais externa. O Sol é uma fonte primária de calor e energia, sendo de fundamental importância para a manutenção da vida no planeta Terra. O Sol fica a uma distância de 150.000.000 km da Terra, sendo então a estrela situada mais próximo do nosso planeta. Essa distância foi estabelecida como uma unidade padrão de medida denominada unidade astronômica (ua), utilizada para a representação das distâncias dentro do Sistema Solar. Dessa forma, 1 ua ≅ 150.000 km
                          </p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12 mt-5">
                          <h4>Saiba mais.</h4>
                          <iframe
                          title="YouTube video player"
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/tBLLuZvuyYw?si=3tFKigtZXSp6libW"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          ></iframe>
                      </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="mercurio" role="tabpanel" aria-labelledby="mercurio-tab">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="titulo-principal">MERCÚRIO</h1>
                    </div>
                  </div>
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <h1>O que é?</h1>
                    <p>
                      Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média. Com um diâmetro de 4878 km, é o menor entre os planetas do nosso sistema solar e também o que realiza mais rapidamente o seu movimento de translação, executado a uma velocidade de aproximadamente 47,87 km/s, levando, assim, 88 dias para completar sua volta ao redor do sol.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <h1>Sua atmosfera</h1>
                    <p>
                      A atmosfera de Mercúrio é basicamente composta por átomos de árgon, néon e hélio e apresenta uma pressão muito baixa, cerca de um bilhão de vezes menor do que a da Terra ao nível do mar. As altas temperaturas, em razão da proximidade com o sol, fazem com que esses átomos se dispersem pelo espaço, o que tem como consequências: o pequeno índice de erosão hídrica e eólica; a baixa proteção da atmosfera frente a meteoritos e a incapacidade de se conservar as médias térmicas. Por conta desse último fator, as temperaturas no planeta Mercúrio variam entre 430ºC e -170ºC durante a noite.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <h1>Rotação</h1>
                    <p>
                      Quanto ao movimento de rotação, o planeta Mercúrio executa-o apenas três vezes durante duas órbitas de translação, o que faz com que o seu dia solar seja o equivalente a 173 dias terrestres. Além disso, esse movimento de rotação acontece com o seu eixo perpendicular ao plano da órbita, por isso, Mercúrio não apresenta estações do ano e alguns locais não recebem a luz do sol.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <h1>Curiosidades</h1>
                    <p>
                      O planeta Mercúrio recebe esse nome em virtude do seu acelerado movimento de translação, o que faz com que ele se mova mais rapidamente no céu do que os demais corpos celestes visíveis. Na mitologia romana, Mercúrio era o mensageiro dos deuses por ser o mais rápido entre todos os seres do mundo. Graças à sua proximidade com o sol, é muito difícil observar Mercúrio, o que só é possível próximo ao nascer do sol e logo após o entardecer.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <h4>Saiba mais.</h4>
                    <iframe
                      title="YouTube video player"
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/huGvInnMwIY?si=hoSo8ndSKF5BNm7_"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
            </div>
            <div className="tab-pane fade" id="venus" role="tabpanel" aria-labelledby="venus-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">VÊNUS</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    Vênus é um planeta do sistema solar, localiza-se no segundo lugar a partir do sol, além disso, é o sexto maior entre todos os outros planetas.
                    Vênus possui tamanho e massa semelhante a do planeta Terra, por isso os planetas citados eram considerados gêmeos, no entanto, as características parecidas se limitam à proporção corporal. Salvo esse ponto apresentado, os dois planetas são totalmente distintos, uma vez que Vênus não oferece condições para proliferação de vida.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    Em Vênus a atmosfera é muito compacta, formada por uma enorme quantidade de gás carbônico, por ser muito densa desenvolve um elevado efeito estufa que faz o planeta produzir altíssimas temperaturas. Onde os raios solares incidem de forma perpendicular na superfície do planeta as temperaturas atingem até 460ºC.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    Quanto aos movimentos de rotação e translação. Para a realização total do primeiro movimento são necessários 243 dias (referente aos dias terrestres) e no segundo, 224 dias, dessa forma um ano em Vênus é menor que 1 dia.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    O planeta em questão já recebeu diversos nomes, como Lúcifer e Vésper, no Brasil é conhecido como Estrela Dalva. O planeta emite grande luz, diante desse fator é superado somente pela lua, por isso pode ser visualizado a olho nu.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/ggm0AB4Zn10?si=AXpg80UHQP8xQa0d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="terra" role="tabpanel" aria-labelledby="terra-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">TERRA</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    O Planeta Terra é um grupo de milhões de estruturas de organismos vivos que detém o poder de preservação da vida. A Terra se formou a cerca de 4,5 bilhões de anos atrás, se localiza em meio à Via Láctea, sendo o terceiro planeta mais próximo do Sol e o quinto maior entre todos os planetas que compõem o Sistema Solar.
                  </p>
                  <p>
                    Denominado também de Planeta Azul ou Mundo, a Terra é o maior entre os quatro planetas mais densos e telúricos. A sua composição se dá por diversos gases, sendo 78% da atmosfera terrestre constituído por nitrogênio, 21% por oxigênio, isso sem falar na composição de argônio.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <h5>As três camadas externas da Terra:</h5>
                  <p>
                    Atmosfera é a camada gasosa que envolve a Terra. Os principais gases presentes nessa camada são o oxigênio, nitrogênio e gás carbônico. Suas principais funções são: manter a temperatura média da Terra e evitar que fragmentos rochosos vindos do espaço alcancem sua superfície.
                  </p>
                  <p>
                    A biosfera é a camada de vida na Terra, correspondendo, portanto, a todos os ecossistemas do planeta, considerando não só os seres vivos mas também todo o ambiente habitado por eles. É uma das camadas de maior complexidade, por resultar de diversos fenômenos de ordem biológica, química e física.
                  </p>
                  <p>
                    A hidrosfera é a camada da Terra que compreende toda a parte líquida, como oceanos, mares e águas continentais (rios, lagos e reservas subterrâneas). Essa camada é de extrema importância para a manutenção da vida, pois não somos capazes de sobreviver sem água.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    Rotação e Translação são os dois movimentos que a Terra faz. Quando ela gira em torno de si mesma, do oeste para o leste, dá-se o nome de rotação. Este é o movimento responsável pela determinação dos dias e das noites, e dura 23 horas, 56 minutos e 4 segundos.
                    Já o movimento que a Terra faz, girando em volta do sol, chama-se translação. Este processo é responsável pelas quatro estações do ano e está diretamente ligado ao Solstício e ao Equinócio. Seu tempo de duração é de 365 dias e seis horas e a cada quatro anos, essas seis horas se somam e formam um dia, tornando o ano em questão em ano bissexto.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    O planeta em questão já recebeu diversos nomes, como Lúcifer e Vésper, no Brasil é conhecido como Estrela Dalva. O planeta emite grande luz, diante desse fator é superado somente pela lua, por isso pode ser visualizado a olho nu.
                  </p>
                  <p>
                    A movimentação das placas tectônicas que formam a crosta terrestre provoca fenômenos como os terremotos e tsunamis, e está também relacionada à existência dos vulcões.
                  </p>
                  <p>
                    Em um ano, acontecem na Terra cerca de 50.000 terremotos, dos quais, aproximadamente, 100 são capazes de causar grandes estragos.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/9c8IUp_dCO8?si=MejNSuVbViOuKY06" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="marte" role="tabpanel" aria-labelledby="marte-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">MARTE</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    Marte é chamado de planeta vermelho, em virtude da grande concentração de óxido de ferro no solo. Ele é o quarto planeta do sistema solar, tendo o Sol como ponto de partida. Sua distância para o Sol é de aproximadamente 228 milhões de quilômetros, fato que justifica a baixa temperatura média registrada nesse planeta (-60 °C).
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    A atmosfera, muito rarefeita, é composta por gás carbônico, dióxido de carbono, nitrogênio, argônio, néon e oxigênio. Esse planeta possui dois satélites (luas – Phobos e Deimos) e é visível a olho nu durante a noite.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    O movimento de rotação, ou seja, deslocamento em torno de seu próprio eixo, é realizado em 24 horas e 37 minutos, portanto um dia em Marte tem duração de 24 horas e 37 minutos. O movimento de translação (deslocamento em torno do Sol) é finalizado após 687 dias terrestres, portanto um ano nesse planeta é equivalente a cerca de 1 ano e 11 meses na Terra.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    "As luas Phobos (que significa medo) e Deimos (fobia) receberam o mesmo nome dos cavalos que puxavam a carruagem do deus Ares, o deus da guerra na mitologia grega."
                  </p>
                  <p>
                    "A aparência avermelhada do planeta se deve à composição das suas rochas, que apresentam óxidos de ferro."
                  </p>
                  <p>
                    O planeta tem, anualmente, algumas tempestades de areia bem grandes e violentas, que podem durar por várias semanas. Além dessas, também existem as tempestades globais, que ocorrem em todo o planeta a cada 5 anos.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/bPaNFciiuEM?si=I7zVZHkhDFU4GFiu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="jupiter" role="tabpanel" aria-labelledby="jupiter-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">JÚPITER</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    Júpiter é o maior planeta do Sistema Solar, o quinto a partir do Sol e o quarto corpo celeste mais brilhante no céu – os demais são o Sol, a Lua e Vênus. A massa é 318 vezes superior à da Terra e maior que todos os planetas do Sistema Solar juntos. Tem cerca de 143 mil quilômetros de diâmetro no equador, o que equivale a 11 vezes mais que o diâmetro da Terra. É orbitado por 67 satélites naturais, situando-se a uma distância média de 778,3 milhões de quilômetros do Sol.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    A atmosfera de Júpiter é composta por hidrogênio e hélio, tendo, ainda, traços de metano, amônia, vapor d'água e outros componentes a uma temperatura de 103ºC. O planeta, cujo formato é de uma esfera oblata, tem elevada pressão atmosférica e a intensidade provoca a quebra dos átomos hidrogênio, que se transforma em metal. Também são encontrados na atmosfera traços de metano, vapor de água, amoníaco, sílicas, carbono, etano, sulfeto de hidrogênio, néon, oxigênio, fosfina e enxofre. Na parte externa da atmosfera há cristais de amônio congelado e traços de benzeno.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    Demora menos de 10 horas a completar uma rotação sobre si próprio. É o movimento de rotação mais rápido dos planetas do Sistema Solar. Já o movimento de translação ocorre cerca de 11,86 anos terrestres. O núcleo de Júpiter é quente, o interior irradia mais calor que recebe do Sol, mais uma característica dos Planetas Gasosos.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    A atmosfera do planeta é dividida em diversas faixas, em várias latitudes, resultando em turbulência e tempestades. A mais conhecida é a Grande Mancha Vermelha, descoberta no século XVII e cujos ventos chegam a 500 quilômetros por hora. Essa tempestade tem um diâmetro transversal duas vezes maior do que a Terra.
                  </p>
                  <p>
                    Foi batizado com esse nome em homenagem ao governante do Olimpo, Júpiter, o deus dos deuses.
                  </p>
                  <p>
                    Júpiter, assim como Saturno, exibe um sistema de anéis, contudo são tênues e menos brilhantes, não observáveis a partir da Terra e que só foram descobertos em 1979 pela sonda Voyager 1.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/NP0ymdPeW7w?si=pZ2HQtdVfRYBUVKo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="saturno" role="tabpanel" aria-labelledby="saturno-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">SATURNO</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    Saturno é o sexto planeta a partir do Sol, e o segundo maior do sistema solar. É conhecido pelo complexo sistema de anéis formados principalmente por gelo e poeira cósmica e possui 53 luas conhecidas e outras nove em pesquisa.
                  </p>
                  <p>
                    O diâmetro de Saturno é de 119,3 mil quilômetros e o seu volume é 755 vezes maior que a Terra.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    Por ser um planeta gasoso, é composto principalmente por hidrogênio e hélio. Ou seja, não há superfície sólida. O centro de Saturno é composto por um núcleo denso de rocha, gelo e água. Há também outros compostos feitos sólido pela pressão e calor intensos. O planeta é recoberto por hidrogênio metálico líquido, dentro de uma camada de hidrogênio líquido.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    Possui uma das mais rápidas rotações do Sistema Solar de oeste para leste, demorando 10 horas e 39 minutos para dar a volta sobre si mesmo. O movimento de translação em volta do Sol é feito em 29 anos, 167 dias e 6 horas terrestres a 34,7 quilômetros por hora. É um planeta gasoso, juntamente com Júpiter, Urano e Netuno e a temperatura na superfície é de 125º C negativos.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    Saturno possui 82 satélites naturais, dos quais 53 são confirmados e outros 29 ainda aguardam a confirmação, de acordo com informações da NASA. Com a descoberta de 20 luas, anunciada em outubro de 2019, o planeta passou a ser o detentor do maior número de satélites naturais do Sistema Solar, posição que era anteriormente ocupada por Júpiter. As luas de Saturno têm tamanho que varia de 2 a até milhares de quilômetros de diâmetro, superando as dimensões de planetas conhecidos.
                  </p>
                  <p>
                    As luas Titã e Encélado têm grande potencial para abrigar vida, uma vez que possuem água e diferentes tipos de hidrocarbonetos em suas composições.
                  </p>
                  <p>
                    O formato circular dos anéis de Saturno e a manutenção de sua órbita são definidos pela presença das luas menores entre eles, mais especificamente pela força da gravidade desses satélites.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/lqgClAxvOzw?si=ah2P-UAjRmNBk4j9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="urano" role="tabpanel" aria-labelledby="urano-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">URANO</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    O planeta Urano é o terceiro maior do Sistema Solar e está posicionado na sétima órbita a partir do Sol. Formado principalmente por gases e fluidos, Urano não possui uma superfície sólida como a Terra. Sua estrutura é composta, ainda, por sistemas de anéis que orbitam ao seu redor, os quais são menos brilhantes do que os de outros planetas, como Saturno. Ao todo, Urano possui 27 luas conhecidas. Apenas uma sonda espacial visitou o planeta, sendo a maior parte das descobertas ao seu respeito feita com o auxílio de telescópios.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    A atmosfera do planeta é formada por hidrogênio, hélio e metano, sendo este o elemento responsável pela coloração verde-azulada observada nas imagens obtidas de telescópios. Encontram-se também quantidades muito pequenas de água e amônia na sua composição atmosférica, onde, nas camadas mais baixas (troposfera), há formação de nuvens. Os ventos atmosféricos em Urano atingem velocidade de até 900 km/h.
                    Urano é um planeta que não dispõe de uma superfície sólida como é a crosta terrestre. A atmosfera gasosa é seguida por líquidos dispostos em camadas, com exceção do núcleo, de aspecto rochoso.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    Assim como Vênus, Urano gira no sentido horário, e seu eixo de rotação segue o mesmo sentido de sua órbita em torno do Sol, diferenciando-se dos demais planetas. Pensa-se que a sua posição invulgar é resultado da colisão com um corpo do tamanho de um planeta no início da história do sistema solar. A Voyager 2 descobriu que uma das influências mais notáveis desta posição inclinada é o seu efeito na cauda do campo magnético, que por sua vez está inclinado 60 graus em relação ao eixo de rotação. A origem do campo magnético é desconhecida.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>
                    Urano possui um total de 27 luas conhecidas. Embora não haja conhecimento acerca da composição de todas elas, sabe-se que aquelas mais próximas do planeta são formadas predominantemente por rocha e gelo.
                  </p>
                  <p>
                    Urano dispõe de um conjunto de anéis formado por 13 sistemas. Sua coloração varia de cinza a avermelhada, considerando do sistema mais interno ao mais externo. Apenas um deles, de nome Épsilon, é de cor azul. Trata-se de anéis consideravelmente estreitos e que não são tão visíveis quanto os de outros planetas, como Saturno.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/WKEP4vp0IJQ?si=BH6NGHy1V54WSG4N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="netuno" role="tabpanel" aria-labelledby="netuno-tab">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo-principal">NETUNO</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>O que é?</h1>
                  <p>
                    Netuno é um planeta pertencente ao Sistema Solar. Trata-se do oitavo mais distante do Sol, o que confere a ele temperaturas muito baixas, em torno de -200 °C. O planeta Netuno é classificado como um gigante de gelo em função de sua composição, que é feita por gases como hélio, metano, hidrogênio e amônia, e da ausência de uma superfície sólida. Netuno foi descoberto em 1846 e, desde então, foi muito estudado por astrônomos de todo o mundo. Apesar disso, é ainda um planeta pouco explorado.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Sua atmosfera</h1>
                  <p>
                    É essencialmente formada pelos gases hidrogênio, hélio e metano, sendo esse último o responsável pela coloração azulada característica de Netuno. Ventos muito intensos são registrados nessa camada, com velocidades superiores a 2 mil km/h, o que leva os pesquisadores a caracterizarem Netuno como o planeta com um dos climas mais severos do nosso Sistema Solar.
                  </p>
                  <p>
                    A atmosfera e a superfície de Netuno se confundem, uma vez que ele não apresenta uma camada superficial sólida. Esse fato faz com que não seja possível pisar no planeta. Além disso, seu denso núcleo rochoso, que representa cerca de 40% de toda a massa do planeta, se encontra envolto em um fluido gelado e também com elevada densidade, sendo composto por amônia, metano e também água.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h1>Rotação</h1>
                  <p>
                    O tempo que Netuno leva para dar uma volta completa em torno dessa estrela é muito grande: 165 anos. Já a sua rotação, que é o movimento que realiza em torno de seu próprio eixo, decorre em 16 horas, o que corresponde à duração de um dia completo em Netuno.
                  </p>
                </div>
                <div className="col-lg-5">
                  <h1>Curiosidades</h1>
                  <p>Netuno é o único planeta do Sistema Solar que não é visível a olho nu.</p>
                  <p>O nome do planeta é derivado do deus romano dos oceanos, Netuno, e foi sugerido por um de seus descobridores, Urbain Le Verrier. A associação foi feita em função da cor azulada que o planeta exibe.</p>
                  <p>Desde o seu descobrimento, Netuno completou somente 1 órbita em torno do Sol, o que ocorreu entre 1846 e 2011.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-5">
                  <h4>Saiba mais.</h4>
                  <iframe src="https://www.youtube.com/embed/xO-fBNKjOzs?si=5j8P1epJwqW55Rly" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
              </div>
            </div>

          </div>
      </div>
      </section>
    )
}

export default Planetas;