import React, {Component, Fragment} from 'react';
import axios from "axios";
import * as ReactBootstrap from 'react-bootstrap';
import picture from "../../../assets/immidream.jpeg";
import Card from '../Card/Card';
import HomeContent from "./HomeContent";
import style from "./Home.module.css";
import styles from "../Stories/Stories.module.css";

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
            this.setState({immigrants: res.data.slice(0,3)});
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
            <div className={style.cardsList}>
                    {immigrants.map(immigrant => (
                            <Card
                                key={immigrant.id}
                                photo={picture}
                                name={immigrant.immigrantName}
                                tag={immigrant.storyTitle}
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
            <Fragment>
                <HomeContent/>
                <div className={styles.cardsList}>
                {immigrantsList }
                </div>
            </Fragment>
        )
    }
}

export default Home;