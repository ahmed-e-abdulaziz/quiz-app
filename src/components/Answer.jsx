export default function Answer({ text, onAnswer }) {
  return (
    <div className="answer">
      <button onClick={onAnswer}>{text}</button>
    </div>
  );
}
