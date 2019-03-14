import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
