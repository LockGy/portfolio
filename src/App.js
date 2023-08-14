import React from 'react';
import './App.css';
import './Navbar.css';
import Header from './components/Header/Header';
import Profit_Details from './components/Profit_Details/Profit_Details';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Header />
      <Profit_Details/>
      <Navbar/>


    </div>
  );
}

export default App;

