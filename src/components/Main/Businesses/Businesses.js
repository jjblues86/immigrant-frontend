import React, {Component} from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "react-bootstrap/Button";
import picture from "../../../assets/immigrant.png";
import {Link} from "react-router-dom";
const config = require('../../../config.json');

class Businesses extends Component {
    state = {
        businesses: []
    }

getBusinesses = async () => {
    // add call to AWS API Gateway to fetch immigrants here
    //then set them in state
    try {
        const res = await axios.get(`${config.api.invokeUrl}/immigrant`);
        this.setState({businesses: res.data});
    } catch (err) {
        console.log(`An error has occured: ${err}`);
    }
}

componentDidMount = () => {
        this.getBusinesses();
}

    render() {
        const {businesses} = this.state;
        const businessesList = businesses.length ? (
            businesses.map(business => {
                return (
            <Auxiliary>
                <Card border="dark immigrant card" key={business.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Business Name: {business.businessName}</Card.Title>
                        <Card.Text>
                            Business Type: {business.businessType}
                        </Card.Text>
                        <div className="buttons">
                            <Link to={'/' + business.id}>
                                <p>Learn More</p>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Auxiliary>
                    )
    })

        ) : (
            <div className="center">No stories yet.</div>
        )
    return (
        <div>
            <div className='row mb-5'>
                {businessesList}
            </div>
        </div>
    )

    }
};

export default Businesses;