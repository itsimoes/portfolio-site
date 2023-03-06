import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Avatar from "../../assets/avatar.png"

const Home = () => {
  return (
    <Container className="wrapper">
      <h1 className="presentation">Olá, eu sou Ítalo Simões.</h1>
      <h2 className="title">Desenvolvedor web</h2>
      <h3 className="resume">
        Com foco no desenvolvimento Front-end, criativo e que prima pela
        acessibilidade na web.
      </h3>
      <Button
        component={Link}
        to="/sobre"
        variant="contained"
        sx={{
          bgcolor: "rgb(44, 44, 44);",
          color: "springgreen",
          ":hover": { bgcolor: "springgreen", color: "rgb(44, 44, 44);" },
          fontWeight: "560",
          textTransform: "none",
        }}
      >
        Saiba mais
      </Button>
      <img className="avatar" src={Avatar} alt=""  />     
      </Container>
  );
};

export default Home;
