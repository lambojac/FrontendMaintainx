
import { FaPlus } from "react-icons/fa";
// import Filter from "./headerFilter";


const Vendors = () => {


  return (
    <div className="Vendor">
     <div className="Vendor__content">
      <img src="../../../assets/vector.svg" alt="Icon" className="Vendor__content__icon" />
      <p className="Vendor__content__firstParagraph" >Start adding vendors to <br /> Nigerian Content Development and Monitoring Board (NCDMB)</p>
      <p className="Vendor__content__secondParagraph">Click the <span className="Vendor__content__secondParagraph__span"><FaPlus/> New Vendor</span> Button in the top right to get started</p>
     </div>
    </div>
  )
}

export default Vendors