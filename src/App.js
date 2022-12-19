import './App.css';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';

export default function App() {
 
  return (
    <div>
      <Router>
        <Link>
          <Route exact path="./" element={<Home/>}>
           
          </Route>
          <Route path="./search" element={<SearchPage/>}>
         
          </Route>
        </Link>
      </Router>
    <Home />
    </div>
  );
}

//export default App;
