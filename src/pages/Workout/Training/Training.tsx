import { FC } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Table } from "../_components/Table/Table";
import { Container } from "@mui/material";

type tTrainingProps = {
  [key: string]: any;
};

export const Training: FC<tTrainingProps> = () => {
  return (
    <Container>
      <Typography
        sx={{ padding: "10px", textTransform: "uppercase" }}
        variant="h6"
        align="center"
      >
        Just do it !!!
      </Typography>

      <Table />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={6}
      >
        <Typography sx={{ padding: "10px" }} variant="h6">
          Training
        </Typography>
      </Paper>
    </Container>
  );
};
