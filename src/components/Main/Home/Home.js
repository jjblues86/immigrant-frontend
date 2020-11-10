import React, {Component, Fragment} from 'react';
import axios from "axios";
import * as ReactBootstrap from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import picture from "../../../assets/immigrant.png";
import Card from '../Card/Card';
import HomeContent from "./HomeContent";
import styles from './Home.module.css'

const config = require('../../../config.json');

class Home extends Component {
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
            <div>
                <Carousel>
                    {immigrants.map(immigrant => (
                        <Carousel.Item>
                            <Card
                                cardClass={styles.Card}
                                imageClass={"Image"}
                                nameClass={"Name"}
                                textClass={"Title"}
                                linkClass={"Link"}

                                key={immigrant.id}
                                photo={picture}
                                name={immigrant.immigrantName}
                                tag={immigrant.storyTitle}
                                tagId={'/story/' + immigrant.id}>
                            </Card>
                        </Carousel.Item>)
                    )} </Carousel>
            </div>
            : (
                <div className="has-text-centered">
                    <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
                </div>
            )
        return (
            <Fragment>
                <HomeContent/>
                <div style={{margin: "auto"}}>
                    {immigrantsList}
                </div>
            </Fragment>
        )
    }
}

export default Home;