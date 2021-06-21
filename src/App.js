import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";

export default function App() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test-1">Test 1</Link>
          </li>
          <li>
            <Link to="/test-2">Test 2</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/test-1">
            <Test1 />
          </Route>
          <Route path="/test-2">
            <Test2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}