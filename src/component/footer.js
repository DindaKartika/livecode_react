import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

// import facebook from "./../ico/ico-facebook@2x.png";
// import twitter from "./../ico/ico-twitter@2x.png";
// import instagram from "./../ico/ico-instagram@2x.png";

class Footer extends Component {
  render() {
    return (
      <div>
          <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-12">
                <label className="copy-right">
                  &copy Copyright Alterra Group 2019
                </label>
              </div>
              <div className="col-md-5 col-sm-12 col-12" />
              <div className="col-md-3 col-sm-12 col-12">
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
