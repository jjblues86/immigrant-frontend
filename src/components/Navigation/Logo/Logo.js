import React from 'react';
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={props.picture} alt={props.alternate}/>
        </div>
    )
};

export default logo;