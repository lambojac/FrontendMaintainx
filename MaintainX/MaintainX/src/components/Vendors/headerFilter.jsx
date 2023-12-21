import PropTypes from 'prop-types';
import { GoPlus } from 'react-icons/go';

const Filter = ({ onButtonClick }) => {
  return (
    <div className="filter">
      <input type="search" placeholder="Search Vendors" className="filter__input" />
      <button className="filter__button" onClick={onButtonClick}>
        <GoPlus /> New Vendor
      </button>
    </div>
  );
};

Filter.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Filter;
