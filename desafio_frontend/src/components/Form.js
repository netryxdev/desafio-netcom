import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className='form-container'>
            <div className='form-content-right'>
            <img src='img/casual-life-3d-24.png' alt='garoto'
                    className='form-img'/>
            </div>
                <div className='form-content-left'>
                    

                    {!isSubmitted ? (<FormSignup submitForm=
                    {submitForm} />) : (<FormSuccess />)} 
                </div>
            
        </div>
        </>
    )
}

export default Form
