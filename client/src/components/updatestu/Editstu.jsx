import { useEffect, useState } from "react";
import "./../addstu/addstu.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Editstu = () => {
  const student = {
    stuname: "",
    stuemail: "",
    stugender: "",
    stustream: "",
  };
  const { id } = useParams();
  const [students, setStudents] = useState(student);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudents({ ...students, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8182/api/getonestu/${id}`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const navigate = useNavigate();
  const handleSubmitedit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8182/api/updateStu/${id}`, students)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="addstudent" onSubmit={handleSubmitedit}>
        <Link to={"/"}>
          <i class="bi bi-arrow-left"></i> Back
        </Link>
        <h3>Update Student</h3>
        <form action="" className="addstudentform">
          <div className="inputGroup">
            <label htmlFor="stuname">student Name</label>
            <input
              type="text"
              name="stunam"
              id="stuname"
              autoComplete="off"
              placeholder="student name"
              onChange={handleInput}
              value={students.stuname}
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
              onChange={handleInput}
              value={students.stuemail}
            />
          </div>
          <div className="inputgender">
            <label htmlFor="stugender">Gender</label> <br />
            <input
              type="radio"
              name="stugender"
              id="stugender"
              onChange={handleInput}
              value="male"
              checked={students.stugender === "male"}
            />
            <span>male</span>
            <input
              type="radio"
              name="stugender"
              id="stugender"
              onChange={handleInput}
              value="female"
              checked={students.stugender === "female"}
            />
            <span>female</span>
            <input
              type="radio"
              name="stugender"
              id="stugender"
              value="other"
              onChange={handleInput}
              checked={students.stugender === "other"}
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
              onChange={handleInput}
              value={students.stustream}
            />
          </div>
          <div className="inputGroup">
            <button type="submit">Update Student</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Editstu;
