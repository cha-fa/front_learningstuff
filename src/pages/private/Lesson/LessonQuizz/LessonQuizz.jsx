import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import Question from "./Question";
import { useTranslation } from "react-i18next";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";

const LessonQuizz = ({ ids, handleClose }) => {
  const { data, get, post } = useFetch();
  const { t } = useTranslation("lesson");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = (event) => {
    event.preventDefault();
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  useEffect(() => {
    get(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/questions`
    );
  }, []);

  return (
    <div className="LessonQuizz p-5 " style={{ height: "50vh" }}>
      {data && (
        <>
          <Question
            question={data[currentQuestion]}
            questionsQuantity={data.length}
            ids={ids}
            questionIndex={currentQuestion}
            handleClose={handleClose}
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
