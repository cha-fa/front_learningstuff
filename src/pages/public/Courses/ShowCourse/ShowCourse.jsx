import "./ShowCourse.scss";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const ShowCourse = ({ match }) => {
  const { data, get } = useFetch();

  const { id } = useParams();

  useEffect(() => {
    get(`/learning_paths/${id}`);
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
                  <li key={lesson.id}>
                    <Link
                      to={`/courses/${data.courses[0].id}/chapters/${chapter.id}/lessons/${lesson.id}`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
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
