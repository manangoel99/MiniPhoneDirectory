import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AddPerson from './AddPerson.js';
// import PeopleList from './PeopleList.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/ViewAll'}>Mini Phone Directory</Link>
                </div>
                <ul className="nav navbar-nav">
                  <Link className="navbar-brand" to={'/AddPerson'}>Add Person</Link>
                 <li></li>
                </ul>
              </div>
            </nav>
            <Switch>
                <Route exact component={AddPerson} />
                <Route exact path="/" render={() => (
                    <Redirect to="/ViewAll"/>
                )}/>


            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
