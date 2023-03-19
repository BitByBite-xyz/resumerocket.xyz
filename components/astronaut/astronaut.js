import Lottie from "react-lottie";
import astronautAnimation from "../../assets/astronaut.json";

export default function Astronaut() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: astronautAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
}
