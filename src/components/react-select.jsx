/* eslint-disable react/prop-types */
import Select from "react-select";

const MultiSelector = ({
  options,
  setSelectedOption,
  placeholder,
  multi = true,
}) => {
  return (
    <div style={{ maxWidth: "300px", minWidth: "150px" }}>
      <Select
        onChange={(selectedOption, { action }) =>
          setSelectedOption(selectedOption, action)
        }
        options={options}
        isMulti={multi}
        placeholder={placeholder}
        isSearchable={true}
        className="customSelect"
      />
    </div>
  );
};

export default MultiSelector;
