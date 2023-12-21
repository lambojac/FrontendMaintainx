import { useState } from 'react';
import { GoColumns, GoTable, GoPlus } from 'react-icons/go';
import Button from '../Button';
import PropTypes from 'prop-types';



const Header = ({ setShowIconContent }) => {
  const [activeButton, setActiveButton] = useState('purchase');

  const toggleIconContent = (action) => {
    setShowIconContent(action);
    setActiveButton(action);
  };

  return (
    <div className="Purchase">
      <div className='Purchase__container'>
        <h1 className="Purchase__container__text">Purchase Orders</h1>
        <div className='Purchase__btnContainer'>
          <Button
            className={`headerBtn ${activeButton === 'purchase' ? 'active' : ''}`}
            onClick={() => toggleIconContent('purchase')}
          >
            <GoColumns />
          </Button>
          <Button
            className={`headerBtn ${activeButton === 'table' ? 'active' : ''}`}
            onClick={() => toggleIconContent('table')}
          >
            <GoTable />
          </Button>
        </div>
      </div>
        <button  className='newPurchaseOrderBtn'><GoPlus/> New Purchase Order</button>
    </div>
  );
};

Header.propTypes = {
  setShowIconContent: PropTypes.func.isRequired,
};

export default Header;
