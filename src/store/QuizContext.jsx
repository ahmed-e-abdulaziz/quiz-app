import { createContext, useState } from "react";

export const QuizContext = createContext({
  currentQuestionIndex: 0,
  userAnswers: [],
  incCurrentQuestionIndex: () => {},
  addAnswer: () => {},
});

export default function QuizContextProvider({ children }) {
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    userAnswers: [],
  });

  function incCurrentQuestionIndex() {
    setQuizState((quizState) => {
      return {
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
      };
    });
  }

  function addAnswer(answer) {
    setQuizState((quizState) => {
      const res = {
        ...quizState,
        userAnswers: [...quizState.userAnswers, answer],
      };
      console.log(res);
      return res;
    });
    console.log(quizState.userAnswers);
  }
  const ctxValue = {
    currentQuestionIndex: quizState.currentQuestionIndex,
    userAnswers: quizState.userAnswers,
    incCurrentQuestionIndex: incCurrentQuestionIndex,
    addAnswer: addAnswer,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
