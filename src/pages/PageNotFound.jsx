import LottieAnimation from "lottie";
import anim404 from "animations/anim404.json";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <LottieAnimation lotti={anim404} height={600} width={600} />
    </div>
  );
};

export default PageNotFound;
