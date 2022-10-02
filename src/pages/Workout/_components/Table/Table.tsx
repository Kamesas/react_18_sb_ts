import { FC } from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import TableMUI from "@mui/material/Table";
import { Row } from "./Row";
import { rows } from "./rows";

type tTableProps = {
  [key: string]: any;
};

export const Table: FC<tTableProps> = () => {
  return (
    <TableContainer component={Paper}>
      <TableMUI stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};
