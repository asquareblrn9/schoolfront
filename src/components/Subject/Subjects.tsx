import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { addSubject, deleteSubject, getAllSubject } from '../../features/subjectSlice';
import { toast } from 'react-toastify';
import AdminLayout from '../Main/AdminLayout';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { HiTrash } from 'react-icons/hi2';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

const Subjects = () => {
  const dispatch = useAppDispatch();
  const { subjects } = useAppSelector((state) => state.subject);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasExecuted, setExecuted] = useState(false);

  // Global filters
  const [filter, setFilter] = useState({
    global: { value: '', matchMode: FilterMatchMode.CONTAINS },
  });

  // Interface
  interface FormData {
    subjectName: string;
  }

  // State for the data
  const [formData, setFormData] = useState<FormData>({
    subjectName: '',
  });

  // Submit subject
  const handleSubmitCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { subjectName } = formData;
    const data = { subjectName };

    dispatch(addSubject(data))
      .unwrap()
      .then((response: any) => {
        setExecuted(!hasExecuted);
        toast.success(response.message);
      })
      .catch((error: any) => {
        toast.error(error);
        console.log(error);
      });
  };

  // Delete subject
  const handleDeleteSubject = (id: number) => {
    dispatch(deleteSubject(id))
      .then((response: any) => {
        setExecuted(!hasExecuted);
        toast.warning('Subject Removed');
      })
      .catch((error: string) => {
        toast.error(error);
      });
  };

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


// Handle page change
const onPageChange = (event: any) => {
    const newPage = event.first  + 1;
    setCurrentPage(newPage);
    dispatch(getAllSubject({ page: newPage }));
  };
  
  
  

  // Set data
  const data = subjects ? subjects.data.rows : [];

  // Fetch subjects
  useEffect(() => {
    dispatch(getAllSubject({ page: currentPage }));
  }, [currentPage, hasExecuted]);

  console.log(subjects);

  return (
    <AdminLayout>
      <section className="py-5">
        <Container fluid className="main-body">
          <Row>
            <Col md={3} sm={12}>
              <Card>
                <CardBody className="p-5">
                  <div className="mb-3">
                    <h3 className="text-primary">Add Subject</h3>
                  </div>
                  <form method="post" onSubmit={handleSubmitCategory}>
                    <div className="form-group mb-3">
                      <label className="form-label mb-2">Subject Name</label>
                      <input
                        type="text"
                        name="subjectName"
                        placeholder="Mathematics"
                        className="form-control"
                        onChange={handleInputChange}
                        value={formData.subjectName}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-danger w-100 btn-block">
                      Add Subject
                    </button>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={9} sm={12} className="mb-3">
              <Card className="py-3 border-0">
                <CardBody>
                  <h3>Subjects</h3>
                  <div className="table-responsive mt-5">
                    <Row>
                      <Col md={9} sm={12}></Col>
                    <Col md={3} sm={12}>
                        <InputText
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFilter({
                          global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                        })
                      }
                      className='form-control mb-3'
                    />
                    </Col>
                    </Row>
                    
                    <DataTable
                      value={data}
                      paginator
                      rows={subjects ? subjects.limit : 50}
                      rowsPerPageOptions={[15, 35, 50]}
                      filters={filter}
                      onPage={onPageChange}
                      //page={currentPage} // Page numbers are 1-based in DataTable
                    >
                      <Column
                        header="S/N"
                        body={(rowData, { rowIndex }) => <>{rowIndex + 1}</>}
                      />
                      <Column header="Subject Name" field="subjectName" />
                      <Column
                        header="Actions"
                        body={(rowData) => (
                          <HiTrash
                            className="text-danger"
                            onClick={() => handleDeleteSubject(rowData.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        )}
                      />
                    </DataTable>
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

export default Subjects;
