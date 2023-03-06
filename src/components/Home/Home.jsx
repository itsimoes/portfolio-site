import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
          bgcolor: "#222",
          color: "springgreen",
          ":hover": { bgcolor: "springgreen", color: "#222" },
          fontWeight: "560",
          textTransform: "none",
        }}
      >
        Saiba mais
      </Button>
    </Container>
  );
};

export default Home;
