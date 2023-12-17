import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { LiaAlignJustifySolid } from 'react-icons/lia';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';




interface DashboardHeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-primary" >
<i className='navbar-brand p-2 fs-2' onClick={toggleSidebar}>
 <LiaAlignJustifySolid />
 </i>
  <button
    className="navbar-toggler d-lg-none"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapsibleNavId"
    aria-controls="collapsibleNavId"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <LiaAlignJustifySolid />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item dropdown me-5">
        <a
          className="nav-link dropdown-toggle me-5"
          href="#"
          id="dropdownId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">User</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav>


  );
};

export default DashboardHeader
