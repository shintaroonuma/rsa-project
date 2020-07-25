import React from "react";
import styles from "./Container.module.sass";

/*
 * A simple container for small groups of items within a section.
 *
 * It takes a `title` property (string) and `children` components.
 */
export default function Container({ title, children }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}
