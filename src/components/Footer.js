import React from "react";
import styles from "./Footer.module.sass";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Layout>
        <p className={styles.text}>
          Designed and developed by:{" "}
          <a
            className={styles.highlight}
            href="https://github.com/shintaroonuma"
          >
            Shintaro Onuma
          </a>{" "}
          and{" "}
          <a className={styles.highlight} href="https://github.com/farbodsz">
            Farbod Salamat-Zadeh
          </a>
          .
        </p>
        <p className={styles.text}>
          Built using React.{" "}
          <a
            className={styles.highlight}
            href="https://github.com/shintaroonuma/rsa-project"
          >
            View source code on GitHub.
          </a>
        </p>
      </Layout>
    </footer>
  );
}
