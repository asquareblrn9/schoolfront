import React, { ChangeEvent, useEffect, useState } from "react";
import AdminLayout from "../Main/AdminLayout";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { addCategory, deleteCategory, getAllCategory } from "../../features/categorySlice";
import { toast } from "react-toastify";
import { HiTrash } from "react-icons/hi2";

const Category = () => {
         

  const dispatch = useAppDispatch();
  const { categories, isLoading } = useAppSelector((state) => state.category);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [hasExecuted, setExecuted] = useState(false)

  //submit category
  const handleSubmitCategory = (e: React.FormEvent<HTMLFormElement>) => {
    let data = {
      category,
    };
    e.preventDefault();
    dispatch(addCategory(data))
      .unwrap()
      .then((response: any) => {
        setExecuted(!hasExecuted)
        toast.success(response.message);
      })
      .catch((error: any) => {
        toast.error(error);
        console.log(error);
      });
  };

  const handleDeleteCategory = (id: number) =>{
    dispatch(deleteCategory(id)).then((response: any)=>{
        setExecuted(!hasExecuted)
        toast.warning(response)
    }).catch((error: string)=>{
        toast.error(error)
    })

  }

  let sn: number = 0;
  //fetch category
  useEffect(() => {
    dispatch(getAllCategory());
  }, [currentPage, hasExecuted]);

  console.log(categories);

  return (
    <AdminLayout>
      <section className="py-5">
        <Container fluid className="main-body">
          <Row>
            <Col md={3} sm={12}>
              <Card>
                <CardBody className="p-5">
                  <div className="mb-3">
                    <h3 className="text-primary">Create a class category</h3>
                  </div>

                  <form method="post" onSubmit={handleSubmitCategory}>
                    <div className="form-group mb-3">
                      <label className="form-label mb-2">Category Name</label>
                      <input
                        type="text"
                        name="category"
                        placeholder="Class Name e.g Primary, Junior, Grades, Senior School"
                        className="form-control"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-danger w-100 btn-block"
                    >
                      Add Category
                    </button>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={9} sm={12} className="mb-3">
              <Card className="py-3 border-0">
                <CardBody>
                  <h3>Categories</h3>
                  <div className="table-responsive mt-5">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Category Name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td colSpan={3}>Loading...</td>
                          </tr>
                        ) : categories ? (
                          categories.data.rows.map((item) =>                            
                          <tr key={item.id}>
                              <td>{++sn}</td>
                              <td>{item.category}</td>
                              <td>
                               
                                    <HiTrash className="text-danger" onClick={()=>handleDeleteCategory(item.id)} /> 
                               
                              </td>
                            </tr>
                          )
                        ) : (
                          <tr>
                            <td colSpan={3}>No categories available</td>
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
  );
};

export default Category;
