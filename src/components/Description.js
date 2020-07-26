import React from "react";
import styles from "./Description.module.sass";
import Layout from "./Layout";

export default function Description() {
  const DESCRIPTION = ` 
RSA encryption (Rivest-Shamir-Adleman) is an algorithm for encrypting and decrypting messages. It is one of the first public key cryptographic systems for secure data transmission, first described in 1977.\\
After reading about RSA, we wanted to build a website to demonstrate how it works. We did this using a React-driven technology stack, and the source code is available to view from the GitHub repository.\\
One problem we faced is handling the huge numerical values from a^b at both encryption and decryption stages. To combat this we applied modulus n at each step instead of at the end to prevent the numbers from ballooning.
On the front-end we were challenged with transferring calculated values between components. We solved this issue by storing the shared values in the state of the common parent component, taking care when accessing data from “uncontrolled” components like text fields.
`;

  const paragraphs = DESCRIPTION.split("\\");

  return (
    <div className={styles.description}>
      <Layout>
        {paragraphs.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </Layout>
    </div>
  );
}
