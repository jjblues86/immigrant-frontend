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
    }

    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.storiesUrl}/immigrant`);
            this.setState({immigrants: this.randomThreeStories(res.data, 3)});
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
        const immigrantsList = immigrants.length ?
            <div className={style.Stories}>
                {immigrants.map(immigrant => (
                        <Card className={style.Card}
                              key={immigrant.id}
                              photo={picture}
                              name={immigrant.firstName + " " + immigrant.lastName}
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