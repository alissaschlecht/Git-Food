import React from 'react';
import './App.scss';
// import Button from './components/Button';
import Wrapper from './components/Wrapper';
import Header from './components/Header';


import Text from './components/Text/Text';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Wrapper>
        <Text.Heading level={5} color="lightGrey">
					Firstname's Dishes
				</Text.Heading>


      </Wrapper>

    </div>
  );
}

export default App;
