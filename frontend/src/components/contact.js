import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let id, value;
  const handleInputs = (e) => {
    console.log(e);

    id = e.target.id;
    value = e.target.value;

    setQuery({ ...query, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, subject, message } = query;
  
    const res = await fetch("/contact", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
    console.log(data.status);
    if (res.status === 422 || !data) { 
      window.alert("Please Fill All Details");
      console.log("Please Fill All details");
    } else {
      window.alert("Query Submitted, We will reach out to you shortly");
      console.log("Query Submitted, We will reach out to you shortly");
      setQuery({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
  
      navigate("/");
    }
  };
  
  return (
    <>
      <section className="m-5 p-5">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      autoComplete="new-password"
                      onChange={handleInputs}
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      autoComplete="new-password"
                      onChange={handleInputs}
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      autoComplete="new-password"
                      onChange={handleInputs}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows={2}
                      className="form-control md-textarea"
                      defaultValue={""}
                      autoComplete="new-password"
                      onChange={handleInputs}
                    />
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
