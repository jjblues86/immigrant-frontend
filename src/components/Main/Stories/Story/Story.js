import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/immidream.jpeg'
import axios from "axios";
import style from './Story.module.css';
import SocialShare from "./SocialShare";
import HelmetMetaData from "./HelmetMetaData";

const config = require('../../../../config.json');


class Story extends Component {
    state = {
        immigrant: null,
        id: null
    }

    componentDidMount = () => {
        let id = this.props.match.params.immigrant_id;

        this.setState({id: id});
        axios.get(`${config.api.storiesUrl}/immigrant/` + id)
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

        const { classes } = this.props;

        return (
            <Auxiliary>
                {immigrant}
                {/*<SocialShare />*/}
                <HelmetMetaData />
            </Auxiliary>

        )
    }
};

export default Story;