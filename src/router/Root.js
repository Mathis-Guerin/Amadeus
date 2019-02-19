import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Airlines from '../components/Airlines';
import Home from '../components/Home';
import Flights from '../components/Flights';
import FlightDetails from '../components/FlightDetails';
import Search from '../components/Search';

function Root() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/airlines" component={Airlines} />
      <Route exact path="/flights" component={Flights} />
      <Route exact path="/flight-details" component={FlightDetails} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
}

export default Root;
