import { Container } from "@mui/material";
import React from "react";
import "./style.css";
import { HashLink as Link } from "react-router-hash-link";
import Countdown from "../../assets/countdown.png";
import Pokedex from "../../assets/pokedex.png";
import Blog from "../../assets/blog.png";
import Switch from "../../assets/swotch.png";
import Jbl from "../../assets/jbl.png";


const Projetos = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div>
      <Container className="wrapper">
        <div className="project-head">
          <h1 className="title">Principais projetos</h1>
          <p id="proj-p">
            Projetos pessoais que desenvolvi com carinho e dedicação utilizando
            as mais atuais ferramentas de desenvolvimento.
          </p>
        </div>
        <div className="thumb-wrapper">
          <div className="thumb-box-wrapper">
            <Link
              to="#reactjs"
              className="project-link"
              smooth="true"
              scroll={(el) => scrollWithOffset(el)}
            >
              <p>Projetos ReactJS</p>
              {/* <span className="big-arrow">{"︾"}</span> */}
              <div className="react-thumb-wrapper">
                <img className="thumbnail" src={Countdown} />
                <img className="thumbnail" src={Pokedex} />
              </div>
            </Link>
          </div>
          <div className="thumb-box-wrapper">
            <Link
              to="#wordpress"
              className="project-link"
              smooth="true"
              scroll={(el) => scrollWithOffset(el)}
            >
              <p>Landing pages</p>
              {/* <span className="big-arrow">{"︾"}</span> */}
              <div className="react-thumb-wrapper">
                <img className="thumbnail" src={Blog} />
                <img className="thumbnail" src={Switch} />
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <section id="reactjs">
        <Container>
          <h2>Projetos ReactJS</h2>
        </Container>
        <div id="countdown" className="project-wrapper">
          <Container className="content">
            <a
              href="https://github.com/itsimoes/countdown-timer"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h1>Countdown Timer</h1>
              <p>Projeto de Timer de contagem regressiva criado em ReactJS.</p>
              <span>Saiba mais {">>"}</span>
            </a>
            <a
              href="https://github.com/itsimoes/countdown-timer"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img className="thumbnail" src={Countdown} />
            </a>
          </Container>
        </div>

        <div id="pokedex" className="project-wrapper">
          <Container className="content">
            <a
              href="https://github.com/itsimoes/pokedex"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h1>Pokedex</h1>
              <p>Projeto de Pokedex criado em ReactJS com utlização de API.</p>
              <span>Saiba mais {">>"}</span>
            </a>
            <a
              href="https://github.com/itsimoes/pokedex"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img className="thumbnail" src={Pokedex} />
            </a>
          </Container>
        </div>
      </section>
      <section id="wordpress">
        <Container>
          <h2>Landing Pages</h2>
        </Container>
        <div id="blog" className="project-wrapper">
          <Container className="content">
            <a
              href="https://github.com/itsimoes/LP-blog-soon"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h1>Travel Blog</h1>
              <p>Projeto de Landing page de um Blog de viagens.</p>
              <span>Saiba mais {">>"}</span>
            </a>
            <a
              href="https://github.com/itsimoes/LP-blog-soon"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img className="thumbnail" src={Blog} />
            </a>
          </Container>
        </div>

        <div id="swotch" className="project-wrapper">
          <Container className="content">
            <a
              href="https://github.com/itsimoes/LP-nontendo-swotch"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h1>Nontendo Swotch</h1>
              <p>Projeto de Landing page de anúncio de videogame.</p>
              <span>Saiba mais {">>"}</span>
            </a>
            <a
              href="https://github.com/itsimoes/LP-nontendo-swotch"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img className="thumbnail" src={Switch} />
            </a>
          </Container>
        </div>
        <div id="tech" className="project-wrapper">
          <Container className="content">
            <a
              href="https://github.com/itsimoes/LP-tech-product"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <h1>Tech Product</h1>
              <p>Projeto de Landing page de um produto de tecnologia.</p>
              <span>Saiba mais {">>"}</span>
            </a>
            <a
              href="https://github.com/itsimoes/LP-tech-product"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <img className="thumbnail" src={Jbl} />
            </a>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
