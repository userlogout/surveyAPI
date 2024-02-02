import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestionsThunk } from "../../api/connection";

interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface QuizState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

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
        state.error = null;
      })
      .addCase(
        fetchQuestionsThunk.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.questions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchQuestionsThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default quizSlice.reducer;
