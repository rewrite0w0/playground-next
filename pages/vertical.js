import Image from "next/image";
import {
  config,
  useSpring,
  animated,
  useTrail,
  useTransition,
} from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/vertical.module.css";
import {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import logo from "../resource/logo.png";

// import { MyComponent } from './motion';
// import { CircleIndicator } from '../components/CircleIndicator';

import { motion, useViewportScroll } from "framer-motion";

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

  const titleRef = useRef([]);

  const [items, setItems] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28bd47" },
  });

  const image = useSpring({
    // loop: { reverse: true },
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });

  const reset = useCallback(() => {
    titleRef.current.forEach(clearTimeout);
    titleRef.current = [];
    setItems([]);

    // titleRef.current.push(()=>s)

    titleRef.current.push(
      setTimeout(
        () => setItems(["Puraxel", "FX-5000", "FX-1000", "DDD", "ZZZZZZ"]),
        2000
      )
    );
    titleRef.current.push(setTimeout(() => setItems(["Puraxel"]), 5000));

    // titleRef.current.push(
    //   setTimeout(() => setItems(["Puraxel", "FX-5000", "FX-1000"]), 8000)
    // );
    // console.log(titleRef.current);
  }, []);

  useEffect(() => {
    reset();
    return () => titleRef.current.forEach(clearTimeout);
  }, []);

  // const image2 = useTrail({});

  return (
    <div className={styles.scrollBody}>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#000000",
          }}
        >
          <header className={styles.header}>
            {/* Header */}

            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
              <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://puraxel.com" className="flex items-center">
                  <Image
                    width="100%"
                    height="100%"
                    // src={logo}
                    src="https://puraxel.co.kr/img/logo.png"
                    // src="https://images.unsplash.com/photo-1655051605841-2d90737e7206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    className="mr-3 h-6 sm:h-9  bg-black"
                    alt="Puraxel Logo"
                  />
                  {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Puraxel
                  </span> */}
                </a>
                <div className="flex items-center md:order-2">
                  <div
                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                  >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <div className={styles.container}>
              <div className={styles.layer}>
                {transitions(({ innerHeight, ...rest }, item) => (
                  <animated.div
                    className={styles.transitionsItem}
                    style={rest}
                    onClick={reset}
                  >
                    <animated.div
                      style={{ overflow: "hidden", height: innerHeight }}
                    >
                      {item}
                    </animated.div>
                  </animated.div>
                ))}
              </div>
            </div>
          </main>
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
          {/* <h1>Layer2</h1> */}
          <main className="flex flex-wrap">
            {/* <h1>Layer1</h1> */}

            <animated.div style={image} className="flex mx-auto">
              <Image
                src="https://puraxel.co.kr/img/main/section05_img01.png"
                width="1000"
                height="1000"
                alt="fx5000?"
              />
            </animated.div>
          </main>
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
        >
          <h1>Layer5</h1>
          <footer className={styles.footer}>
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
