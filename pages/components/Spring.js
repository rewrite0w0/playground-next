import { useSpring, animated } from 'react-spring';

export default function Spring() {
  const prop = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return <animated.div style={prop}>I will fade in</animated.div>;
}
