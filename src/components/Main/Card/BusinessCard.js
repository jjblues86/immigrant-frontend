import React, {Component} from 'react';
import styles from '../../../components/Main/Businesses/Businesses.module.css';
import {withRouter} from "react-router-dom";

class BusinessCard extends Component {
    render() {
        return (
            <section className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                <img src={this.props.photo} alt={this.props.name} />
                    <div className={styles.overlay}>
                        <div className={styles.text}>{this.props.name}</div>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <a href={this.props.web} target="_blank" rel="noreferrer noopener"><h1 className={styles.cardTitle}>{this.props.name}</h1></a>
                <h2 className={styles.cardDescription}>{this.props.tag}</h2>
                    {/*<a href={this.props.web} target="_blank" rel="noreferrer noopener"><h2 className={styles.cardDescription}>{this.props.web}</h2></a>*/}
                <h2 className={styles.cardDescription}>{this.props.add}</h2>
                </div>
            </div>
            </section>
        );
    }
}
export default withRouter(BusinessCard);
