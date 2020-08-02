import React, {Component} from 'react';
import Story from "./Story/Story";
// import data from '../../../assets/stories-data.json';
import axios from 'axios';
const config = require('../../../config.json');

class Stories extends Component {
    state = {
        immigrants: []
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
        return (
            <div>
                <div className='row mb-5'>
                    {this.state.immigrants.map(immigrant => (
                        <Story key={immigrant.id}
                               name={immigrant.immigrantName}
                               // story={immigrant.immigrantStory}
                              />
                    ))}
                </div>
            </div>
        )
    }
};

export default Stories;