import PropTypes from 'prop-types';

const DropdownOptions = ({ isOpen, options, onSelect }) => {
  return isOpen ? (
    <ul className="dropdown__options">
      {options.map((option, index) => (
        <li key={index} onClick={() => onSelect(option)}>
          {option}
        </li>
      ))}
    </ul>
  ) : null;
};

DropdownOptions.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
  };

export default DropdownOptions;
