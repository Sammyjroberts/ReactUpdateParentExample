import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('styles/App.css');

import React from 'react';
import Form from './Form';
import Display from "./Display";


export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", giphyData:[]};
  }

  updateParent(someData, giphyData) {
    this.setState({
      title: someData,
      giphyData: giphyData
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Searched for: {this.state.title}</h1>
        <Form updateRoot = {this.updateParent.bind(this)} />
        <Display giphyData = {this.state.giphyData}/>
      </div>
    );
  }
}


