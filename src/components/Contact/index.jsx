"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";

function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.section
      id="contact"
      style={{ y }}
      ref={container}
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className={styles.body}>
        <header className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                alt={
                  "Portrait of Jash Naik, cybersecurity engineer and cloud developer"
                }
                src={`/images/me.jpeg`}
              />
            </div>
            <h1 id="contact-heading">Let&apos;s work</h1>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={`/images/resume.pdf`}
              aria-label="Download Resume PDF"
            >
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get Resume</p>
              </Rounded>
            </a>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </header>
        <address className={styles.nav}>
          <Rounded>
            <p>
              <a
                href="mailto:jashnaik2004@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                jashnaik2004@gmail.com
              </a>
            </p>
          </Rounded>
          <Rounded>
            <p>
              <a
                href="tel:+919875074738"
                style={{ textDecoration: "none", color: "white" }}
              >
                +91 9875074738
              </a>
            </p>
          </Rounded>
        </address>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://github.com/Infernus007"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Jash Naik on GitHub"
                  >
                    GitHub
                  </a>
                </p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://www.linkedin.com/in/jash-naik-7612b8162/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Jash Naik on LinkedIn"
                >
                  LinkedIn
                </a>
              </p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Index;
