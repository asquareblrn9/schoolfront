import React from 'react';
import {Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import './index.css'
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
