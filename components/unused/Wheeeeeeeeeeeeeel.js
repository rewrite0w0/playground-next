import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { atom } from "jotai";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Wheeeeeeeeeeeeeel() {
  const { background } = useSpring({
    from: {
      background: "#ffff00",
    },
  });
  return (
    <animated.div
      style={{ width: 500, height: 500, background }}
      onWheel={(e) => console.log(e)}
    />
  );
}
