import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PeopleList from './PeopleList.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts : [],
    };
    this.getData.bind(this);
  }

  getData = (val) => {
    console.log(val);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      contacts: state.contacts.concat({
        name: document.getElementById("person-name").value,
        number: document.getElementById("person-number").value,
      }),
    }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <TextField
            id="person-name"
            label="Name"
          />
          <br />
          <br />

          <TextField
            id="person-number"
            label="Phone Number"
          />
          <br />
          <br />
          <Button variant="contained" onClick={this.handleSubmit} color="primary">
            Add Contact
          </Button>
        </div>
        <br />
        <br />
        <div className="container">
          <PeopleList contacts={this.state.contacts} sendData={this.getData} />
        </div>
      </div>
    );
  }
}

export default App;
