import React from 'react';
import useForm from './useForm';
import validate from './validateInfo'
import './Form.css'
//import InputForm from './components/inputForm/InputForm';

const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors }
    = useForm(submitForm, validate);

    return (
        <div className='form-content-left'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Cadastrar</h1>
                    <div className='social-button'>

                        <a class='ig-button'href='#'>
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
                    
                                <label htmlFor='username'
                                className='form-label'>
                                Nome
                                </label>

                                <input
                                id='username'
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder='Digite seu nome'
                                value={values.username}
                                onChange={handleChange}
                                />
                                {errors.username && <p>{errors.username}</p>}
                    
                            </div>
                            <div className='form-inputs'>
                                <label htmlFor='email'
                                lassName='form-label'>
                                Email
                                </label>
                                <input
                                id='email'
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder='Digite seu email'
                                value={values.email}
                                onChange={handleChange}
                                />
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                    </div>
                <div className='form-inputs'>
                    <label htmlFor='password'
                    className='form-label'>
                    Senha
                    </label>
                        <input
                        id='password'
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder='Digite sua senha'
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
            </div>
                <button className='form-input-btn' type='submit'>
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
