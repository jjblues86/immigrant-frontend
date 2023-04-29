import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import style from './Card.module.css';

class Card extends Component {

    storyData = () => {
        this.props.history.push(this.props.tagId);
    }

    render() {

        return (
            <section onClick={this.storyData} className={style.Cards}>
                <img src={this.props.photo} alt={this.props.name} className={style.Img}/>
                <h1 className={style.Name}>{this.props.name}</h1>
                <h2 className={style.Tag}>{this.props.tag}</h2>
                <h3>{this.props.desc}</h3>
                <div>
                    <Link to={this.props.tagId}>
                        <p>Learn More <i className="far fa-arrow-alt-circle-right"/></p>
                    </Link>
                </div>
            </section>
        );
    }
}

export default withRouter(Card);