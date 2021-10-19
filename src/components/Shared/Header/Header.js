import logo from '../../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link to="/home"> <img className="logo" src={logo} alt="MediHealth Logo" /></Link>

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
                        {/* <div className="user-logged-in">
                            <h5>Welcome! Zahid Nabi</h5>
                            <NavLink to="/home">
                                <button className="login-btn"><BiLogOut /> <span>Logout</span></button>
                            </NavLink>
                        </div> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;