import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Определение типа для параметров функции
interface FetchQuestionsParams {
  category: string;
  difficulty: string;
  limit: number;
}

export const fetchQuestionsThunk = createAsyncThunk(
  "quiz/fetchQuestions",
  async (params: FetchQuestionsParams, { rejectWithValue }) => {
    const { category, difficulty, limit } = params;
    const apiKey = import.meta.env.VITE_QUIZ_API_KEY;

    try {
      const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${difficulty}&limit=${limit}`;
      const response = await axios.get(url);
      if (response.data && Array.isArray(response.data)) {
        return response.data; // Возврат данных, если все в порядке
      } else {
        throw new Error("Invalid API response"); // Генерация ошибки, если ответ не соответствует ожиданиям
      }
    } catch (error) {
      console.error("Error fetching trivia questions:", error); // Вывод информации об ошибке в консоль
      return rejectWithValue("Failed to fetch questions"); // Возврат отклоненного промиса с сообщением об ошибке
    }
  }
);
