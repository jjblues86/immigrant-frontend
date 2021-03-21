import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import style from '../Home/Home.module.css';

class Card extends Component {

    storyData = () => {
        this.props.history.push(this.props.tagId);
    }

    render() {
        return (
            <section onClick={this.storyData} className={style.cards}>
                <img src={this.props.photo} alt={this.props.name}/>
                <h1 className={style.name}>{this.props.name}</h1>
                <h2 className={style.tag}>{this.props.tag}</h2>
                <div>
                    <Link to={this.props.tagId}>
                        <p>Learn More -></p>
                    </Link>
                </div>
            </section>
        );
    }
}

export default withRouter(Card);