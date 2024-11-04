import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpacing: ".5px",
        color: "white" // Ensures the text color is visible on a dark background
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{ color: "#6C63FF" }}>
                    Vivek Khandelwal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> {/* Aligns content to the right */}
                    <Nav>
                        <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                        <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                        <NavLink to="/project" className="text-decoration-none" style={common}>Projects</NavLink>
                        <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
