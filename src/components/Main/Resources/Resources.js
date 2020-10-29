import React from 'react';
import style from "./Resources.module.css";

const resources = () => {
    return (
        <div className='container-fluid'>
            <h1 className={style.Resources}>Resources</h1>
            <a href="https://www.aclu.org/" target="_blank" rel="noreferrer noopener"><p>ACLU</p></a>
            <a href="https://www.uscis.gov/" target="_blank" rel="noreferrer noopener"><p>USCIS</p></a>
            <a href="https://www.boundless.com/" target="_blank" rel="noreferrer noopener"><p>BOUNDLESS</p></a>
            <a href="https://immigrationforum.org/" target="_blank" rel="noreferrer noopener"><p>NATIONAL IMMIGRATION FORUM</p></a>
            <a href="https://vote.gov/" target="_blank" rel="noreferrer noopener"><p>REGISTER TO VOTE</p></a>
        </div>
    )
}

export default resources;