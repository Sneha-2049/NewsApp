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
        <Route exact path="/" element={<News key="general" pagesize={pagesize} country='in' category='general' />} />
        <Route exact path="/sports" element={<News key="sports" pagesize={pagesize} country='in' category='sports' />} />
        <Route exact path="/technology" element={<News key="technology" pagesize={pagesize} country='in' category='technology' />} />
        <Route exact path="/health" element={<News key="health" pagesize={pagesize} country='in' category='health' />} />
        <Route exact path="/science" element={<News key="science" pagesize={pagesize} country='in' category='science' />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={pagesize} country='in' category='entertainment' />} />
        <Route exact path="/business" element={<News key="business" pagesize={pagesize} country='in' category='business' />} />
      </Routes>
    </Router>
  );
}

export default App;




// import React from 'react';
// import Navbar from './component/Navbar';
// import News from './component/News';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
// }from "react-router-dom"

// function App() {

//   return (
//     <>
//     {/* <Navbar /> */}
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/">
//         <News pagesize={5} country='in' category='general'/>
//         </Route>
//         <Route path="/sports">
//         <News pagesize={5} country='in' category='sports'/>
//          </Route>
//         <Route path="/technology">
//         <News pagesize={5} country='in' category='technology'/>
//         </Route>
//         <Route path="/health">
//         <News pagesize={5} country='in' category='health'/>
//         </Route>
//         <Route path='/education'>
//         <News pagesize={5} country='in' category='education'/>
//         </Route>
//         <Route path='/technology'>
//         <News pagesize={5} country='in' category='technology'/>
//         </Route>
//         <Route path='/science'>
//         <News pagesize={5} country='in' category='science'/>
//         </Route>
//         <Route path='/entertainment'>
//         <News pagesize={5} country='in' category='entertainment'/>
//         </Route>
//         <Route path='/business'>
//         <News pagesize={5} country='in' category='business'/>
//         </Route>
//       </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
