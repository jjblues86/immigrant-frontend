import React, {Fragment} from 'react';

const About = () => {
    return (
        <section className="container-fluid">
            <div className="has-text-centered">
                <h1 className="title is-1 has-text-info">About Us</h1>
                <p className="has-text-black-bis has-text-justified is-size-5-widescreen has-text-weight-normal is-family-monospace">
                    We will be spreading the immigrant story to shed more light about the success stories of so many immigrants. There are different immigrant communities from all over the world with compelling stories, and
                    this site also intends to provide a platform for these immigrant communities to grow their businesses and therefore attract more customers.
                </p>
            </div>
            <br/>
            <div className="columns features is-centered">
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Our Mission</h4>
                                <p>To connect the immigrant communities together and share their unique stories for inspiration and awareness.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Our Purpose</h4>
                                <p>Users will be able to read a featured immigrant’s story on the site and also engage with immigrant business owners.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Our Goal</h4>
                                <p>Is to create an advertisement platform for immigrant businesses. Create mentorship opportunities for fellow immigrants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="has-text-centered">*/}
            {/*    <h3 className="title is-2 has-text-info">Our Goal</h3>*/}
            {/*<div className="content is-italic">*/}
            {/*    <ul className="goal">*/}
            {/*        <li>*/}
            {/*            Advertisement platform for immigrant businesses*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            Connecting young professionals with their potential employers*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            Connect with other individuals and seek mentorship or be a mentor to fellow immigrants*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <div className="has-text-centered">
            <h3 className="title is-2 has-text-info">Creators</h3>
            </div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Jerome Joof</strong> <small>@jjblues86</small>
                            <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
            <br/>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Alhagie Bai Cham</strong> <small>@abc</small>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                            feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
};

export default About;