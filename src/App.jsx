import { useEffect, useState } from "react";
import SearchComp from "./components/SearchComp";
import StudentsList from "./components/StudentsList";
import axios from "axios";
import UserContext from "./context/UserContext";
import ModalComp from "./components/ModalComp";
import EditModalComp from "./components/EditModalComp";

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data)
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [studentData, setStudentData] = useState([])

  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/students");
    const data = res.data;
    setData(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  useEffect(() => {
    setFiltered(data)
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
    const newContact = [...data, student];
    setFiltered(newContact);
    axios.post("http://localhost:3000/students", student)
  };
  const handleEdit = async(id) => {
    const res = await axios(`http://localhost:3000/students/${id}`)
    setStudentData(res.data)
    editOpenModal()
  }
  console.log(studentData);
  return (
    <div>
      <UserContext.Provider value={{data, setData, filtered, setFiltered, studentData}}>
        <SearchComp addOpenModal={addOpenModal}/>
        <StudentsList handleEdit={handleEdit}/>
        <ModalComp addModal={addModal} addStudent={addStudent} addCloseModal={addCloseModal}/>
        <EditModalComp editModal={editModal} addStudent={addStudent} editCloseModal={editCloseModal}/>
      </UserContext.Provider>
    </div>
  );
};
export default App;
