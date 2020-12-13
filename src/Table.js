import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {getFormValues} from 'redux-form'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function BasicTable( {values = {members:[]}} ) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Label</TableCell>
            <TableCell >Value</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {values.members.map((m,i) => (
           <TableRow key={`${i}-${m.enterLabel}-${m.enterValue}`}>
              <TableCell >{m.enterLabel}</TableCell>
              <TableCell >{m.enterValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default connect(state => ({
    values:getFormValues("fieldArrays")(state),
}))(BasicTable)