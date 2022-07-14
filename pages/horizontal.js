import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/SideScrollPage.module.css";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import CarouselComponent from "./carousel/carousel";

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
      <Parallax pages={11} ref={parallax} horizontal={true}>
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 68.4deg,  rgba(248,182,204,1) 0.5%, rgba(192,198,230,1) 49%, rgba(225,246,240,1) 99.8% )",
          }}
        >
          <h1>분홍-연보라-하양</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 89.2deg,  rgba(0,0,0,1) 10.4%, rgba(255,0,0,1) 37.1%, rgba(255,216,51,1) 64.3%, rgba(255,255,255,1) 90.5% )",
          }}
        >
          <h1>독일국기</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% )",
            color: "#fff",
          }}
        >
          <h1>파랑-남색</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2% )",
          }}
        >
          <h1>분홍 - 보라 - 연두</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          onClick={() => parallax.current.scrollTo(5)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 65.5deg,  rgba(0,0,0,1) -15.1%, rgba(1,14,128,1) 71.5% )",
            color: "#fff",
          }}
        >
          <h1>검정 - 파랑</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0}
          onClick={() => parallax.current.scrollTo(6)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( rgba(0,0,0,1) , rgba(255,255,255,1)  )",
            color: "skyblue",
          }}
        >
          <h1>검정 - 하양</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0}
          onClick={() => parallax.current.scrollTo(7)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 65.5deg,  rgba(240,188,66,1) -15.1%, rgba(134,38,51,1) 71.5% )",
            color: "#000",
          }}
        >
          <h1>빨강 - 노랑</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0}
          onClick={() => parallax.current.scrollTo(7)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient( 65.5deg,  rgba(49,140,231,0.8) , rgba(255,255,255,1)  )",
          }}
        >
          <h1>파랑 - 하양</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0}
          onClick={() => parallax.current.scrollTo(8)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(128,248,174,1) 0%, rgba(223,244,148,1) 90% )",
          }}
        >
          <h1>녹색 - 연두</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={0}
          onClick={() => parallax.current.scrollTo(9)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(128,248,174,1) 0%, rgba(255,255,255,1) 90% )",
          }}
        >
          <h1>녹색 - 하양</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={9}
          speed={0}
          onClick={() => parallax.current.scrollTo(10)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(rgba(255,255,255,1),rgba(128,248,174,1), rgba(0,0,0,1))",
            color: "tomato",
          }}
        >
          <h1>녹색 - 검정 - 하양</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={10}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   background:
          //     "linear-gradient(rgba(255,255,255,1),rgba(128,248,174,1), rgba(0,0,0,1))",
          //   color: "tomato",
          // }}
        >
          <CarouselComponent />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
