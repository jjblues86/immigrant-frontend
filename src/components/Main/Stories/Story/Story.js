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
            <div className={style.Story}>
                <div className={style.Container}>
                    <div className={style.ImageContainer}>
                        <img src={picture} alt={this.state.immigrant.name} className={style.Image}/>
                    </div>
                    <h2 className={style.Name}>{this.state.immigrant.name}</h2>
                    <h3 className={style.Profession}>{this.state.immigrant.profession}</h3>
                    <h3 className={style.Origin}>{this.state.immigrant.origin}</h3>
                    <h3 className={style.Hobby}>{this.state.immigrant.hobby}</h3>
                    <p className={style.StoryText}>{this.state.immigrant.story}</p>
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