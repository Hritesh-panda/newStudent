import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addstu.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Addstu = () => {
  const students = {
    stuname: "",
    stuemail: "",
    stugender: "",
    stustream: "",
  };
  const [student, setStudent] = useState(students);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8182/api/createstu", student)
      .then((res) => {
        toast.success(res.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="addstudent">
        <Link to={"/"}>
          <i class="bi bi-arrow-left"></i> Back
        </Link>
        <h3>Add new Student</h3>
        <form action="" className="addstudentform" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="stuname">student Name</label>
            <input
              type="text"
              name="stuname"
              id="stuname"
              autoComplete="off"
              placeholder="student name"
              onChange={inputHandler}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="stuemail">Student Email</label>
            <input
              type="email"
              name="stuemail"
              id="stuemail"
              autoComplete="off"
              placeholder="student email"
              onChange={inputHandler}
            />
          </div>
          <div className="inputgender">
            <label htmlFor="stugender">Gender</label> <br />
            <input
              type="radio"
              name="stugender"
              id="stugender"
              value="male"
              onChange={inputHandler}
            />
            <span>male</span>
            <input
              type="radio"
              name="stugender"
              id="stugender"
              value="female"
              onChange={inputHandler}
            />
            <span>female</span>
            <input
              type="radio"
              name="stugender"
              id="stugender"
              value="other"
              onChange={inputHandler}
            />
            <span>other</span>
          </div>
          <div className="inputGroup">
            <label htmlFor="stustream">Student Stream</label>
            <input
              type="text"
              name="stustream"
              id="stustream"
              autoComplete="off"
              placeholder="student stream"
              onChange={inputHandler}
            />
          </div>
          <div className="inputGroup">
            <button type="submit">Add Student</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addstu;
