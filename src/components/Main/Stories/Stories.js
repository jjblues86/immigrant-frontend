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
        imageCard : [
            {
                img: "https://s3.amazonaws.com/theimmigrantdream.com/home-image.jpg",
                desc: "Immigrant"
            },
            {
                img:
                    "https://images.unsplash.com/photo-1564198879220-63f2734f7cec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2072&q=80",
                desc: "Space"
            },
            {
                img:
                    "https://images.unsplash.com/photo-1559534747-b6ea1cae1c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
                desc: "road"
            },
        ]
    }

    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.storiesUrl}/immigrant`);
            this.setState({immigrants: res.data});
            this.setState({imageCard: res.data});
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
        const {imageCard} = this.state;
        const immigrantsList = immigrants.length && imageCard.length ?
            (immigrants.map(immigrant => {
                return (

                    <Card
                        cardClass={styles.cardsList}
                        key={immigrant.id}
                        photo={imageCard.img}
                        name={immigrant.firstName + " " + immigrant.lastName}
                        random={imageCard.desc}
                        tag={immigrant.profession}
                        tagId={'/story/' + immigrant.id}
                    />
                )
            })) :
            (
                <div className="has-text-centered">
                    <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
                </div>
            )
        return (

            <div>
                <div className={styles.storiesDivider}>
                    <h1 className={styles.Stories}>Immigrant Stories</h1>
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

