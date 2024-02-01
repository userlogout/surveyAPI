import React from "react";

interface QuestionProps {
  question: string;
  answers: string[];
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, answers }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
