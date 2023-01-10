import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Car from 'pages/Car';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cars">
        <Car />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
