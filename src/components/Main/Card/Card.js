import React from 'react';
import style from './Card.module.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <img className={style.Image} src={props.photo} alt={props.name}/>
            <h1 className={style.Name}>{props.name}</h1>
            <h2 className={style.Text}>{props.tag}</h2>
            <div className={style.Link}>
                <Link to={props.tagId}>
                    <p>Learn More</p>
                </Link>
            </div>
        </div>
    );
};

export default Card;