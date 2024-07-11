import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing/Landing';
import Question1 from './components/Question1/Question1';
import QuotesQuestion from './components/QuotesQuestion/QuotesQuestion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/quotes/:genres" element={<QuotesQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;

