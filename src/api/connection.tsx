import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestionsThunk = createAsyncThunk(
  "quiz/fetchQuestions",
  async (
    {
      category,
      difficulty,
      limit,
    }: { category: string; difficulty: string; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get("https://quizapi.io/api/v1/questions", {
        params: {
          apiKey: "AoDhxHO4xEBPTkgEN0C94hDEoPCfarpYNJgwJ1bV", //  API ключ из переменных окружения
          category,
          difficulty,
          limit,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data && Array.isArray(response.data)) {
        return response.data;
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch questions");
    }
  }
);
