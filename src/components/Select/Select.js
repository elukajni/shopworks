import React from 'react'
import "./Select.scss";

const Select = ({ fieldData, value, handleChange, parent }) => {
    return (
        <select name={fieldData.name}
            onChange={event => handleChange(fieldData.name, event.target.value, parent)}
            value={value}
            className="selectInput"
        >
            {fieldData.options.map((option, index) =>
                <option value={option} key={index}>{option}</option>
            )}
        </select>)
}

export default Select