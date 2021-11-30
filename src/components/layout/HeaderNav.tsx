import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import vrishkarLogo from "../../assets/images/vrishkar-logo.svg";

export default function HeaderNav() {
  return (
    <div>
      {/* <Navbar className='nav-header' fixed='top' >
                <Container>
                <img src={vrishkarLogo} />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar className="nav-header">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={vrishkarLogo} />
            </Typography>
            <span className="nav-header__right-text mobile-screen">
              hi, Keti
            </span>
            &nbsp;&nbsp;
            <Avatar style={{ height: 26, width: 26, marginRight: 10 }} />
            <PowerSettingsNewIcon color="secondary" className="mobile-screen" />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
