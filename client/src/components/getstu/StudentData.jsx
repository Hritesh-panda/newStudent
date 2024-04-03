import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./studentdata.css";
import axios from "axios";
import toast from "react-hot-toast";
const StudentData = () => {
  const [students, setStudents] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8182/api/getstu").then((res) => {
        setStudents(res.data);
      });
    };
    fetchData();
  });

  // delete student

  const deleteStudent = async (stuid) => {
    alert("are you sure to delete");
    if (true) {
      await axios
        .delete(`http://localhost:8182/api/deletestu/${stuid}`)
        .then((res) => {
          console.log(res);
          toast.success(res.data.msg, { position: "top-right" });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.reload();
    }
  };
  // filter by name

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className="studentTable">
        <div className="flex-top">
          <Link to={"/add"} className="addBtn">
            Add student
          </Link>
          <div className="top-right">
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setSearch(e.target.value)}
            />{" "}
            <button>Search</button>
          </div>
        </div>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Student gender</th>
              <th>Student stream</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students
                .filter((data) => {
                  return search.toLowerCase() === ""
                    ? data
                    : data.stuname.toLowerCase().includes(search);
                })
                .map((data, index) => {
                  return (
                    <>
                      <tr key={data._id}>
                        <td>{index + 1}</td>
                        <td>{data.stuname}</td>
                        <td>{data.stuemail}</td>
                        <td>{data.stugender}</td>
                        <td>{data.stustream}</td>
                        <td className="actionBtn">
                          <button onClick={() => deleteStudent(data._id)}>
                            <i class="bi bi-trash-fill"></i>
                          </button>
                          <Link to={`/edit/` + data._id}>
                            <i class="bi bi-pencil-square"></i>
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentData;
