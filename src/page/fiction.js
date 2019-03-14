import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";
import { Link } from 'react-router-dom';

import axios from 'axios';
import {Redirect} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

// import Search from './../component/search.js'
import Films from './../component/films.js'

import foto from './../img/fiction.jpg'

const az = {foto}
const urlNews = 'https://api-todofancy.herokuapp.com/api/movies';

class Fictions extends Component {
    constructor(props){
        super(props);
        this.state = {
          listFilms: [],
          username: "",
          isiLogin: false
        }
      }
    
      componentDidMount = () =>{
        const self = this;
        axios
          .get(urlNews)
          .then(function(response){
              const listed = response.data.movies
              const listers = listed.filter(function(Category){
                  return Category == "comedy"
              })
              console.log(listed)
              console.log(listers)
            self.setState({listFilms : response.data.movies});
            console.log(response.data);
          })
          .catch(function(error){
            console.log(error);
          })
      }

      render() {
    
        const {listFilms, username, isiLogin} = this.state;
    
    //     if(!this.props.is_login){
    //       return <Redirect to={{pathname:"/signin"}}/>
    //   }
    //   else{
          return(
            <div className="blogs">
                {/* <Search placeholder="Search..." doSearch= {e => this.handleInputChange(e)}/> */}
                {listFilms.map((item, key) => {
                if ((item.Category) === "fiction"){
                    return <Films key ={key} title={item.Title} posters={item.Poster} year={item.Year} synopsis={item.Synopsis}/>;
                }
                })}
            </div>
          );
        }
        
    //   }
}

export default Fictions;
