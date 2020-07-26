import React from "react";
import KeyGenSection from "./KeyGenSection";
import EncryptionSection from "./EncryptionSection";
import DecryptionSection from "./DecryptionSection";

/**
 * Component which contains the sections for generating keys, encrypting and
 * decrypting.
 *
 * This component is used so that the values calculated can be transferred
 * across the sections using state.
 */
export default class Walkthrough extends React.Component {
  render() {
    return (
      <div>
        <KeyGenSection />
        <EncryptionSection />
        <DecryptionSection />
      </div>
    );
  }
}
