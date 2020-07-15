import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Stories from "./components/Main/Stories/Stories";
import Businesses from "./components/Main/Businesses/Businesses";
import Home from "./components/Main/Home/Home";
import About from "./components/Main/About/About";

class App extends Component{
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/stories' component={Stories}/>
                        <Route path='/businesses' component={Businesses}/>
                        <Route path='/about' component={About}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
