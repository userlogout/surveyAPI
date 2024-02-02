import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsThunk } from "../../api/connection";
import { getError, getLoading, getQuestions } from "../../redux/app/selectors";
import { AppDispatch } from "../../redux/store";

const TestComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector(getQuestions);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchQuestionsThunk({ amount: 10, difficulty: "easy" }));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {/* Остальная часть вопроса */}
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
