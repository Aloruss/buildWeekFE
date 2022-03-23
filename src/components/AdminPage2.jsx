import React, { useState } from "react";
export const AdminPage2 = () => {
  const [showFormForAndi, setShowFromForAndi] = useState("false");
  const [showFormForClient, setShowFromForClient] = useState("false");
  const [showFormForProject, setShowFromForProject] = useState("false");
  const [showFormForAllocation, setShowFromForAllocation] = useState("false");
  const onClickHandlerForAndi = () => {
    setShowFromForAndi(!showFormForAndi);
  };
  const onClickHandlerForClient = () => {
    setShowFromForClient(!showFormForClient);
  };
  const onClickHandlerForProject = () => {
    setShowFromForProject(!showFormForProject);
  };
  const onClickHandlerForAllocation = () => {
    setShowFromForAllocation(!showFormForAllocation);
  };
  return (
    <>
      <input
        className='buttons'
        type='submit'
        value='Add new Client'
        onClick={onClickHandlerForClient}
      />
      <input
        className='buttons'
        type='submit'
        value='Add new Project'
        onClick={onClickHandlerForProject}
      />
      <input
        className='buttons'
        type='submit'
        value='Add new Andi'
        onClick={onClickHandlerForAndi}
      />
      <input
        className='buttons'
        type='submit'
        value='Allocate Andi'
        onClick={onClickHandlerForAllocation}
      />
      {showFormForAndi && (
        <form className='form'>
          <legend>New Andi Form</legend>
          <label>
            Name:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            Squad:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            Level:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Job Title:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            And Title:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Pronoun:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            ANDI Photo:
            <input type='file' name='name' />
          </label>
          <label>
            <input type='submit' />
          </label>
        </form>
      )}
      {showFormForClient && (
        <form className='form'>
          <legend>New Client Form</legend>
          <label>
            Client Name:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            Description:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            General TechStack:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Client Logo:
            <input type='file' name='name' />
          </label>
          <label>
            <input type='submit' />
          </label>
        </form>
      )}
      {showFormForProject && (
        <form className='form'>
          <legend>New Project Form</legend>
          <label>
            Company Name:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            Project Name:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            Roles:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Project Lead:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Project Description:
            <input className='input' type='number' name='name' />
          </label>
          <label>
            Start Date:
            <input className='input' type='date' name='name' />
          </label>
          <label>
            End Date:
            <input className='input' type='date' name='name' />
          </label>
          <label>
            Client Contact:
            <input className='input' type='text' name='name' />
          </label>
          <label>
            <input type='submit' />
          </label>
        </form>
      )}
      {showFormForAllocation && (alert = "success")}
    </>
  );
};
