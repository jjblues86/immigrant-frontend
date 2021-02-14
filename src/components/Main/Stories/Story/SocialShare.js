import React from "react";
import style from './Story.module.css'

import {
    FacebookShareButton, TwitterShareButton, LinkedinShareButton
} from "react-share";
import {
    LinkedinIcon, FacebookIcon, TwitterIcon,
} from "react-share";

const SocialShare = (props) => {

    return (
        <section className={style.Social}>
            <LinkedinShareButton
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <LinkedinIcon size={32} round={true}/>
            </LinkedinShareButton>

            <FacebookShareButton
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>

            <TwitterShareButton
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
        </section>
    );
}

export default SocialShare;

