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
import Category from './components/Category/Category';
import Subjects from './components/Subject/Subjects';


function App() {
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/classess' element={<Classess />} />
      <Route path='/category' element={<Category />} />
      <Route path='/subjects' element={<Subjects />} />
    </Routes>
    </>
  );
}

export default App;
