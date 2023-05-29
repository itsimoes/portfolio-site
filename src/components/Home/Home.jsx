import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Avatar from "../../assets/avatar.png";

//social media icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';

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
        className="home-button"
        component={Link}
        to="/sobre"
        variant="contained"      
      >
        Saiba mais
      </Button>
      <img className="avatar" src={Avatar} alt="" />
      <div className="socialmedia-wrapper-home">
            <a
              href="https://linkedin.com/in/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="socialmedia-icon-home" />
            </a>
            <a
              href="https://github.com/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="socialmedia-icon-home" />
            </a>
            <a
              href="https://twitter.com/d_rtypaw"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="socialmedia-icon-home" />
            </a>
          </div>
    </Container>
  );
};

export default Home;
