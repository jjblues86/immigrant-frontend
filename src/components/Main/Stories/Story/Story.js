import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import picture from '../../../../assets/immidream.jpeg'
import axios from "axios";
import SocialShare from "./SocialShare";
import * as ReactBootstrap from "react-bootstrap";
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
        axios.get(`${config.api.storiesUrl}/immigrant/` + id)
            .then(res => {
                this.setState({
                    immigrant: res.data
                });
            });

    }

    render() {
        const immigrant = this.state.immigrant ? (
            <div>
                <div className={style.Container}>
                    <div className={style.Image}>
                        <img src={picture} alt={this.state.immigrant.immigrantName}/>
                    </div>
                    <div className={style.Name}>{this.state.immigrant.immigrantName}</div>
                    <div className={style.StoryDate}>{this.state.immigrant.storyDate}</div>
                    <p className={style.StoryText}>{this.state.immigrant.immigrantStory}</p>
                </div>
            </div>

        ) : (
            <div className="has-text-centered">
                <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
            </div>
        )
        return (
            <Auxiliary>
                {immigrant}
                <SocialShare />
            </Auxiliary>
        )
    }
}

export default Story;