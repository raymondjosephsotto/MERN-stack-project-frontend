import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Drawer from "@material-ui/core/Drawer";

import NavLinks from "../Navigation/NavLinks";

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
      onClick={props.onClick}
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
