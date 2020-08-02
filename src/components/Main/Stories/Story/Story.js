import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/immigrant.png'
import axios from "axios";
const config = require('../../../../config.json');


class Story extends Component{
    state = {
        newImmigrant: null,
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
        <Auxiliary>

            {this.state.immigrants.map(immigrant => (
                <Card border="dark"
                  style={{width: '18rem', display: 'flex'}}
                   className='col-xl-3 col-md-5 col-sm-10 mb-2 ml-5'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{immigrant.immigrantName}</Card.Title>
                    <div className="buttons">
                        <button className="button is-link is-light">Learn More</button>
                    </div>
                </Card.Body>
                </Card>
            ))}

            <br/>
        </Auxiliary>
    )
    }

};

export default Story;