import logo from '../../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/home"> <img className="logo" src={logo} alt="MediHealth Logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-link mx-auto">
                        <NavLink activeClassName="active" to="/home">Home</NavLink>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                    </Nav>
                    <Nav className="nav-btn">
                        <NavLink to="/login">
                            <button className="login-btn"><FaRegUser /> <span>Login</span></button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;