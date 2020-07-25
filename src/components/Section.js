import React from "react";
import styles from "./Section.module.sass";
import Layout from "./Layout";

/**
 * Represents a section or group in the website with related functionality under
 * a heading.
 *
 * This component should be used as a container like <div>.
 * Side margins are added automatically.
 *
 * @param props an object containing: `title`, a string displayed as the heading
 * of this section; and `children`, the child components to be contained in this
 * component.
 */
export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <Layout>
        <h2 className={styles.title}>{title}</h2>
        <div>{children}</div>
      </Layout>
    </section>
  );
}
