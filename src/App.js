import './App.css';
import Profile from "./profile"
import Exhibit from "./Exhibit";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header>
        HEADER
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/exhibit">
            <Exhibit />
          </Route>
        </Switch>
      </Router>
      <footer>
        FOOTER
      </footer>
    </div>
  );
}

export default App;
