import React, {Fragment} from 'react';
import Hero from "../Home/Hero";

const About = () => {
    return (
        <section className="container-fluid">
            <div className="has-text-centered">
                <h1 className="title is-1">About Us</h1>
                <p>We are here to spread the immigrant story and shed more light about the success stories of many immigrants.</p>
            </div>
            <br/>
            <div className="columns features is-centered">
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-paw"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Mission</h4>
                                <p>To connect the immigrant communities together and share their unique stories for inspiration and awareness. This site intends to provide a platform for the immigrant communities to grow their businesses and therefore access many customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                            <i className="fa fa-glasses"></i>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Vision</h4>
                                <p>To connect the immigrant communities together and share their unique stories for inspiration and awareness. This site intends to provide a platform for the immigrant communities to grow their businesses and therefore access many customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;