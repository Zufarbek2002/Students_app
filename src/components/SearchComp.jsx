import { ButtonGroup } from 'react-bootstrap'

const SearchComp = () => {
  return (
    <div className='container py-4'>
        <ButtonGroup className='w-100 d-flex gap-3'>
        <input type="text" className='form-control w-70 p-2' placeholder='Searching'/>
        <select name="group" id="group" className='form-select w-auto'>
            <option value="All">All</option>
            <option value="React N34">React N34</option>
            <option value="React N35">React N35</option>
            <option value="React N45">React N45</option>
        </select>
        <button className='btn btn-outline-success w-auto' >Add</button>
        </ButtonGroup>
        {/* <StudentList students = {students} handleDelete={handleDelete} addOpenModal={addOpenModal}/> */}
        {/* <ModalComp addCloseModal={addCloseModal} addModal={addModal} students = {students}/> */}
      </div>
  )
}

export default SearchComp