import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Section = () => {
  function createData(EmployeeName, Salary, PF, Tax, GrossSalary) {
    return { EmployeeName, Salary, PF, Tax, GrossSalary };
  }

  const rows = [
    createData("Frozen yoghurt", 25000, 5000, 2000, 18000),
    createData("Ice cream sandwich", 25000, 5000, 2000, 18000),
    createData("Eclair", 25000, 5000, 2000, 18000),
    createData("Cupcake", 25000, 5000, 2000, 18000),
    createData("Gingerbread", 25000, 5000, 2000, 18000),
    createData("Cupcake", 25000, 5000, 2000, 18000),
    createData("Gingerbread", 25000, 5000, 2000, 18000),
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 1150, margin: "5px", overflow: "hidden" }}
          aria-label="customized table"
        >
          <TableHead sx={{ background: "#333" }}>
            <TableRow>
              <StyledTableCell>Employee Name</StyledTableCell>
              <StyledTableCell align="right">Total Salary</StyledTableCell>
              <StyledTableCell align="right">PF</StyledTableCell>
              <StyledTableCell align="right">Tax</StyledTableCell>
              <StyledTableCell align="right">Gross Salary</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.EmployeeName}>
                <StyledTableCell component="th" scope="row">
                  {row.EmployeeName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Salary}</StyledTableCell>
                <StyledTableCell align="right">{row.PF}</StyledTableCell>
                <StyledTableCell align="right">{row.Tax}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.GrossSalary}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
