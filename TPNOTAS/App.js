import React from 'react';
import Sidebar from './Sidebar';
import CabeceraNota from './CabeceraNota';
import CuerpoNota from './CuerpoNota';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="contenido">
        <CabeceraNota />
        <CuerpoNota />
      </div>
    </div>
  );
};

export default App;
