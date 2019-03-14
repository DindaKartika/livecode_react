import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

const Films = props => {
    return(
        <div className="isiblogs">
            <div className="isiBlog">
              <div className="row">
              <div className="col-md-2">
                <img className="poster-films" src={props.posters}/>
              </div>
              <div className="col-md-10">
                <h3>{props.title}</h3>
                <span>Year : {props.year}</span>
                <p>{props.synopsis}</p>
              </div>
            </div>
        </div>
      </div>
    )
}

Films.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
    posters : PropTypes.string
}

export default Films