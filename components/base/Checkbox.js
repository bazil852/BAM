import React from "react";


const Checkbox = ({name,onChange}) => {
  return (
    <label className="container">
      {name}
      <input type="checkbox" onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
