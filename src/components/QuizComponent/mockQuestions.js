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
      "How can we find the process name from its process id? Assume the Proccess ID is 1",
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
  {
    id: 38,
    question:
      "To inspect the the boot process of a Linux system, which command can be used?",
    description: null,
    answers: {
      answer_a: "boot",
      answer_b: "dmesg",
      answer_c: "cat /var/log/start",
      answer_d: "cat /var/log/boot.txt",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_b",
    explanation: null,
    tip: null,
    tags: [{ name: "Linux" }],
    category: "Linux",
    difficulty: "Medium",
  },
  {
    id: 33,
    question:
      "In Linux, the priority of a running process can be changed using which command?",
    description: null,
    answers: {
      answer_a: "priority",
      answer_b: "renice",
      answer_c: "ps -A",
      answer_d: "passwd",
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_b",
    explanation: null,
    tip: null,
    tags: [{ name: "Linux" }],
    category: "Linux",
    difficulty: "Medium",
  },
  {
    id: 687,
    question:
      "Which command can be used by the administrator to bring the system into single user mode?",
    description: null,
    answers: {
      answer_a: "init s",
      answer_b: "single",
      answer_c: "init",
      answer_d: "single s",
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
    correct_answer: null,
    explanation: null,
    tip: null,
    tags: [{ name: "BASH" }, { name: "Linux" }],
    category: "Linux",
    difficulty: "Hard",
  },
  {
    id: 734,
    question:
      "When patching resources in Kubernetes, how to partially update a node?",
    description: null,
    answers: {
      answer_a:
        'kubectl patch node k8s-node-1 -p \'{"spec":{"unschedulable":false}}\'',
      answer_b:
        'kubectl patch node k8s-node-1 -p \'{"patch":{"unschedulable":true}}\'',
      answer_c:
        'kubectl patch node k8s-node-1 -p \'{"spec":{"unschedulable":true}}\'',
      answer_d:
        'kubectl patch node k8s-node-1 -pr \'{"spec":{"unschedulable":true}}\'',
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
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [{ name: "Kubernetes" }],
    category: "Linux",
    difficulty: "Hard",
  },
];

export default mockQuestions;
