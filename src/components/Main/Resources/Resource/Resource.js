import style from "./Resource.module.css";
import React from "react";

const Resource = props => {
    return (
        <div className={style.Resource}>
            <h1>{props.name}</h1>
            <p>{props.message}</p>
            <div className={style.ButtonContainer}>
                <a href={props.url} target="_blank" rel="noreferrer noopener"
                   className={style.Button}>Learn More <i className="far fa-arrow-alt-circle-right"/></a>
            </div>
        </div>

    )
};

export default Resource;