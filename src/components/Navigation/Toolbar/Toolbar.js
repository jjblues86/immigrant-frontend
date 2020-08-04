import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import Logo from "../Logo/Logo";
import styles from "./Toolbar.module.css";
import logoImage from "../../../assets/immigrant.png";

const toolbar = () => {
    return (
        <Navbar bg="dark" expand="md" sticky="top">
            <Navbar.Brand className={styles.Logo}>
                <Logo picture={logoImage} className={styles.Logo} alternate='Logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className={styles.Right}>
                <Nav>
                    <Nav.Link><NavigationItem link='/' exact>Home</NavigationItem></Nav.Link>
                    <Nav.Link><NavigationItem link='/stories'>Stories</NavigationItem></Nav.Link>
                    <Nav.Link><NavigationItem link='/businesses'>Businesses</NavigationItem></Nav.Link>
                    <Nav.Link><NavigationItem link='/about'>About</NavigationItem></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default toolbar;