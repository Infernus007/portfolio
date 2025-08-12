"use client";
import React from "react";
import styles from "./style.module.scss";

export default function index({
  index,
  title,
  manageModal,
  description,
  href,
}) {
  return (
    <article
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <a
        href={href}
        style={{ textDecoration: "none", color: "black", width: "100%" }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project - ${description}`}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </article>
  );
}
