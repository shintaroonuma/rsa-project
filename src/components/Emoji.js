import React from "react";

/**
 * An emoji component.
 * @param props `label`, the string name of the emoji, `symbol`, the emoji
 * itself
 */
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default Emoji;
