import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import StreamComponent from './StreamComponent.jsx'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StreamComponent/>
    );
  }
}
