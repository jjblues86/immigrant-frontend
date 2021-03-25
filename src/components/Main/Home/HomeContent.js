import React, {Component} from 'react';
import classNames from "classnames";

export default class HomeContent extends Component {

    render() {
        let intro = classNames(this.props.introClass);

        return (
            <div className={intro}>
                This site is dedicated to showcase the hard working immigrants who are contributing in the
                communities
                they live in. The present negative spotlight towards who immigrants are, what they contribute to
                society, and
                the dignity most portray is being construed in the media. Here you'll get to read about an
                immigrant's story and experience the diverse backgrounds of
                many who gave up everything from their origin countries to pursue a dream of becoming successful
                in the
                western world. Most of these immigrants are your Doctors, lawyers, nurses, teachers to name a
                few.
            </div>
        )
    }
}