import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PeopleList extends Component {

  demoMethod = () => {
    this.props.sendData("HOHO");
  }

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
              </TableRow>
            </TableHead>
            <TableBody>
              {this.demoMethod()}
              {this.props.contacts.map(item => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {item.number}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default PeopleList;
