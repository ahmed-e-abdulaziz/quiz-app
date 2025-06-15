import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizContextProvider from "./store/QuizContext";

function App() {
  return (
    <>
      <Header />
      <QuizContextProvider>
        <Quiz />
      </QuizContextProvider>
    </>
  );
}

export default App;
