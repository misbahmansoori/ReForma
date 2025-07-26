import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = targetNumber / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(timer);
        setCount(targetNumber);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetNumber, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default AnimatedCounter;
