import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from './Table.styled';
import { nanoid } from 'nanoid';

function createData(type, amount, currency) {
  return { type, amount, currency};
}

const rows = [
  createData('Invoice', 125.00, 'USD'),
  createData('Withdrawal', 85.00, 'USD'),
  createData('Deposit', 103.10, 'BWP'),
  createData('Invoice', 125, 'USD'),
  createData('Payment', 852.44, 'AUD'),
	createData('Invoice', 125, 'USD'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" addBorder>TYPE</StyledTableCell>
            <StyledTableCell align="center" addBorder>AMOUNT</StyledTableCell>
            <StyledTableCell align="center">CURRENCY</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={nanoid()}>
              <StyledTableCell  align="center" addBorder>{row.type}</StyledTableCell>
              <StyledTableCell align="center" addBorder>{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.currency}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}