import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import StudentsList from "../components/StudentsList";
import ModalComp from "../components/ModalComp";
import EditModalComp from "../components/EditModalComp";
import UserContext from "../context/UserContext";
import { Pagination } from "react-bootstrap";

const Home = () => {
  const { setFiltered, data, setData, setStudentData } =
    useContext(UserContext);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  const fetchApi = async () => {
    const res = await axios.get(
      `http://localhost:3000/students?_page=${page}&_per_page=5`
    );
    const data = await res.data;
    setData(data.data);
    setPages(data.pages);
  };
  useEffect(() => {
    fetchApi();
  }, [page]);
  useEffect(() => {
    setFiltered(data);
  }, [data]);

  const addOpenModal = () => {
    setAddModal(true);
  };
  const addCloseModal = () => {
    setAddModal(false);
  };
  const editOpenModal = () => {
    setEditModal(true);
  };
  const editCloseModal = () => {
    setEditModal(false);
  };
  const addStudent = (student) => {
    axios.post("http://localhost:3000/students", student);
  };
  const editStudent = (student) => {
    axios.put(`http://localhost:3000/students/${id}`, student);
  };
  const handleEdit = async (id) => {
    const res = await axios(`http://localhost:3000/students/${id}`);
    setStudentData(res.data);
    editOpenModal();
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  let items = [];
  for (let i = 1; i <= pages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <SearchComp addOpenModal={addOpenModal} />
      <StudentsList handleEdit={handleEdit} />
      <ModalComp
        addModal={addModal}
        addStudent={addStudent}
        addCloseModal={addCloseModal}
      />
      <EditModalComp
        editModal={editModal}
        editStudent={editStudent}
        editCloseModal={editCloseModal}
      />
      <div className="container d-flex align-items-center gap-3 justify-content-center mt-5">
        <button
          disabled={page == 1}
          className="btn btn-outline-dark"
          onClick={handlePrev}
        >
          Prev
        </button>
        <Pagination className="mt-3" size="sm">
          {items}
        </Pagination>
        <button
          disabled={page >= pages}
          className="btn btn-outline-dark"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
