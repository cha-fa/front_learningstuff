import "./ButtonPrimary.scss";

const ButtonPrimary = ( props) => {

  const {
    type = "button",
    label = "label",
    handleClick,
    className = "ButtonPrimary",
    sizeClass,
  } = props;

  return (
    <button type={type} onClick={handleClick} className={`${className} ${sizeClass}`}>{label}</button>
  );
};

export default ButtonPrimary;
