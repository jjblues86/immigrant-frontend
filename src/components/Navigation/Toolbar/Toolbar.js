import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo'
import styles from './Toolbar.module.css';
import logoImage from '../../../assets/immigrant.png';

const toolbar = () => {
    return (
        <header className={styles.Toolbar}>
            <div className={styles.Logo}>
                <Logo picture={logoImage} className={styles.Logo} alternate='Logo'/>
            </div>
            <nav className={styles.DeskstopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default toolbar;