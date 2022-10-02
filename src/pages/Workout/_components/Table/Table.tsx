import { FC, useState } from "react";
import {
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import TableMUI from "@mui/material/Table";
import { Row } from "./Row";
import { workoutData } from "../../../../api/workout/mock";
import { AddNewRow } from "./AddNewRow/AddNewRow";
import { tWorkout } from "../../../../api/workout/types";

type tTableProps = {
  [key: string]: any;
};

export const Table: FC<tTableProps> = () => {
  const [data, setData] = useState<tWorkout[]>(workoutData);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }} elevation={6}>
      <TableMUI stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography component={"span"}>Today is 12.12.2033</Typography>
            </TableCell>

            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell align="right">
              <AddNewRow setData={setData} />
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((row, i) => (
            <Row key={row.id} row={row} index={i} />
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};
