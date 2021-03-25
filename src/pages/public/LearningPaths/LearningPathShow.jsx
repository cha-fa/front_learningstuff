import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";

const LearningPathShow = () => {
  const { data, error, get } = useFetch();
  const { pathSlug } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    get(`/learning_paths/${pathSlug}`);
    return;
  }, []);

  return (
    <div className="LearningPathShow">
      <div className="LearningPaths__header">
        <h2>{data && data.title}</h2>
        <p>{data && data.description}</p>
        <p>{data && data.price_in_cents / 100}</p>
        <p>INSCRIPTION</p>
      </div>
      <ul></ul>
    </div>
  );
};

export default LearningPathShow;
