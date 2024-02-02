import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Определение типа для вопроса
interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// Асинхронное действие для загрузки вопросов
export const fetchQuestionsThunk = createAsyncThunk(
  "quiz/fetchQuestions",
  async ({ amount, difficulty }: { amount: number; difficulty: string }) => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    );

    if (!response.data.results || !Array.isArray(response.data.results)) {
      throw new Error("Invalid data format");
    }

    return response.data.results as Question[];
  }
);
