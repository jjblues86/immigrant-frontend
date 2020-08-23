import React, {Component} from 'react';
import axios from "axios";
import Hero from './Hero';
import Card from '../Card/Card';
import picture from "../../../assets/immigrant.png";

const config = require('../../../config.json');

class Home extends Component {
    state = {
        immigrants: [],
    }

    getImmigrants = async () => {
        // add call to AWS API Gateway to fetch immigrants here
        //then set them in state
        try {
            const res = await axios.get(`${config.api.invokeUrl}/immigrant`);
            this.setState({immigrants: res.data.slice(0,3)});
        } catch (err) {
            console.log(`An error has occured: ${err}`);
        }
    }

    componentDidMount = () => {
        this.getImmigrants();
    }

    render() {
        const {immigrants} = this.state;
        const immigrantsList = immigrants.length ? (
            immigrants.map(immigrant => {
                return(
                    <Card border="dark immigrant card" key={immigrant.id}
                        style={{width: '18rem', display: 'flex'}}
                          className='col-xl-3 col-md-5 col-sm-10 mb-2 ml-5'>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{immigrant.immigrantName}</Card.Title>
                            <div className="buttons">
                                <Link to={'/' + immigrant.id}>
                                <p>Learn More</p>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })) : (<div className="center">No stories yet.</div>)
        return (

            <div className='container-fluid'>
                <Hero/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor eget est venenatis
                        venenatis.
                        Duis purus justo, auctor non pellentesque ac, venenatis et nunc. Ut quis hendrerit est. Sed sit
                        amet
                        dui nibh. Integer pharetra, orci eget lobortis porttitor, leo diam cursus tortor, vitae euismod
                        nibh
                        metus at metus. Proin eu odio lacinia, semper nibh id, rhoncus ante. Maecenas eget ipsum ac
                        dolor
                        semper dapibus. In elementum, sem vel suscipit sodales, lectus metus feugiat elit, at vehicula
                        sem
                        leo sed lorem. Vivamus ut felis leo. Fusce turpis odio, varius et dui vel, vulputate consequat
                        neque. Phasellus cursus leo nibh, nec tincidunt tortor cursus vel. Nulla consectetur vitae justo
                        eu
                        faucibus. Fusce a ornare est.

                        Nam quis augue et lacus tristique elementum. In hac habitasse platea dictumst. Nullam
                        scelerisque
                        nibh id est lobortis consequat. Vestibulum ultrices bibendum est. Donec a tristique sapien.
                        Mauris
                        varius ac urna ut venenatis. Aenean eleifend dui ut erat placerat, ac laoreet ligula ultrices.
                        Vestibulum mollis aliquet mauris vel fermentum.</p>
                </div>
                <br/>
                <div className='row mb-5'>
                    {immigrantsList}
                </div>
            </div>
        )
    }
};

export default Home;