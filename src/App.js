import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Stories from "./components/Main/Stories/Stories";
import Story from "./components/Main/Stories/Story/Story";
import Businesses from "./components/Main/Businesses/Businesses";
import Home from "./components/Main/Home/Home";
import About from "./components/Main/About/About";
import ContactMe from "./components/FooterItems/ContactMe/ContactMe";
import Business from "./components/Main/Businesses/Business/Business";
import HelmetMetaData from "./components/Main/Stories/Story/HelmetMetaData";
import Popper from '@material-ui/core/Popper';
import style from "./components/Main/Stories/Stories.module.css"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";


class App extends Component {
    render() {
        // const { classes } = this.props;
        return (
            <div>
                {/*<div className={classes.root}>*/}
                    <HelmetMetaData></HelmetMetaData>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/contact' exact component={ContactMe}/>
                            <Route path='/home' exact component={Home}/>
                            <Route path='/stories' exact component={Stories}/>
                            <Route path='/businesses' exact component={Businesses}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/story' exact component={Story}/>
                            <Route path='/business' exact component={Business}/>
                            <Route path='/story/:immigrant_id' exact component={Story}/>
                            <Route path='/business/:business_id' exact component={Business}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
                    <Popper className={style.socialMediaButton} open={true} transition>
                        <EmailShareButton
                            url={"http://theimmigrantdream.com/"}
                            hashtag="#theimmigrantdream"
                            title={"theImmigrantDream - Sharing immigrants stories"}>
                            <EmailIcon size={32} round={true} />
                        </EmailShareButton>

                        <FacebookShareButton
                            url={"http://theimmigrantdream.com/"}
                            hashtag="#theimmigrantdream"
                            title={"theImmigrantDream - Sharing immigrants stories"}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={"http://theimmigrantdream.com/"}
                            hashtag="#theimmigrantdream"
                            title={"theImmigrantDream - Sharing immigrants stories"}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                    </Popper>
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
