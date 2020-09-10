import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

class CenterLayout extends React.Component {
  render() {
    return (
      <StyledComponent>
        <div>{this.props.children}</div>
      </StyledComponent>
    );
  }
}

export default CenterLayout;
