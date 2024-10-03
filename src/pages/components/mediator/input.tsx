import { InputProps } from '../../../types/temperature';
import React, { ChangeEvent } from 'react';

const Input = ({ label, value, onValueChange }: InputProps<number>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onValueChange(Number(e.target.value)); // Convert string to number
    };
  
    return (
      <div>
        <label>
          {label}
          <input
            type="number"
            value={value}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  };

  export default Input;