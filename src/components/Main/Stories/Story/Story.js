import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/immidream.jpeg'
import axios from "axios";
import style from './Story.module.css';

const config = require('../../../../config.json');


class Story extends Component {
    state = {
        immigrant: null,
        id: null
    }

    componentDidMount = () => {
        let id = this.props.match.params.immigrant_id;

        this.setState({id: id});
        axios.get(`${config.api.invokeUrl}/immigrant/` + id)
            .then(res => {
                this.setState({
                    immigrant: res.data
                });
            });

    }

    render() {
        const immigrant = this.state.immigrant ? (
            <Card border="dark"
                  className={style.Story}>
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
                {immigrant}
            </Auxiliary>
        )
    }
};

export default Story;