import { GoPlus } from "react-icons/go";


const Filter = () => {
  return (
    <div className="filter">
        <input type="search" placeholder="Search Orders" className="filter__input"/>
        <button className="filter__button"><GoPlus/> New Work Order</button>
    </div>
  )
}

export default Filter