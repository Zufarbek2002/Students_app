import { useState } from "react";
import { Modal } from "react-bootstrap";
import { CancelBtn, EditBtn } from "./ButtonStyle";

const ModalComp = ({addModal, addCloseModal, addStudent}) => {

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    group: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addCloseModal();
    addStudent(student);
    setStudent({
      firstname: "",
      lastname: "",
      group: "",
    });
  };

  return (
    <div>
      <Modal show={addModal} onHide={addCloseModal}>
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
          <CancelBtn onClick={addCloseModal}>
            Close
          </CancelBtn>
          <EditBtn onClick={handleAdd}>
            Add
          </EditBtn>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
