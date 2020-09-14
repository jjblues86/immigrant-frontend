import React from "react";
import {
    EmailShareButton, FacebookShareButton, TwitterShareButton
} from "react-share";
import {
    EmailIcon, FacebookIcon, TwitterIcon,
} from "react-share";

 const SocialShare = (props) => {

     return (
        <div className="social-container">
            {/*<h3 className="social-title">Please share</h3>*/}
            <EmailShareButton
                url={"http://theimmigrantdream.com/"}
                hashtag="#theimmigrantdream">
                <EmailIcon size={32} round={true} />
            </EmailShareButton>

            <FacebookShareButton
                url={"http://theimmigrantdream.com/"}
                hashtag="#theimmigrantdream">
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton
                url={"http://theimmigrantdream.com/"}
                hashtag="#theimmigrantdream">
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </div>
    );
}

export default SocialShare;

