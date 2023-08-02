import React from "react";

export const Selectbox = () => {
  const options = [
    "",
    "Civil",
    "Electronics",
    "Electrical Power",
    "Mechanical",
    "Information Technology",
  ];

  const onOptionChangeHandler = (event) => {
    console.log("Selected major:", event.target.value);
  };
  return (
    <>
      <select onChange={onOptionChangeHandler}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};
export default Selectbox;
