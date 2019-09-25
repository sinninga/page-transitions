import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Body from './components/body';


function App() {
  return (
    <div className="App">
      <div class="container">
        <Navbar />
        <Banner />
        <Body />
      </div>
    </div>
  );
}

export default App;
