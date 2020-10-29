import React, { Fragment } from 'react';
import Hero from './Hero';

export default function HomeContent() {
    return (
        <Fragment>
            <Hero />
            <div className="box cta">
                <p className="has-text-black-bis has-text-justified has-text-weight-normal">
                    This site is dedicated to showcase the hard working immigrants who are contributing in the communities they live in.
                    The present negative spotlight towards who immigrants are, what they contribute to society, and the dignity most portray is being construed in the media.
                    Here you'll get to read about an immigrant's story and experience the diverse backgrounds of many who gave up everything from their origin countries to pursue a dream of becoming successful in the western world.
                    Most of these immigrants are your Doctors, lawyers, nurses, teachers to name a few.
                </p>
            </div>
        </Fragment>
    )
}