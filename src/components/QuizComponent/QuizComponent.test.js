// QuizComponent.test.js
import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import QuizComponent from "./QuizComponent";

// Настройка мок-адаптера для Axios
const mock = new MockAdapter(axios);

// Настройка мок-стора для Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("QuizComponent", () => {
  it("renders and submits an answer", async () => {
    // Мокирование данных, которые вернет API
    const mockData = {
      data: [
        // ... ваш мокированный массив вопросов
      ],
    };

    // Запросы на этот URL будут возвращать мокированные данные
    mock.onGet("https://quizapi.io/api/v1/questions").reply(200, mockData);

    // Создание мок-стора с начальным состоянием
    const store = mockStore({
      quiz: {
        questions: [],
        currentQuestionIndex: 0,
        // ... другие свойства состояния, если они есть
      },
    });

    // Рендер компонента с мок-стором и провайдером
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );

    // Имитация действий пользователя и проверка результатов
    // ... ваши тесты на действия пользователя и изменения состояния компонента
  });
});
