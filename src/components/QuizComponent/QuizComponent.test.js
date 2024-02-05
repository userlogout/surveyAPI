import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import QuizComponent from "./QuizCompnent.tsx";
import mockQuestions from "./mockQuestions.js";

const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("QuizComponent", () => {
  mock.onGet("https://quizapi.io/api/v1/questions").reply(200, mockQuestions);

  it("renders and submits an answer", async () => {
    const store = mockStore({
      quiz: {
        questions: mockQuestions,
        currentQuestionIndex: 0,
      },
    });

    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );

    expect(getByText(mockQuestions[0].question)).toBeInTheDocument();

    const answerOption = getByLabelText(mockQuestions[0].answers.answer_a);
    fireEvent.click(answerOption);

    const submitButton = getByText("Подтвердить");
    fireEvent.click(submitButton);

    expect(getByText(mockQuestions[1].question)).toBeInTheDocument();
  });
});
