import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Question = ({
  question,
  handleCorrectQuestion,
  lastQuestion,
  sendResult,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState();

  const type = question.is_multiple ? "checkbox" : "radio";
  const correctAnswers = question.answers.filter((answer) => answer.is_correct);
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
      handleCorrectQuestion(question.id);
    } else {
      setAnswered("wrong");
    }

    if (lastQuestion) {
      sendResult();
    }
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
        {answered && lastQuestion && t("quizz_over")}
      </Form>
    </div>
  );
};

export default Question;
