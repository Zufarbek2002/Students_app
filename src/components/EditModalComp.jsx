import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserContext from "../context/UserContext";

const EditModalComp = ({ editModal, editCloseModal, addStudent }) => {
  const { studentData } = useContext(UserContext);

  const [student, setStudent] = useState({
    firstname: `${studentData.firstname}`,
    lastname: `${studentData.lastname}`,
    group: `${studentData.group}`,
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    editCloseModal();
    addStudent(student);
    setStudent({
      firstname: "",
      lastname: "",
      group: "",
    });
  };

  return (
    <div>
      <Modal show={editModal} onHide={editCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                value={student.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                className="form-control"
                value={student.lastname}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="group" className="form-label">
                Group
              </label>
              <select
                id="group"
                className="form-select"
                value={student.gender}
                onChange={handleChange}
              >
                <option value="All">All</option>
                <option value="React N34">React N34</option>
                <option value="React N35">React N35</option>
                <option value="React N45">React N45</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModalComp;
