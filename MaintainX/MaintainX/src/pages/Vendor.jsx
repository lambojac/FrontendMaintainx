import {useState} from 'react';
import Header from '../components/Vendors/Header'; 
import TableView from '../components/Vendors/TableView';
import Vendors from './../components/Vendors/Vendor';

const Vendor = () => {
  const [showIconContent, setShowIconContent] = useState('vendor');


  return (
    <div className="workOrder">
      <Header setShowIconContent={setShowIconContent}/>
      {showIconContent === "vendor" && <Vendors/>}
      {showIconContent === "calendar" && <TableView/>}
    </div>
  )
}

export default Vendor