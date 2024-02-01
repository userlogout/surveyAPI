import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions as fetchQuestionsApi } from "../../api/connection";

// Определение типа для вопроса
interface Question {}

// Определение типа для состояния
// interface QuizState {
//   questions: Question[];
//   currentQuestionIndex: number;
//   answers: { [key: string]: string[] };
//   score: number;
//   loading: boolean;
//   error: string | null;
// }
interface QuizState {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: { [key: string]: string[] };
  question: string;
  type: string;
}

// const initialState: QuizState = {
//   questions: [],
//   currentQuestionIndex: 0,
//   answers: {},
//   score: 0,
//   loading: false,
//   error: null || "",
// };
const initialState: QuizState = {
  category: "",
  correct_answer: "",
  difficulty: "",
  incorrect_answers: {},
  question: "",
  type: "",
};

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async ({ amount, difficulty }: { amount: number; difficulty: string }) => {
    const questions = await fetchQuestionsApi(amount, difficulty);
    return questions as Question[];
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    category: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    correct_answer: (state, action: PayloadAction<string>) => {
      state.correct_answer = action.payload;
    },
    difficulty: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    incorrect_answers: (
      state,
      action: PayloadAction<{ [key: string]: string[] }>
    ) => {
      state.incorrect_answers = action.payload;
    },
    question: (state, action: PayloadAction<string>) => {
      state.question = action.payload;
    },
  },
});

export const { category, correct_answer, difficulty, question } =
  quizSlice.actions;

export default quizSlice.reducer;
