import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Chapter.scss";

const Chapter = ({ chapter, courseId }) => {
  return (
    <>
      <Card className="Chapter">
        <Accordion.Toggle as={Card.Header} eventKey={chapter.id}>
          <h3>{chapter.title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={chapter.id}>
          <Card.Body>
            {chapter.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/courses/${courseId}/chapters/${chapter.id}/lessons/${lesson.id}`}
              >
                <p key={lesson.id}>{lesson.title}</p>
              </Link>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default Chapter;
