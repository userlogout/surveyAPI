import { RootState } from "../store";

export const getQuestions = (state: RootState) => state.quiz.questions;
export const getLoading = (state: RootState) => state.quiz.loading;
export const getError = (state: RootState) => state.quiz.error;
export const getCurrentQuestionIndex = (state: RootState) =>
  state.quiz.currentQuestionIndex;
export const getCurrentQuestion = (state: RootState) =>
  state.quiz.questions[state.quiz.currentQuestionIndex];
export const getShowResults = (state: RootState) => state.quiz.showResults;
export const getUserAnswers = (state: RootState) => state.quiz.answers;
export const getScore = (state: RootState) => state.quiz.score;
export const getTotalScore = (state: RootState) => {
  const { easy, medium, hard } = state.quiz.score;
  return easy + medium + hard;
};
