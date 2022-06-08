import { useSpring, animated, config, easings } from "react-spring";
import { useState } from "react";
import { useAtom } from "jotai";

export default function DetectWheel() {
  const [xAxios, setXAxios] = useState(0);
  const [yAxios, setYAxios] = useState(0);

  const { background, rotateZ } = useSpring({
    from: {
      background: "#0000ff",
      rotateZ: 0,
      opacity: 1,
    },
    to: {
      background: "#000000",
      rotateZ: 225,
      opacity: 0.5,
    },
    config: {
      duration: 2000,
      easing: easings.easeInOutQuart,
    },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        background,
        rotateZ,
        width: 100,
        height: 100,
        borderRadius: 10,
      }}
    ></animated.div>
  );
}
