import { FC } from "react";
import { Table, TableBody } from "@mui/material";
import { tWorkout } from "../../../../api/workout/types";
import { RegularRow } from "./RegularRow/RegularRow";

type tInnerTableProps = {
  row: tWorkout;
};

export const InnerTable: FC<tInnerTableProps> = ({ row }) => {
  const isExercises = !!row?.exercises?.length;

  if (!isExercises) return null;

  return (
    <Table size="small" aria-label="purchases">
      <TableBody>
        {isExercises &&
          row?.exercises?.map((item) => {
            return <RegularRow key={item.id} exercises={item} />;
          })}
      </TableBody>
    </Table>
  );
};
