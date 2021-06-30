import Select from "../Select/Select"
import Input from "../Input/Input"

const Fields = ({ fields, formData = {}, parent, handleChange }) => {

    return (
        fields.map((field, index) =>
            <div key={index} >
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === "dropdown" ?
                    <Select fieldData={field}
                        value={formData[field.name]}
                        handleChange={handleChange}
                        parent={parent} />
                    :
                    <Input fieldData={field}
                        value={formData[field.name]}
                        handleChange={handleChange}
                        parent={parent}
                    />
                }
            </div>
        ))
}

export default Fields