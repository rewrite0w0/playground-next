import style from "../styles/LoopTrue.module.css";
import { useSpring, animated } from "react-spring";

export default function LoopTrue() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
  });

  return (
    <div className={style.rollin}>
      <animated.div
        className={style.shikaku}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#46e891",
          borderRadius: 20,
          ...styles,
        }}
      />
    </div>
  );
}
