import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";

class Card extends Component {
    render() {

        let card = classNames(this.props.cardClass);
        let image = classNames(this.props.imageClass);
        let name = classNames(this.props.nameClass);
        let text = classNames(this.props.textClass);
        let link = classNames(this.props.linkClass);

        return (
            <div className={[card, "card is-shady"].join(' ')}>
                <img className={image} src={this.props.photo} alt={this.props.name}/>
                <h1 className={name}>{this.props.name}</h1>
                <h2 className={text}>{this.props.tag}</h2>
                <div className={link}>
                    <Link to={this.props.tagId}>
                        <p>Learn More</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Card;