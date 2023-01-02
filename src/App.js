import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Liked from "./components/Liked";

const optionsType = [
  "recreational",
  "social",
  "charity",
  "education",
  "music",
  "busywork",
  "relaxation",
];
function App() {
  return (
    <div className="App">
      <div className="menuSide">
        <nav className="navs">
          <NavLink exact className="navItem" activeClassName="selected" to="/">
            Home
          </NavLink>

          {optionsType.map((element, key) => {
            return (
              <NavLink
                key={key}
                className="navItem"
                activeClassName="selected"
                to={`/category/${element}`}
              >
                <span className="navLink">{element}</span>
              </NavLink>
            );
          })}
          <NavLink className="navItem" activeClassName="selected" to="/liked">
            Liked
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:id">
            <Main />
          </Route>
          <Route path="/liked">
            <Liked />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
