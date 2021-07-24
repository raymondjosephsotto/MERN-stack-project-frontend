import React from "react";

import { AppBar } from "@material-ui/core";

// import './MainHeader.css';


const MainHeader = (props) => {
  return (
    <AppBar position="fixed" style={{ background: "#3d9a88" }}>
      {props.children}
    </AppBar>
  );
};

export default MainHeader;
