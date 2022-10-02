import React, { FC, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  TableCell,
  IconButton,
  Collapse,
  Box,
  TableRow,
  Typography,
} from "@mui/material";
import { tWorkout } from "../../../../api/workout/types";
import { InnerTable } from "./InnerTable";
import { AddNewRow } from "./AddNewRow/AddNewRow";

type tRowProps = {
  row: tWorkout;
  index: number;
};

export const Row: FC<tRowProps> = ({ row, index }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row" sx={{ width: 250 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ marginRight: 2 }}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>

          <Typography component={"span"}>{row?.date}</Typography>
        </TableCell>
        <TableCell align="right">Amount {row?.totalAmount}</TableCell>
        <TableCell align="right">Total time {row?.totalTime}</TableCell>
        <TableCell align="right">
          {/* <AddNewRow setData={setData} /> */}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <InnerTable row={row} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
