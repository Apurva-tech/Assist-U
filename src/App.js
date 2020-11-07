import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../src/components/Header.component";
import { Home } from "../src/containers/Home";
import { About } from "../src/containers/About";

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
