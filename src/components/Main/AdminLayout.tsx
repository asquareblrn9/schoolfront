import React, { ReactNode, useState } from 'react'
import DashboardHeader from '../Utilities/DashboardHeader'
import DashboardFooter from '../Dashboard/DashboardFooter'
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from '../SideBar/SideNav';


interface LayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container fluid className='min-vh-100 bg-info'>
      <Row>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className='col-md-3 col-lg-2 col-sm-2 bg-info shadow border border-2 border-primary sides'>
            <SideNav />
          </div>
        )}
       {isSidebarOpen && <div className='col-2'></div> }

        {/* Main content */}
        <div className='col content' >
          <DashboardHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          {children}
          <DashboardFooter/>
        </div>
      </Row>
    </Container>
 
  )
}

export default AdminLayout