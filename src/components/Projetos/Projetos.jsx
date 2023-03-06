import { Button, Container } from "@mui/material";
import React from "react";
import "./style.css";
import { HashLink as Link } from "react-router-hash-link";
import Countdown from "../../assets/countdown.png";
import Pokedex from "../../assets/pokedex.png";
import Blog from "../../assets/blog.png";
import Swotch from "../../assets/swotch.png";
import Jbl from "../../assets/jbl.png";

const Projetos = () => {
  return (
    <Container className="content-wrapper">
      <div className="project-wrapper">
        <h1 className="title">Projetos</h1>
        <p>
          Projetos que desenvolvi utilizando as tecnologias mais atuais de
          desenvolvimento web. Vamos desenvolver um projeto juntos?
        </p>
        <Button
        className="proj-button"
          component={Link}
          to="/contato"
          variant="contained"
          sx={{
            bgcolor: "rgb(44, 44, 44);",
            color: "springgreen",
            ":hover": { bgcolor: "springgreen", color: "rgb(44, 44, 44);" },
            fontWeight: "560",
            textTransform: "none",
            width: "160px"
          }}
        >
          Entre em contato
        </Button>
      </div>
      <div>
        <div>
          <h4>Projetos ReactJS</h4>
          <div className="card-wrapper">
            <div className="card">
              <a
                href="https://github.com/itsimoes/countdown-timer"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Countdown} alt="" />
              </a>
              <p>Countdown Timer</p>
            </div>
            <div className="card">
              <a
                href="https://github.com/itsimoes/pokedex"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Pokedex} alt="" />
              </a>
              <p>Pokedex</p>
            </div>
          </div>

          <h4>Landing pages</h4>
          <div className="card-wrapper">
            <div className="card">
              <a
                href="https://github.com/itsimoes/LP-blog-soon"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Blog} alt="" />
              </a>
              <p>Travel Blog</p>
            </div>
            <div className="card">
              <a
                href="https://github.com/itsimoes/LP-tech-product"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Jbl} alt="" />
              </a>
              <p>Tech Product</p>
            </div>
            <div className="card">
              <a
                href="https://github.com/itsimoes/LP-nontendo-swotch"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Swotch} alt="" />
              </a>
              <p>Videogame</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projetos;
