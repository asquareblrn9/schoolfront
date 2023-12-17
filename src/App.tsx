import React from 'react';
import {Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import './index.css'
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Classess from './components/Classess/Classess';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/classess' element={<Classess />} />
    </Routes>
    </>
  );
}

export default App;
