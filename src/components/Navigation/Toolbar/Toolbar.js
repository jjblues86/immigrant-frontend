import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import Logo from "../Logo/Logo";
import styles from "./Toolbar.module.css";
import logoImage from "../../../assets/immigrant.png";

const toolbar = () => {
    return (
        <Navbar className="navbar is-light" expand="md" sticky="top">
            <Navbar.Brand className={styles.Logo}>
                <Logo picture={logoImage} className={styles.Logo} alternate='Logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className={styles.Right}>
                <Nav>
                    <NavigationItem link='/' exact>Home</NavigationItem>
                    <NavigationItem link='/stories'>Stories</NavigationItem>
                    <NavigationItem link='/businesses'>Businesses</NavigationItem>
                    <NavigationItem link='/about'>About</NavigationItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default toolbar;