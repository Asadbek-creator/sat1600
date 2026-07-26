// Question Bank data — kept in a file separate from assets/qbank/questions.js (the mock-test
// question set) on purpose: nothing in here should ever also appear in a paid/unlockable mock
// test, so practicing in the Question Bank can never spoil a mock test's questions in advance.
//
// Currently empty — ready to receive the dedicated ~800-question, per-domain Question Bank
// content. Each domain key holds an array of question objects using the same shape as the mock
// question data: { num, stem, images, type, choices, answer, domain, difficulty }.
const BANK_QUESTIONS = {
  "Algebra": [],
  "Advanced Math": [],
  "Problem-Solving and Data Analysis": [],
  "Geometry and Trigonometry": []
};
