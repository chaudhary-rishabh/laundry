import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {

  const [msg, setMsg] = useState({
    name : "",
    email : "",
    message : ""
  });

  //Handle Inputs
  const handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value})
  }

   //Handle Submit
   const handleSubmit = async (event)=>{
    event.preventDefault();
    //Object Destrucring
    //Store Object into Variables
    const {name, email, message} = msg;
    try {
    const res = await fetch('/message', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,email,message
      })
    })

    if (res.status === 400 || !res) {
      window.alert("Message Not Sent. Try Again Later");
    }else{
      window.alert("Message Sent");
      setMsg({
        name : "",
        email : "",
        message : ""
      })
    }
  }catch(error){
      console.log(error);
    }
  }


  return (
    <div>
         <div>
        <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill" >
    <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
    </div>
  </div>
</nav>
    </div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto " />
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2022/9/OL/IV/WY/1600630/call-center-solutions-500x500.jpg"
                    alt="Contact"
                    className="w-75"
                  />
                </div>
                <div className="col-md-6">
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your Name"
                        name="name"
                        value={msg.name}
                        onChange = {handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        name="email"
                        value={msg.email}
                        onChange = {handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        name="message"
                        value={msg.message}
                        onChange = {handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
