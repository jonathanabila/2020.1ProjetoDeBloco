import React from 'react';
import './App.css';
import Menu from './containers/Menu';
import Map from './containers/Map';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <div className="App">
      <Menu />
      <Map />
      <Recommendations />
    </div>
  );
}

export default App;
