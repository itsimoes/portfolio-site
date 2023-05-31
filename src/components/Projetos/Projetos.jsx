import { Button, Container } from "@mui/material";
import React from "react";
import "./style.css";
import { HashLink as Link } from "react-router-hash-link";
import Countdown from "../../assets/countdown.png";
import Pokedex from "../../assets/pokedex.png";
import Blog from "../../assets/blog.png";
import Swotch from "../../assets/swotch.png";
import Jbl from "../../assets/jbl.png";
import ReactIcon from "../../assets/logo192.png";
import { FlightLand, GitHub, Lightbulb } from "@mui/icons-material";

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
          className="projetos-button"
          component={Link}
          to="/contato"
          variant="contained"
        >
          Entre em contato
        </Button>
      </div>
      <div>
        <div>
          <div className="subsec-title">
            <img className="react-icon" src={ReactIcon} alt="" />
            <h4 className="section-title">Projetos ReactJS</h4>
          </div>
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
              <div>
                <div className="projetos-subtitle-off">
                  <Lightbulb className="projetos-icon-off" />
                  <p>Countdown Timer</p>
                </div>
              </div>
              <a
                className="projetos-link"
                href="https://github.com/itsimoes/countdown-timer"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <GitHub className="projetos-icon-on" />
                  <p>Veja no Github</p>
                </div>
              </a>
            </div>

            <div className="card">
              <a
                className="projetos-link"
                href="https://itsimoes.github.io/pokedex/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Pokedex} alt="" />
              </a>
              <a
                className="projetos-link"
                href="https://itsimoes.github.io/pokedex/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <Lightbulb className="projetos-icon-on" />
                  <p>Pokedex</p>
                </div>
              </a>
              <a
                className="projetos-link"
                href="https://github.com/itsimoes/pokedex"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <GitHub className="projetos-icon-on" />
                  <p>Veja no Github</p>
                </div>
              </a>
            </div>
          </div>

          <div className="subsec-title">
            <FlightLand className="landing-icon" />
            <h4 className="section-title">Landing pages</h4>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <a
                href="https://itsimoes.github.io/LP-blog-soon/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Blog} alt="" />
              </a>
              <a
                className="projetos-link"
                href="https://itsimoes.github.io/LP-blog-soon/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <Lightbulb className="projetos-icon-on" />
                  <p>Travel Blog</p>
                </div>
              </a>
              <a
                className="projetos-link"
                href="https://github.com/itsimoes/LP-blog-soon"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <GitHub className="projetos-icon-on" />
                  <p>Veja no Github</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a
                href="https://itsimoes.github.io/LP-tech-product/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Jbl} alt="" />
              </a>
              <a
                className="projetos-link"
                href="https://itsimoes.github.io/LP-tech-product/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <Lightbulb className="projetos-icon-on" />
                  <p>Tech Product</p>
                </div>
              </a>
              <a
                className="projetos-link"
                href="https://github.com/itsimoes/LP-tech-product"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <GitHub className="projetos-icon-on" />
                  <p>Veja no Github</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a
                href="https://itsimoes.github.io/LP-nontendo-swotch/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <img className="thumb" src={Swotch} alt="" />
              </a>
              <a
                className="projetos-link"
                href="https://itsimoes.github.io/LP-nontendo-swotch/"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <Lightbulb className="projetos-icon-on" />
                  <p>Videogame</p>
                </div>
              </a>
              <a
                className="projetos-link"
                href="https://github.com/itsimoes/LP-nontendo-swotch"
                target="_blank"
                alt=""
                rel="noreferrer"
              >
                <div className="projetos-subtitle">
                  <GitHub className="projetos-icon-on" />
                  <p>Veja no Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projetos;
