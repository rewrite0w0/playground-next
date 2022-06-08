import { config } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/vertical.module.css";
import { useRef } from "react";

export default function SideScrollPage() {
  const parallax = useRef(null);

  return (
    <div className={styles.scrollBody}>
      <Parallax pages={3} ref={parallax} innerStyle>
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            // justifyContent: "flex-start",
            // alignContent: "space-between",
            background: "white",
          }}
        >
          <div>
            <header>
              <h1>header</h1>
            </header>
            <main>
              <h1>body</h1>
            </main>
            <footer>
              <h1>footer</h1>
            </footer>
          </div>
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
          <h1>2</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#ff9900",
          }}
        >
          <h1>layer3</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
