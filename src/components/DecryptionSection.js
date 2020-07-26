import React from "react";
import styles from "./DecryptionSection.module.sass";
import Section from "./Section";
import Container from "./Container";
import TextBox from "./TextBox";
import Emoji from "./Emoji";

/**
 * Section for the user to decrypt a message.
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

    // TODO: Replace dummy
    const plaintext = input;
    this.setState({ plaintext: plaintext });
  }

  render() {
    return (
      <Section title="3. Decryption">
        <div className={styles.container}>
          <Container title="Decrypt some text">
            <TextBox
              type="text"
              placeholder="Ciphertext"
              getError={() => ""} // TODO: validation of length, chars, etc...
              ref={this.textboxRef}
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
        </div>
      </Section>
    );
  }
}
