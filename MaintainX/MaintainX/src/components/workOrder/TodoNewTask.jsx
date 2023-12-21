import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
// import PropTypes from 'prop-types';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Earliest First');
  const [selectedMainOption, setSelectedMainOption] = useState('Due Date');
  const dropdownRef = useRef(null);

  const options = [
    {
      label: 'Unread First',
    },
    {
      label: 'Creation Date',
      subOptions: ['Newest First', 'Oldest First'],
    },
    {
      label: 'Due Date',
      subOptions: ['Earliest First', 'Latest First'],
    },
    {
      label: 'Last Updated Date',
      subOptions: ['Most Recent First', 'Least Recent First'],
    },
    {
      label: 'Priority',
      subOptions: ['Highest First', 'Lowest First'],
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selectMainOption = (mainOption) => {
    setSelectedMainOption(selectedMainOption === mainOption ? null : mainOption);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <div className="dropdown-header">
        <button onClick={toggleDropdown} className="dropdown__button">
          {selectedMainOption ? `${selectedMainOption}: ${selectedOption}` : selectedOption}
        </button>
      </div>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <ul className="filterList">
            {options.map((mainOption) => (
              <li key={mainOption.label} className="filterList__item">
                <div className="filterList__item__div" onClick={() => selectMainOption(mainOption.label)}>
                  {mainOption.label}{' '}
                  {mainOption.subOptions && (
                    <span className="filterList__item__div__flex">
                      {selectedMainOption === mainOption.label ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </div>
                {selectedMainOption === mainOption.label && mainOption.subOptions && (
                  <ul>
                    {mainOption.subOptions.map((subOption) => (
                      <li key={subOption} onClick={() => selectOption(subOption)}>
                        {subOption}{' '}
                        {selectedOption === subOption && (
                          <span className="tick-icon">
                            <FaCheck />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// FilterDropdown.propTypes = {
//   // Add prop types as needed
// };

export default FilterDropdown;
