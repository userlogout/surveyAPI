import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QuizComponent } from './QuizComponent';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('QuizComponent', () => {
  let store;
  let mockDispatch;

  beforeEach(() => {
    store = mockStore({
      app: {
        currentQuestion: { id: 1, question: "What is React?", answers: { answer_a: "Library", answer_b: "Framework" }, difficulty: "Easy" },
        showResults: false,
        score: { easy: 0, medium: 0, hard: 0 },
        totalScore: 0,
        difficultyCount: { easy: 10, medium: 5, hard: 5 }
      }
    });
    mockDispatch = jest.fn();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(redux, 'useSelector').mockImplementation(selector => selector(store.getState()));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    store = mockStore({ app: { currentQuestion: null } });
    render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders question and answers when data is available', () => {
    render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );
    expect(screen.getByText('What is React?')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Library'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it('submits an answer and dispatches answerQuestion', () => {
    render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );
    fireEvent.click(screen.getByText('Library'));
    fireEvent.click(screen.getByText('Подтвердить'));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('shows results and allows quiz restart when showResults is true', () => {
    store = mockStore({
      app: {
        showResults: true,
        score: { easy: 1, medium: 0, hard: 0 },
        totalScore: 1,
        difficultyCount: { easy: 1, medium: 0, hard: 0 }
      }
    });
    render(
      <Provider store={store}>
        <QuizComponent />
      </Provider>
    );
    expect(screen.getByText('Your total score is: 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Restart Quiz'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
