import { Container } from "@mui/system";
import React from "react";
import "./style.css";
import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { TextField } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";

//social media icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xayzqblp");

  if (state.submitting && state.succeeded) {
    console.log("enviado!");
    console.log("submitting " + state.submitting);
    console.log("suceeded " + state.succeeded);
    document.getElementById("form-content").style.display = "none";
    document.getElementById("thanks").style.display = "flex";
  }

  // function submitForm(e) {
  //   // e.preventDefault();
  //   // document.getElementById("form-content").style.display = "none";
  //   // document.getElementById("thanks").style.display = "flex";
  //   console.log("state = false");
  //   console.log(state.succeeded);
  // }

  // function backToForm(e) {
  //   e.preventDefault();
  //   document.getElementById("form-content").style.display = "flex";
  //   document.getElementById("thanks").style.display = "none";

  //   state.succeeded = false;
  //   console.log("state = false");
  // }

  return (
    <Container className="wrapper">
      <h1 id="vamos-conversar" className="title">
        Vamos conversar.
      </h1>
      <form
        id="contact-form"
        className="form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div id="form-content">
          <p className="contact-p">
            Entre em contato preenchendo o formulário a seguir ou pelo email{" "}
            <a href="mailto:itsimoes1@gmail.com?subject=Olá!" class="links">
              itsimoes1@gmail.com
            </a>
            .
          </p>

          <TextField
            required //mudar o método de requerimento por uma função
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="textField"
            label="Digite seu nome"
            variant="outlined"
            sx={{ bgcolor: "#222", borderRadius: "5px" }}
            InputProps={{
              sx: {
                color: "aliceblue",
                "&:hover fieldset": {
                  border: "2px solid springgreen !important",
                  borderRadius: "5px",
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "2px solid springgreen !important",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "springgreen",
                },
              },
            }}
          />
          <TextField
            required //mudar o método de requerimento por uma função
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textField"
            label="Digite seu email"
            variant="outlined"
            sx={{ bgcolor: "#222", borderRadius: "5px" }}
            InputProps={{
              sx: {
                color: "aliceblue",
                "&:hover fieldset": {
                  border: "2px solid springgreen !important",
                  borderRadius: "5px",
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "2px solid springgreen !important",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "springgreen",
                },
              },
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            required //mudar o método de requerimento por uma função
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            className="textField"
            label="Digite sua mensagem"
            variant="outlined"
            sx={{ bgcolor: "#222", borderRadius: "5px" }}
            InputProps={{
              sx: {
                color: "aliceblue",
                "&:hover fieldset": {
                  border: "2px solid springgreen !important",
                  borderRadius: "5px",
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "2px solid springgreen !important",
                },
              },
            }}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: "gray",
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: "springgreen",
                },
              },
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            id="contact-button"
            className="contact-button"
            type="submit"
            form="contact-form"
            value="Enviar"
            disabled={state.submitting}
          >
            Entre em contato
          </button>
        </div>
        <div id="thanks">
          <p>Muito Obrigado!</p>
          <p>Entrarei em contato em breve!</p>
          {/* <button className="contact-button" onClick={backToForm}>Voltar</button> */}         
        </div>
        <div className="socialmedia-wrapper">
            <a
              href="https://linkedin.com/in/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="socialmedia-icon" />
            </a>
            <a
              href="https://github.com/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="socialmedia-icon" />
            </a>
            <a
              href="https://twitter.com/d_rtypaw"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="socialmedia-icon" />
            </a>
          </div>
      </form>
    </Container>
  );
};

export default Contact;
