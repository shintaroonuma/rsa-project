import React from "react";
import Section from "./Section";
import Container from "./Container";
import TextBox from "./TextBox";
import Emoji from "./Emoji";

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

    this.textboxRef = React.createRef();
    this.onEncrypt = this.onEncrypt.bind(this);
  }

  /**
   * Action to be invoked when the "Encrypt" button is pressed.
   * The text in the textbox will be encrypted and displayed to the user.
   * The state of this component will be updated with the new ciphertext.
   */
  onEncrypt() {
    const currentTextbox = this.textboxRef.current;
    const input = currentTextbox.state.value;

    // TODO: Replace dummy
    const newCipher = input;
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
            getError={() => ""} // TODO: validation of length, chars, etc...
            ref={this.textboxRef}
          />
          <button onClick={this.onEncrypt}>
            Encrypt <Emoji label="lock" symbol="🔒" />
          </button>
        </Container>
        <Container title="Ciphertext">
          <table>
            <tr>
              <th>
                <p>ciphertext:</p>
              </th>
              <td>
                <p>{this.state.ciphertext}</p>
              </td>
            </tr>
          </table>
        </Container>
      </Section>
    );
  }
}
