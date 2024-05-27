import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsThunk } from "../../api/connection";
import { answerQuestion, resetQuiz } from "../../redux/app/index";
import {
  getCurrentQuestion,
  getShowResults,
  getScore,
  getTotalScore,
  getDifficultyCount,
} from "../../redux/app/selectors";
import { Button, Radiobox } from "@salutejs/plasma-ui";
import styles from "./QuizComponent.module.scss";
import { AppDispatch } from "../../redux/store";

const QuizComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentQuestion = useSelector(getCurrentQuestion);
  const showResults = useSelector(getShowResults);
  const score = useSelector(getScore);
  const totalScore = useSelector(getTotalScore);
  const difficultyCount = useSelector(getDifficultyCount);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchQuestionsThunk());
  }, [dispatch]);

  const handleAnswerChange = (answer: string) => {
    setSelectedAnswer([answer]);
  };

  const handleSubmit = () => {
    if (currentQuestion) {
      dispatch(
        answerQuestion({
          questionId: currentQuestion.id,
          selectedAnswers: selectedAnswer,
        })
      );
      setSelectedAnswer([]);
    }
  };

  if (showResults) {
    return (
      <div className={styles.container}>
        <div className={styles.question}>
          <h2>Results</h2>
          <p>Your total score is: {totalScore}</p>
          <p>
            Easy questions: {score.easy} / {difficultyCount.easy}
          </p>
          <p>
            Medium questions: {score.medium} / {difficultyCount.medium}
          </p>
          <p>
            Hard questions: {score.hard} / {difficultyCount.hard}
          </p>
          <Button
            onClick={() => dispatch(resetQuiz())}
            onChange={() => {}}
            view="secondary"
            className={styles.greenButton}
          >
            Restart Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className={styles.questionsThemselves}>
      <h3>{currentQuestion.question}</h3>
      <form onSubmit={(e) => e.preventDefault()} className={styles.answers}>
        {Object.entries(currentQuestion.answers).map(([key, value]) => {
          if (!value) return null;
          return (
            <label key={key} className={styles.answerLabel}>
              <Radiobox
                type="radio"
                name="answer"
                value={key}
                checked={selectedAnswer.includes(key)}
                onChange={() => handleAnswerChange(key)}
              />
              {/* @ts-ignore */}
              <span className={styles.answerText}>{value}</span>
            </label>
          );
        })}
        <Button
          onClick={handleSubmit}
          onChange={() => {}}
          view="secondary"
          className={styles.greenButton}
        >
          Подтвердить
        </Button>
      </form>
    </div>
  );
};

export default QuizComponent;
