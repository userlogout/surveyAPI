import { RootState } from "../store";

export const getQuestions = (state: RootState) => state.quiz.questions;
export const getLoading = (state: RootState) => state.quiz.loading;
export const getError = (state: RootState) => state.quiz.error;
