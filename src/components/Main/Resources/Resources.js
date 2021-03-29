import React from 'react';
import style from "./Resources.module.css";

const resources = () => {
    return (
        <div>
            <h1 className={style.Header}>Resources</h1>
            <div className={style.ResourcesContainer}>
                <div className={[style.Resources, style.Left].join(" ")}>
                    <a href="https://www.aclu.org/" target="_blank" rel="noreferrer noopener"><p>ACLU</p></a>
                </div>
                <div className={[style.Resources, style.Right].join(" ")}>
                    <a href="https://www.uscis.gov/" target="_blank" rel="noreferrer noopener"><p>USCIS</p></a>
                </div>
                <div className={[style.Resources, style.Left].join(" ")}>
                    <a href="https://www.boundless.com/" target="_blank" rel="noreferrer noopener"><p>BOUNDLESS</p></a>
                </div>
                <div className={[style.Resources, style.Right].join(" ")}>
                    <a href="https://immigrationforum.org/" target="_blank" rel="noreferrer noopener"><p>NATIONAL
                        IMMIGRATION FORUM</p></a>
                </div>
                <div className={[style.Resources, style.Left].join(" ")}>
                    <a href="https://vote.gov/" target="_blank" rel="noreferrer noopener"><p>REGISTER TO VOTE</p></a>
                </div>
                <img src="../H" />
            </div>
        </div>
    )
}

export default resources;