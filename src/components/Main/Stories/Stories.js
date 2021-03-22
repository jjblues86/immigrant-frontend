import React, {Component} from 'react';
import axios from 'axios';
import picture from "../../../assets/immidream.jpeg";
import Card from "../Card/Card";
import * as ReactBootstrap from "react-bootstrap";
import styles from "./Stories.module.css";

const config = require('../../../config.json');

class Stories extends Component {
    state = {
        immigrants: [],
    }

    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.storiesUrl}/immigrant`);
            this.setState({immigrants: res.data});
            console.log(this.state.immigrants)
        } catch (err) {
            console.log(`An error has occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.getImmigrants();
    }

    render() {
        const {immigrants} = this.state;
        const immigrantsList = immigrants.length ?
            (immigrants.map(immigrant => {
                return (
                    <Card

                        cardClass={styles.cardsList}
                        key={immigrant.id}
                        photo={picture}
                        name={immigrant.firstName+" "+immigrant.lastName}
                        tag={immigrant.profession}
                        tagId={'/story/' + immigrant.id}
                    />
                )
            })) : (
                <div className="has-text-centered">
                    <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
                </div>
            )
        return (

            <div>
                <div className={styles.storiesDivider}>
                    <h1 className={styles.Stories}>The Immigrant Stories</h1>
                    <hr className={styles.Divider}/>
                </div>
                <div className={styles.cardsList}>
                    {immigrantsList}
                </div>
            </div>
        )
    }
}

export default Stories;

