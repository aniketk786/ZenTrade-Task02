// components/DisplayOptions.js
import React from 'react';

const DisplayOptions = ({ availableFields, selectedFields, onDisplayOptionsChange }) => {
  const handleOptionChange = (e) => {
    const value = e.target.value;
    onDisplayOptionsChange([...selectedFields, value]);
  };

  const handleAddRemoveOptions = (action) => {
    // Implement logic to add/remove selected options based on the action
    // Update selectedFields and call onDisplayOptionsChange
  };

  return (
    <div>
      <h3>Display Options</h3>
      <select multiple onChange={handleOptionChange}>
        {availableFields.map((field) => (
          <option key={field} value={field}>
            {field}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => handleAddRemoveOptions('add')}>{'>>'}</button>
        <button onClick={() => handleAddRemoveOptions('remove')}>{'<<'}</button>
      </div>
      <select multiple>
        {selectedFields.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DisplayOptions;
