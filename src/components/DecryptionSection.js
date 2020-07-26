import React from "react";
import Section from "./Section";
import Container from "./Container";
import TextBox from "./TextBox";
import Emoji from "./Emoji";

/**
 * Section for the user to decrypt a message.
 *
 * @param {object} props this component needs `n` and `privateKey` in order to
 * decrypt the message. `ciphertext` should also be given to use the ciphertext
 * from the previous section.
 */
export default class DecryptionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { plaintext: null };

    this.textboxRef = React.createRef();
    this.onDecrypt = this.onDecrypt.bind(this);
  }

  /**
   * Action to be invoked when the "Decrypt" button is pressed.
   * The text in the textbox will be decrypted and displayed to the user.
   * The state of this component will be updated with the new plaintext.
   */
  onDecrypt() {
    const currentTextbox = this.textboxRef.current;
    const input = currentTextbox.state.value;

    // TODO: Use props to call function in RSA module
    const plaintext = input;
    this.setState({ plaintext: plaintext });
  }

  render() {
    return (
      <Section title="3. Decryption">
        <Container title="Decrypt some text">
          <TextBox
            ref={this.textboxRef}
            type="text"
            placeholder="Ciphertext"
            defaultVal={this.props.ciphertext}
            getError={() => ""} // TODO: validation of length, chars, etc...
          />
          <button onClick={this.onDecrypt}>
            Decrypt <Emoji label="unlock" symbol="🔓" />
          </button>
        </Container>
        <Container title="Decrypted message">
          <table>
            <tr>
              <th>
                <p>plaintext:</p>
              </th>
              <td>
                <p>{this.state.plaintext}</p>
              </td>
            </tr>
          </table>
        </Container>
      </Section>
    );
  }
}
