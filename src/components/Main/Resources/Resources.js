import React, {useState} from 'react';
import style from "./Resources.module.css";
import Resource from "./Resource/Resource";

const Resources = () => {
    let [resourses] = useState([
        {name: "ACLU", url: "https://www.aclu.org/"},
        {name: "USCIS", url: "https://www.uscis.gov/"},
        {name: "BOUNDLESS", url: "https://www.boundless.com/"},
        {name: "NATIONAL IMMIGRATION FORUM", url: "https://immigrationforum.org/"},
        {name: "REGISTER TO VOTE", url: "https://vote.gov/"}
    ]);
    return (
        <div className={style.ResourcesContainer}>
            <h1 className={style.Header}>Resources</h1>
            <hr className={style.Divider}/>
            {resourses.map(r => (<Resource url={r.url} resource={r.name}/>))}
        </div>
    )
}

export default Resources;