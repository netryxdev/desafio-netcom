import React from 'react'
import './InputForm.css'


function InputForm(props) {
    return (
        <input type={props.tipo} placeholder={props.texto} onChange={props.func} />
    )
}

export default InputForm

