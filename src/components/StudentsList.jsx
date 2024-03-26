import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const StudentsList = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/students");
    const data = res.data;
    setData(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((student) => student.id !== id));
    await axios.delete(`http://localhost:3000/students/${id}`);
  };
  return (
    <div className="container my-4">
      <Table striped hover className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Group</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, i) => (
            <tr key={student.id}>
              <th>{i + 1}</th>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.group}</td>
              <td className="d-flex gap-2 justify-content-md-end">
                <button className="btn btn-primary">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentsList;
