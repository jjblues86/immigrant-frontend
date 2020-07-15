import React from 'react';
import immigrant from '../../../assets/immigrant.png';
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={immigrant} alt={props.alternate}/>
        </div>
    )
};

export default logo;