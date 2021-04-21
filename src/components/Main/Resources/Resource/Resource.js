import style from "./Resource.module.css";
import React from "react";

const Resource = props => {
    return (
        <div className={style.Resource}>
            <a href={props.url} target="_blank" rel="noreferrer noopener">{props.resource}</a>
        </div>
    )
};

export default Resource;