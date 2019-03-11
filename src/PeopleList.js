import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

class PeopleList extends Component {

  demoMethod = (val) => {
    this.props.sendData(val);
  }

  handleSubmit = () => {
    for (var i = 0; i < this.props.contacts.length; i++) {
      if (document.getElementById(this.props.contacts[i].number).checked === true) {
        this.demoMethod(this.props.contacts[i].id);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell align="right">
                  Phone Number
                </TableCell>
                <TableCell align="right">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.contacts.map(item => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {item.number}
                  </TableCell>
                  <TableCell align="right">
                    <Checkbox id={item.number} color="primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <br />
        <br />
        <center>
          <Button variant="contained" onClick={this.handleSubmit} color="secondary">
            Delete Selected
          </Button>
        </center>
      </div>
    );
  }
}

export default PeopleList;
