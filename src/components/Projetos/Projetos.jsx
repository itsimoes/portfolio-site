import { Container } from '@mui/material'
import React from 'react'
import './style.css'
import { HashLink as Link } from 'react-router-hash-link';
import Countdown from '../../assets/countdown.png'
import Pokedex from '../../assets/pokedex.png'

const Projetos = () => {
  return (
    <div>
      <Container className='wrapper'>
        <h1 className='title'>Principais projetos</h1>
        <p id='proj-p'>Projetos que desenvolvi com carinho e dedicação.</p>
        <Link to="#countdown" className='project-link' smooth='true'>
          <p>Veja abaixo.</p>
          <span className='big-arrow'>{'︾'}</span>
        </Link>

      </Container>
      <section id='countdown' className='project-wrapper'>
        <Container className='content'>
          <a href='https://github.com/itsimoes/countdown-timer' target='_blank' rel="noreferrer" className='project-link'>
            <h1>Countdown Timer</h1>
            <p>Projeto de Timer de contagem regressiva criado em ReactJS.</p>
            <span>Saiba mais {'>>'}</span>
          </a>
          <a href='https://github.com/itsimoes/countdown-timer' target='_blank' rel="noreferrer" className='project-link'>
            <img className='thumbnail' src={Countdown} />
          </a>
        </Container>
      </section>
      <div id='pokedex' className='project-wrapper'>
        <Container className='content'>
          <a href='https://github.com/itsimoes/pokedex' target='_blank'rel="noreferrer" className='project-link'>
            <h1>Pokedex</h1>
            <p>Projeto de Pokedex criado em ReactJS com utlização de API.</p>
            <span>Saiba mais {'>>'}</span>
          </a>
          <a href='https://github.com/itsimoes/pokedex' target='_blank' rel="noreferrer" className='project-link'>
            <img className='thumbnail' src={Pokedex} />
          </a>
        </Container>
      </div>
    </div >
  )
}

export default Projetos