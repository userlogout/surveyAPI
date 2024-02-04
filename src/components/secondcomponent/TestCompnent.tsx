import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsThunk } from "../../api/connection";
import { answerQuestion, resetQuiz } from "../../redux/app/index"; // Импорт из slice
import {
  getCurrentQuestion,
  getShowResults,
  getScore,
  getTotalScore,
} from "../../redux/app/selectors";
import { AppDispatch } from "../../redux/store";

const QuizComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentQuestion = useSelector(getCurrentQuestion);
  const showResults = useSelector(getShowResults);
  const score = useSelector(getScore);
  const totalScore = useSelector(getTotalScore);
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
      <div>
        <h2>Results</h2>
        <p>
          Your score is: {totalScore} out of{" "}
          {Object.values(score).reduce((acc, value) => acc + value, 0)}
        </p>
        <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
      </div>
    );
  }

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div>
      <h2>{currentQuestion?.question}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {currentQuestion?.answers &&
          Object.entries(currentQuestion.answers).map(([key, value]) => {
            if (!value) return null;
            return (
              <div key={key}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={key}
                    checked={selectedAnswer.includes(key)}
                    onChange={() => handleAnswerChange(key)}
                  />
                  {value}
                </label>
              </div>
            );
          })}
        <button type="button" onClick={handleSubmit}>
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuizComponent;
