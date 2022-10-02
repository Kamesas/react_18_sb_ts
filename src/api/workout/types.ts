export type tWorkout = {
  id: number;
  date: string;
  totalTime: string;
  totalAmount: number;
  exercises: Array<tWorkoutExercise>;
};

export type tWorkoutExercise = {
  id: number;
  type: { title: string };
  repetition: Array<tWorkoutRepetition>;
};

export type tWorkoutRepetition = {
  time: string;
  amount: number;
};

export type tExerciseType = {
  id: number;
  type: string;
};
