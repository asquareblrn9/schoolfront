import React from 'react'
import DashboardHeader from '../Utilities/DashboardHeader'
import DashboardCards from '../Utilities/DashboardCards'
import DashboardChart from '../Utilities/DashboardChart'
import DashboardStudent from '../Utilities/DashboardStudent'

const Dashboard = () => {
  return (
    <>
    <DashboardHeader />
    <DashboardCards />
    <DashboardChart />
    <DashboardStudent />
    </>
  )
}

export default Dashboard