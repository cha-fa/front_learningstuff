import "./ShowCourse.scss";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";

const ShowCourse = ({ match }) => {
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/learning_paths/${parseInt(match.params.id)}`);
  }, []);

  console.log(data);
  return (
    data && (
      <div className="ShowCourse">
        <h1>{data.title}</h1>
        <ul className="m-5">
          <h2>Chapitre:</h2>
          {data.courses[0].chapters.map((chapter) => (
            <li key={chapter.key}>
              <ul>
                <h3> {chapter.title}</h3>
                {chapter.lessons.map((lesson) => (
                  <li key={lesson.id}>{lesson.title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ShowCourse;
