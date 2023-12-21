

const AssignTo = () => {
  return (
    <div className="assignTo">
        <label htmlFor='places' className="assignTo__label">Assign To</label>
        <input list="places" className='assignTo__select' placeholder="start typing" id="places"/>
        <datalist  id="places">
            <option value="england">England</option>
            <option value="japan">Japan</option>
            <option value="china">China</option>
            <option value="nigeria">Nigeria</option>
            <option value="unitedStates">United States</option>
        </datalist>
        
    </div>
  )
}

export default AssignTo