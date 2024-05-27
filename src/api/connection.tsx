import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  correct_answers: {
    answer_a_correct: string;
    answer_b_correct: string;
    answer_c_correct: string;
    answer_d_correct: string;
    answer_e_correct: string;
    answer_f_correct: string;
  };
  correct_answer: string | null;
  explanation: string | null;
  tip: string | null;
  tags: Array<{ name: string }>;
  category: string;
  difficulty: string;
}

export const fetchQuestionsThunk = createAsyncThunk(
  "quiz/fetchQuestions",
  async (_, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_QUIZ_API_KEY;
    const difficulties = ["Easy", "Medium", "Hard"];
    let allQuestions: Question[] = [];
    for (const difficulty of difficulties) {
      try {
        const response = await axios.get(
          `https://quizapi.io/api/v1/questions`,
          {
            params: {
              apiKey: apiKey,
              category: "Linux",
              difficulty: difficulty,
              limit: 2,
            },
          }
        );

        if (response.data && Array.isArray(response.data)) {
          const questionsWithDifficulty = response.data.map((question) => ({
            ...question,
            difficulty: difficulty,
          }));
          allQuestions = allQuestions.concat(questionsWithDifficulty);
          console.log("allQuestions-->" + JSON.stringify(allQuestions));
        } else {
          throw new Error("Invalid API");
        }
      } catch (error) {
        console.error(`Error fetching ${difficulty} questions:`, error);
        return rejectWithValue("Failed to fetch questions");
      }
    }
    return allQuestions;
  }
);
