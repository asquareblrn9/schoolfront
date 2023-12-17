import React from "react";
import AdminLayout from "../Main/AdminLayout";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

const Classess = () => {
  return (
    <>
      <AdminLayout>
        <section className="py-5">
            <Container fluid className="main-body">
                <Row>
                    <Col md={3} sm={12}>
                        <Card>
                            <CardBody className="p-5">
                                <div className="mb-3">
                                  <h3 className="text-primary">Add new class</h3>  
                                </div>
                                
                               <form method="post">
                                <div className="form-group mb-3">
                                    <label className="form-label mb-2">Class Name</label>
                                    <input type="text" name="className" placeholder="Class Name e.g Jss1" className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label mb-2">Class Prefix</label>
                                    <input type="text" name="classPrefix" placeholder="Class Prefix e.g Diamond A, B" className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label mb-2">Category</label>
                                    <input type="text" name="category" placeholder="Class Category" className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label mb-2">Teacher in charge</label>
                                    <input type="text" name="teacherId" placeholder="Class Category" className="form-control" />
                                </div>

                                <button type="submit" className="btn btn-danger w-100 btn-block">Add Class</button>



                               </form>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col md={9} sm={12} className="mb-3">
                        <Card className="py-3 border-0">
                    <CardBody>
                        <h3>Classess</h3>
                        <div className="table-responsive mt-5">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Class Name</th>
                                        <th>Class Category</th>
                                        <th>Teacher</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>

                </Card>
                    </Col>
                </Row>
                
            </Container>
        </section>

      </AdminLayout>
    </>
  );
};

export default Classess;
