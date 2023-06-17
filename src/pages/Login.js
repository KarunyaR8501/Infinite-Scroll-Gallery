import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values. username) {
        errors.username = "*required";
      }
      if (!values.password) {
        errors.password = "*required";
      } 
      return errors;
    },
    onSubmit: async (values) => {
        navigate("/explore");
    //   try {

    //     setLoading(true);
    //     const user = await axios.post(`${config.api}`, values);
    //     localStorage.setItem("login_credential", user.data.token);
    //     alert(user.data.message);

    //     if (user.data.message === "Successfully Logged In!!") {
    //       if (user.data.active === true) {
           
    //       } else {
    //         alert(
    //           "Your account is not activated. Please Activate your account"
    //         );
    //       }
    //     } else {
    //       alert("User not found");
    //     }
    //     setLoading(true);
    //   } catch (error) {
    //     console.log(error);
    //   }
    },
  });
  return (
    <div className='home-container'>
         <div className="containerlogin ">
    
    <span className="row d-flex align-content-center justify-content-center ">
      <span className="col-lg-4 col-md-6 col-sm-9  ">
        <div className="card o-hidden border-0 shadow-lg  mt-3  bg-transparent pt-5 d-flex align-content-center">
          <div className="card-body p-2">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="p-0">
                  <div className="text-center">
                    <h1>Welcome to Login</h1>
                  </div>
               
                  <form className="user" onSubmit={formik.handleSubmit}>
                    <div className="form-group pb-3">
                      <input
                          className={`form-control form-control-user ${
                            formik.touched.username && formik.errors.username
                              ? "error-box"
                              : ""
                          } ${
                            formik.touched.username && !formik.errors.username
                              ? "success-box"
                              : null
                          }`}
                        id="username"
                        type={"text"}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="username"
                        placeholder="Enter username"
                        
                      />
                      {formik.touched.username && formik.errors.username ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.username}
                      </span>
                    ) : null}
                    </div>
                    <div className="form-group pb-4">
                      <input
                        className={`form-control form-control-user ${
                          formik.touched.password && formik.errors.password
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.password && !formik.errors.password
                            ? "success-box"
                            : null
                        }`}
                        id="exampleInputPassword"
                        type={"password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Password"
                        name="password"
                      />
                       {formik.touched.password && formik.errors.password ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.password}
                      </span>
                    ) : null}
                    </div>
                   

                    <button
                      type="submit"
                      className="btn"
                    >
                      LOGIN
                    </button>
                  </form>

                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </span>
  </div>
    </div>
   
  );
}

export default Login;