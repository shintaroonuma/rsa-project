import React from "react";
import styles from "./EncryptionSection.module.sass";
import Section from "./Section";
import Container from "./Container";
import TextBox from "./TextBox";
import Emoji from "./Emoji";

export default class EncryptionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ciphertext: null };

    this.textboxRef = React.createRef();
  }

  render() {
    return (
      <Section title="2. Encryption">
        <div className={styles.container}>
          <Container title="Encrypt some text">
            <TextBox
              type="text"
              placeholder="Secret message..."
              getError={() => ""}
            />
            <button>
              Encrypt <Emoji label="lock" symbol="🔒" />
            </button>
          </Container>
          <Container title="Ciphertext" />
        </div>
      </Section>
    );
  }
}
