import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import { Button } from "./Button";
import { Select } from "./Select";

export const Form = () => {
  const [value, setValue] = useState("");
  const password = "123";
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === password) {
      navigate("/admin/landing");
    } else {
      setValue("");
      alert("Ah ah ah, you didn't say the magic word");
    }
  };
  const selector = [
    {
      name: "bob",
      id: "1",
    },
    {
      name: "sas",
      id: "2",
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type='text'
        value={value}
        onChange={handleChange}
        label='Password:'
      />
      <Select arrayOfData={selector} />
      <Button
        type='submit'
        label='Submit'
        className='button'
        handleClick={handleSubmit}
      />
    </form>
  );
};
