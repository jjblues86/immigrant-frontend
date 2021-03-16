import React, {Component} from 'react';
import {Link} from "react-router-dom";
import style from '../Home/Home.module.css';
import styles from '../../../components/Main/Businesses/Businesses.module.css';

class BusinessCard extends Component {
    render() {
        return (
            <section className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                <img src={this.props.photo} alt={this.props.name} />
                </div>
                <div className={styles.cardContent}>
                <h1 className={styles.cardTitle}>{this.props.name}</h1>
                <h2 className={styles.cardDescription}>{this.props.tag}</h2>
                </div>
                {/*<div className={styles.cardButton}>*/}
                {/*    <Link to={this.props.tagId}>*/}
                {/*        <button className={style.button} type="button">*/}
                {/*            <p>Learn More</p>*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
            </section>
        );
    }
}

export default BusinessCard;