import React, { useState } from "react";
import "../components/register.css";
import { Gender, Mstatus, Children, Occupation, Income } from "./data";

import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [G, setG] = useState(Gender[0]);
  const [M, setM] = useState(Mstatus[0]);
  const [C, setC] = useState(Children[0]);
  const [O, setO] = useState(Occupation[0]);
  const [I, setI] = useState(Income[0]);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    occ_detail: "",
    email:"",
    edu_detail: "",
    dob: "",
    feet: "",
    inch: "",
    profile_picture: "",
  });

  let id, value;
  const handleInputs = (e) => {
    console.log(e);

    id = e.target.id;
    value = e.target.value;

    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {firstname, lastname,occ_detail,email,edu_detail,dob,feet,inch,profile_picture} = user

    const res = await fetch("/register",{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        firstname, lastname,occ_detail,email,edu_detail,dob,feet,inch,profile_picture
      })

      
    });
    console.log(user);
    console.log(JSON.stringify(user));
    const data = await res.json();

    if(data.status === 442 || !data){
      window.alert("inavlid");
      console.log("invalid")
    }
    else{
      window.alert("success");
      console.log("success")
      setUser({
        firstname: "",
        lastname: "",
        occ_detail: "",
        email: "",
        edu_detail: "",
        dob: "",
        feet: "",
        inch: "",
        profile_picture: "",})

      navigate("/")
    }
  };
  return (
    <>
      <section className=" h-custom gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <form method="post" id="registerForm">
                    <div className="row g-0">

                      <div className="col-lg-6">
                        <div className="p-5">
                          <h3
                            className="fw-normal mb-5"
                            style={{ color: "#d32f2f" }}
                          >
                            General Infomation
                          </h3>
                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="firstname"
                                  className="form-control form-control-lg"
                                  autoComplete="new-password"
                                  value={user.firstname}
                                  onChange={handleInputs}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="firstname"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="lastname"
                                  className="form-control form-control-lg"
                                  autoComplete="new-password"
                                  value={user.lastname}
                                  onChange={handleInputs}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="lastname"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 form-outline row">
                            <div className="col-lg-4">
                              <label htmlFor="select">Gender:</label>
                            </div>
                            <div className="col-lg-8">
                              <select
                                className="select form-control"
                                autoComplete="new-password"
                                value={G}
                                onChange={(e) => setG(e.target.value)}
                              >
                                {Gender.map((value,index) => (
                                  <option value={value} key={value} disabled={index===0}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 form-outline row">
                            <div className="col-lg-4">
                              <label htmlFor="maritial-status">
                                Maritial Status:
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <select
                                className="maritial-status form-control"
                                autoComplete="new-password"
                                value={M}
                                onChange={(e) => setM(e.target.value)}
                              >
                                {Mstatus.map((value,index) => (
                                  <option value={value} key={value} disabled={index===0}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-outline">
                            <div className="col-lg-4">
                              <label htmlFor="children">Children:</label>
                            </div>
                            <div className="col-lg-8">
                              <select
                                className="children form-control"
                                autoComplete="new-password"
                                value={C}
                                onChange={(e) => setC(e.target.value)}
                              >
                                {Children.map((value,index) => (
                                  <option value={value} key={value} disabled={index===0}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-outline">
                            <div className="col-lg-4">
                              <label htmlFor="valid">Occupation:</label>
                            </div>
                            <div className="col-lg-8">
                              <select
                                name="occ_cat"
                                className="valid form-control"
                                autoComplete="new-password"
                                value={O}
                                onChange={(e) => setO(e.target.value)}
                              >
                                {Occupation.map((value ,index) => (
                                  <option value={value} key={value} disabled={index===0}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-outline">
                            <div className="col-lg-4">
                              <label htmlFor="occ_detail">
                                Occupation Detail:
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="occ_detail form-control"
                                autoComplete="new-password"
                                placeholder="Occupation Detail"
                                id="occ_detail"
                                value={user.occ_detail}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-outline">
                            <div className="col-lg-4">
                              <label htmlFor="occ_detail">
                                Email:
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="email"
                                className="email form-control"
                                autoComplete="new-password"
                                placeholder="email"
                                id="email"
                                value={user.email}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                          <div className="form-outline mb-4 pb-2 row">
                            <div className="col-lg-4">
                              <label htmlFor="edu_detail">
                                Education Detail:
                              </label>
                            </div>
                            <div className="col-lg-8">
                              <input
                                type="text"
                                className="edu_detail form-control"
                                autoComplete="new-password"
                                placeholder="Education Detail"
                                id="edu_detail"
                                value={user.edu_detail}
                                onChange={handleInputs}
                              />
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-outline">
                            <div className="col-lg-4">
                              <label htmlFor="valid">Annual Income:</label>
                            </div>
                            <div className="col-lg-8">
                              <select
                                name="Annual Income"
                                className="valid form-control"
                                autoComplete="new-password"
                                value={I}
                                onChange={(e) => setI(e.target.value)}
                              >
                                {Income.map((value,index) => (
                                  <option value={value} key={value} disabled={index===0}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row form-ouline">
                            <div className="col-lg-4">
                              <label htmlFor="">Height:</label>
                            </div>
                            <div className="col-lg-4">
                              <input
                                type="number"
                                id="feet"
                                value={user.feet}
                                onChange={handleInputs}
                                className="form-control"
                                autoComplete="new-password"
                              />
                              <label className="form-label" htmlFor="feet">
                                Ft.
                              </label>
                            </div>
                            <div className="col-lg-4">
                              <input
                                type="number"
                                id="inch"
                                value={user.inch}
                                onChange={handleInputs}
                                className="form-control"
                                autoComplete="new-password"
                              />
                              <label className="form-label" htmlFor="inch">
                                In.
                              </label>
                            </div>
                          </div>
                          <div className="mb-4 pb-2 row">
                            <div className="col-lg-3">
                              <label htmlFor="dob">Date Of Birth :</label>
                            </div>
                            <div className="form-outline col-lg-5">
                              <input
                                type="date"
                                id="dob"
                                value={user.dob}
                                onChange={handleInputs}
                                className="form-control form-control-sm dob"
                                autoComplete="new-password"
                              />
                            </div>
                            <div className="mb-4 pb-2">
                              <label htmlFor="exampleFormControlFile1">
                                Example file input
                              </label>
                              <div className="form-outline">
                                <input
                                  type="file"
                                  className="form-control profile_picture"
                                  id="profile_picture"
                                  onChange={handleInputs}
                                  value={user.profile_picture}
                                />
                              </div>
                            </div>
                            <button
                            type="button"
                            className="btn btn-light btn-lg"
                            data-mdb-ripple-color="dark"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
