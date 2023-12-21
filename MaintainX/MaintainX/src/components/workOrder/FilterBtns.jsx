import { FiUser, FiClock } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscWand } from "react-icons/vsc";
import { PiWarningDiamondFill } from "react-icons/pi";


const FilterBtns = () => {
  return ( 
    <div className="filterBtns">
        <div className="filterBtns__threeBtn">
            <button className="threeBtn__button"><FiUser className="threeBtn__button__icon"/> Assigned To</button>
            <button className="threeBtn__button"><FiClock className="threeBtn__button__icon"/> Due Date</button>
            <button className="threeBtn__button"><PiWarningDiamondFill className="threeBtn__button__icon"/>Priority</button>
            <button className="threeBtn__button"><GoPlus className="threeBtn__button__icon"/> Add Filter</button>
        </div>
        <div className="filterBtns__oneBtn">
            <button className="oneBtn__button"><VscWand className="oneBtn__button__icon"/>My Filters</button>
        </div>
    </div>      
      )

    }
 

export default FilterBtns