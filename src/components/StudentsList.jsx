import axios from "axios";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { DeleteBtn, EditBtn } from "./ButtonStyle";

const StudentsList = ({ handleEdit }) => {
  const { filtered, setFiltered } = useContext(UserContext);
  const handleDelete = async (id) => {
    if (confirm("Are you sure delete")) {
      setFiltered(filtered.filter((student) => student.id !== id));
      await axios.delete(`http://localhost:3000/students/${id}`);
    }
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
          {filtered.map((student, i) => (
            <tr key={student.id}>
              <th>{i + 1}</th>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.group}</td>
              <td className="d-flex gap-2 justify-content-md-end">
                <EditBtn onClick={() => handleEdit(student.id)}>Edit</EditBtn>
                <DeleteBtn onClick={() => handleDelete(student.id)}>
                  Delete
                </DeleteBtn>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentsList;
