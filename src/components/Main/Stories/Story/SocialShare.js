import React from "react";
import style from './Story.module.css'

import {
    FacebookShareButton, TwitterShareButton, LinkedinShareButton
} from "react-share";
import {
    LinkedinIcon, FacebookIcon, TwitterIcon,
} from "react-share";

const SocialShare = () => {

    return (
        <div className={style.SocialContents}>
            <LinkedinShareButton className={style.SocialContent}
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <LinkedinIcon size={32} round={true}/>
            </LinkedinShareButton>

            <FacebookShareButton className={style.SocialContent}
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>

            <TwitterShareButton className={style.SocialContent}
                url={"http://theimmigrantdream.com/story/"}
                hashtag="#theimmigrantdream">
                <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
        </div>
    );
}

export default SocialShare;

