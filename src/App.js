import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Header } from "../src/components/Header/Header";
import { Home } from "../src/containers/Home/index";
import { About } from "../src/containers/About/index";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
