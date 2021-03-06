import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../Logo/Logo";
import styles from "./Toolbar.module.css";
import logo from "../../../assets/TheImmigrantDream.jpg"
import {withRouter} from 'react-router-dom';

class Toolbar extends Component {
    homePage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar className={styles.NavFont} expand="md" sticky="top">
                <Navbar.Brand className={styles.Logo} onClick={this.homePage}>
                    <Logo picture={logo} className={styles.Logo} alternate='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={styles.Right}>
                    <Nav>
                        <NavigationItem link='/' exact>Home</NavigationItem>
                        <NavigationItem link='/about'>About</NavigationItem>
                        <NavigationItem link='/stories'>Stories</NavigationItem>
                        <NavigationItem link='/businesses'>Businesses</NavigationItem>
                        <NavigationItem link='/resources'>Resources</NavigationItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(Toolbar);