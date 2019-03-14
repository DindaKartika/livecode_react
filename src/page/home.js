import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";
import { Link } from 'react-router-dom';

import Romance from './../img/romance.jpg'
import Comedy from './../img/comedy.jpg'
import Action from './../img/action.jpg'
import Fiction from './../img/fiction.jpg'

class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="container-gallery">
              <div className="row">
                <div className="border-bawah">FILMS</div>
              </div>
              <hr />
              <div className="container">
                <div className="kump-gambar">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div class="poster-home">
                      <div className="image-home"><img src={Romance} className="image1" /></div>
                        <Link to="/romance" className="link-film"><button>Romance</button></Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div class="poster-home">
                      <div className="image-home"><img src={Comedy} className="image1" /></div>
                        <Link to="/comedy" className="link-film"><button>Comedy</button></Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div class="poster-home">
                      <div className="image-home"><img src={Action} className="image1" /></div>
                        <Link to="/action" className="link-film"><button>Action</button></Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div class="poster-home">
                      <div className="image-home"><img src={Fiction} className="image1" /></div>
                        <Link to="/fiction" className="link-film"><button>Fiction</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
