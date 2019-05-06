import React from 'react';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';

const Routes = (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faq" component={ FAQ } />
    </div>
  </BrowserRouter>
)

export default Routes;