import { useState, useEffect, React } from 'react';

import { Link, redirect, useNavigate } from "react-router-dom";
import { db, auth } from '../../firebase/firebaseConnection';
import "./style.css"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { toast } from 'react-toastify';
import imagem from "../../assets/imagens/Privacy-policy-rafiki.svg"

import { useContext } from 'react';
import {AuthContext} from '../../contexts/userDetails'

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [username, setUsername] = useState('');
  
  const { signUp, loadingAuth, signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    if(username !== '' && email !== '' && senha !== ''){
     await signUp(email, senha, username)
    }

  }

  async function handleSignIn(e){
    e.preventDefault();

    if(email !== '' && senha !== ''){
      await signIn(email, senha);
    }

  }
  
  return (
    <main id='main-login-lock' className='d-flex main-login row d-flex justify-content-center'>

      
      <section className='imagem-login text-light col-md-6  col-12 d-flex justify-content-center align-items-center flex-column'>
        <h1 className='titulo-login'>Olá, seja bem-vindo!</h1>
        <p className='text-center'>Para ter acesso à essa página, você precisa se cadastrar ou fazer login.</p>
        <img src={imagem} className='img-fluid imagem-limite' />
      </section>
      <section className='col-md-6 col-12 d-flex justify-content-center  align-items-center container-login'>
        <div className="card-login container-fluid col-md-8 d-flex flex-column justify-content-start">
          <div className="container-fluid nav-tabs border-0 d-flex flex-column justify-content-center" id="tabs-user" role="tablist">
            <div className='row '>
              <div className=" nav-item col-6 border-bottom p-0">

                <a className='botao-switch container-fluid nav-link active  d-flex justify-content-center' id='cadastrar-tab' data-bs-toggle="tab" href='#cadastrar' role='tab' aria-controls='cadastrar' aria-selected="true">Cadastrar</a>

              </div>
              <div className='nav-item col-6 border-bottom p-0'>
                <a className='botao-switch container-fluid nav-link  d-flex justify-content-center' id='login-tab' data-bs-toggle="tab" href='#login' role='tab' aria-controls='login' aria-selected="false">Login</a>
              </div>
            </div>


            <div className='tab-content p-4 ' id='tabs-usuario'>
              <div className='tab-pane  fade show active ' id='cadastrar' role='tabpanel' aria-labelledby='cadastrar-tab'>
                <div className=' my-2'>

                  <label className='form-label' for='floatingInput1'>Username</label>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Informe seu username" className='form-control form-padrao' type='text' />
                </div>
                <hr />
                <div className='form my-2'>

                  <label className='form-label' for="floatingInput">Email</label>
                  <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@exemplo.com" className='form-control form-padrao' />

                </div>
                <div className='my-2'>

                  <label className='form-label' for='floatingInput1'>Senha</label>
                  <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Informe sua senha" className='form-control form-padrao' type='password' id='floatingInput1' />
                </div>


                <div className='d-flex justify-content-evenly flex-row p-2'>

                  <button className='btn botao-cadastro' type='submit' onClick={handleSubmit}>Cadastrar</button>
                </div>

              </div>
              <div className='tab-pane my-5  fade' id='login' aria-labelledby='login-tab' role='tabpanel'>
                <div className=' my-2'>
                  <label className='form-label' for="floatingInput">Email</label>
                  <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@exemplo.com" className='form-control form-padrao' />


                </div>
                <div className='my-2'>
                  <label className='form-label' for='floatingInput1'>Senha</label>
                  <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Informe sua senha" className='form-control form-padrao' type='password' />

                </div>
                <div className='d-flex justify-content-evenly flex-row p-2'>
                  <button className='btn botao-login' type='submit' onClick={handleSignIn}>Fazer login</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );

}

export default Login;