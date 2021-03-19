import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

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

  console.log("CORRECT ANSWERS", correctAnswers, "quetsion", question);

  return (
    <div className="Question">
      <h2>{question.content}</h2>

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
            />
          ))}
        </div>
        {!answered && (
          <button type="submit" onClick={handleValidation}>
            Valider réponse
          </button>
        )}
        {(answered === "right" && <p>BRAVO ! {question.explanation}</p>) ||
          (answered === "wrong" && (
            <>
              <p>Dommage ! {question.explanation}</p>
              <p>
                {(question.is_multiple &&
                  "Les bonnes réponses étaient:" + correctAnswers &&
                  correctAnswers.map((answer) => ` ${answer.content}`)) ||
                  "La bonne réponse était:" + correctAnswers[0].content}
              </p>
            </>
          ))}
        {answered && lastQuestion && "Le quizz est terminé"}
      </Form>
    </div>
  );
};

export default Question;
