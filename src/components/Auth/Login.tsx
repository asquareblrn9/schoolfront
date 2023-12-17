import React, { ChangeEvent, useState } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch } from "../../app/store";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate()
//interface
  interface FormData{
    email:string,
    password: string
  }
  //setting dispatch
  const dispatch = useAppDispatch()

  //state for the data
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  //handle onchange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

//login function
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) =>{
    let data = {
      email:formData.email,
      password:formData.password,
    };
    e.preventDefault()
    dispatch(login(data)).unwrap().then((response: string)=>{
      
      navigate('/dashboard')
      toast.success(response)

    }).catch((error: string)=>{
      toast.error(error)
    })
    
  }

  return (
    <section>
      <div className="container">
        <div className="authMain">
          <div className="card border-0">
            <div className="card-body px-5 py-5">
              <div className="pb-2">
                <img
                  src="images/nochsolutions.com.ng-logonew.png"
                  alt="nochsolutions logo"
                  className="img-fluid"
                  width={120}
                />
              </div>

              <div className="row auths">
                <div className="col-md-6 col-sm-12">
                  <h3 className="mb-3">Welcome back</h3>
                  <form method="post" onSubmit={handleLogin}>
                    <label className="form-label">Email Address</label>
                    <div className="form-group mb-3">
                      <input
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label">Password</label>
                      <input
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="py-2 btn btn-primary btn-block w-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-6 col-sm-12">
                  <img
                    src="images/6310507.jpg"
                    alt="nochsolutions logo"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    
    </section>
  );
};

export default Login;
