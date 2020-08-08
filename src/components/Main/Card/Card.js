import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.Card}>
            <img className={style.Image} src={props.photo} alt="ABC"/>
            <h4 className={style.Title}>{props.name}</h4>
            <p className={style.Text}>{props.story}</p>
        </div>
    );
};

export default Card;