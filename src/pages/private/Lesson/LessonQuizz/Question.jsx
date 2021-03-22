import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Question = ({
  question,
  questionsQuantity,
  ids,
  questionIndex,
  handleClose,
}) => {
  const { post } = useFetch();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState();
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] = useState(
    []
  );
  const currentUser = useSelector((state) => state.auth.currentUser);
  const type = question && question.is_multiple ? "checkbox" : "radio";
  const correctAnswers =
    question && question.answers.filter((answer) => answer.is_correct);
  const { t } = useTranslation("lesson");

  const handleChangeCheckbox = (event) => {
    if (event.target.checked) {
      setSelectedAnswers([...selectedAnswers, Number(event.target.value)]);
    } else {
      setSelectedAnswers(
        selectedAnswers.filter(
          (answer) => answer !== Number(event.target.value)
        )
      );
    }
  };

  const handleChangeRadio = (event) => {
    setSelectedAnswers([Number(event.target.value)]);
  };

  const handleValidation = (event) => {
    event.preventDefault();
    const correctAnswersIds = correctAnswers.map((answer) => answer.id);

    if (
      JSON.stringify(selectedAnswers.sort()) ===
      JSON.stringify(correctAnswersIds.sort())
    ) {
      setAnswered("right");
      setQuestionsAnsweredCorrectly([
        ...questionsAnsweredCorrectly,
        question.id,
      ]);
    } else {
      setAnswered("wrong");
    }

    if (questionIndex === questionsQuantity - 1) {
      sendResult();
    }
  };

  const sendResult = () => {
    const score = `${questionsAnsweredCorrectly.length}/${questionsQuantity}`;
    post(
      `/courses/${ids.course}/chapters/${ids.chapter}/lessons/${ids.lesson}/results`,
      { quizz_result: score }
    );
    // post(`/users/${currentUser.id}/progress`, {
    //   course_id: ids.course,
    //   achieved_lesson_id: ids.lesson,
    // });
  };

  useEffect(() => {
    setSelectedAnswers([]);
    setAnswered();
  }, [question]);

  return (
    <div className="Question">
      <h2>{question.content} ?</h2>

      <Form>
        <div key={`default-${type}`} className="mb-3">
          {question.answers.map((answer) => (
            <Form.Check
              key={answer.id}
              type={type}
              name={type}
              label={answer.content}
              onChange={
                type === "radio" ? handleChangeRadio : handleChangeCheckbox
              }
              value={answer.id}
              required
            />
          ))}
        </div>
        {!answered && (
          <ButtonPrimary
            handleClick={handleValidation}
            is_disabled={selectedAnswers.length < 1}
            label={t("validate_response")}
            className="ButtonPrimary medium"
          />
        )}
        {(answered === "right" && (
          <p>
            {t("congratulations")} ! {question.explanation}
          </p>
        )) ||
          (answered === "wrong" && (
            <>
              <p>
                {t("too_bad")} ! {question.explanation}
              </p>
              <p>
                {(question.is_multiple &&
                  t("correct_answers_were") +
                    correctAnswers.map((answer) => ` ${answer.content}`)) ||
                  t("correct_answer_was") + correctAnswers[0].content}
              </p>
            </>
          ))}
        {answered && questionIndex === questionsQuantity - 1 && (
          <>
            <p>
              {t("quizz_over")} ! {t("result")}:{" "}
              {questionsAnsweredCorrectly.length + " / " + questionsQuantity}
            </p>{" "}
            {(question.lesson.next_lesson && (
              <Link
                onClick={handleClose}
                to={`/courses/${ids.course}/chapters/${question.lesson.next_lesson.chapter_id}/lessons/${question.lesson.next_lesson.id}`}
              >
                {t("next_lesson")}
              </Link>
            )) || (
              <h3>
                {t("course_is_over")}{" "}
                <Link to={"/profile"}>{t("back_to_profile")}</Link>
              </h3>
            )}
          </>
        )}
      </Form>
    </div>
  );
};

export default Question;
