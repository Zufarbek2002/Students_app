import { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import UserContext from "../context/UserContext";
import ButtonStyle from "./ButtonStyle";

const SearchComp = ({ addOpenModal }) => {
  const { data, setFiltered } = useContext(UserContext);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase().trim();
    setFiltered(
      data.filter(
        (e) =>
          e.firstname.toLowerCase().includes(text) ||
          e.lastname.toLowerCase().includes(text)
      )
    );
  };
  const handleFilter = (e) => {
    const group = e.target.value;
    let filteredValue;
    if (group == "All") {
      filteredValue = data;
    } else {
      filteredValue = data.filter((data) => data.group == group);
    }
    setFiltered(filteredValue);
  };

  return (
    <div className="container py-4">
      <ButtonGroup className="w-100 d-flex gap-3">
        <input
          type="text"
          className="form-control w-70 p-2"
          placeholder="Searching"
          onChange={handleSearch}
        />
        <select
          name="group"
          id="group"
          className="form-select w-auto"
          onChange={handleFilter}
        >
          <option value="All">All</option>
          <option value="React N34">React N34</option>
          <option value="React N35">React N35</option>
          <option value="React N45">React N45</option>
        </select>
        <ButtonStyle onClick={addOpenModal}>Add</ButtonStyle>
      </ButtonGroup>
    </div>
  );
};

export default SearchComp;
