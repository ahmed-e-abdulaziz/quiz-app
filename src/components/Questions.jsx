import { useContext, useCallback } from "react";
import Answer from "./Answer.jsx";
import Progress from "./Progress.jsx";
import { QuizContext } from "../store/QuizContext.jsx";
import QUESTIONS from "../questions.js";

export default function Questions() {
  const { currentQuestionIndex, incCurrentQuestionIndex, addAnswer } =
    useContext(QuizContext);
  function onAnswerClick(answer) {
    if (currentQuestionIndex < QUESTIONS.length) {
      incCurrentQuestionIndex();
      addAnswer(answer);
    }
  }
  const onTimeoutCallback = useCallback(() => onAnswerClick(null), []);

  const answers = QUESTIONS[currentQuestionIndex].answers.map((answer) => (
    <Answer key={answer} text={answer} onAnswer={() => onAnswerClick(answer)} />
  ));

  return (
    <>
      <div id="question">
        <Progress
          key={QUESTIONS[currentQuestionIndex].id}
          timer={10000}
          onTimeout={onTimeoutCallback}
        />
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
      </div>
      <div id="answers">{answers}</div>
    </>
  );
}
