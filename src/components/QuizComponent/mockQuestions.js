const mockQuestions = [
  {
    id: 5,
    question: "What does the command top show",
    description: null,
    answers: {
      answer_a: "The space usage",
      answer_b: "The memory usage",
      answer_c: "The current processes alongside information about them",
      answer_d: "Nothing, it's not a command",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_c",
    explanation: null,
    tip: null,
    tags: [{ name: "Linux" }],
    category: "Linux",
    difficulty: "Easy",
  },
  {
    id: 645,
    question:
      "How can we find the process name from its process id? Assume the Process ID is 1",
    description: null,
    answers: {
      answer_a: "ps –p 1",
      answer_b: "find 1",
      answer_c: "top 1",
      answer_d: "get 1",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "BASH" }],
    category: "Linux",
    difficulty: "Easy",
  },
  // Повторите шаблон для остальных вопросов...
];

export default mockQuestions;
