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
    <div
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
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}
