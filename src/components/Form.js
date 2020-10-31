import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input type='text' value={props.value} placeholder='type city name' onChange={props.change}></input>
      <button>Search</button>
    </form>
  );
}

export default Form;