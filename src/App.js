import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Dishes from './pages/Dishes';
import DishForm from './pages/DishForm';
import Dish from './pages/Dish';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/dishForm">
            <DishForm />
          </Route>
          <Route path="/dish">
            <Dish />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>







    </div>
  );
}

export default App;
