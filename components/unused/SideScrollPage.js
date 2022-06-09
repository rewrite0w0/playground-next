import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/SideScrollPage.module.css";
import LoopTrue from "./LoopTrue";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function SideScrollPage() {
  const testStyle = css`
    color: hotpink;
    textdecoration: underline;
  `;

  const ea = css({
    textDecoration: "underline",
    color: "hotpink",
  });

  const SomeComponent = () => {
    return <h1 css={ea}>MOVEEEEEEEEEE</h1>;
  };

  const consoleWheel = (e) => {
    console.log(`
      px ${e.pageX},
      py ${e.pageY},
      dx ${e.deltaX},
      dy ${e.deltaY},
      dz ${e.deltaZ},
      cx ${e.clientX},
      cy ${e.clientY}
      `);
  };

  return (
    <div className={styles.scrollBody} onWheel={consoleWheel}>
      <header>
        <SomeComponent />
        <h1 className="text-3xl underline">MOOOOOOOOOOOOOOOOOOOOOve?</h1>
      </header>
      <article>
        <Parallax pages={3} horizontal={true}>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "hotpink",
            }}
          >
            <header>
              <h1>Move?</h1>
            </header>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "blue",
            }}
          >
            <h1>2</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "hotpink",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "green",
            }}
          >
            <h1>3</h1>
          </ParallaxLayer>
        </Parallax>
      </article>
      <footer className="wheel">
        {/* <h1>Bye?</h1> */}
        <LoopTrue />
      </footer>
    </div>
  );
}
