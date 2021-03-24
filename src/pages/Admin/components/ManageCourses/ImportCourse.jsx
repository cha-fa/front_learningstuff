import { useState } from "react";
import { useTranslation } from "react-i18next";
import CourseStructure from "assets/repo_course_structure.png";
import { Form, Button, Row } from "react-bootstrap";
import useFetch from "hooks/useFetch";
import { displaySuccess } from "stores/flashmessages/flashMiddleware";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "components/Loading";

const ImportCourse = () => {
  const { t } = useTranslation("admin");
  const { post, error, isLoading } = useFetch();
  const [url, setUrl] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const creationSuccess = () => {
    dispatch(displaySuccess(t("course_imported")));
    history.push("/admin/courses");
  };

  const handleClick = () => {
    post("/admin/courses", { github_url: url }, creationSuccess);
  };

  return (
    <div className="ImportCourse">
      <div>
        <Form.Label>{t("url_github")}</Form.Label>
        <Form.Control
          placeholder={t("url_github")}
          onChange={() => setUrl(event.target.value)}
        />
        <Row>
          <Button
            type="button"
            className="btn btn-primary btn-lg m-3 "
            onClick={handleClick}
          >
            {t("validate_creation")}
          </Button>
          {isLoading && <Loading />}
          {error && <p>{error}</p>}
        </Row>
        <h4>{t("how_to_import")}</h4>
        <p>{t("structure_course_repository")}</p>
        <img src={CourseStructure} alt="Folder of course" />
        <p>{t("file_format_txt_except_quizz_json")}</p>
        <p>
          {t("url_to_enter")}
          <i>{t("url_format")}</i>
        </p>
        <p>
          {t("example_to_see")}{" "}
          <a href={t("url_example")}>{t("by_clicking_here")}</a>
        </p>
      </div>
    </div>
  );
};

export default ImportCourse;
