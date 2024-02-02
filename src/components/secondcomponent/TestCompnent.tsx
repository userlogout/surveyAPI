import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsThunk } from "../../api/connection";
import { AppDispatch, RootState } from "../../redux/store";

const QuizComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, loading, error } = useSelector(
    (state: RootState) => state.quiz
  );

  useEffect(() => {
    dispatch(
      fetchQuestionsThunk({ category: "Linux", difficulty: "Easy", limit: 5 })
    );
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
