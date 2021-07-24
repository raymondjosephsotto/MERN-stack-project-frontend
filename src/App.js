import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

const Users = React.lazy(() => import("./user/pages/Users"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const Auth = React.lazy(() => import("./user/pages/Auth"));

const App = () => {
  /*** START- User Authentication ***/
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/users" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  /*** END- User Authentication ***/

  /*** START - Material UI Config ***/
  // Set theme initial state as FALSE
  const [theme, setTheme] = useState(false);

  // paletteType checks if the pallette is set to Dark or Light using ES6 Contditional Ternary Operator
  const paletteType = theme ? "dark" : "light";

  // Create Material UI Theme using createMuiTheme() and injects the paletteType conditional statement
  const muiTheme = createMuiTheme({
    palette: {
      type: paletteType,
    },
  });

  // Changes the current state of theme to 'TRUE'
  const toggleThemeChange = () => {
    setTheme(!theme);
  };

  /* Custom MaterialUI Theming */
  const useStyles = makeStyles((theme) => ({
    root: {
      palette: {
        teal: {
          main: "#3d9a88",
          contrastText: "#fff",
        },
      },
    },
  }));

  const classes = makeStyles();

  /*** END - Material UI Config ***/

  return (
    <ThemeProvider className={classes.root} theme={muiTheme}>
      {/*Material UI's CSSBaseline component sets with changing the background colors on the body. */}
      <CssBaseline />
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          {/* Pass the MUITheme as props */}
          <MainNavigation onThemeToggle={toggleThemeChange} />
          <main>
            <Suspense
              fallback={
                <div className="center">
                  <LoadingSpinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </main>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
