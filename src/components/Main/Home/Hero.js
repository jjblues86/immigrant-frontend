import React from "react";
import immigrantImage from "../../../assets/immigrants.jpg";
import style from './Home.module.css'

function Hero() {
    return (
        <img className={style.hero}
            src={immigrantImage}
            alt="Immigrants"
        />
    )
}

export default Hero;
