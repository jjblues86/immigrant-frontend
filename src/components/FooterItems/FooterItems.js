import React from 'react';
import styles from './FooterItems.module.css';
import FooterItem from "./FooterItem/FooterItem";

const footerItems = () => {

    return (
        <footer className={styles.FooterItems}>
            <FooterItem name='Contact Me'/>
        </footer>
    )
};

export default footerItems;