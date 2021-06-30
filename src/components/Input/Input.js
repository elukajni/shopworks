import React from 'react';
import "./Input.scss";

const Input = ({ fieldData, value, handleChange, parent }) => {
    return (
        <input
            value={value || ""}
            name={fieldData.name}
            type={fieldData.type}
            onChange={event => handleChange(fieldData.name, event.target.value, parent)}
            className="textInput"
        />
    )
}

export default Input