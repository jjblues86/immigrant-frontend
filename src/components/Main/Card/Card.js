import React from 'react';
import style from './Card.module.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <img className={style.Image} src={props.photo} alt={props.name}/>
            <h1 className={style.Name}>{props.name}</h1>
            <p className={style.Text}>{props.tag}</p>
            <p className={style.Text}>{props.address}</p>
            <div className={style.Link}>
                <Link to={props.tagId}>
                    <p>Learn More</p>
                </Link>
            </div>
        </div>
    );
};

export default Card;