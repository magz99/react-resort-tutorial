import React from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    /* Because the navigation will be displayed on the 404 page as well, it needs to wrap
       the switch component
       */
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>

    </>
  );
}

export default App;
