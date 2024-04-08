import React, { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import { db, auth } from "../../firebase/firebaseConnection";

import "./style.css";
import { formatDistance, toLocaleString } from "date-fns";
import imagem from "../../assets/imagens/noticia3.png"

import { IoIosHeartEmpty, IoMdHeartEmpty } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import { GiAstronautHelmet } from "react-icons/gi";




import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import { ArtigoCrudContext } from "../../contexts/artigoCrud";
import { AuthContext } from "../../contexts/userDetails";

import noticias from "./noticias.json"
import pessoas from "./astros.json"

function Artigos() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [apodData, setApodData] = useState([]);
    const [diaAtual, setDiaAtual] = useState(new Date())
    const { artigo, handleAdd, excluirArtigo } = useContext(ArtigoCrudContext)
    const { user } = useContext(AuthContext);





    useEffect(() => {
        buscarDados();
    }, []);




    async function addArtigo(e) {
        e.preventDefault();

        if (titulo !== '' && descricao !== '') {
            await handleAdd(titulo, descricao).then(
                setTitulo(''),
                setDescricao('')
            )
        }

    }



    const buscarDados = () => {
        const apodApi = `https://api.nasa.gov/planetary/apod?api_key=6hbSF0dO6LHta3b0ghWtGepdEU9v7CriQwOvQQ52&date=${dataAtual()}`;

        fetch(apodApi)
            .then((r) => r.json())
            .then((data) => {
                setApodData(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    };

    function dataAtual() {
        const data = new Date(Date.now() + (new Date().getTimezoneOffset() - 300) * 60000);

        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');

        return `${ano}-${mes}-${dia}`;
    }




    return (
        <main id="main-artigo" className="d-flex flex-column">
            <div className="container text-center py-4">

                <h1 className="titulo-forum">Forum MyUniverse</h1>
            </div>
            <section className="container noticias-artigo ">
                <div className="row d-flex align-items-center">

                <div className="">
                        <h2 className="py-2 titulo-noticias text-center">Noticias recentes</h2>
                        <p className="text-center">Acompanhe as têndencias do mundo astronomico junto com a possibilidade de descoberta</p>
                    </div>
                    <Swiper
                        
                        navigation={false}
                        pagination={{
                            type: 'progressbar',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper col-md-9 col-12"
                    >
                        {noticias.map((noticia) => {
                            return (
                                <SwiperSlide><a href={noticia.noticiaUrl} className="imagens-noticias p-2 d-flex flex-column justify-content-between" style={{ backgroundImage: `url(${noticia.imageUrl})` }}>
                                    <h6 className="blur pt-3">{noticia.titulo}</h6>
                                    <p className="blur">-{noticia.autor}</p>
                                </a></SwiperSlide>
                            )
                        })}

                    </Swiper>
                    
                </div>

            </section>

            <section className="container my-4">
                <div className="row">

                    <article id="postar-artigo" className="col-md-8 mb-3 p-4">
                        <article className="row">
                            <div className="col-8">
                                <h2 className="titulo-discusoes">Discusões e artigos</h2>
                            </div>
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <button type="button" className="btn btn-postar-artigo" data-bs-toggle="modal" data-bs-target="#exampleModal">Postar artigo</button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog ">
                                        <div className="modal-content bg-modal">
                                            <div className="modal-header d-flex justify-content-between">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Novo artigo</h1>
                                                <button type="button" className="btn text-light text-end " data-bs-dismiss="modal" aria-label="Close"><FaWindowClose size={25} />
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label for="recipient-name" className="col-form-label">Titulo:</label>
                                                        <input type="text" placeholder="Ex: Descoberta da fisão..." className="form-control" id="recipient-name" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="message-text" className="col-form-label">Descrição:</label>
                                                        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="form-control" id="message-text" placeholder="(min-caracteres: 10)"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={addArtigo}>Postar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </article>
                        <article className="my-3">
                            {artigo.map((artigos) => {
                                return (
                                    <div key={artigos.id} class="card mb-3 artigo-style" >
                                        <div class="row g-0 p-2">
                                            <div class="col-md-2 d-flex flex-column justify-content-start align-items-center py-2">

                                                <GiAstronautHelmet size={46} />
                                                <p className="">{artigos.autor}</p>


                                            </div>
                                            <div class="col-md-10">
                                                <div class="card-body">
                                                    <div className="row">
                                                        <h5 class="card-title col-10">{artigos.titulo}</h5>
                                                        <div className="dropdown col-2 d-flex justify-content-end">

                                                            <FiMoreVertical className="dropdown-toggle" type='button' data-bs-toggle='dropdown' aria-expanded="false" />
                                                            <ul className='dropdown-menu'>
                                                                {user.username === artigos.autor ? <button className='btn btn-danger btn-sm dropdown-item' onClick={() => excluirArtigo(artigos.id)}><i className='fa-solid fa-trash'></i></button> : <div></div>}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <p class="card-text">{artigos.descricao}</p>

                                                    <div className="row">

                                                        <button className="btn col-6 text-start text-light">
                                                            <IoMdHeartEmpty size={25} /> {artigos.curtidas.length}
                                                        </button>

                                                        <p class="card-text text-end col-6"><small class="text-body-light">{artigos.horario.toLocaleString()}</small></p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                            }

                        </article>
                    </article>
                    <article className="col-md-4">
                        <div id="imagens-do-dia" className="">
                            <div className="imagens-dia text-center">
                                <h2 className="pt-2 pb-3 titulo-apod">Imagem do dia</h2>
                                {apodData.media_type === 'image' ? (
                                    <>
                                        <img className="img-fluid" src={apodData.url}></img>
                                        <p className="text-white pt-1">{apodData.title}</p>
                                    </>
                                ) : apodData.media_type === 'video' ? (
                                    <iframe src={apodData.url} height={'360px'} width={'100%'} allowFullScreen />
                                ) : (<p className="py-5 text-white">Erro ao carregar imagem, por favor aguarde...</p>)}
                            </div>
                        </div>
                        <div id="astronautas-espaco" className="my-3">
                            <div className="astronautas">
                                <h2 className="text-center titulo-astronauta">Pessoas no espaço:</h2>
                                <h1 className="text-center text-white py-3 numero-astronauta">{pessoas.number}</h1>
                                <p className="text-center"><small className="text-white ">Quem são? E onde estão?</small></p>

                                {pessoas.people && (
                                    <ul className="text-white">
                                        {pessoas.people.map((pessoa) => (
                                            <li key={pessoa.name}>{pessoa.name} - {pessoa.craft}</li>
                                        ))}
                                    </ul>
                                )
                                }

                            </div>
                        </div>
                    </article>

                </div>

            </section>



        </main>
    )
}

export default Artigos;