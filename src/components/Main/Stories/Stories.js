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
                        cardClass={styles.Card}
                        imageClass={styles.Image}
                        textClass={styles.Title}
                        linkClass={styles.Link}

                        key={immigrant.id}
                        photo={picture}
                        tag={immigrant.storyTitle}
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
                <div className="row">
                    {immigrantsList}
                </div>
            </div>
        )
    }
};

export default Stories;

