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
  constructor(props) {
    super(props);

    this.state = {
      n: null,
      publicKey: null,
      privateKey: null,
      ciphertext: null
    };

    this.onKeysUpdated = this.onKeysUpdated.bind(this);
    this.onCiphertextUpdated = this.onCiphertextUpdated.bind(this);
  }

  /**
   * Callback function invoked when KeyGenSection updates the following values:
   * @param {number} n
   * @param {number} publicKey
   * @param {number} privateKey
   */
  onKeysUpdated(n, publicKey, privateKey) {
    this.setState({ n: n, publicKey: publicKey, privateKey: privateKey });
  }

  /**
   * Callback function invoked when EncryptionSection updates the ciphertext
   * @param {string} newCipher
   */
  onCiphertextUpdated(newCipher) {
    this.setState({ ciphertext: newCipher });
  }

  render() {
    return (
      <div>
        <KeyGenSection onKeysUpdated={this.onKeysUpdated} />
        <EncryptionSection
          n={this.state.n}
          publicKey={this.state.publicKey}
          onCiphertextUpdated={this.onCiphertextUpdated}
        />
        <DecryptionSection
          n={this.state.n}
          privateKey={this.state.privateKey}
          ciphertext={this.state.ciphertext}
        />
      </div>
    );
  }
}
