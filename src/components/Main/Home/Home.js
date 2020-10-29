import React, {Component, Fragment} from 'react';
import axios from "axios";
import HomeContent from "./HomeContent";
import Card from '../Card/Card';
import picture from "../../../assets/immigrant.png";
import * as ReactBootstrap from 'react-bootstrap';

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
            this.setState({immigrants: res.data.slice(0, 3)});
        } catch (err) {
            console.log(`An error has occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.getImmigrants();
    }

    render() {
        const {immigrants} = this.state;
        const immigrantsList = immigrants.length ? (
            immigrants.map(immigrant => {
                return (
                    <Card key={immigrant.id}
                          photo={picture}
                          tag={immigrant.storyTitle}
                          tagId={'/story/' + immigrant.id}>
                    </Card>
                )
            })) : (
            <div className="has-text-centered">
                <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
            </div>
        )
        return (
            <Fragment>
                <HomeContent/>
                <div className='container'>
                    <div className='row mb-5'>
                        {immigrantsList}
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Home;