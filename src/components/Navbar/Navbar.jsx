import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { AllInclusive } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "#222" }} className="appbar">
      <Container>
        <Toolbar disableGutters>
          {/* navbar mobile view */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem sx={{ backgroundColor: "#222" }}>
                <Typography>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "springgreen" }}
                  >
                    Início
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/sobre"
                    style={{ textDecoration: "none", color: "springgreen" }}
                  >
                    Sobre
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/projetos"
                    style={{ textDecoration: "none", color: "springgreen" }}
                  >
                    Projetos
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link
                    to="/contato"
                    style={{ textDecoration: "none", color: "springgreen" }}
                  >
                    Contato
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <MenuItem sx={{ ":hover": { color: "springgreen" } }}>
              <AllInclusive
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                IT.
              </Typography>
            </MenuItem>
          </Link>

          {/* navbar desktop view */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <MenuItem sx={{ ":hover": { color: "springgreen" } }}>
              <AllInclusive
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                IT.
              </Typography>
            </MenuItem>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link to="/" className="link">
              Início
            </Link>

            <Link to="/sobre" className="link">
              Sobre
            </Link>

            <Link to="/projetos" className="link">
              Projetos
            </Link>

            <Link to="/contato" className="link">
              Contato
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
