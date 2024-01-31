import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions as fetchQuestionsApi } from "../../api/connection";

// Определение типа для вопроса
interface Question {}

// Определение типа для состояния
interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: { [key: string]: string[] };
  score: number;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  score: 0,
  loading: false,
  error: null || "",
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
    answerQuestion: (
      state,
      action: PayloadAction<{ questionId: string; answer: string[] }>
    ) => {
      // тут будет ответ
    },
    nextQuestion: (state) => {
      // тут будет логика для перехода к следующему вопросу
    },
    calculateScore: (state) => {
      // тут будет логика для расчета результата
    },
    resetQuiz: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.questions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export const { answerQuestion, nextQuestion, calculateScore, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
