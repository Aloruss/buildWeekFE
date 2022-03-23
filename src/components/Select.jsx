import { useState } from "react";
export const Select = ({ arrayOfData }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let options = arrayOfData.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  return (
    <select
      name='customSearch'
      className='custom-search-select'
      onChange={handleChange}
    >
      <option>Select Item</option>
      {options}
    </select>
  );
};
