"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { slideUp } from "./animation";
import { motion } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default function Landing() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
      aria-labelledby="hero-heading"
    >
      <header className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Explore my portfolio to discover my cybersecurity solutions and secure cloud implementations
          </p>
        </motion.div>

        <div className={styles.body}>
          <h1 id="hero-heading" className="sr-only">
            Jash Naik - Cybersecurity Engineer and Cloud Developer
          </h1>
          <p>
            I&apos;m a <span>cybersecurity engineer & cloud developer </span> with strong focus on
            building secure, scalable & resilient digital infrastructure.
          </p>
        </div>
      </header>
    </motion.section>
  );
}
