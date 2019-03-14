import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/home.js'
import SignIn from './../page/signin.js'
import NotMatch from './../page/notmatch.js'
import Profiles from './../page/profile.js'
import Romance from './../page/romance.js'
import Comedy from './../page/comedy.js'
import Action from './../page/action.js'
import Fiction from './../page/fiction.js'


const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/profile" component={Profiles}/>
            <Route exact path="/romance" component={Romance}/>
            <Route exact path="/comedy" component={Comedy}/>
            <Route exact path="/action" component={Action}/>
            <Route exact path="/fiction" component={Fiction}/>
            <Route component={NotMatch}/>
        </Switch>
    )
}


export default MainRoute;