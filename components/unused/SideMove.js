import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function SideMove() {
  const [styles, api] = useSpring(() => ({
    from: { x: -50, opacity: 1 },
    delay: 1,
  }));

  useEffect(() => {
    api({
      x: 500,
      opacity: 0.5,
      loop: { reverse: true },
    });
  }, []);

  return (
    <animated.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  );
}
