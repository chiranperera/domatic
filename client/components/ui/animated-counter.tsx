import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number;
  separator?: string;
  isPercentage?: boolean;
}

export function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
  className = "",
  decimals = 0,
  separator = ",",
  isPercentage = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startCount = 0;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = startCount + (target - startCount) * easeOutExpo;
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };
    
    updateCount();
  };

  const formatNumber = (num: number) => {
    const rounded = decimals > 0 ? num.toFixed(decimals) : Math.floor(num);
    const numStr = rounded.toString();
    
    if (separator && num >= 1000) {
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    
    return numStr;
  };

  return (
    <span ref={elementRef} className={className}>
      {isPercentage && count > 0 ? "-" : ""}
      {formatNumber(count)}
      {suffix}
      {isPercentage ? "%" : ""}
    </span>
  );
}
