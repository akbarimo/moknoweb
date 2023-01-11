import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Premium from './components/Premium';
import Commands from './components/Commands';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './NavBar.jsx';
import './assets/styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/commands" element={<Commands />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </Provider>,
);
