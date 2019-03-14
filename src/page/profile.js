import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

class Profile extends Component{
    render(){
        if(!this.props.is_login){
            return <Redirect to={{pathname:"/signin"}}/>
        }
        else{
            return(
                <section className='content'>
                <h1 style={{textAlign: 'center'}}>Profile</h1>
                <div className="row">
                    <div className="col-md-3">
                        <img className="gambar-avatar" src={this.props.avatar}/>
                    </div>
                    <div className="col-md-9">
                        <p><label>Email: </label>{this.props.email}</p>
                        <p><label>Username: </label>{this.props.username}</p>
                    </div>
                </div>
                
            </section>
            )
        }
    }
}

// export default Profile;
export default connect("api_key, email, password, full_name, username, is_login, avatar", actions)(withRouter(Profile))
