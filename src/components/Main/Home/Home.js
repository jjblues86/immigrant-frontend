import React, {Component} from 'react';
import axios from "axios";
import * as ReactBootstrap from 'react-bootstrap';
import picture from "../../../assets/immidream.jpeg";
import Card from '../Card/Card';
import HomeContent from "./HomeContent";
import style from "./Home.module.css";
import Hero from "./Hero";

const config = require('../../../config.json');

class Home extends Component {
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
            this.setState({immigrants: this.randomThreeStories(res.data, 3)});
            this.setState({imageCard: res.data});
        } catch (err) {
            console.log(`An error has occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.getImmigrants();
    }

    randomThreeStories = (immigrants, n) => {
        let len = immigrants.length,
            result = new Array(n),
            taken = new Array(len);
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = immigrants[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    render() {
        const {immigrants} = this.state;
        const {imageCard} = this.state;
        const immigrantsList = immigrants.length && imageCard.length ?
            <div className={style.Stories}>
                {immigrants.map(immigrant => (
                        <Card className={style.Card}
                              key={immigrant.id}
                              photo={imageCard.img}
                              name={immigrant.firstName + " " + immigrant.lastName}
                              random={imageCard.desc}
                              tag={immigrant.quote}
                              tagId={'/story/' + immigrant.id}>
                        </Card>
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
                <Hero heroClass={style.Hero}/>
                <div className={style.HomeContentStoriesContainer}>
                    <HomeContent introClass={style.HomeContent}/>
                    {immigrantsList}
                </div>
            </div>
        )
    }
}

export default Home;