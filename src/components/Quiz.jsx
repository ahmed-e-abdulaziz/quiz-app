import Questions from "./Questions.jsx";
import { QuizContext } from "../store/QuizContext.jsx";
import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import { useContext } from "react";

export default function Quiz() {
  const { userAnswers } = useContext(QuizContext);
  const displayQuestions = userAnswers.length < QUESTIONS.length;
  console.log(displayQuestions);
  return <div id="quiz">{displayQuestions ? <Questions /> : <Summary />}</div>;
}
