import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/immigrant.png'
import axios from "axios";

const config = require('../../../../config.json');


class Story extends Component {
    state = {
        immigrant: null
    }

    componentDidMount = () => {
        let id = this.props.match.params.immigrant_id;
        axios.get(`${config.api.invokeUrl}/immigrant/` + id)
            .then(res => {
                this.setState({
                    immigrant: res.data
                })
            })
    }

    render() {
        const immigrants = this.state.immigrant ? (
            <Card border="dark"
                  className='col-xl-1 col-md-5 col-sm-10 mb-2 ml-5'>
                <Card.Img variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title>{this.state.immigrant.immigrantName}</Card.Title>
                    <Card.Text>{this.state.immigrant.immigrantStory}</Card.Text>
                </Card.Body>
            </Card>

        ) : (
            <div className="has-text-centered">Loading Story</div>
        )

        return (
            <Auxiliary>
                {immigrants}
            </Auxiliary>
        )
    }
};

export default Story;