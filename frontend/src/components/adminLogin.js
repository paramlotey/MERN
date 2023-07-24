import React, { useState } from "react";
import "../components/admin.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(true);

  const controlForm = (e) => {
    e.preventDefault();
    if (form === true) {
      setForm(false);
      return;
    } else {
      setForm(true);
    }
  };

  const [logInputs, setLogInputs] = useState({
    Email: "",
    Password: "",
    CPassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setLogInputs({ ...logInputs, [name]: value });
  };

  const loginAdmin = async (e) => {
    e.preventDefault();

    const { Email, Password } = logInputs;

    if (!Email || !Password) {
      window.alert("Please enter both email and password");
      return;
    }

    try {
      const res = await fetch("/login", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ Email, Password }),
      });

      const data = await res.json();

      if (res.status === 200 && data.message === "Login Success") {
        window.alert("Login Successful");
        navigate("/");
      } else {
        window.alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      window.alert("An error occurred while logging in");
    }
  };

  const adminSignup = async (e) => {
    e.preventDefault();
  
    const { Email, Password, CPassword } = logInputs;
  
    if (!Email || !Password || !CPassword) {
      window.alert("Please fill all required fields");
      return;
    }
  
    if (Password !== CPassword) {
      window.alert("Passwords don't match");
      return;
    }
  
    // Proceed with the API call to the server
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ Email, Password, CPassword }),
      });
  
      const data = await response.json();
  
      if (response.status === 201) {
        window.alert(data.message); // "Signup Success"
        // Reset the form after successful signup
        setLogInputs({
          Email: "",
          Password: "",
          CPassword: "",
        });
        // Redirect to the login page
        navigate("/login");
      } else if (response.status === 422) {
        window.alert(data.error); // Show the error message received from the server
      } else {
        window.alert("An error occurred while signing up");
      }
    } catch (error) {
      console.log(error);
      window.alert("An error occurred while signing up");
    }
  };
  

  return (
    <>
      {form ? (
        <>
          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <h2 className="text-center">Log In To Admin Portal</h2>
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="notfound"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form method="post">
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        name="Email"
                        value={logInputs.Email}
                        onChange={handleInputs}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        name="Password"
                        value={logInputs.Password}
                        onChange={handleInputs}
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="form1Example3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={loginAdmin}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <p className="text text-secondary mt-3 text-center">
            Not a Member?{" "}
            <a onClick={controlForm} href="#">
              Join Us
            </a>
          </p>
        </>
      ) : (
        <>
          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <h2 className="text-center">Log In To Admin Portal</h2>
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="notfound"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form method="post">
                    <div className="form-outline mb-4">
                      <input
                        type="Email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        name="Email"
                        value={logInputs.Email}
                        onChange={handleInputs}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email
                      </label>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        name="Password"
                        value={logInputs.Password}
                        onChange={handleInputs}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Password
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        name="CPassword"
                        value={logInputs.CPassword}
                        onChange={handleInputs}
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Confirm Password
                      </label>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={adminSignup}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <p className="text text-secondary mt-3 text-center">
            Not a Member?{" "}
            <a onClick={controlForm} href="#">
              Join Us
            </a>
          </p>
        </>
      )}

      {/* SignUP */}
    </>
  );
};

export default Login;
