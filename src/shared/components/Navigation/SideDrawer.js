import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

import NavLinks from "../Navigation/NavLinks";

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({ 
  list: {
    width: "auto",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paper: {
    width: 250,
  },
}));

const SideDrawer = (props) => {
  /* Declare makeStyles(); */
  const classes = makeStyles();



  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={props.show}
      onClose={props.onClick}
      // onClick={props.onClick}
      className={clsx(classes.list)}
      classes={{
      	paper: clsx(classes.paper)
      }}
    >
   <NavLinks/>
    </Drawer>
  );
};

export default SideDrawer;
