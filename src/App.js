import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Dishes from './pages/Dishes';
import AddDish from './pages/AddDish';
import Dish from './pages/Dish';
import EditDish from './pages/EditDish';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/addDish" component={AddDish} />
            <Route path="/dish/:id" component={EditDish} />
            <Route path="/dish" component={Dish} />
            <Route path="/" component={Dishes} />
          </Switch>
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;
