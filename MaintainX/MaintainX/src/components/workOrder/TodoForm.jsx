import AssignTo from "./AssignTo";
import Dateschedule from "./Dateschedule";
import ImageDrop from "./ImageDrop";
import { PiListBulletsFill, PiPlusBold } from "react-icons/pi";
// import NewProcedure from './NewProcedure';

const TodoForm = () => {
  return (
    <form className="newWorkOrder">
        <h1 className="newWorkOrder__bigtext">New Work Orders</h1>

        <input type="text" name="" className="newWorkOrder__name" id="input-1" placeholder="What needs to be done?"/>

        
        <ImageDrop/>
        
        <div className="newWorkOrder__descContainer">
        <label htmlFor="description" className="newWorkOrder__descContainer__label">Description</label>
        <textarea name="description" id='description' cols='46' rows="3" placeholder='Add a description' className="newWorkOrder__descContainer__textarea"></textarea>
        </div>
        <div className="newWorkOrder__procedureContainer">
          <p className="newWorkOrder__procedureContainer__text">Procedures</p>
          <div className="newWorkOrder__procedureContainer__content">
            <p className="newWorkOrder__procedureContainer__content__text"><PiListBulletsFill className="newWorkOrder__procedureContainer__content__text__icon"/> Create or attach new Form, Procedure or Checklist</p>
            <button className="newWorkOrder__procedureContainer__content__button procedureBtn"><PiPlusBold/> Add Procedure</button>
          </div>
        </div>
        <AssignTo/>
        <Dateschedule/>
        {/* <NewProcedure/> */}
    </form>
  )
}

export default TodoForm