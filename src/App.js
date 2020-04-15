import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Posts from './Pages/Posts/App';
import Contacts from './Pages/Contacts/App';
import Main from './Pages/Main/Main';
import Images from './Pages/Images/Images';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
            <Link to="/images">Images</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
