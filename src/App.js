import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import News from './component/News';
import './App.css';

function App() {
  let pagesize = 10
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="general" pagesize={pagesize} country='us' category='general' />} />
        <Route exact path="/sports" element={<News key="sports" pagesize={pagesize} country='us' category='sports' />} />
        <Route exact path="/technology" element={<News key="technology" pagesize={pagesize} country='us' category='technology' />} />
        <Route exact path="/health" element={<News key="health" pagesize={pagesize} country='us' category='health' />} />
        <Route exact path="/science" element={<News key="science" pagesize={pagesize} country='us' category='science' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={pagesize} country='in' category='entertainment' />} />
        <Route exact path="/business" element={<News key="business" pagesize={pagesize} country='us' category='business' />} />
      </Routes>
    </Router>
  );
}

export default App;

