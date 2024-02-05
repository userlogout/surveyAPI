import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import QuizComponent from "./QuizCompnent";
import { mockQuestions } from "./mockQuestions";
import quizReducer from "../../redux/store";

const initialState = {
  quiz: {
    questions: mockQuestions,
    currentQuestionIndex: 0,
    score: { easy: 0, medium: 0, hard: 0 },
    showResults: false,
  },
};

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  preloadedState: initialState,
});

describe("QuizComponent", () => {
  it("renders and submits an answer", async () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );

    expect(getByText(mockQuestions[0].question)).toBeInTheDocument();

    const answerOption = getByLabelText(
      new RegExp(mockQuestions[0].answers.answer_a, "i")
    );
    fireEvent.click(answerOption);

    const submitButton = getByText(/Подтвердить/i);
    fireEvent.click(submitButton);
  });
});
