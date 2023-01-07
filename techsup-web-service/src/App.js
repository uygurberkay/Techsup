import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'

function App() {
  return (
    // BEM  (Come Alive)
    <div className="App">
    {/* Header render imported above */}
    <Header /> 
    {/* Home */}
    <Home />
    </div>
  );
}

export default App;
