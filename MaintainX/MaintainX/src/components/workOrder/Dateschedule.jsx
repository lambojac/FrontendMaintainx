import { useState } from "react"
import { FaTimes } from "react-icons/fa";


const Dateschedule = () => {
  const [showDateInput, setShowDateInput] = useState(false);

  const handleDateInput = (e) => {
     setShowDateInput(!showDateInput);
     e.preventDefault();
  }

  return (
    <div className="dateSchedule">
        <label htmlFor="Date" className="dateSchedule__label">Due Date and Schedule</label>
        <div className="dateSchedule__DateandTime">
        <input type="date" name="date" id="Date" className="dateSchedule__DateandTime__input"/>
        <button className="dateSchedule__DateandTime__btn" onClick={handleDateInput} style={{ display: showDateInput ? 'none' : 'block' }}>Add Due Time</button>
        {showDateInput && (
          <div className="dateSchedule__DateandTime__Time">
           <i className="dateSchedule__DateandTime__Time__Times"><FaTimes/></i> 
            <input type="time" name="time" className="dateSchedule__DateandTime__Time__timeInput"/>
          </div>
        )}
        </div>
        <button className="dateSchedule__btn">Add repeating schedule</button>
    </div>
  )
}

export default Dateschedule