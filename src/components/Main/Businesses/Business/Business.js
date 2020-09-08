import React, {Component} from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import Card from "react-bootstrap/Card";
import picture from '../../../../assets/business.jpeg'
import axios from "axios";
import style from './Business.module.css';

const config = require('../../../../config.json');

class Business extends Component {
    state = {
        business: null,
        id: null
    }

    componentDidMount = () => {
        let id = this.props.match.params.business_id;
        this.setState({id: id});
        axios.get(`${config.baseApi.baseUrl}/businesses/{id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    business: res.data.filter(bus => bus.id === this.state.id)[0]
                });
                console.log(this.state.business);
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const business = this.state.business ? (
            <Card border="dark"
                  className={style.Business}
            >
                <Card.Img variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title>{this.state.business.businessName}</Card.Title>
                    <Card.Text>{this.state.business.businessType}</Card.Text>
                </Card.Body>
            </Card>

        ) : (
            <div className="has-text-centered">Loading Story</div>
        )

        return (
            <Auxiliary>
                {business}
            </Auxiliary>
        )
    }
};

export default Business;
