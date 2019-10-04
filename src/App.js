import React from 'react';
import './App.scss';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Dishes from './pages/Dishes';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Wrapper>
        <Dishes/>
      </Wrapper>
      <Footer />

    </div>
  );
}

export default App;
