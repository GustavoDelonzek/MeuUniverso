import { Link, useFetcher } from "react-router-dom";
import { React, useEffect, useState } from 'react';
import './style.css';
import Temporizador from "./temporizador";
import ProgressBar from "./progressBar"
import axios from "axios";
import missoes from "./missoes.json";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Missões() {

    useEffect(() => {
        AOS.init();
      }, [])

    function formatarTempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo;
    }


    return (
        <main id="missoes" >
            <section className="container d-flex flex-column align-items-center">
                <h1 className="titulo-pagina my-4">Acompanhe as próximas missões</h1>
                <article className="mb-4">
                    {missoes.map(missao => {
                        return (
                            <div className="card card-missoes mb-3" data-aos="fade-down" data-aos-offset="200" data-aos-duration="600">
                                <div className="row d-flex justify-content-center g-0">
                                    <div className="col-md-4 col-8">
                                        <img src={missao.image_url} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title titulo-missao">{missao.titulo}</h5>
                                            <p className="card-text">{missao.descricao} - {missao.agenciaespacial}</p>
                                            <div className="teste-progresso">
                                                <div className="progress-circular" style={{
                                                    background: `conic-gradient(#61B5D9 ${ProgressBar(missao.datainicio, missao.datatermino).angulo}deg, #ededed 0deg)`,
                                                }}>
                                                    <span className="value">{ProgressBar(missao.datainicio, missao.datatermino).percentage.toFixed(2)}%</span>
                                                </div>
                                                <div className="temporizador-container">
                                                    <div className="temporizador dias-c">
                                                        <p className="text" id="dias">{formatarTempo(Temporizador(missao.datatermino).dias)} days</p>

                                                    </div>
                                                    <div className="temporizador horas-c">
                                                        <p className="text" id="horas">{formatarTempo(Temporizador(missao.datatermino).horas)}hrs</p>

                                                    </div>
                                                    <div className="temporizador minutos-c">
                                                        <p className="text" id="minutos">{formatarTempo(Temporizador(missao.datatermino).minutos)}min</p>

                                                    </div>
                                                    <div className="temporizador segundos-c">
                                                        <p className="text" id="segundos">{formatarTempo(Temporizador(missao.datatermino).segundos)}segs</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </article>

            </section>
        </main>
    );
}

export default Missões;