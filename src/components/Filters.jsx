/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MultiSelector from "./react-select";
import { setFilterData } from "../actions/actions";
import {
  roles,
  experience,
  workMode,
  salary,
  locations,
  techStacks,
} from "./filtersData";

const Filters = ({ setFilterData, filterData }) => {
  // Initialize state with empty arrays or strings
  const [selectedOptions, setSelectedOptions] = useState({
    experience: [],
    location: "",
    workMode: [],
    techStack: [],
    role: [],
    salary: [],
    companyName: "",
  });

  // Handle changes in options
  const handleOptionChange = (option, key) => {
    if (Array.isArray(option)) {
      // Check if the option is an array
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [key]: option.map((item) => item.value), // Map to get only the values
      }));
    } else {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [key]: option.value, // If it's not an array, get only the value
      }));
    }
  };

  // Handle changes in company name input
  const handleChangeCompanyName = (e) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      companyName: e.target.value,
    }));
  };

  // Dispatch filter data to Redux store when selectedOptions change
  useEffect(() => {
    setFilterData(selectedOptions);
  }, [selectedOptions, setFilterData]);

  return (
    <div className="filtersContainer">
      <MultiSelector
        options={experience}
        setSelectedOption={(option) => handleOptionChange(option, "experience")}
        placeholder="Min experience"
        isMulti // Assuming experience can be multi-selected
      />
      <MultiSelector
        options={locations}
        setSelectedOption={(option) => handleOptionChange(option, "location")}
        placeholder="Location"
        isMulti // Assuming locations can be multi-selected
      />
      <MultiSelector
        options={workMode}
        setSelectedOption={(option) => handleOptionChange(option, "workMode")}
        placeholder="Remote/on-site"
        isMulti // Assuming workMode can be multi-selected
      />
      <MultiSelector
        options={techStacks}
        setSelectedOption={(option) => handleOptionChange(option, "techStack")}
        placeholder="Tech stack"
        isMulti // Assuming techStacks can be multi-selected
      />
      <MultiSelector
        options={roles}
        setSelectedOption={(option) => handleOptionChange(option, "role")}
        placeholder="Role"
        isMulti // Assuming roles can be multi-selected
      />
      <MultiSelector
        options={salary}
        setSelectedOption={(option) => handleOptionChange(option, "salary")}
        placeholder="Min base pay"
        isMulti // Assuming salary can be multi-selected
      />
      <div className="InputContainer">
        {/* Only show the label if companyName is not empty */}
        {selectedOptions.companyName && (
          <label htmlFor="companyName">Company Name</label>
        )}
        <input
          id="companyName"
          name="companyName"
          placeholder="Search Company Name"
          type="search"
          className="searchInput"
          value={selectedOptions.companyName}
          onChange={handleChangeCompanyName}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterData: state.filterData,
});

const mapDispatchToProps = {
  setFilterData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
