import React from 'react';
import photo from '../../../assets/Jerome.png';
import picture from '../../../assets/Abc.png';
import styles from '../Stories/Stories.module.css'

const About = () => {
    return (
        <section className="container-fluid">
            <div className="has-text-centered">
                <h1 className={styles.Stories}>About Us</h1>
                <hr className={styles.Divider}/>
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
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
                <div className="col-lg-4 col-sm-12">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Our Purpose</h4>
                                <p>For people to be able to read a featured immigrant’s story on the site and also engage with immigrant business owners.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card is-shady">
                        <div className="card-image has-text-centered">
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h4>Our Goal</h4>
                                <p>Is to create an online presence for immigrant businesses and mentorship opportunities for fellow immigrants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="has-text-centered">
            <h1 className={styles.Stories}>Creators</h1>
                <hr className={styles.Divider}/>
            </div>
            <br/>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={photo} alt='We Are All Immigrants'/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Jerome Joof</strong>
                            <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                                feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
            <br/>
            <br/>

            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={picture} alt='We Are All Immigrants'/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>Alhagie Bai Cham</strong>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
                            feugiat facilisis.
                        </p>
                    </div>
                </div>
            </article>
            <br/>
        </section>
    )
};

export default About;