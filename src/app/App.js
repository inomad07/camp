import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../common/components/layouts/Header';
import Home from '../features/components/pages/Home';
import AboutUs from '../features/components/pages/AboutUs';

import './App.scss';


const App = () => {
  return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
        </div>
      </Router>
  )
};

export default App;