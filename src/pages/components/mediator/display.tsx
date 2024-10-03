import { DisplayProps } from '../../../types/temperature';
import React from 'react';

const Display = ({ label, value, getValue }: DisplayProps<number>) => {
    const temperatureInFahrenheit = getValue(value);

    return (
        <h2>{label}: {temperatureInFahrenheit}</h2>
    );
};

export default Display;