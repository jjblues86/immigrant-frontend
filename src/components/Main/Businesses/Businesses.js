import React, {Component} from 'react';
import axios from 'axios';
import Card from "../Card/Card";
import picture from "../../../assets/business.jpeg";

const config = require('../../../config.json');

class Businesses extends Component {
    state = {
        businesses: []
    }

    getBusinesses = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.baseApi.baseUrl}/businesses`);
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
                    <Card key={business.id}
                          photo={picture}
                          name={business.businessName}
                          tag={'Business Type: ' + business.businessType}
                          tagId={'/' + business.id}>
                    </Card>
                )
            })

        ) : (<div className="center">No stories yet.</div>)
        return (
            <div>
                <div className='row mb-5'>
                    {businessesList}
                </div>
            </div>
        )
    }
}

export default Businesses;