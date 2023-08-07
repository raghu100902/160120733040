// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './components/AllTrains.js';
// import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        {/* <Route path="/train/:id" component={SingleTrain} /> */}
      </Switch>
    </Router>
  );
}

export default App;
