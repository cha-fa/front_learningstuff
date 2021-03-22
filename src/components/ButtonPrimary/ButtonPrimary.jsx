import "./ButtonPrimary.scss";

const ButtonPrimary = (props) => {
  const {
    type = "button",
    label = "label",
    handleClick,
    className = "ButtonPrimary",
    sizeClass,
    is_disabled,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={is_disabled}
      className={`${className} ${sizeClass}`}
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
