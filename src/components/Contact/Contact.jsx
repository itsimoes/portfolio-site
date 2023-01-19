import { TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <Container className='wrapper'>
            <h1 className='title'>Vamos conversar.</h1>
            <p className='contact-p'>Entre em contato preenchendo o formulário a seguir ou pelo email <a href="mailto:itsimoes1@gmail.com?subject=Olá!" class="links">itsimoes1@gmail.com</a>.</p>
            <div className='form-wrapper'>
                <form id='contact-form' action='submit'>
                    <label >Nome:</label>
                    <input className='textField' type="text" placeholder='Digite seu nome'/>
                    <label >Email:</label>
                    <input className='textField' type="text" placeholder='Digite seu email'/>
                    <label >Mensagem:</label>
                    <textarea className='textField' type="text-area" placeholder='Digite sua mensagem'/>
                    <button className='contact-button' type='submit' form='contact-form'value='Enviar'>Enviar</button>
                </form>
            </div>
        </Container>
    )
}

export default Contact