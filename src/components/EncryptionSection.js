import React from "react";
import Section from "./Section";
import Container from "./Container";
import TextBox from "./TextBox";
import Emoji from "./Emoji";
import { encrypt } from "../rsa";
import { isAscii } from "../util";

/**
 * Section for the user to encrypt a message.
 *
 * @param {object} props this component needs `n` and `publicKey` as props to be
 * able to encrypt the message. Also takes a function `onCiphertextUpdated`
 * which should be invoked when the ciphertext changes.
 */
export default class EncryptionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ciphertext: null };

    this.getErrorMsg = this.getErrorMsg.bind(this);

    this.textboxRef = React.createRef();
    this.onEncrypt = this.onEncrypt.bind(this);
  }

  /**
   * Returns an error message string from validating the value, or an empty
   * string if the value is valid.
   * @param {string} str input string
   * @returns {string}
   */
  getErrorMsg(str) {
    if (str === "") {
      return "Enter a message to encrypt.";
    }

    if (isAscii(str)) {
      return "";
    } else {
      return "Only ASCII characters are permitted.";
    }
  }

  /**
   * Action to be invoked when the "Encrypt" button is pressed.
   * The text in the textbox will be encrypted and displayed to the user.
   * The state of this component will be updated with the new ciphertext.
   */
  onEncrypt() {
    const currentTextbox = this.textboxRef.current;
    const input = currentTextbox.state.value;

    const newCipher = encrypt(this.props.publicKey, this.props.n, input);

    this.setState({ ciphertext: newCipher });
    this.props.onCiphertextUpdated(newCipher);
  }

  render() {
    return (
      <Section title="2. Encryption">
        <Container title="Encrypt some text">
          <TextBox
            type="text"
            placeholder="Secret message..."
            getError={this.getErrorMsg}
            ref={this.textboxRef}
          />
          <button onClick={this.onEncrypt}>
            Encrypt <Emoji label="lock" symbol="🔒" />
          </button>
        </Container>
        <Container title="Ciphertext">
          <table>
            <tbody>
              <tr>
                <th>
                  <p>ciphertext:</p>
                </th>
                <td>
                  <p>{this.state.ciphertext}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
    );
  }
}
