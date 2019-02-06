import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import ConsoleContainer from "./console-container";
import ConsoleGutter from "./console-gutter";
import levels from "./log-levels";
import THEME from "../../../../shared/theme";

const MessageContainer = styled(ConsoleContainer)`
  overflow: auto;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const MessageBody = styled("div")`
  font-family: ${THEME.client.console.fontFamily};
  margin: auto;
  margin-left: 0;
  padding-top: 5px;
  padding-bottom: 5px;
`;

// the test here needs to check that it outputs backgroundColor, textColor, symbol
export const mapProps = level => {
  return levels[level];
};

const ConsoleMessage = ({ children, level }) => {
  const { backgroundColor, textColor, symbol } = mapProps(level);
  return (
    <MessageContainer
      backgroundColor={backgroundColor}
      textColor={textColor || "black"}
    >
      <ConsoleGutter>{symbol}</ConsoleGutter>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
};

ConsoleMessage.propTypes = {
  level: PropTypes.oneOf(Object.keys(levels)).isRequired
};

export default ConsoleMessage;
