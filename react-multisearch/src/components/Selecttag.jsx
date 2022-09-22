import React from "react";
import CreatableSelect from "react-select/creatable";

const Selecttag = () => {
  const options = [
    { value: "Afghanistan", label: "Afghanistan", color: "#FF8B00" },
    { value: "Albania", label: "Albania", color: "#36B37E" },
    { value: "Algeria", label: "Algeria", color: "#0052CC" },
    { value: "Andorra", label: "Andorra", color: "#965608" },
    { value: "Australia", label: "Australia", color: "#36B37E" },
    { value: "Bangladesh", label: "Bangladesh", color: "#00cc36" },
    { value: "Canada", label: "Canada", color: "#04184b" },
    { value: "China", label: "China", color: "#36B37E" },
    { value: "Colombia", label: "Colombia", color: "#3582f6" },
    { value: "Dominican Republic", label: "Dominican Republic", color: "#ac7532" },
    { value: "Germany", label: "Germany", color: "#36B37E" },
    { value: "Greece", label: "Greece", color: "#def607" },
    { value: "India", label: "India", color: "#27c11c" },
    { value: "Singapore", label: "Singapore", color: "#36B37E" },
    { value: "Zimbabwe", label: "Zimbabwe", color: "#0052CC" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#f50505",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#8b0000",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#d63535",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  //   values
  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (
    <div>
      <h2>Multi Selection Search Bar</h2>
      <p>To select more click on down arrow button</p>
      <p className="para">Select or `s`earch</p>
      <CreatableSelect
        options={options}
        onChange={handleChange}
        onInputChange={handleInputChange}
        isMulti
        styles={colorStyles}
      />
    </div>
  );
};

export default Selecttag;
