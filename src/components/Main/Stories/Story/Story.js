import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import picture from '../../../../assets/immidream.jpeg'
import axios from "axios";
import style from './Story.module.css';
import SocialShare from "./SocialShare";

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
                    <h2 className="title is-1 has-text-centered">{this.state.immigrant.immigrantName}</h2>
                    <hr></hr>
                    <figure className="image is-16by9">
                    <img src={picture}/>
                </figure>
                <br/>
                    <p className="has-text-black-bis has-text-justified has-text-weight-normal is-family-monospace">
                        {this.state.immigrant.immigrantStory}
                    </p>
                </div>
        ) : (
            <div className="has-text-centered">Loading Story</div>
        )

        const immigrantSide = this.state.immigrant ? (
            <aside className={style.Sidebar}>
                <hr></hr>
                <h2 className="title is-4">Hobby</h2>
                <p className="subtitle is-5">
                    {this.state.immigrant.immigrantHobby}
                </p>
                <br/>
                <h2 className="title is-4">Origin</h2>
                <p className="subtitle is-5">{this.state.immigrant.immigrantOrigin}</p>
            </aside>

        ) : (
            <div className="has-text-centered">Loading Story</div>
        )

        return (
            <Auxiliary>
                {immigrantSide}
                {immigrant}
                <SocialShare />
            </Auxiliary>
        )
    }
};

export default Story;