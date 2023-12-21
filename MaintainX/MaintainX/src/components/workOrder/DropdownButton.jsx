import PropTypes from 'prop-types';

const DropdownButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="dropdown__button">
      Toggle Dropdown
    </button>
  );
};

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DropdownButton;
