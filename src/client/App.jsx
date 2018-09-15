import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import TweetComponent from './TweetComponent.jsx'

export default class App extends Component {

  render() {
    return (
      <div>
        <TweetComponent 
          user={'AngelaBaby'}
          text={'I love jeffy'}
        />
      </div>
    );
  }
}
