import { Container } from "@mui/system";
import React from "react";
import "./style.css";
import { useState } from "react";

//Form components
// import UserForm from "./UserForm";
// import Thanks from "./Thanks";

const Contact = () => {
  //   const formComponents = [<UserForm />, <Thanks />];
  //   const [currentStep, setCurrentStep] = useState(formComponents[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeStep = (e, form, button, thanks) => {
    e.preventDefault();
    // setCurrentStep(formComponents[1]);
    document.getElementById(form).style.display = "none";
    document.getElementById(button).style.display = "none";
    document.getElementById(thanks).style.display = "block";
    console.log(name);
    console.log(email);
    console.log(message);
  };

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
          action="submit"
          onSubmit={(e) =>
            changeStep(e, "contact-button", "contact-form", "thanks")
          }
        >
          <label>Nome:</label>
          <input
            className="textField"
            type="text"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            className="textField"
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Mensagem:</label>
          <textarea
            className="textField"
            type="text-area"
            placeholder="Digite sua mensagem"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* {currentStep} */}
          <button
            id="contact-button"
            className="contact-button"
            type="submit"
            form="contact-form"
            value="Enviar"
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
