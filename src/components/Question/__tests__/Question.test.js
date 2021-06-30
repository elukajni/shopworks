import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Questions from "../Questions"

configure({ adapter: new Adapter() })

function createTestProps() {
    return {
        questions: ["test", "test2", "test3"],
        formData: {},
        parent: {},
        handleChange: () => { }
    }
}
let props, fields
beforeEach(() => {
    props = createTestProps();
});

describe('Question.test', () => {
    describe('when passed an array of questions', () => {
        it("renders a question per element of the array", () => {
            fields = shallow(<Questions {...props} />);
            expect(fields.find("div").length).toBe(props.questions.length)
        })
        it("renders a button to submit the form", () => {
            fields = shallow(<Questions {...props} />);
            expect(fields.find("button").length).toBe(1)
        })
    })
})