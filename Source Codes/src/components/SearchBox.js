import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='col-sm-4'>
      <input
        className='form-control'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type Your Movie Name ...'
      ></input>
    </div>
  );
};

export default SearchBox;
