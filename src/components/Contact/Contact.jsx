import { Container } from "@mui/system";
import React from "react";
import "./style.css";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { red } from "@mui/material/colors";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xayzqblp");

  const divStyle = {
    color: red    
  }

  const changeStep = (form, button, thanks) => {
    document.getElementById(form).style.display = "none";
    document.getElementById(button).style.display = "none";
    document.getElementById(thanks).style.display = "block";
    console.log(name);
    console.log(email);
    console.log(message);
  };

  if (state.succeeded) {
    changeStep("contact-button", "contact-form", "thanks");
  }

  return (
    <Container className="wrapper">
      <h1 className="title">Vamos conversar.</h1>
      <p className="contact-p">
        Entre em contato preenchendo o formulário a seguir ou pelo email{" "}
        <a href="mailto:itsimoes1@gmail.com?subject=Olá!" class="links">
          itsimoes1@gmail.com
        </a>
        .
      </p>
      <div className="form-wrapper">
        <form
          className="form"
          id="contact-form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label>Nome:</label>
          <input
            className="textField"
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            className="textField"
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ValidationError prefix="Email" field="email"  errors={state.errors} style={divStyle}/>
          <label>Mensagem:</label>
          <textarea
            className="textField"
            id="message"
            type="text-area"
            name="message"
            placeholder="Digite sua mensagem"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {/* {currentStep} */}
          <button
            id="contact-button"
            className="contact-button"
            type="submit"
            form="contact-form"
            value="Enviar"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
        <div id="thanks">
          <p className="success-msg">Mensagem enviada!</p>
          <p>Entrarei em contato em breve.</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
