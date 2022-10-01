import { navPath } from "../../routes";
import { FitnessCenter, Leaderboard } from "@mui/icons-material";

export const workoutLinks = [
  { url: navPath.workout.training, title: "Training", icon: <FitnessCenter /> },
  { url: navPath.workout.chart, title: "Chart", icon: <Leaderboard /> },
];
