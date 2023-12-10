import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { HiAcademicCap } from "react-icons/hi2";

const DashboardCards = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <Card className="border-0 shadow dash-card">
              <CardBody className="py-4">
                <Row>
                  <Col md={3} sm={12}>
                      <HiAcademicCap className="text-danger icons" />
                  </Col>
                  <Col md={9} sm={12} className="p-3">
                    <div className="d-flex flex-column align-items-end">
                      <h3>Students</h3>
                      <h4 className="text-danger">56</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>


          <Col md={3} sm={12}>
            <Card className="border-0 shadow dash-card">
              <CardBody className="py-4">
                <Row>
                  <Col md={3} sm={12}>
                      <HiAcademicCap className="text-danger icons" />
                  </Col>
                  <Col md={9} sm={12} className="p-3">
                    <div className="d-flex flex-column align-items-end">
                      <h3>Teachers</h3>
                      <h4 className="text-danger">56</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className="border-0 shadow dash-card">
              <CardBody className="py-4">
                <Row>
                  <Col md={3} sm={12}>
                      <HiAcademicCap className="text-danger icons" />
                  </Col>
                  <Col md={9} sm={12} className="p-3">
                    <div className="d-flex flex-column align-items-end">
                      <h3>Classess</h3>
                      <h4 className="text-danger">56</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className="border-0 shadow dash-card">
              <CardBody className="py-4">
                <Row>
                  <Col md={3} sm={12}>
                      <HiAcademicCap className="text-danger icons" />
                  </Col>
                  <Col md={9} sm={12} className="p-3">
                    <div className="d-flex flex-column align-items-end">
                      <h3>Subjects</h3>
                      <h4 className="text-danger">56</h4>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DashboardCards;
