import { config, useSpring, animated, useTrail } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles/vertical.module.css';
import { useEffect, useRef, useState } from 'react';

import { MyComponent } from './motion';
// import { CircleIndicator } from '../components/CircleIndicator';

import { motion, useViewportScroll } from 'framer-motion';

export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  );
};

export default function Vertical() {
  const [offset, setOffset] = useState(0);
  const parallax = useRef(undefined);
  // console.log(MyComponent);
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     function ve() {
  //       setOffset(parallax.current.offset);
  //       parallax.current.scrollTo(offset);
  //     }

  //     e.key === "Enter" ? ve() : console.log(e);
  //   });

  //   console.log(parallax);
  // });

  const image = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });

  // const image2 = useTrail({});

  return (
    <div className={styles.scrollBody}>
      <CircleIndicator />

      <Parallax pages={5} ref={parallax} config={config.wobby}>
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#00eeff',
          }}
        >
          <header className={styles.header}>
            {/* Header */}
            <div>
              <nav className={styles.nav}>
                <span>logo </span>
                <span>shopping mall </span>
                <span>lang</span>
              </nav>
            </div>
          </header>
          <main>
            {/* <animated.div style={image}>
              <img
                src="https://images.unsplash.com/photo-1654714588210-b9a19d1f3d24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="mock"
              ></img>
            </animated.div> */}
            <MyComponent />
            {/* <animated.img
              style={image}
              src="https://images.unsplash.com/photo-1654714588210-b9a19d1f3d24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="mock"
            ></animated.img> */}
            {/* <h1>Layer1</h1> */}
          </main>
          {/* <footer className={styles.footer}>
            Footer
            <div>touch screen!</div>
          </footer> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#eeaa99',
          }}
        >
          <h1>Layer2</h1>
          {/* <img
            src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
            alt="mock"
          /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ff9900',
          }}
        >
          <h1>Layer3</h1>
          {/* <img
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="mock"
          /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#00eeaa',
          }}
        >
          <h1>Layer4</h1>
          {/* <img
            src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="mock"
          /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#0099ff',
          }}
        >
          <h1>Layer5</h1>
          <footer className={styles.footer}>
            {/* Footer */}
            <div>touch screen!</div>
            <div>로고 붙임</div>
            <ul>
              <li>
                서울특별시 금천구 벚꽃로 234, 10층 1002호 (가산동,
                에이스하이엔드타워 6차)
              </li>
              <li>대표자 : 최종석 | 사업자번호 : 119-86-51786</li>
              <li>Tel : 02-852-7980 | Fax : 02-852-7983</li>
              <li>e-mail : sales@lameditech.com</li>
            </ul>
            <span>COPYRIGHT © LAMEDITECH. ALL RIGHT RESERVED.</span>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
