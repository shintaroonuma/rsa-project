import React from "react";
import styles from "./KeyGenerator.module.sass";
import Section from "./Section";
import TextBox from "./TextBox";
import {
  UPPER_BOUND,
  LOWER_BOUND,
  checkBound,
  checkPrime,
  generateN,
  generatePublic,
  generatePrivate
} from "../rsa";

/**
 * Section containing inputs, a button, and texts for generating keys.
 *
 * Two textboxes are used for prime number inputs. The generate button is
 * pressed and the resulting values are then displayed: the public key, private
 * key and the product of the primes N.
 *
 * Its state stores the generated values of:
 *  - public key
 *  - private key
 *  - N
 * if they exist
 */
export default class KeyGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: null, publicKey: null, privateKey: null };

    this.getErrorMsg = this.getErrorMsg.bind(this);

    this.textbox1Ref = React.createRef();
    this.textbox2Ref = React.createRef();
    this.onGenerate = this.onGenerate.bind(this);
  }

  /**
   * Returns an error message string from validating the value, or an empty
   * string if the value is valid.
   * @param {string} value
   * @returns {string}
   */
  getErrorMsg(value) {
    if (value === "") {
      return "Enter a prime number.";
    }

    const x = parseInt(value);

    if (!checkBound(x)) {
      return `The value must be between ${LOWER_BOUND} and ${UPPER_BOUND}.`;
    } else if (!checkPrime(x)) {
      return "Make sure your value is prime.";
    } else {
      return "";
    }
  }

  /**
   * Returns whether the given value is valid, i.e. gives no error message.
   * @see {getErrorMsg}
   */
  isValid(value) {
    return !this.getErrorMsg(value);
  }

  /**
   * Action to be invoked when the "Generate" button is pressed.
   *
   * If both inputs are valid, then the public key, private key, and N will be
   * calculated and displayed. Otherwise, the generated values will be not
   * shown.
   *
   * When this button is clicked, textboxes with invalid input will show an
   * error message even if they have not been interacted with.
   */
  onGenerate() {
    const currentInput1 = this.textbox1Ref.current;
    const currentInput2 = this.textbox2Ref.current;

    // Force display error messages if invalid input
    currentInput1.setState({ hasUsed: true });
    currentInput2.setState({ hasUsed: true });

    const input1 = currentInput1.state.value;
    const input2 = currentInput2.state.value;

    if (this.isValid(input1) && this.isValid(input2)) {
      this.calculateValues(parseInt(input1), parseInt(input2));
    } else {
      this.setState({ n: null, publicKey: null, privateKey: null });
    }
  }

  /**
   * Calculates N, public key, and the private key using the two given primes.
   * The state of this component is updated with the new values.
   * @param {number} p the first prime number
   * @param {number} q the second prime number
   */
  calculateValues(p, q) {
    const n = generateN(p, q);
    const e = generatePublic(p, q);
    const d = generatePrivate(p, q);
    this.setState({ n: n, publicKey: e, privateKey: d });
  }

  render() {
    return (
      <Section title="1. Generate keys">
        <div className={styles.container}>
          <div className={styles.form}>
            <p className={styles.desc}>Choose two prime numbers</p>
            <TextBox
              type="number"
              placeholder="First prime"
              getError={this.getErrorMsg}
              ref={this.textbox1Ref}
            />
            <TextBox
              type="number"
              placeholder="Second prime"
              getError={this.getErrorMsg}
              ref={this.textbox2Ref}
            />
            <button onClick={this.onGenerate} className={styles.button}>
              Generate
            </button>
          </div>
          <div>
            <p className={styles.desc}>Generated values</p>
            <table className={styles.table}>
              <tr>
                <th>
                  <p className={styles.variable}>N:</p>
                </th>
                <td>
                  <p className={styles.value}>{this.state.n}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p className={styles.variable}>Public key:</p>
                </th>
                <td>
                  <p className={styles.value}>{this.state.publicKey}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p className={styles.variable}>Private key:</p>
                </th>
                <td>
                  <p className={styles.value}>{this.state.privateKey}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Section>
    );
  }
}
