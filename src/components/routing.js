import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './home';
import Projects from './projects';
import Resume from './resume';
import Blogs from './blogs';
import Contact from './contact';


const Routing = () => (
    <Switch>
        <Route exact path ="/" component = {Home} />
        <Route path = "/projects" component = {Projects}/>
        <Route path = "/resume" component = {Resume}/>
        <Route path = "/blogs" component = {Blogs}/>
        <Route path = "/contact" component = {Contact}/>

    </Switch>    
)

export default Routing;