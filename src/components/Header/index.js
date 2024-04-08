import { Link } from "react-router-dom";

import './style.css';
import { useState, useEffect, useContext } from "react";
import fundo from '../../assets/imagens/sistema-solar.png';

import { FaUserAstronaut } from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";

import { ThemeHeaderContext } from "../../contexts/themeHeader";
import { AuthContext } from "../../contexts/userDetails";

function Header() {
    const { user, logout } = useContext(AuthContext)

    const { theme } = useContext(ThemeHeaderContext)

    

    return (
        <header className={`${theme}`}>
            <nav className="navbar navbar-expand-md border-body cabecalho ">
                <div className="container borda-nav">
                    <Link to='/' className="navbar-brand text-white logo-titulo">
                        <img src={fundo} alt="logo" width="46" height="46" className="d-inline-block align-text-center "
                        />
                        MyUniverse
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuNavbar"
                    >
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end "
                        id="menuNavbar"
                    >
                        <div className="navbar-nav cor-link text-center align-items-center text-uppercase">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/artigos" className="nav-link">
                                Artigos
                            </Link>
                            
                            <Link to="/missões" className="nav-link">Missões</Link>
                            <Link to="/planetas" className="nav-link">
                                Planetas
                            </Link>

                            {user ? (
                                <div className="dropdown d-flex align-items-center">
                                    <button className='btn btn-light btn-astronaut dropdown-toggle m-2' type='button' data-bs-toggle='dropdown' aria-expanded="false"><GiAstronautHelmet size={25}/> {user.username}</button>
                                    <ul className='dropdown-menu'>
                                        <li><button onClick={logout} className='dropdown-item'>Sair</button></li>
                                    </ul>
                                </div>
                                
                            ) : (
                                <Link to="/login" href="#noticias" className=" btn btn-primary">
                                    Sign-in
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>


    );
}

export default Header;