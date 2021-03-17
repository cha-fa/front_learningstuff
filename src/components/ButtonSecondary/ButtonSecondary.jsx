import "./ButtonSecondary.scss";

const ButtonSecondary = ( props) => {

  const {
    type = "button",
    label = "label",
    handleClick,
    className = "ButtonSecondary",
    sizeClass,
  } = props;

  return (
    <button type={type} onClick={handleClick} className={`${className} ${sizeClass}`}>{label}</button>
  );
};

export default ButtonSecondary;
