import React from 'react';
import renderer from 'react-test-renderer';

import Input from "../Input"
function createTestProps() {
    return {
        fieldData: { "name": "street_address", "label": "Street Address", "type": "text" },
        value: "",
        parent: "",
        handleChange: () => { }
    }
}
let props
beforeEach(() => {
    props = createTestProps();
});

it('renders correctly', () => {
    const tree = renderer
        .create(<Input {...props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});