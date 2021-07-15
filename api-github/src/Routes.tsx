import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
