import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestionsThunk } from "../../api/connection";

// type CorrectAnswers = {
//   [key: string]: "true" | "false";
// };

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
  multiple_correct_answers: "true" | "false";
  correct_answers: {
    answer_a_correct: "true" | "false";
    answer_b_correct: "true" | "false";
    answer_c_correct: "true" | "false";
    answer_d_correct: "true" | "false";
    answer_e_correct: "true" | "false";
    answer_f_correct: "true" | "false";
  };
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
  totalAnswered: number;
  showResults: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: {
    easy: 0,
    medium: 0,
    hard: 0,
  },
  totalAnswered: 0,
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
      const currentQuestionIndex = state.questions.findIndex(
        (question) => question.id === questionId
      );
      if (currentQuestionIndex === -1) return;
      const currentQuestion = state.questions[currentQuestionIndex];

      const isCorrect = selectedAnswers.every((answer) => {
        const answerKey =
          `${answer}_correct` as keyof typeof currentQuestion.correct_answers;
        return currentQuestion.correct_answers[answerKey] === "true";
      });

      if (isCorrect) {
        const difficultyKey =
          currentQuestion.difficulty.toLowerCase() as keyof typeof state.score;
        state.score[difficultyKey]++;
      }

      state.totalAnswered++;
      state.answers.push(action.payload);

      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.showResults = true;
      }
    },
    resetQuiz: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestionsThunk.fulfilled, (state, action: any) => {
        state.questions = action.payload;
        state.loading = false;
        state.currentQuestionIndex = 0;
        state.answers = [];
        state.totalAnswered = 0;
        state.showResults = false;
      })
      .addCase(fetchQuestionsThunk.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
