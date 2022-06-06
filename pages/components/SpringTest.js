import { useSpring, animated } from 'react-spring';

export default function SpringTest() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 90 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#46e891',
        borderRadius: 20,
        ...styles,
      }}
    />
  );
}
