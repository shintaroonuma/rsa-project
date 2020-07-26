import React from "react";
import styles from "./TextBox.module.sass";

/**
 * A styled textbox component which adds support for error messages.
 *
 * The following React `props` are required:
 * @param type equivalent to the attribute in `<input>` of the same name
 * @param placeholder equivalent to the attribute in `<input>` of the same name
 * @param getError a function which takes the input, validates it, and returns
 * an error message string if invalid, otherwise it returns an empty string.
 * @param defaultVal the value to use as the default in the TextBox
 *
 * This component stores state: `value` is the current text in the textbox and
 * `hasUsed` is true after the user enters something into the textbox or focuses
 * out of it.
 */
export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", hasUsed: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.inputRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.defaultVal !== this.props.defaultVal) {
      if (this.props.defaultVal) {
        console.log("defaultVal changed: updating state");
        this.setState({ value: this.props.defaultVal });
      }
    }
  }

  handleChange(event) {
    this.setState({ value: this.inputRef.current.value, hasUsed: true });
    event.preventDefault();
  }

  handleBlur() {
    this.setState({ hasUsed: true });
  }

  render() {
    let textboxCls = styles.textbox;
    let errorElement = "";

    const errorMsg = this.props.getError(this.state.value);
    if (errorMsg && this.state.hasUsed) {
      textboxCls = styles.textbox + " " + styles.textboxError;
      errorElement = <p className={styles.error}>{errorMsg}</p>;
    }

    return (
      <div className={styles.container}>
        <input
          ref={this.inputRef}
          type={this.props.type}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultVal}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={textboxCls}
        />
        {errorElement}
      </div>
    );
  }
}
