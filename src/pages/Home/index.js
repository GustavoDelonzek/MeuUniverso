import { Link } from "react-router-dom";
import React from 'react';
import { IoPlanetSharp } from "react-icons/io5";
import { IoMdRocket } from "react-icons/io";
import { GiFlyingFlag } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.css'
function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main id="bg-home" className='d-flex flex-column justify-content-center align-items-center '>
      <section id="home" className="bg-comeco container-fluid">
        <div className="container caixa">
          <div className="row align-content-center">
            <div className="col-md-12 text-center">
              <h1 className="titulo-home">Explore o Universo</h1>
              <p className="paragrafo-home">
                Descubra os mistérios do espaço sideral em nosso site dedicado à astronomia.
              </p>
              <a href="#inicial-um" className="custom-link botao-home">Descobrir</a>
            </div>
          </div>
        </div>
      </section>
      <section id="inicial-um" className="container-fluid d-flex ">
        <article className="container">
          <div className="row ">
            <div className='col-md-12 col-12 d-flex flex-column justify-content-start introducao-inicial' >
              <h1 className=' text-center titulo-inicial'>Astronomia em Foco</h1>
              <p className='text-center'>Explore os segredos do Universo da Ciência Astronômica conosco! Desde os fundamentos até as últimas descobertas, nossa aplicação oferece uma jornada fascinante pela astronomia. Esteja atualizado e mergulhe nas maravilhas do cosmos.</p>
            </div>
            <div className='col-md-4 col-12 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
              <div className="card">
                <div className="text-center"><IoPlanetSharp size={100} />
                </div>
                <div className="card-body text-center">
                  <h1 className="card-title">Planetas</h1>
                  <p className="card-text">Cada planeta oferece uma perspectiva única sobre os mistérios do espaço. Venha explorar conosco.</p>
                  <Link to="/planetas" className="btn btn-ver" reloadDocument>Ver</Link>
                </div>
              </div>

            </div>
            <div className='col-md-4 col-12 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
              <div className="card">
                <div className="text-center"><IoMdRocket size={100} />
                </div>
                <div className="card-body text-center">
                  <h1 className="card-title">Missões</h1>
                  <p className="card-text">Venha desvendar conosco as missões espaciais, cada uma revelando um novo vislumbre dos segredos do universo</p>

                  <Link to="/missões" className="btn btn-ver">Ver</Link>
                </div>
              </div>

            </div>
            <div className='col-md-4 col-12 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="600">
              <div className="card">
                <div className="text-center"><FaNewspaper size={100} /></div>
                <div className="card-body text-center">
                  <h1 className="card-title">Artigos</h1>
                  <p className="card-text">Descubra conosco artigos astronômicos e seja inspirado a escrever sua própria história no cosmos.</p>

                  <Link to="/artigos" className="btn btn-ver">Ver</Link>
                </div>
              </div>

            </div>

          </div>

        </article>

      </section>
    </main>

  );
}

export default Home;