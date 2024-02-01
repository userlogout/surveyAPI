import { RootState } from "../strore";

export const getCategory = (state: RootState) => state.quizSlice.category;
export const getCorrectAnswer = (state: RootState) =>
  state.quizSlice.correct_answer;
export const getDifficulty = (state: RootState) => state.quizSlice.difficulty;
export const getIncorrectAnswers = (state: RootState) =>
  state.quizSlice.incorrect_answers;
export const getQuestions = (state: RootState) => state.quizSlice.question;
export const getType = (state: RootState) => state.quizSlice.type;
