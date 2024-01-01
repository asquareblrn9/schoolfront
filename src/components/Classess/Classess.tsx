import React, { ChangeEvent, useEffect, useState } from "react";
import AdminLayout from "../Main/AdminLayout";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  addClass,
  deleteClass,
  getAllCategory,
  getAllClass,
  getAllTeachers,
  getSingleClass,
  updateClass,
} from "../../features/classSlice";
import { toast } from "react-toastify";
import { HiTrash } from "react-icons/hi2";
import { LiaEdit } from "react-icons/lia";

const Classess = () => {
  //initalize dispatch function 
  const dispatch = useAppDispatch();

  //get payloads from classSlice
  const { allCategory, allTeachers, classess, singleClass } = useAppSelector(
    (state) => state.classes
  );

  //state to refresh page
  const [hasExecuted, setExecuted] = useState(false);

  //modal state 
  const [show, setShow] = useState(false);

  //close modal
  const handleClose = () => setShow(false);

  //open modal and fetch class details 
  const handleShow = async (id: number) => {
    await dispatch(getSingleClass(id)).then(() => {
      setShow(true);
    });

    console.log(singleClass);
  };

  //interface
  interface FormData {
    className: string;
    classPrefix: string;
    category: string;
    teacherId: number;
    id?:string
  }

  //state for the data
  const [formData, setFormData] = useState<FormData>({
    className: "",
    classPrefix: "",
    category: "",
    teacherId: 0,
  });

  //edit form
  const [editFormData, setEditFormData] = useState<FormData>({
    className: "",
    classPrefix: "",
    category: "",
    teacherId: 0,
    id:''
  });

  //edit form
  const handleEditClass = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { className, classPrefix, category, teacherId, id } = editFormData;
    const data = {
      className,
      classPrefix,
      category,
      teacherId,
      id
    };

    // Dispatch an action to update the class
    dispatch(updateClass(data)).unwrap().then((response)=>{
      setExecuted(!hasExecuted)
      toast.success("Class updated successfully")
    }).catch((error: any)=>{
      toast.error(error)
    })

    // Close the modal
    handleClose();
  };

  //add class
  const handleAddClass = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { className, classPrefix, category, teacherId } = formData;
    let data = {
      className,
      classPrefix,
      category,
      teacherId,
    };
    dispatch(addClass(data))
      .unwrap()
      .then((response: any) => {
        setExecuted(!hasExecuted);
        toast.success("Class Added Successfully");
      })
      .catch((error: any) => {
        toast.error(error);
        console.log(error);
      });
  };

  //handleipnutchange
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle select change
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleInputChangeEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle select change
  const handleSelectChangeEdit = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //useEffect to get teachers, class, category
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllTeachers());
    dispatch(getAllClass());

    if (singleClass) {
      setEditFormData({
        className: singleClass.className,
        classPrefix: singleClass.classPrefix,
        category: singleClass.category,
        teacherId: singleClass.teacherId,
        id:singleClass.id
      });
    }
  }, [hasExecuted, singleClass]);

  //serial number
  let sn: number = 0;

  //delete class
  const handleDeleteClass = (id: number) => {
    dispatch(deleteClass(id))
      .then((response: any) => {
        setExecuted(!hasExecuted);
        toast.warning("Class deleted successfully");
      })
      .catch((error: any) => {
        toast.error(error);
      });
  };

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

                    <form method="post" onSubmit={handleAddClass}>
                      <div className="form-group mb-3">
                        <label className="form-label mb-2">Class Name</label>
                        <input
                          type="text"
                          name="className"
                          placeholder="Class Name e.g Jss1"
                          className="form-control"
                          value={formData.className}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label className="form-label mb-2">Class Prefix</label>
                        <input
                          type="text"
                          name="classPrefix"
                          placeholder="Class Prefix e.g Diamond A, B"
                          className="form-control"
                          value={formData.classPrefix}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label className="form-label mb-2">Category</label>
                        <select
                          className="form-select form-control"
                          name="category"
                          onChange={handleSelectChange}
                        >
                          <option value="" defaultValue="">
                            Select category
                          </option>

                          {allCategory
                            ? allCategory.map((items: any) => (
                                <option value={items.category} key={items.id}>
                                  {items.category}
                                </option>
                              ))
                            : "no category"}
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="teacherId" className="form-label mb-2">
                          Teacher in charge
                        </label>
                        <select
                          id="teacherId"
                          className="form-select form-control"
                          name="teacherId"
                          onChange={handleSelectChange}
                        >
                          <option value="" defaultValue="">
                            Select teacher
                          </option>

                          {allTeachers ? (
                            allTeachers.map((teacher: any) => (
                              <option key={teacher.id} value={teacher.id}>
                                {`${teacher.firstName} ${teacher.lastName}`}
                              </option>
                            ))
                          ) : (
                            <option disabled>No teachers available</option>
                          )}
                        </select>
                      </div>
                      <input type="hidden" value={editFormData.id} name="id" />

                      <button
                        type="submit"
                        className="btn btn-danger p-2 w-100 btn-block"
                      >
                        Add Class
                      </button>
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
                        <tbody className="table-text">
                          {classess ? (
                            classess.data.rows.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3">{++sn}</td>
                                <td className="p-3">{item.className}</td>
                                <td className="p-3">{item.category}</td>
                                <td className="p-3">
                                  {item.tids && item.tids.firstName}{" "}
                                  {item.tids && item.tids.lastName}{" "}
                                </td>
                                <td className="p-3">
                                  <LiaEdit
                                    className="text-primary"
                                    onClick={() => handleShow(item.id)}
                                    style={{ cursor: "pointer" }}
                                  />{" "}
                                  <HiTrash
                                    className="text-danger"
                                    onClick={() => handleDeleteClass(item.id)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="text-center p-3 text-danger">No class added</td>
                            </tr>
                          )}
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

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Class</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form method="post" onSubmit={handleEditClass}>
            <div className="form-group mb-3">
              <label className="form-label mb-2">Class Name</label>
              <input
                type="text"
                name="className"
                placeholder="Class Name e.g Jss1"
                className="form-control"
                value={editFormData.className}
                onChange={handleInputChangeEdit}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label mb-2">Class Prefix</label>
              <input
                type="text"
                name="classPrefix"
                placeholder="Class Prefix e.g Diamond A, B"
                className="form-control"
                value={editFormData.classPrefix}
                onChange={handleInputChangeEdit}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label mb-2">Category</label>
              <select
                className="form-select form-control"
                name="category"
                onChange={handleSelectChangeEdit}
              >
                <option value="" defaultValue="">
                  Select category
                </option>

                {allCategory
                  ? allCategory.map((items: any) => (
                      <option
                        key={items.id}
                        value={items.category}
                        selected={items.category === editFormData.category}
                      >
                        {items.category}
                      </option>
                    ))
                  : "no category"}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="teacherId" className="form-label mb-2">
                Teacher in charge
              </label>
              <select
                id="teacherId"
                className="form-select form-control"
                name="teacherId"
                onChange={handleSelectChangeEdit}
              >
                <option value="" defaultValue="">
                  Select teacher
                </option>

                {allTeachers ? (
                  allTeachers.map((teacher: any) => (
                    <option key={teacher.id} value={teacher.id} selected={teacher.id === editFormData.teacherId}>
                      {`${teacher.firstName} ${teacher.lastName}`}
                    </option>
                  ))
                ) : (
                  <option disabled>No teachers available</option>
                )}
              </select>
            </div> 
            <Modal.Footer>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
        </Modal.Footer>
          </form>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default Classess;
