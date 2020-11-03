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
import Resources from "./components/Main/Resources/Resources";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/home' exact component={Home}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/stories' exact component={Stories}/>
                            <Route path='/story' exact component={Story}/>
                            <Route path='/businesses' exact component={Businesses}/>
                            <Route path='/business' exact component={Business}/>
                            <Route path='/resources' exact component={Resources}/>
                            <Route path='/contact' exact component={ContactMe}/>
                            <Route path='/story/:immigrant_id' exact component={Story}/>
                            <Route path='/business/:business_id' exact component={Business}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
