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

// Асинхронное действие для загрузки вопросов без токена сеанса
export const fetchQuestionsThunk = createAsyncThunk(
  "quiz/fetchQuestions",
  async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");

      // Проверка на наличие ошибок или недопустимых форматов данных
      if (!response.data.results || !Array.isArray(response.data.results)) {
        throw new Error("Invalid data format");
      }

      // Преобразование и возврат результатов в нужный формат
      const questions = response.data.results.map((question: any) => ({
        category: question.category,
        correct_answer: question.correct_answer,
        difficulty: question.difficulty,
        incorrect_answers: question.incorrect_answers,
        question: question.question,
        type: question.type,
      }));

      return questions as Question[];
    } catch (error) {
      console.error("Error fetching trivia questions:", error);
      throw error;
    }
  }
);
