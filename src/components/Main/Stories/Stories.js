import React, {Component} from 'react';
import axios from 'axios';
import picture from "../../../assets/immigrant.png";
import Card from "../Card/Card";
import style from './Stories.module.css';

const config = require('../../../config.json');

class Stories extends Component {
    state = {
        immigrants: [],
    }

    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.invokeUrl}/immigrant`);
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
                    <Card key={immigrant.id}
                          photo={picture}
                          name={immigrant.immigrantName}
                          tag={immigrant.immigrantStory}
                          tadId={'/' + immigrant.id}>
                    </Card>
                )
            })) : (<div className="center">No stories yet.</div>)
        return (
            <div>
                <div className={["row", style.MarginB].join(' ')}>
                    {immigrantsList}
                </div>
            </div>
        )
    }
};

export default Stories;

