import { Typography } from "@mui/material";
import { FC } from "react";

type tTrainingProps = {
  [key: string]: any;
};

export const Training: FC<tTrainingProps> = () => {
  return (
    <>
      <Typography sx={{ padding: "10px" }} variant="h1">
        Training
      </Typography>
    </>
  );
};
