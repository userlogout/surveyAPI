import { useEffect } from "react";
import { fetchQuestions } from "../../api/connection";

const TestComponent = () => {
  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchQuestions();
      console.log(questions);
    };

    getQuestions();
  }, []);

  return (
    <>
      <div>Check the console for results</div>
      <div>проверка</div>
    </>
  );
};

export default TestComponent;
