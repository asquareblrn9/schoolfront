import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LiaDashcube } from 'react-icons/lia';

const SideNav = () => {



    return (
 <div className='sidebar bg-info'>
  <div>
    <i className='px-3'></i>
    <span className='brand-name'>
      <img src='logo192.png' alt='school logo' className='img-fluid' />
    </span>
  </div>
  <hr className='text-dark' />
  <div className='list-group list-group-flush'>
    <a href='#' className='list-group-item list-group-item-action my-2'>
      <LiaDashcube className='fs-1 px-2'/>
      <span>Dashboard</span>
    </a>

    <a href='#' className='list-group-item list-group-item-action my-2'>
      <LiaDashcube className='fs-1 me-2'/>
      <span>Home</span>
    </a>
    <a href='#' className='list-group-item list-group-item-action my-2'>
      <LiaDashcube className='fs-1 me-2'/>
      <span>Dashboard</span>
    </a>

    <a href='#' className='list-group-item list-group-item-action my-2'>
      <LiaDashcube className='fs-1 me-2'/>
      <span>Home</span>
    </a>

  </div>
  </div>
    );
  };
  

export default SideNav