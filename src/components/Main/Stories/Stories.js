import React, {Component} from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import * as ReactBootstrap from "react-bootstrap";
import style from "./Stories.module.css";

const config = require('../../../config.json');

class Stories extends Component {
    state = {
        immigrants: []
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

    getS3ImagesAPi = async (imageUrl) => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(imageUrl);
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
            <div className={style.Stories}>
                {immigrants.map(immigrant => (
                        <Card
                            cardClass={style.Card}
                            key={immigrant.id}
                            photo={immigrant.image}
                            name={immigrant.firstName + " " + immigrant.lastName}
                            tag={immigrant.profession}
                            tagId={'/story/' + immigrant.id}
                        />
                    )
                )}
            </div>
            : (
                <div className="has-text-centered">
                    <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
                </div>
            )
        return (

            <div>
                <div>
                    <h1 className={style.StoriesHeader}>Immigrant Stories</h1>
                    <hr className={style.Divider}/>
                </div>
                <div className={style.StoriesContainer}>
                    {immigrantsList}
                </div>
            </div>
        )
    }
}

export default Stories;

