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


class App extends Component {
    render() {
        return (
            <div>
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
                            <Route path='/:immigrant_id' component={Story}/>
                            <Route path='/:business_id' component={Business}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
