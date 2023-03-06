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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
            }}
          >
            <MenuItem>
              <AllInclusive
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
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
              <MenuItem sx={{backgroundColor: "#222"}}>
                <Typography>
                  <Link to="/" style={{ textDecoration: "none", color: 'springgreen'}}>Início</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/sobre" style={{ textDecoration: "none", color: 'springgreen'}}>Sobre</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/projetos" style={{ textDecoration: "none", color: 'springgreen'}}>Projetos</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography>
                  <Link to="/contato" style={{ textDecoration: "none", color: 'springgreen'}}>Contato</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Link
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" }, 
              flexDirection: "row",      
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              background: "#222",
            }}
          >
            <AllInclusive sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "aliceblue",
                textDecoration: "none", }} />
            <Typography
              variant="h5"
              noWrap              
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",                
                background: "#222",
                color: "aliceblue",
                textDecoration: "none",
              }}
            >
              IT.
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography>
                <Link to="/" className="link">
                  Início
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography>
                <Link to="/sobre" className="link">
                  Sobre
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography>
                <Link to="/projetos" className="link">
                  Projetos
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem sx={{ my: 2, color: "white", display: "block" }}>
              <Typography>
                <Link to="/contato" className="link">
                  Contato
                </Link>
              </Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
