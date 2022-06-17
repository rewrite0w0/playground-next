import { config } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/vertical.module.css";
import { useEffect, useRef, useState } from "react";

export default function ScrollTelling() {
  const [offset, setOffset] = useState(0);
  const parallax = useRef(undefined);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      function ve() {
        setOffset(parallax.current.offset);
        parallax.current.scrollTo(offset);
      }

      e.key === "Enter" ? ve() : console.log(e);
    });

    console.log(parallax);
  });

  return (
    <div className={styles.scrollBody}>
      <Parallax
        pages={5}
        ref={parallax}
        config={config.wobby}
        horizontal={true}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => {
            parallax.current.scrollTo(1);
            console.log(parallax.current.content);
            console.log(parallax.current.container);
            console.log(parallax.current);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#00eeff",
          }}
        >
          <h1>Layer1</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#eeaa99",
          }}
          horizontal={true}
        >
          <h1>Layer2</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#ff9900",
          }}
        >
          <h1>Layer3</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#00eeaa",
          }}
          horizontal={true}
        >
          <h1>Layer4</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0099ff",
          }}
          horizontal={true}
        >
          <h1>Layer5</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
``;
