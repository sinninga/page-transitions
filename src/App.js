import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';


function App() {
  return (
    <div className="App">
      <div class="container">
      <Navbar />
      <Banner />
      </div>
    </div>
  );
}

export default App;
