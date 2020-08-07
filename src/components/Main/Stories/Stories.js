import React, {Component} from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import picture from "../../../assets/immigrant.png";
import {Link} from "react-router-dom";
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
        const immigrantsList = immigrants.length ? (
            immigrants.map(immigrant => {
                return(
                    <Card border="dark immigrant card" key={immigrant.id}
                        // style={{width: '18rem', display: 'flex'}}
                          className='col-xl-3 col-md-5 col-sm-10 mb-2 ml-5'>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{immigrant.immigrantName}</Card.Title>
                            <div className="buttons">
                                <Link to={'/' + immigrant.id}>
                                    <p>Learn More</p>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })
        ) : (
            <div className="center">No stories yet.</div>
        )
        return (
            <div>
                <div className='row mb-5'>
                    {immigrantsList}
                </div>
            </div>
        )
    }
};

export default Stories;
