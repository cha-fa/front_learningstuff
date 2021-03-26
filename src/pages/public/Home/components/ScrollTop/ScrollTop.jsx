import { Link } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollTop.scss";

const ScrollTop = () => {
  return (
    <div className="ScrollTop py-4">
      <Link to="Navigation" smooth duration={1000}>
        <FaAngleUp size={42} />
      </Link>
    </div>
  );
};
  
export default ScrollTop;