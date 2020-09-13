import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const HelmetMetaData = (props) => {

    let location = useLocation;
    let currentUrl = "http://theimmigrantdream.com/" + location.pathname;
    let title = props.title !== undefined ? props.title : "theImmigrantDream - Sharing immigrants stories";
    let image = props.image !== undefined ? props.image : "https://tinyurl.com/y2njqskz";
    let description = props.description !== undefined ? props.description : "This site is dedicated to showcase the hard working immigrants who are contributing in the communities they live in. " +
        "The present negative spotlight towards who immigrants are, what they contribute to society, and the dignity most portray is being construed in the media. " +
        "Here you'll get to read about an immigrant's story and experience the diverse backgrounds of many who gave up everything they knew from their origin countries to pursue a dream of becoming successful in the western world. " +
        "Most of these immigrants are your Doctors, lawyers, nurses, teachers to name a few.";

    let hashtag = props.hashtag !== undefined ? props.hashtag : "#theimmigrantdream";

    return (

        <Helmet>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="csrf_token" content=""/>
            <meta property="type" content="website"/>
            <meta property="url" content={currentUrl}/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="_token" content=""/>
            <meta name="robots" content="noodp"/>
            <meta property="title" content={title}/>
            <meta name="description" content={description}/>
            <meta property="image" content={image}/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:hashtag" content={hashtag}/>
            <meta property="og:image" content={image}/>
            <meta content="image/*" property="og:image:type"/>
            <meta property="og:url" content={currentUrl}/>
            <meta property="og:site_name" content="CampersTribe"/>
            <meta property="og:description" content={description}/>
        </Helmet>
    );
}

export default HelmetMetaData;