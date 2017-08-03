import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
  }
  handleInputChange(event) {
    console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + this.state.searchKey + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    axios.get(queryURL)
    .then(resp => {
      this.props.updateRoot(this.state.searchKey, resp.data.data);
    });
    //get searchKey from state
    //search giphy api
    //get that data, update the page to show all gif
    this.props.updateRoot(this.state.searchKey);
  }
  render() {
    return (
      <div className="col-md-8">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleInputChange.bind(this)} name = "searchKey" type = "text" className = "form-control" placeholder="Enter your search term..."/>
          <button type ="submit" className="form-control btn btn-primary" >Submit</button>
        </form>
      </div>
    );
  }
}


