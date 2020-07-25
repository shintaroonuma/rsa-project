import React from "react";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>RSA Encrypter/Decrypter</h1>
    </header>
  );
}
