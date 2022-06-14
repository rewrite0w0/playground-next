import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/SideScrollPage.module.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { motino, MotionConfig } from "framer-motion";

export default function Horizontal() {
  const parallax = useRef(null);

  // const testStyle = css`
  //   color: hotpink;
  //   textdecoration: underline;
  // `;

  // const ea = css({
  //   textDecoration: "underline",
  //   color: "hotpink",
  // });

  // const SomeComponent = () => {
  //   return <h1 css={ea}>MOVEEEEEEEEEE</h1>;
  // };

  // const consoleWheel = (e) => {
  //   console.log(`
  //     px ${e.pageX},
  //     py ${e.pageY},
  //     dx ${e.deltaX},
  //     dy ${e.deltaY},
  //     dz ${e.deltaZ},
  //     cx ${e.clientX},
  //     cy ${e.clientY}
  //     `);
  // };

  // const consoleKey = (e) => {
  //   console.log(e);
  // };

  return (
    <div className={styles.scrollBody}>
      <Parallax pages={5} ref={parallax} horizontal={true}>
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => parallax.current.scrollTo(1)}
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
          offset={4}
          speed={0}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#00eeaa",
          }}
        >
          <h1>Layer4</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0099ff",
          }}
        >
          <h1>Layer5</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
