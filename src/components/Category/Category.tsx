import React, { ChangeEvent, useState } from 'react'
import AdminLayout from '../Main/AdminLayout'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { useAppDispatch } from '../../app/store'
import { addCategory } from '../../features/categorySlice'
import { toast } from 'react-toastify'

const Category = () => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState('')
    

    const handleSubmitCategory = () =>{
        dispatch(addCategory(category).unwrap().then((response: any )=>{
            toast.success(response)
        })).catch((error: any)=>{
            toast.error(error)
            console.log(error)
        })
    }


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
    />
</div>

                                <button type="submit" className="btn btn-danger w-100 btn-block">Add Category</button>



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
                                    <tr>
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
  )
}

export default Category