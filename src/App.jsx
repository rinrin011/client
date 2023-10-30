import './App.css';
import { BrowserRouter, Link, Switch, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { useState, useEffect } from 'react';
import Main from './components/HomePage/Main';

function App() {

  return (
    <div className="App">
        <Main />
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
