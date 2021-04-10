import React , {Component} from "react";
import immigrantImage from "../../../assets/ImmiHero.jpg";
import classNames from "classnames";

export default class Hero extends Component{
    render() {
        const hero = classNames(this.props.heroClass)
        return (
            <img className={hero}
                 src={immigrantImage}
                 alt="Immigrants"
            />
        )
    }
}
