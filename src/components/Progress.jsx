import { useEffect, useState } from "react";

export default function Progress({ timer, onTimeout }) {
  const [timeRemaining, setTimeRemaining] = useState(timer);
  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);
    return () => clearTimeout(timeout);
  }, [timer, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((time) => time - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={timeRemaining} max={timer} />;
}
