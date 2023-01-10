
import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
  return (
    <Container className='home-wrapper'>
        <h1>Olá, eu sou Ítalo Simões.</h1>
        <h2 className='title'>Desenvolvedor web</h2>
        <h3>Com foco no desenvolvimento FrontEnd, <br/> Criativo e que prima pela acessibilidade na web.</h3>
        {/* <Link to="/">Saiba mais...</Link> */}
    </Container>
  )
}

export default Home