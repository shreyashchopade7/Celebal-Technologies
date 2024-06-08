// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './FormComponent';
import DetailsComponent from './DetailsComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/details" element={<DetailsComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
