import React, {Component} from 'react';
import MainRoute from './router/MainRoute';
import {withRouter} from 'react-router-dom';

// import './styles/App.css';
import Navigation from "./component/header.js";
import Footer from './component/footer.js'

import {connect} from 'unistore/react';
import {actions} from './store.js'

class AppAjax extends Component{
    postSignOut = () =>{
        this.props.postLogout();
        this.props.history.push("/");
    };
    render() {
        return(
            <div className="app">
                <Navigation postSignOut={this.postSignOut}/>
                <MainRoute/>
                <Footer/>
            </div>
        )
    }
}

// export default withRouter(AppAjax);
export default connect("is_login",actions)(withRouter(AppAjax))