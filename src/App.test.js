
import React from 'react';
import App from './App';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

it('renders correctly', () => {
    const wrapper = shallow(<App />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
});
