import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from './../store.js'

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class SignIn extends Component {
    postSignin = () =>{
        this.props.postLogin()
            .then(() =>{
                console.log('this',this);
                this.props.history.replace('/profile')
            })
    };
  render() {console.log('signin props', this.props);
    return (
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
            <h4>Sign In</h4>
            <div>
                <input type="text" name="username" placeholder="Username" onChange={e => this.props.setField(e)}/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" onChange={e => this.props.setField(e)}/>
            </div>
            <button onClick={() =>this.postSignin()}>Sign In</button>
            <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}

export default connect("api_key, email, password, full_name, username, is_login, avatar", actions)(withRouter(SignIn))
