import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Fields from "../Fields"
import Input from "../../Input/Input"
import Select from "../../Select/Select"

configure({ adapter: new Adapter() })

function createTestProps() {
    return {
        fields: ["test", "test2", "test3"],
        formData: {},
        parent: {},
        handleChange: () => { }
    }
}
let props, fields
beforeEach(() => {
    props = createTestProps();
});

describe('Fields.test', () => {
    describe('when passed an array of fields', () => {
        it("renders a field per element of the array", () => {
            fields = shallow(<Fields {...props} />);
            expect(fields.find("div").length).toBe(props.fields.length)
        })
    })
    describe('when passed no fields', () => {
        it("renders nothing", () => {
            fields = shallow(<Fields  {...props} fields={[]} />);
            expect(fields.find("div").length).toBe(0)
        })
    })
    describe('renders specific inputs based on field type', () => {
        it('renders a dropdown, given a field of type dropdown', () => {
            fields = shallow(<Fields  {...props} fields={[{ type: "dropdown" }]} />);
            expect(fields.find("div").containsMatchingElement(<Select />)).toEqual(true)
            expect(fields.find("div").containsMatchingElement(<Input />)).toEqual(false)

        })
        it('renders an input, given a field of type text', () => {
            fields = shallow(<Fields  {...props} fields={[{ type: "text" }]} />);
            expect(fields.find("div").containsMatchingElement(<Select />)).toEqual(false)
            expect(fields.find("div").containsMatchingElement(<Input />)).toEqual(true)

        })
    })
})
