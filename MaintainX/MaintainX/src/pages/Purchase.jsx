import {useState} from 'react';
import Header from '../components/Purchase Order/Header'; 
import TableView from '../components/Vendors/TableView';
import PurchaseOrder from './../components/Purchase Order/PuchaseOrder';

const Vendor = () => {
  const [showIconContent, setShowIconContent] = useState('puchase');


  return (
    <div className="workOrder">
      <Header setShowIconContent={setShowIconContent}/>
      {showIconContent === "purchase" && <PurchaseOrder/>}
      {showIconContent === "calendar" && <TableView/>}
    </div>
  )
}

export default Vendor