import React, {
    useState, useEffect
} from "react";
import Fields from "../Fields/Fields"
import "./Questions.scss"

const Questions = ({ questions }) => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        let initialFormData = {}
        questions.forEach((question) => {
            initialFormData[question.title] = {}
            question.fields.forEach((field) => {
                initialFormData[question.title][field.name] = ""
            })
        })
        setFormData(initialFormData)
    }, [questions])

    const handleChange = (name, value, parent) => {
        let tempFormData = { ...formData }
        tempFormData[parent][name] = value;
        setFormData(tempFormData)
    }

    const logState = () => {
        questions.forEach((question) => {
            console.log(question.title)
            console.log(formData[question.title])
        })
    }

    return (
        <>
            {questions.map((question, index) =>
                <div className="question" key={index} >
                    <h1>{question.title}</h1>
                    <Fields parent={question.title} fields={question.fields} formData={formData[question.title]} handleChange={handleChange} />
                </div>
            )}
            <button
                onClick={logState}
                className="submitButton">
                Log the state
            </button>
        </>
    )

}

export default Questions