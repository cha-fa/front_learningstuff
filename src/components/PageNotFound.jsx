import React from "react";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ButtonPrimary from "./ButtonPrimary/ButtonPrimary";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const { t } = useTranslation();
  const currentUser = useSelector((state) => state.auth.currentUser);
  let history = useHistory();

  return (
    <div className="PageNotFound w-100 d-flex flex-column align-items-center justify-content-center">
      <p>
        {t("this_page_doesnt_exists") + " "}
        <span role="img" aria-label="confused_face">
          🤨
        </span>
      </p>
      <UseAnimations
        animation={alertTriangle}
        size={500}
        strokeColor="#ff8a00"
      />
      {(currentUser && (
        <ButtonPrimary
          sizeClass="medium mb-5"
          label={t("back_to_profile")}
          handleClick={() => history.push("/profile")}
        />
      )) || (
        <ButtonPrimary
          sizeClass="medium mb-5"
          label={t("back_to_home")}
          handleClick={() => history.push("/")}
        />
      )}
    </div>
  );
};

export default PageNotFound;
