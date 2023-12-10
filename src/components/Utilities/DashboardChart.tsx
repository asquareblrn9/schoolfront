import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const DashboardChart: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  // const handleDateChange = (newDate: Date | Date[]) => {
  //     setDate(newDate);
  //   };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col md={8} sm={12}>
            <Card className="border-0 dash-card">
                <CardBody className="p-5">
                  <h2>Student overview</h2>
                  <Bar data={data} options={options} />
                </CardBody>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              
              {/* <div className="p-3">
                        <h5>Current Session</h5>
                       <h6 className="text-warning">2010/2011</h6>
                        </div>

                        <div className="p-3">
                        <h5>Next Term Resumes:</h5>
                       <h6 className="text-warning">22nd Jan 2011</h6> 
                        </div>
                        */}
              <Card className="border-0 dash-card">
                <CardBody>
                    <div className="mt-3">
                      <h3>Calendar</h3>  
                    </div>
                    
                    <div className="d-flex justify-content-center w-100 h-100 py-5">
                       <Calendar value={date}  className="border-0" />  
                    </div>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DashboardChart;
