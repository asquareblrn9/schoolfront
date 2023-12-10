import React from "react";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <section className="bg-light" style={{ minHeight: "calc(100vh)" }}>
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
                  <form>
                    <label className="form-label">Email Address</label>
                    <div className="form-group mb-3">
                      <input
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="email address"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label className="form-label">Password</label>
                      <input
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="py-2 btn btn-danger btn-block w-100"
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
