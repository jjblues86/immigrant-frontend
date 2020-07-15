import React from 'react';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import FooterItems from "../../components/FooterItems/FooterItems";
import Auxiliary from "../Auxiliary/Auxiliary";
import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar/>
            <br/>
            <main className={styles.Content}>
                {props.children}
            </main>
            <FooterItems/>
        </Auxiliary>
    )
};

export default layout;