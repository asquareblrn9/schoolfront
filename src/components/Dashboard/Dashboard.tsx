import React, { ReducerState } from "react";
import DashboardHeader from "../Utilities/DashboardHeader";
import DashboardCards from "../Utilities/DashboardCards";
import DashboardChart from "../Utilities/DashboardChart";
import DashboardStudent from "../Utilities/DashboardStudent";
import { Col, Container, Row } from "react-bootstrap";
import SideNav from "../SideBar/SideNav";
import DashboardPerform from "../Utilities/DashboardPerform";
import AdminLayout from "../Main/AdminLayout";
import { useAppSelector } from "../../app/store";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {

  return (
    <>
      <AdminLayout>
        <DashboardCards />
        <DashboardChart />
        <DashboardStudent />
        <DashboardPerform />
      </AdminLayout>
    </>
  );
};

export default Dashboard;
