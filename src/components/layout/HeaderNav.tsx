import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import vrishkarLogo from "../../assets/images/vrishkar-logo.svg"

export default function HeaderNav() {
    return (
        <div>
            <Navbar className='nav-header' fixed='top' >
                <Container>
                {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
                <img src={vrishkarLogo} />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    {/* Signed in as: <a href="#login">Keith</a> */}
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

