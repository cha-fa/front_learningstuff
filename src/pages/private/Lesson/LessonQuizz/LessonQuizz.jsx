import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import Question from "./Question";

const LessonQuizz = ({ ids }) => {
  const { data, get } = useFetch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] = useState(
    []
  );

  const handleCorrectQuestion = (correctQuestion) => {
    setQuestionsAnsweredCorrectly([
      ...questionsAnsweredCorrectly,
      correctQuestion,
    ]);
  };

  const handleNext = (event) => {
    event.preventDefault();
    const numberOfQuestions = data.length;
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("quizz terminé");
    }
  };

  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/questions`
    );
  }, []);

  console.log("questions bien répondues", questionsAnsweredCorrectly);

  return (
    <div className="LessonQuizz">
      {data && (
        <>
          <Question
            question={data[currentQuestion]}
            handleCorrectQuestion={handleCorrectQuestion}
            lastQuestion={currentQuestion === data.length - 1 ? true : false}
          />
          {currentQuestion < data.length - 1 && (
            <button type="button" onClick={handleNext}>
              NEXT
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default LessonQuizz;
