import { useState } from 'react';
import { GoColumns, GoTable } from 'react-icons/go';
import Button from '../Button';
import PropTypes from 'prop-types';
import Filter from './headerFilter';

const Header = ({ setShowIconContent }) => {
  const [activeButton, setActiveButton] = useState('vendors');
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
    console.log("button clicked")
  };

  const toggleIconContent = (action) => {
    setShowIconContent(action);
    setActiveButton(action);
  };

  return (
    <div className="header">
      <div className='header__container'>
        <h1 className="header__container__text">Vendors</h1>
        <div className='header__btnContainer'>
          <Button
            className={`headerBtn ${activeButton === 'vendors' ? 'active' : ''}`}
            onClick={() => toggleIconContent('vendor')}
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
      <Filter onButtonClick={handleButtonClick}/>
    </div>
  );
};

Header.propTypes = {
  setShowIconContent: PropTypes.func.isRequired,
};

export default Header;
