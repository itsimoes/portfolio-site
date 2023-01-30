import React from 'react'
import { useState } from 'react'
import './style.css'



const UserForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  

  return (
    <div className='form'>
      <label >Nome:</label>
      <input
        className='textField'
        type="text"
        placeholder='Digite seu nome'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label >Email:</label>
      <input        
        className='textField'
        type="email"
        placeholder='Digite seu email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       
      />
      <label >Mensagem:</label>
      <textarea
        className='textField'
        type="text-area"
        placeholder='Digite sua mensagem'
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />     
    </div>
  )
}

export default UserForm 