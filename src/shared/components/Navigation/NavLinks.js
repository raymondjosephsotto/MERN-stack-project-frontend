import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import PlaceIcon from "@material-ui/icons/Place";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
// import "./NavLinks.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const body = (
    <div className="modal">
      <header className="modal__header">
        <h2>Are you sure you want to Logout?</h2>
      </header>
      <div className="modal__content">
        <Button
          variant="contained"
          color="secondary"
          href="/"
          onClick={auth.logout}
        >
          LOG OUT
        </Button>
        <Button variant="contained" onClick={handleClose}>
          CANCEL
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <List component="nav">
        <ListItem component={NavLink} to="/users" exact button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="ALL USERS" />
        </ListItem>

        {auth.isLoggedIn && (
          <ListItem component={NavLink} to={`/${auth.userId}/places`} button>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="MY PLACES" />
          </ListItem>
        )}

        {auth.isLoggedIn && (
          <ListItem component={NavLink} to="/places/new" button>
            <ListItemIcon>
              <AddPhotoAlternateIcon />
            </ListItemIcon>
            <ListItemText primary="ADD PLACE" />
          </ListItem>
        )}

        {!auth.isLoggedIn && (
          <ListItem component={NavLink} to="/" button>
            <ListItemText primary="LOG IN" />
          </ListItem>
        )}

        {auth.isLoggedIn && (
          <ListItem>
            <Button
              variant="contained"
              color="secondary"
              component="button"
              type="button"
              onClick={handleOpen}
            >
              LOG OUT
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openModal}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              {body}
            </Modal>
          </ListItem>
        )}
      </List>
    </div>
  );
};



export default NavLinks;
