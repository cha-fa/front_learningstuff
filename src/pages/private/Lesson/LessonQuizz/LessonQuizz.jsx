import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import Question from "./Question";
import { useTranslation } from "react-i18next";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";

const LessonQuizz = ({ ids }) => {
  const { data, get, post } = useFetch();
  const { t } = useTranslation("lesson");

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
    }
  };

  const sendResult = () => {
    const score = `${questionsAnsweredCorrectly.length}/${data.length}`;
    post(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/results`,
      { quizz_result: score }
    );
  };

  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/questions`
    );
  }, []);

  return (
    <div className="LessonQuizz p-5">
      {data && (
        <>
          <Question
            question={data[currentQuestion]}
            handleCorrectQuestion={handleCorrectQuestion}
            lastQuestion={currentQuestion === data.length - 1 ? true : false}
            sendResult={sendResult}
          />
          {currentQuestion < data.length - 1 && (
            <ButtonSecondary label={t("next")} handleClick={handleNext} />
          )}
        </>
      )}
    </div>
  );
};

export default LessonQuizz;
