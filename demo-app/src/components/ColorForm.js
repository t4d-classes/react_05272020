import React, { useState } from 'react';

export const ColorForm = ({ buttonText, onSubmitColor}) => {

  const [ colorForm, setColorForm ] = useState({
    colorName: '',
  });

  const change = (e) => {
    setColorForm({
      ...colorForm, // copy all of the properties into the new object
      [ e.target.name ]: e.target.value,
    });
  };

  const submitColor = () => {
    onSubmitColor({ ...colorForm });
    setColorForm({
      colorName: '',
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input type="text" id="color-name-input" name="colorName" 
          value={colorForm.colorName} onChange={change} />
      </div>
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};