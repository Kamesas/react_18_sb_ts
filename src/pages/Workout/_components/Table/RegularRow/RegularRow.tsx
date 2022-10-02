import { FC } from "react";
import { TableRow, TableCell, Typography, Chip, Badge } from "@mui/material";
import { tWorkoutExercise } from "../../../../../api/workout/types";

type tRegularRowProps = {
  exercises: tWorkoutExercise;
};

export const RegularRow: FC<tRegularRowProps> = ({ exercises }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row" sx={{ width: 200 }}>
        {exercises?.type?.title}
      </TableCell>
      <TableCell>
        {exercises?.repetition?.map((rep) => {
          return (
            // <Badge
            //   key={rep?.time}
            //   badgeContent={4}
            //   color="primary"
            //   sx={{ mr: 5 }}
            // >
            <Typography
              key={rep?.time}
              component={"span"}
              sx={{ mr: 2, fontSize: 10 }}
            >
              <Chip label={`${rep.amount}`} variant="outlined" /> ({rep.time}{" "}
              ago)
            </Typography>
            // </Badge>
          );
        })}
      </TableCell>
    </TableRow>
  );
};
