import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: relative; width: 43px;
  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
  .onoffswitch-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    height: 18px; padding: 0; line-height: 18px;
    border: 2px solid #E3E3E3; border-radius: 18px;
    background-color: #FFFFFF;
    transition: background-color 0.3s ease-in;
  }
  .onoffswitch-label:before {
    content: "";
    display: block; width: 18px; margin: 0px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 23px;
    border: 2px solid #E3E3E3; border-radius: 18px;
    transition: all 0.3s ease-in 0s; 
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #468A45;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label, .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #468A45;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0px; 
  }
`;

class FlipSwitch extends React.Component {
  
  render () {
    return (
      <StyledComponent>
        <input
          onChange={() => {}}
          checked={this.props.checked}
          type="checkbox" name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch" tabIndex="0" />
        <label
          onClick={this.props.onClick}
          className="onoffswitch-label"
          htmlFor="myonoffswitch">
        </label>
      </StyledComponent>
    );
  }

}

export default FlipSwitch;
