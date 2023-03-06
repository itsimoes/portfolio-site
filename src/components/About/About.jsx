import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="wrapper">
      <h1 className="title">Eu desenvolvo soluções.</h1>
      <p>Me chamo Ítalo Simões, mas pode me chamar apenas de Ítalo.</p>
      <p>
        Natural do estado do Maranhão, graduado pela Universidade Federal do
        Maranhão {"("}UFMA{")"} no curso de Ciência da Computação, venho atuando
        no desenvolvimento web Front-end desde 2021.
      </p>
      <p>
        Utilizando como principais tecnologias ReactJS, AngularJS, Javascript,
        Typescript, além de HTML5 e CSS3, venho desenvolvendo aplicações Web com
        foco em acessibilidade, praticidade e usabilidade para que todos os
        usuários possam ser incluídos e consigam utilizar as aplicações de
        acordo com sua necessidade.
      </p>
      <p>
        Busco sempre eficiência e simplicidade na criação de projetos para que
        sua utilização seja intuitiva, eficaz e prazerosa por parte dos
        usuários.
      </p>
      <Button
        component={Link}
        to="/projetos"
        variant="contained"
        sx={{
          bgcolor: "#222",
          color: "springgreen",
          ":hover": { bgcolor: "springgreen", color: "#222" },
          fontWeight: "560",
          textTransform: "none",
        }}
      >
        Veja alguns de meus projetos
      </Button>
      <p>
        Já trabalhei em projetos próprios e com times de desenvolvimento de
        múltiplos países, sempre buscando integração e agilidade para que os
        processos possam fluir com mais facilidade e velocidade.
      </p>
      <p>Tem interesse em criarmos um projeto juntos? </p>
      <Button
        component={Link}
        to="/contato"
        variant="contained"
        sx={{
          bgcolor: "#222",
          color: "springgreen",
          ":hover": { bgcolor: "springgreen", color: "#222" },
          fontWeight: "560",
          textTransform: "none",
        }}
      >
        Vamos conversar
      </Button>
    </Container>
  );
};

export default About;
