import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// В файле с quizSlice
import { fetchQuestionsThunk } from "../../api/connection";

// Определение типа для вопроса
interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// Определение типа для состояния
interface QuizState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

// Начальное состояние
const initialState: QuizState = {
  questions: [],
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchQuestionsThunk.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.questions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchQuestionsThunk.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export default quizSlice.reducer;
