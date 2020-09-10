import React from "react";
import FlipSwitch from "src/components/FlipSwitch";
import CenterLayout from "src/layouts/CenterLayout";

class Main extends React.Component {
  render() {
    return (
      <CenterLayout>
        <FlipSwitch />
      </CenterLayout>
    );
  }
}

export default Main;
