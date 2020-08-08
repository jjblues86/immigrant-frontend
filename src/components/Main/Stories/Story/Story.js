import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/immigrant.png'
import axios from "axios";
const config = require('../../../../config.json');


class Story extends Component{
    state = {
        id: null,
        immigrants: []
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
                            <Card.Text>{immigrant.immigrantStory}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        ) : (
            <div className="center">No stories yet.</div>
        )

    return (

        <Auxiliary>
          {immigrantsList}
        </Auxiliary>
    )
    }

};

export default Story;