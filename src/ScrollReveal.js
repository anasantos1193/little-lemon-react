import { useEffect, useRef, useState } from "react";

function ScrollReveal({ children, className = "" }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${
        visible ? "scroll-reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;