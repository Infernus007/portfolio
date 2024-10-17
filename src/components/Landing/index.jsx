"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
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

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  const firstText = useRef(null);
  const secondText = useRef(null);
  // const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: (e) => (direction = e.direction * -1),
  //     },
  //     x: "-500px",
  //   });
  //   requestAnimationFrame(animate);
  // }, []);


  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Explore my portfolio to explore my various works and projects I have
            created
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            I&apos;m a <span>fullstack developer </span> with strong focus on
            producing high quality & impactful digital experience.
          </p>
        </div>
      </main>
    </motion.main>
  );
}
