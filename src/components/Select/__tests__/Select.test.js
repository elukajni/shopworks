import React from 'react';
import renderer from 'react-test-renderer';

import Select from "../Select"
function createTestProps() {
    return {
        fieldData: { "name": "country", "label": "Country", "type": "dropdown", "options": ["Canada", "USA"] },
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
        .create(<Select {...props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});