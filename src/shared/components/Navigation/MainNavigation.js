import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import {
  makeStyles,
  Switch,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import "./MainNavigation.css";

/* JSS [CSS-in-JS] Approach with makeStyles */
const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: `2rem`,
  },
  titleLink: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const MainNavigation = ({ props, onThemeToggle }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  /* Call useStyles() */
  const classes = useStyles();

  return (
    <div>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        {/* [MainHeader === Appbar] MainHeader has a MUI AppBar wrapped in it */}
        <Toolbar>
          <div className={classes.buttonWrapper}>
            <IconButton onClick={openDrawerHandler}>
              <MenuIcon />
            </IconButton>
            <Switch color="primary" onClick={onThemeToggle} />
          </div>
          <Typography variant="h1" className={classes.title}>
            <Link className={classes.titleLink} to="/">
              Travelog.
            </Link>
          </Typography>
        </Toolbar>
      </MainHeader>
    </div>
  );
};

export default MainNavigation;
