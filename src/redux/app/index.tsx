import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestionsThunk } from "../../api/connection";

type CorrectAnswers = {
  [key: string]: string; // 'true' или 'false'
};

interface Question {
  id: number;
  question: string;
  description: string | null;
  answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  multiple_correct_answers: string;
  correct_answers: CorrectAnswers;
  correct_answer: string | null;
  explanation: string | null;
  tip: string | null;
  tags: Array<{ name: string }>;
  category: string;
  difficulty: string;
}

interface Answer {
  questionId: number;
  selectedAnswers: string[];
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Answer[];
  score: { easy: number; medium: number; hard: number };
  showResults: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: { easy: 0, medium: 0, hard: 0 },
  showResults: false,
  loading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<Answer>) => {
      const { questionId, selectedAnswers } = action.payload;
      const currentQuestion = state.questions.find(
        (question) => question.id === questionId
      );

      if (!currentQuestion) return;

      const isCorrect =
        selectedAnswers.every(
          (answer) =>
            currentQuestion.correct_answers[`${answer}_correct`] === "true"
        ) &&
        selectedAnswers.length ===
          Object.values(currentQuestion.correct_answers).filter(
            (value) => value === "true"
          ).length;

      if (isCorrect) {
        state.score[
          currentQuestion.difficulty.toLowerCase() as keyof typeof state.score
        ]++;
      }

      state.answers.push(action.payload);
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.showResults = true;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.score = { easy: 0, medium: 0, hard: 0 };
      state.showResults = false;
    },
  },
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
          state.currentQuestionIndex = 0;
          state.answers = [];
          state.score = { easy: 0, medium: 0, hard: 0 };
          state.showResults = false;
        }
      )
      .addCase(fetchQuestionsThunk.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
