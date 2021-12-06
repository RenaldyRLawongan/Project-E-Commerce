import React from 'react';
import { Routes, Route } from "react-router-dom";
import Popular from './pages/Popular';

import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Popular />} />
    </Routes>
  );
}

export default App;
