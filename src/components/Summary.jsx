import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import QUESTIONS from "../questions.js";
import completeSrc from "../assets/quiz-complete.png";
export default function Summary() {
  const { userAnswers } = useContext(QuizContext);
  const resultList = userAnswers.map((answer, idx) => {
    const question = QUESTIONS[idx].text;
    const answerClass =
      "user-answer " +
      (answer === null
        ? "skipped"
        : answer !== QUESTIONS[idx].answers[0]
        ? "wrong"
        : "correct");

    return (
      <li>
        <p className="question">{question}</p>
        <p className={answerClass}> {answer === null ? "SKIPPED" : answer}</p>
      </li>
    );
  });
  return (
    <div id="summary">
      <img src={completeSrc} />
      <h2>Congrats! You finished the Quiz.</h2>
      <ol>{resultList}</ol>
    </div>
  );
}
