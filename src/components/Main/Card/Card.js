import React, {Component} from 'react';
import {Link} from "react-router-dom";
import style from '../Home/Home.module.css';
import Button from "@material-ui/core/Button";

class Card extends Component {
    render() {
        return (
            <section className={style.cards}>
                <img className={style.immigrant} src={this.props.photo} alt={this.props.name}/>
                <h1 className={style}>{this.props.name}</h1>
                <h2 className={style.tag}>{this.props.tag}</h2>
                <div>
                    <Link to={this.props.tagId}>
                        <button className={style.button} type="button">
                            <p>Learn More</p>
                        </button>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Card;