import "./ShowCourse.scss";
import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Chapters from "../Chapters/Chapter";
import { Accordion, Container } from "react-bootstrap";

const ShowCourse = ({ match }) => {
  const { data, get } = useFetch();

  const { id } = useParams();

  useEffect(() => {
    get(`/courses/${id}`);
  }, []);

  return (
    <Container className="ShowCourse ">
      {data && (
        <>
          <h1>{data.title}</h1>

          <Accordion>
            {data.chapters.map((chapter) => (
              <Chapters key={chapter.id} courseId={id} chapter={chapter} />
            ))}
          </Accordion>
        </>
      )}
    </Container>
  );
};

export default ShowCourse;
