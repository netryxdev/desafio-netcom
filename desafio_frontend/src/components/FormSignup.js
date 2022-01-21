import React, { useState } from 'react';
import './Form.css'
import axios from 'axios';
import { Notification } from './Notification';

// import useForm from './useForm';
// import validate from './validateInfo'


function FormSignup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const SignUp = async (e) => {
        e.preventDefault();
    }

        axios.post('https://api.m3o.com/v1/user/Create', {
            username:username,
            password:password,
            email: email
        },
        {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer MGQxMWFiY2EtNDk4NS00YmNhLTlmY2MtMThjZGRkODFmOWE2'
        }
        }).then(function (response) {
            setSuccess(true);
        }).catch(function (error) {
            setError(true);
        });
        

        



    return (
        
        <div className='form-content-left'>


            <form className='form' method='post' onSubmit={SignUp}>
                
                <h1>Cadastrar</h1>

                <div className='cadastrarcom'>
            <p>-------<span><strong> Cadastrar com</strong></span></p>
                </div>

                <div className='form-geral'>
                    <div className='social-button'>

                        <a className='ig-button'href='#'>
                            Cadastre-se 
                            <img src='img/icon-instagram.png'
                            alt='ig' height='30px' width='30px'
                            className='social-icon'
                            />
                        </a>


                        <a className='fb-button'href='#'>
                            Cadastre-se  
                            <img src='img/icon-facebook.png' 
                            alt='ig'height='30px' width='30px'
                            className='social-icon'
                            /> 
                        </a>
                    </div>


                    <div className='form-geral'  >

                        <div className='form-inline'>
                            
                            <div className='form-inputs'>
                                <label 
                                className='form-label'>
                                Nome
                                </label>

                                <input
                                id='username'
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder='Digite seu nome'
                                value={username}
                                onChange={e => {setUsername(e.target.value)}}
                                />
                                {/* {errors.username && <p>{errors.username}</p>} */}
                            </div>

                            <div className='form-inputs'>
                                <label 
                                className='form-label'>
                                Email
                                </label>
                                <input
                                id='email'
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder='Digite seu email'
                                value={email}
                                onChange={e => {setEmail(e.target.value)}}
                                />
                                {/* {errors.email && <p>{errors.email}</p>} */}
                            </div>
                    </div>

                            <div className='form-inputs'>
                                <label 
                                className='form-label'>
                                Senha
                                </label>
                                <input
                                id='password'
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder='Digite sua senha'
                                value={password}
                                onChange={e => {setPassword(e.target.value)}}
                                />
                                {/* {errors.password && <p>{errors.password}</p>} */}
                            </div>
                </div>
            </div>            
                            
                            <div className='checkbox'>
                                <input type="checkbox" id="termos_de_contrato"
                                /><label for="termos_de_contrato">  Li e concordo com os termos de serviço e/ou Política de privacidade</label>
                            </div>

                                <button onClick={SignUp} className='form-input-btn' type='submit'>
                                    <img src='img/icon-arrow.png' alt='arrow' className='seta'/> 
                                </button>

                                <span className='form-input-login'>
                                Já tem o usuário? Faça o <a
                                href="#">Login</a>
                                </span>
                            
            </form>
            
        </div>


    )

}

export default FormSignup
