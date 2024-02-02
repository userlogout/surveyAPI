// import { useEffect, useState } from "react";
// import { fetchQuestions } from "../../api/connection";

// interface Question {
//   question: string;
//   answers: string[];

// }

// const QuizComponent: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   useEffect(() => {
//     const loadQuestions = async () => {
//       const fetchedQuestions = await fetchQuestions();
//       setQuestions(fetchedQuestions);
//     };

//     loadQuestions();
//   }, []);

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((current) => current + 1);
//   };

//   // Проверка, что вопросы загружены
//   if (questions.length === 0) return <div>Loading...</div>;

//   const question = questions[currentQuestionIndex];

//   return (
//     <div>
//       <h2>Quiz App</h2>
//       <div>
//         <h3>{question.question}</h3>
//         {/* Пример отображения вариантов ответов */}
//         {question.answers.map((answer, index) => (
//           <div key={index}>
//             <input type="radio" id={answer} name="answer" value={answer} />
//             <label htmlFor={answer}>{answer}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleNextQuestion}>Next Question</button>
//     </div>
//   );
// };

// export default QuizComponent;
