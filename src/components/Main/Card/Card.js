import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <section id="cards">
                <img src={this.props.photo} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
                <h2>{this.props.tag}</h2>
                <div>
                    <Link to={this.props.tagId}>
                        <p>Learn More</p>
                    </Link>
                </div>
            </section>
        );
    }
}

export default Card;