import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
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
            <Card border="dark"
                  className={style.Business}
            >
                <Card.Img variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title>{this.state.business.businessName}</Card.Title>
                    <Card.Text>{this.state.business.businessDescription}</Card.Text>
                    <br/>
                    <Card.Link>{this.state.business.businessSite}</Card.Link>
                </Card.Body>
            </Card>

        ) : (
            <div className="has-text-centered">
                <ReactBootstrap.Spinner animation="grow" size="sm" variant="primary"/>
            </div>
        )

        const businessSide = this.state.business ? (
            <aside>
                <hr></hr>
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
