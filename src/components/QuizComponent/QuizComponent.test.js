import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from "./path/to/quizSlice";
import QuizComponent from "./path/to/QuizComponent";

const createTestStore = () => {
  return createStore(combineReducers({ quiz: quizReducer }));
};

describe("QuizComponent", () => {
  test("renders QuizComponent and submits an answer", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
