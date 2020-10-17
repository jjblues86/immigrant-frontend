import React from "react";

import {
    FacebookShareButton, TwitterShareButton, LinkedinShareButton
} from "react-share";
import {
    LinkedinIcon, FacebookIcon, TwitterIcon,
} from "react-share";

const SocialShare = (props) => {

    return (
        <div className="social-container">
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
        </div>
    );
}

export default SocialShare;

