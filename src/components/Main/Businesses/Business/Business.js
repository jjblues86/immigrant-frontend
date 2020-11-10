import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import picture from '../../../../assets/business.jpeg'
import axios from "axios";
import style from './Business.module.css';
import * as ReactBootstrap from "react-bootstrap";

const config = require('../../../../config.json');

class Business extends Component {
    state = {
        business: null,
        id: null
    }

    componentDidMount = () => {
        let id = this.props.match.params.business_id;
        this.setState({id: id});
        axios.get(`${config.baseApi.businessesUrl}/businesses/`+id)
            .then(res => {
                this.setState({
                    business: res.data
                });
            }).catch(err => {
            console.log(+err)
        });
    };

    render() {
        const business = this.state.business ? (
            <div border="dark"
                  className={style.Business}
            >
                    <h2 className="title is-1 has-text-centered">{this.state.business.businessName}</h2>
                    <figure className="image is-16by9">
                        <img src={picture} alt={this.state.business.immigrantName}/>
                    </figure>
                    <br/>
                    <p className=" has-text-justified">{this.state.business.businessDescription}</p>
                    <a href={this.state.business.businessSite} target="_blank" rel="noreferrer noopener">{'Go to '+ this.state.business.businessName}</a>
            </div>

        ) : (
            <div className="has-text-centered">
                <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
            </div>
        )

        const businessSide = this.state.business ? (
            <aside>
                <h2 className="title is-4">Products</h2>
                <p className="subtitle is-5">{this.state.business.businessProducts}</p>
                <br/>
                <h2 className="title is-4">Location</h2>
                <p className="subtitle is-5">
                    {this.state.business.businessLocation}
                </p>
            </aside>

        ) : (
            <div className="has-text-centered">
                <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
            </div>
        )

        return (
            <Auxiliary>
                {businessSide}
                {business}
            </Auxiliary>
        )
    }
};

export default Business;
