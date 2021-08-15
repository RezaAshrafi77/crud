import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./views/Home/index";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;
