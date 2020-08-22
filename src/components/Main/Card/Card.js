import React from 'react';
import style from './Card.module.css';
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <img className={style.Image} src={props.photo} alt={props.name}/>
            <h4 className={style.Title}>{props.name}</h4>
            <div className={style.Text}>
                <p>{props.story}</p>
                <br/>
            </div>
            <div className={style.Link}>
                <Link to={props.storyId}>
                    <p>Learn More</p>
                </Link>
            </div>
        </div>
    );
};

export default Card;