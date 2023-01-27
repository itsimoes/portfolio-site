import { Container } from '@mui/system'
import React from 'react'
import './style.css'
import { useState } from 'react'

//Form components
import UserForm from './UserForm'
import Thanks from './Thanks'

const Contact = () => {

    const formComponents = [<UserForm />, <Thanks />];
    const [currentStep, setCurrentStep] = useState(formComponents[0]);       

    const changeStep = (e, button) => {
        e.preventDefault()        
        setCurrentStep(formComponents[1])
      
        // console.log({ name, email, message, currentStep })
    }


    return (
        <Container className='wrapper'>
            <h1 className='title'>Vamos conversar.</h1>
            <p className='contact-p'>Entre em contato preenchendo o formulário a seguir ou pelo email <a href="mailto:itsimoes1@gmail.com?subject=Olá!" class="links">itsimoes1@gmail.com</a>.</p>
            <div className='form-wrapper'>
                <form id='contact-form' action='submit' onSubmit={(e) => changeStep(e)}>
                    {currentStep}
                    <button
                        className='contact-button'
                        type='submit'
                        form='contact-form'
                        value='Enviar'>Enviar
                    </button>
                </form>
            </div>
        </Container>
    )
}

export default Contact