import React from "react";

import { AppBar } from "@material-ui/core";

// import './MainHeader.css';


const MainHeader = (props) => {
  return (
    <AppBar position="static">
      {props.children}
    </AppBar>
  );
};

export default MainHeader;
