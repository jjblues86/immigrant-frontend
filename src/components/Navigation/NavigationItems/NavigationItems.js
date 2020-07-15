import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css'

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/' exact>Home</NavigationItem>
        <NavigationItem link='/stories'>Stories</NavigationItem>
        <NavigationItem link='/businesses'>Businesses</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
    </ul>
);

export default navigationItems;